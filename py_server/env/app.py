from flask import Flask, request
from flask_cors import CORS
from bson.json_util import dumps
from pyresparser import ResumeParser
from werkzeug.utils import secure_filename
from pymongo import MongoClient
import nltk
nltk.download('stopwords')

import spacy
load_model = spacy.load("en_core_web_sm")

import os

UPLOAD_FOLDER = '.\\env\\files'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)
client = MongoClient('mongodb+srv://danxie:admin2721212@cluster0.z3prdvj.mongodb.net/?retryWrites=true&w=majority')
# print(os.environ["MONGO_URI"])
db = client['resumes']
collection = db['documents']

@app.route('/')
def hello_world():

   return 'Hello World'

@app.route('/getResumes', methods=['GET'])
def get_resume():
   result = collection.find({})
   list_cur = list(result)
   json_data = dumps(list_cur)
   return json_data

@app.route('/parse-data', methods=['POST'])
def parse_data():

   file = request.files['data']

   # file.save("./files/")
   # data = ResumeParser(file).get_extracted_data()
   # if file:
   #    filename = secure_filename(file.filename)
   #    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

   if file:
      filename = secure_filename(file.filename)
      print(str(os.path.join(app.config['UPLOAD_FOLDER'], filename)))
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      # data = ResumeParser(os.path.join(app.config['UPLOAD_FOLDER'], filename)).get_extracted_data()
      data = ResumeParser('/env/files/SampleResume4.pdf').get_extracted_data()

      print(data)

   return "Success"


if __name__ == '__main__':
   app.run()