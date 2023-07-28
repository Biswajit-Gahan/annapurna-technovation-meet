import React, { useEffect, useState } from "react";
import { QuestionsContainer } from "./questions.styles";
import axios from "axios";

const Questions = () => {
  const [inputs, setInputs] = useState(() => ({ question: "", opt_a: "", opt_b: "", opt_c: "", opt_d: "", correct_ans: "" }));

  const [allQs, setAllQs] = useState(() => ([]));

  const [isClicked, setIsClicked] = useState(() => (true));

  const handleInputs = (event) => {
    const { id, value } = event.target;
    setInputs((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleAddQuestionButton = async () => {
    if (!inputs.correct_ans || !inputs.opt_a || !inputs.opt_b || !inputs.opt_c || !inputs.opt_d || !inputs.question) {

    } else {
      try {
        const { data } = await axios.post("customer/question/saveQuestion", {
          "question": `${inputs.question}`,
          "opt_a": `${inputs.opt_a}`,
          "opt_b": `${inputs.opt_b}`,
          "opt_c": `${inputs.opt_c}`,
          "opt_d": `${inputs.opt_d}`,
          "correctAns": `${inputs.correct_ans}`
        });
        console.log(data);
        setIsClicked((prevData) => (!prevData));
      } catch (err) {
        console.log(err);
      }
    }

  }

  useEffect(() => {
    let fetchAllQs = async () => {
      const { data } = await axios.get("customer/question/allQuestions");
      setAllQs(() => ([...data.data]));
    }

    fetchAllQs();
  }, [isClicked]);

  return (
    <QuestionsContainer>
      <div className="set-questions-container">
        <textarea name="question" id="question" className="question-input" placeholder="Question" onInput={(event) => handleInputs(event)} ></textarea>
        <input type="text" id="opt_a" placeholder="Option A" className="question-option-input" onInput={(event) => handleInputs(event)} />
        <input type="text" id="opt_b" placeholder="Option B" className="question-option-input" onInput={(event) => handleInputs(event)} />
        <input type="text" id="opt_c" placeholder="Option C" className="question-option-input" onInput={(event) => handleInputs(event)} />
        <input type="text" id="opt_d" placeholder="Option D" className="question-option-input" onInput={(event) => handleInputs(event)} />
        <input type="text" id="correct_ans" placeholder="Correct Answer" className="question-option-input" onInput={(event) => handleInputs(event)} />
        <button type="button" className="add-question-button" onClick={handleAddQuestionButton}>Add Question</button>
      </div>
      <div className="get-questions-container">
        {
          allQs.map((item, index) => (
            <div className="question-container" key={index}>
              <p className="question-number">{index + 1}</p>
              <p className="question">{item.question}</p>
            </div>
          ))
        }
      </div>
    </QuestionsContainer>
  );
};

export default Questions;