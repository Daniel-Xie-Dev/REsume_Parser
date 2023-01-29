const express = require("express");
// const resumeParser = require("resume-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const pdf = require("pdf-parse");

const pdfParse = require("pdf-parse");
const { MongoClient, ObjectId } = require("mongodb");
const nlp = require("compromise");

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri =
  "mongodb+srv://danxie:admin2721212@cluster0.z3prdvj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Conencted!");
  } catch (error) {
    console.error(error);
  }
}

connect().catch(console.error);

app.use("/", function (req, res, next) {
  // console.log("hello");
  //   console.log("Request Type:", req.method);
  next();
});

// app.get("/", (req, res) => {
//   res.sendStatus(200);
//   res.send("Hello");
// });

app.get("/getResumes", async function (req, res) {
  // let db = client.db("resumes");
  // let data = db.collection("documents").find({});
  // res.json(data);

  const cursor = client
    .db("resumes")
    .collection("documents")
    .find({}, { projection: { resume: 0 } });
  const result = await cursor.toArray();

  // console.log(result[0].resume);
  // console.log(result);
  res.json(result);
});

app.get("/getResumeById", async function (req, res) {
  const id = req.query.id;
  const document = client
    .db("resumes")
    .collection("documents")
    .findOne(
      {
        _id: new ObjectId(id),
      },
      { projection: { resume: 1 } }
    );

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
  const buffer = await document;

  // res.sendStatus(200);
  res.send(buffer);
});

app.post("/parse-data", async function (req, res) {
  if (!req.files || !req.files.file) {
    res.status(400);
    res.end();
  }

  let doc;
  // await pdfParse(req.files.file)
  //   .then((result) => {
  //     // console.log(result.text);
  //     doc = nlp(result.text);
  //   })
  //   .catch((error) => console.log(error));

  await pdf(req.files.file.data).then((data) => {
    console.log(data);
    doc = nlp(data.text);
  });

  let document = new Object();
  let name = doc.people().text().split(" ");

  let text = doc.all().text();
  // console.log(text);

  document["firstName"] = name[0];
  document["lastName"] = name[name.length - 1];
  document["email"] = doc.emails().text();
  document["phoneNumber"] = doc.phoneNumbers().text();

  document["degree"] = text.match(
    /(Bachelor|BS|B\.S\.|Master|MS|M\.S\.) (of|at|in) ([A-Z][a-z]+)+/gm,
    "i"
  );

  document["education"] = [
    ...new Set(text.match(/([A-Z][a-z]+\s)+(University|College)/gm, "i")),
  ];
  document["skills"] = [
    ...new Set(
      text.match(
        /(C\+\+|C#|CSS|C\b|JavaScript|Java|TypeScript|Python|Go|Ruby|HTML|Scala)/gm,
        "i"
      )
    ),
  ];

  document["frameworks"] = [
    ...new Set(
      text.match(
        /(SpringBoot|Spring|AWS|Azure|Express|Node|React|Django|Flask|Angular|Vue\.js|Rails|Firebase|MYSQL|Mongo)/g,
        "i"
      )
    ),
  ];

  document["resume"] = Buffer.from(req.files.file.data);
  // console.log(document["education"]);

  console.log(document);
  await client.db("resumes").collection("documents").insertOne(document);

  res.sendStatus(200);
});

app.listen(3001);
