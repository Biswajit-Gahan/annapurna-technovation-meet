import React, { useEffect, useState } from "react";
import { PlayContainer } from "./play.styles";
import questiondb from "../../db/questiondb";
import { database } from "../../utils/firebase";
import { ref, update } from "firebase/database";
import axios from "axios";

const Play = () => {

  const [next, setNext] = useState(() => (0));

  const [questions, setQuestions] = useState(() => ({}));

  console.log(Object.keys(questions).length);
  console.log(questions)

  const handleNextButton = () => {
    if (next < Object.keys(questions).length - 1) {
      setNext((prevData) => (prevData + 1));
      // update(ref(database), {
      //   question: questiondb[`qs_${next + 1}`]?.q_name,
      //   option1: questiondb[`qs_${next + 1}`]?.opt_a,
      //   option2: questiondb[`qs_${next + 1}`]?.opt_b,
      //   option3: questiondb[`qs_${next + 1}`]?.opt_c,
      //   option4: questiondb[`qs_${next + 1}`]?.opt_d,
      // }).then(() => {
      //   console.log("data saved");
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }

  // console.log(questions[1]?.question);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const { data } = await axios.get("customer/question/allQuestions");
        setQuestions((prevData) => ({ ...prevData, ...data.data }));
        update(ref(database), {
          question: data.data[0].question,
          option1: data.data[0].opt_a,
          option2: data.data[0].opt_b,
          option3: data.data[0].opt_c,
          option4: data.data[0].opt_d,
          questionId: data.data[0].id,
        }).then(() => {
          console.log("data saved");
        }).catch(err => {
          console.log(err)
        })
      } catch (err) {
        console.log(err)
      }
    }

    fetchAllQuestions();
  }, [])

  useEffect(() => {
    console.log(questions[next]?.question)
    questions[next]?.question
      && update(ref(database), {
        question: questions[next].question,
        option1: questions[next].opt_a,
        option2: questions[next].opt_b,
        option3: questions[next].opt_c,
        option4: questions[next].opt_d,
        questionId: questions[next].id,
      }).then(() => {
        console.log("data saved");
      }).catch(err => {
        console.log(err)
      })
  }, [next]);

  return (
    <PlayContainer>
      <div className="play-wrapper">
        <p className="question"><strong>Question: </strong>{questions[next]?.question}</p>

        <div className="options-container">
          <div className="option-container">
            <p className="option-number">A</p>
            <p className="option-text">{questions[next]?.opt_a}</p>
          </div>

          <div className="option-container">
            <p className="option-number">B</p>
            <p className="option-text">{questions[next]?.opt_b}</p>
          </div>

          <div className="option-container">
            <p className="option-number">C</p>
            <p className="option-text">{questions[next]?.opt_c}</p>
          </div>

          <div className="option-container">
            <p className="option-number">D</p>
            <p className="option-text">{questions[next]?.opt_d}</p>
          </div>
        </div>

        <button onClick={handleNextButton} type="button" className="next-question-button">Next</button>
      </div>
    </PlayContainer>
  );
};

export default Play;