import * as React from "react";
import { useState } from "react";
import { Divider, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface QuestionAnswer {
  question: string;
  answer: string;
}

const questionAnswer: QuestionAnswer[] = [
  {
    question: "What kind of organizations can use Schedjuice?",
    answer:
      "Schools with 20 students to universities with tens of thousands of students can use our software. We have a solution for every size of organization.",
  },
  {
    question: "How fast can we start using Schedjuice?",
    answer:
      "The setup process is very fast. You can start using our software in a few hours.",
  },
  {
    question: "I have some existing data, what is your migration plan?",
    answer:
      "Our engineers will work with you to migrate your data to our system. The migration fee is free for the first time.",
  },
  {
    question: "What kind of payment do you accept?",
    answer:
      "We accept payments in USD, MMK, and THB. For exchage rates, please request a sale brochure.",
  },
];

export const Icon = ({ question, answer }: QuestionAnswer) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col gap-4"
      id="faq"
      onClick={() => setOpen(!open)}
    >
      <Divider
        className={`transition-all duration-500 ${open ? "h-2" : "h-0"}`}
        style={{ backgroundColor: "" }}
      />
      <div className="flex justify-between">
        <p className="text-lg">{question}</p>
        <IconButton
          style={{ color: "white" }}
          aria-label="expand row"
          size="small"
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
      <p className={open ? "text-gray-300 text-md" : "hidden"}>{answer}</p>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="xl:mx-80 lg:mx-64 sm:mx-24 mx-8  text-white py-20">
      <p className="text-2xl md:text-3xl font-bold mb-10">
        Frequently Asked Questions
      </p>
      <div className="flex flex-col gap-4">
        {questionAnswer.map((item: QuestionAnswer) => (
          <div key={item.answer}>
            <Icon question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
