from flask import Flask, request
from flask_cors import CORS
from bson.json_util import dumps
from pyresparser import ResumeParser
from werkzeug.utils import secure_filename
from pymongo import MongoClient
# import nltk
# nltk.download('stopwords')
import os

UPLOAD_FOLDER = '/files'

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
   result = collection.find({}, {"resume" : 0})
   list_cur = list(result)
   json_data = dumps(list_cur)
   return json_data

@app.route('/parse_data', methods=['POST'])
def parse_data():

   file = request.files['data']
   # file.save("./files/")
   # data = ResumeParser(file).get_extracted_data()
   if file:
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

   return "Success"


if __name__ == '__main__':
   app.run()