# Notes:

# Flask API:

1. pip => Package manger for python. Its included with python versions greater than 3.4. use the command 'pip --version' to check the version
2. Set up the Virtual Environment and install packages locally.
   To install the virtual environment => pip install virtualenvwrapper-win
   To create virtual environment => "py -m venv <env_name>" or "mkvirtualenv <envName>"
   TO navigate to the virtual environment => <env_name>\Scripts\activate
   Use -p parameter to map the python exe path while creating the venv. py -m virtualenv analyticsapivenv -p="path\python.exe"
3. Set up flask
   To install the flask => pip install flask
   To check the version => flask --version  
   To run the flask app => python -m flask run. It will search for app.py by default.
4. Command to create requirements.txt => pip freeze > requirements.txt
5. Command to execute python script in terminal => flask shell


**Handle CORS in flask app**

use the flask-cors (pip install flask-cors) to handle the CORS
    ```python
    from flask_cors import CORS
    app= Flask(__name__)
    CORS(app)
    ```
or can handle in the api using 
    ```python
    response = jsonify(json_data)
    response.headers.add("Access-Control-Allow-Origin", "\*")
    return response
    ```    

**Installed packages**

1. plotly
2. pandas
3. flask-cors   
