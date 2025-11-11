import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About FitnessFriend
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Dumbbell className="w-6 h-6" /> Our Mission
          </h2>
          <p className="text-base text-gray-600">
            FitnessFriend aims to help users achieve their fitness goals through tracking,
            guidance, and motivation. We provide personalized tools to help users stay
            consistent and improve their physical well-being.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Dumbbell className="w-6 h-6" /> What We Offer
          </h2>
          <p className="text-base text-gray-600">
            Track workouts, monitor progress, explore exercise libraries, and find guidance
            from personalized fitness plans — all in one platform.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-2xl mt-6 max-w-5xl p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Dumbbell className="w-6 h-6" /> Our Vision
        </h2>
        <p className="text-base text-gray-600">
          We envision a world where everyone has access to the knowledge and motivation to
          build and maintain a healthy lifestyle. FitnessFriend is designed to simplify the
          journey and empower every individual.
        </p>
      </div>
    </div>
  );
}