import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import rewardbg from "../assets/rewardbg.jpg"; // Background image

const Home = () => {
  const navigate = useNavigate();

  const boxes = [
    { title: "Risk Prediction", route: "/predict" },
    { title: "Rewards", route: "/rewards" },
    { title: "Know Your Vehicle", route: "/vehicle" },
    { title: "Driving Behavior Insights", route: "/insights" },
    { title: "Maintenance Prediction", route: "/maintenance" },
    { title: "About Us", route: "/about" }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${rewardbg})` }}
    >
      {/* Heading with softer blue and color animation */}
      <h1 className="text-5xl font-extrabold text-blue-300 mb-12 animate-pulse drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
        Welcome to DriveSafe
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="cursor-pointer bg-gradient-to-br from-blue-700 via-black to-gray-700 text-white rounded-3xl shadow-2xl p-12 text-center text-2xl font-semibold transition-all w-72 h-48 flex items-center justify-center"
            onClick={() => navigate(box.route)}
          >
            {box.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
