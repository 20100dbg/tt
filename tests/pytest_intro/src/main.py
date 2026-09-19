import requests
import sqlite3

class UserManager:
    def __init__(self):
        self.users = {}
    
    def add_user(self, username, email):
        if username in self.users:
            raise ValueError("User already exists")
        self.users[username] = email
        return True

    def get_user(self, username):
        return self.users.get(username)


def get_weather(temp):
    if temp > 20:
        return "hot"
    else:
        return "cold"

def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_weather_city(city):
    response = requests.get(f"https://api.weather.com/v1/{city}")
    if response.status_code == 200:
        return response.json()
    else:
        raise ValueError("Could not fetch weather data")

def save_user(name, age):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (name,age) VALUES (?,?)", (name, age))