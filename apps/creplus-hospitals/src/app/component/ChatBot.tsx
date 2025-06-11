"use client";

import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa"; // Add react-icons for better icons

type Answer = {
  text: string;
  nextId?: number | null;
};

type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "What do you want to know about?",
    answers: [
      // { text: "Departments", nextId: 2 },
      // { text: "Doctors", nextId: 3 },
      { text: "Appointments", nextId: 4 },
    ],
  },
  {
    id: 2,
    text: "Which department are you interested in?",
    answers: [
      { text: "Cardiology", nextId: 5 },
      { text: "Neurology", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "Are you looking for a specific doctor?",
    answers: [
      { text: "Yes", nextId: 6 },
      { text: "No", nextId: 2 },
    ],
  },
  {
    id: 4,
    text: "Do you want to book or cancel an appointment?",
    answers: [
      { text: "Book", nextId: 7 },
      { text: "Cancel", nextId: 8 },
    ],
  },
  {
    id: 5,
    text: "We have top specialists in this department. Would you like to see a list?",
    answers: [
      { text: "Yes", nextId: 6 },
      { text: "No", nextId: 9 },
    ],
  },
  {
    id: 6,
    text: "Visit our doctor page to see all specialists.",
    answers: [{ text: "Go to Doctor Page", nextId: null }],
  },
  {
    id: 7,
    text: "Please call 8904338604 or visit our appointment page.",
    answers: [{ text: "OK", nextId: null }],
  },
  {
    id: 8,
    text: "Please provide your booking ID via support.",
    answers: [{ text: "OK", nextId: null }],
  },
  {
    id: 9,
    text: "Would you like to know about our hospital facilities?",
    answers: [
      { text: "Yes", nextId: 10 },
      { text: "No", nextId: null },
    ],
  },
  {
    id: 10,
    text: "We offer 24/7 Emergency, Pharmacy, and Lab services.",
    answers: [{ text: "Thanks!", nextId: null }],
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [history, setHistory] = useState<number[]>([]);

  const currentQuestion = questions.find((q) => q.id === currentId);

  const handleAnswer = (nextId?: number) => {
    if (nextId !== null && nextId !== undefined) {
      setHistory((prev) => [...prev, currentId]);
      setCurrentId(nextId);
    }
  };

  const goBack = () => {
    const prev = [...history];
    const last = prev.pop();
    if (last !== undefined) {
      setHistory(prev);
      setCurrentId(last);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      {!isOpen ? (
        <div className="flex items-end justify-end">
          <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-xl hover:bg-purple-700 transition duration-300 flex items-center justify-center"
        >
          <FaComments className="text-xl" />
        </button>
        </div>
      ) : (
        <div className="bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden flex flex-col h-[500px] animate-fadeIn">
          <div className="bg-purple-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-sm">Chat with us</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-zinc-200 text-white text-xl"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto bg-gray-50 text-sm space-y-3">
            {currentQuestion && (
              <>
                <p className="text-zinc-800 font-medium">{currentQuestion.text}</p>
                <ul className="mt-2 space-y-2">
                  {currentQuestion.answers.map((answer, idx) => (
                    <li
                      key={idx}
                      onClick={() => answer.nextId !== null && handleAnswer(answer.nextId)}
                      className="cursor-pointer bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-2 rounded-lg transition"
                    >
                      {answer.text}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {history.length > 0 && (
              <button
                onClick={goBack}
                className="mt-4 text-xs text-zinc-500 underline hover:text-zinc-700"
              >
                ← Go Back
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
