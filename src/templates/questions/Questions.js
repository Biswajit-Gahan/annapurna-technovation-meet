import React from "react";
import { QuestionsContainer } from "./questions.styles";

const Questions = () => {
  return (
    <QuestionsContainer>
      <div className="set-questions-container">
        <textarea name="question" id="question-input" className="question-input" placeholder="Question" ></textarea>
        <input type="text" id="option-a" placeholder="Option A" className="question-option-input" />
        <input type="text" id="option-b" placeholder="Option B" className="question-option-input" />
        <input type="text" id="option-c" placeholder="Option C" className="question-option-input" />
        <input type="text" id="option-d" placeholder="Option D" className="question-option-input" />
        <input type="text" id="correct-ans" placeholder="Correct Answer" className="question-option-input" />
        <button type="button" className="add-question-button">Add Question</button>
      </div>
      <div className="get-questions-container">
        <div className="question-container">
          <p className="question-number">1</p>
          <p className="question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta impedit, distinctio et magni dolorem, eaque?</p>
        </div>

        <div className="question-container">
          <p className="question-number">2</p>
          <p className="question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta impedit, distinctio et magni dolorem, eaque?</p>
        </div>

        <div className="question-container">
          <p className="question-number">3</p>
          <p className="question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta impedit, distinctio et magni dolorem, eaque?</p>
        </div>

        <div className="question-container">
          <p className="question-number">4</p>
          <p className="question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta impedit, distinctio et magni dolorem, eaque?</p>
        </div>
      </div>
    </QuestionsContainer>
  );
};

export default Questions;