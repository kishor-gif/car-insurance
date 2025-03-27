import React, { useState } from "react";
import axios from "axios";

export default function PredictBehavior() {
  const [features, setFeatures] = useState(""); // Input as comma-separated string
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFeatures(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const featureArray = features.split(",").map(Number); // Convert to array
      const response = await axios.post("http://localhost:5000/predict", {
        features: featureArray,
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Prediction Error:", error);
      alert("Error making prediction");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-2">Driving Behavior Prediction</h2>
      <input
        type="text"
        placeholder="Enter features (e.g., 1.2, 3.4, 5.6)"
        value={features}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Predict
      </button>
      {prediction !== null && (
        <p className="mt-4 text-green-600">Prediction: {prediction}</p>
      )}
    </div>
  );
}
