import React from "react";

export default function Home({ setStage }) {
  return (
    <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold mb-4">QuizMaster</h1>
      <p className="mb-6 text-gray-600">Test your knowledge with our fun quiz!</p>
      <button
        onClick={() => setStage("quiz")}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
      >
        Start Quiz
      </button>
    </div>
  );
}
