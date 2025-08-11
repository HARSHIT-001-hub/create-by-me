import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz({ setStage, setScore, setTotal }) {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [loading, setLoading] = useState(true);
  const [localScore, setLocalScore] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
      .then((res) => {
        const data = res.data.results.map((q) => ({
          ...q,
          answers: shuffle([...q.incorrect_answers, q.correct_answer]),
        }));
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const handleAnswer = (ans) => {
    if (ans === questions[currentQ].correct_answer) {
      setLocalScore(localScore + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setScore(localScore + (ans === questions[currentQ].correct_answer ? 1 : 0));
      setTotal(questions.length);
      setStage("result");
    }
  };

  if (loading) return <p className="text-lg">Loading questions...</p>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">
        Question {currentQ + 1} of {questions.length}
      </h2>
      <p className="mb-6 text-lg" dangerouslySetInnerHTML={{ __html: questions[currentQ].question }} />
      <div className="grid gap-4">
        {questions[currentQ].answers.map((ans, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(ans)}
            className="px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg transition"
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>
    </div>
  );
}
