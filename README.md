# plotly_poc
Plotly dashboard with react and python 


Notes:

Flask API:

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
       