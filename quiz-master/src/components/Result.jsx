import React from "react";

export default function Result({ score, total, setStage }) {
  return (
    <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
      <p className="mb-6 text-gray-700">
        You scored <span className="font-bold">{score}</span> out of {total}.
      </p>
      <button
        onClick={() => setStage("home")}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
      >
        Play Again
      </button>
    </div>
  );
}
