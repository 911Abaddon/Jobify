from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect('users.db')
    except sqlite3.Error as e:
        print(e)
    return conn

def create_table():
    conn = create_connection()
    if conn is not None:
        try:
            c = conn.cursor()
            c.execute('''CREATE TABLE IF NOT EXISTS users (
                            email TEXT, 
                            password TEXT, 
                            phone_number TEXT, 
                            name TEXT, 
                            last_name TEXT, 
                            birthday TEXT)''')
        except sqlite3.Error as e:
            print(e)
        finally:
            conn.commit()
            conn.close()
    else:
        print("Error! Cannot create the database connection.")

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    conn = create_connection()
    if conn is not None:
        c = conn.cursor()
        c.execute('''INSERT INTO users (email, password, phone_number, name, last_name, birthday) 
             VALUES (?, ?, ?, ?, ?, ?)''', 
             (data['email'], data['password'], data['phoneNumber'], 
              data['name'], data['lastName'], str(data['birthday'])))

        conn.commit()
        conn.close()
        return jsonify({'status': 'success'})
    else:
        return jsonify({'status': 'error', 'message': 'Database connection error'})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3000)
