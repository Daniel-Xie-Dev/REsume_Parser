const express = require("express");
const fileUpload = require("express-fileupload");

const pdfParse = require("pdf-parse");
const { MongoClient } = require("mongodb");
const nlp = require("compromise");

const app = express();

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
  //   console.log("Request Type:", req.method);
  next();
});

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.send("Hello");
});

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

app.post("/parse-data", async function (req, res) {
  if (!req.files) {
    res.status(400);
    res.end();
  }

  var doc;
  await pdfParse(req.files.file).then((result) => {
    // console.log(result.text);
    doc = nlp(result.text);
  });

  let document = new Object();

  console.dir(doc.sentences().terms().out("tags"), { maxArrayLength: null });
  // console.log(doc.sentences().terms().out("tags"), []);
  let array = doc.people().text().split(" ");
  document["firstName"] = array[0];
  document["lastName"] = array[array.length - 1];
  document["address"] = doc.matchOne("#Address+? #Place+").text();
  document["phone"] = doc.phoneNumbers().text();
  document["email"] = doc.emails().text();
  document["education"] = doc
    .match("#Organization+ (University|College)$")
    .unique()
    .text();
  document["degree"] = doc
    .match("(B.S.|Bachelor|BS|Master of Arts|MA|M.A.) (of|in) #Noun")
    .text();
  document["skills"] = doc
    .match(
      "(C|C++|C#|Java|JavaScript|TypeScript|Python|Ruby|Scala|HTML|CSS|SQL|PHP|Bash|Go)"
    )
    .unique()
    .out("array");

  for (var i = 0; i < document["skills"].length; i++) {
    document["skills"][i] = document["skills"][i].replace(/[,()]/g, "");
  }
  document["resume"] = req.files.file;
  // document["organization"] = doc.organizations().text();

  console.log(document);
  await client.db("resumes").collection("documents").insertOne(document);

  res.sendStatus(200);
});

app.listen(3001);
