from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load the trained ML model
with open("driving_behavior_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

@app.route("/")
def home():
    return "🚗 Driving Behavior Prediction API is Running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get input from frontend
        features = np.array(data["features"]).reshape(1, -1)  # Ensure correct shape
        prediction = model.predict(features)  # Make prediction

        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Run on port 5000
