import React, { useState } from "react";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

export default function App() {
  const [stage, setStage] = useState("home");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      {stage === "home" && <Home setStage={setStage} />}
      {stage === "quiz" && <Quiz setStage={setStage} setScore={setScore} setTotal={setTotal} />}
      {stage === "result" && <Result score={score} total={total} setStage={setStage} />}
    </div>
  );
}
