import React, { useEffect, useState } from "react";
import { PlayContainer } from "./play.styles";
// import questiondb from "../../db/questiondb";
import { database } from "../../utils/firebase";
import { ref, update } from "firebase/database";
// import { onValue, ref, update } from "firebase/database";
import axios from "axios";

const Play = () => {

  const [next, setNext] = useState(() => (0));

  const [quizPlay, setQuizPlay] = useState(() => (false));

  const [questions, setQuestions] = useState(() => ({}));

  const [stopGame, setStopGame] = useState(() => (false));

  const playQuizButton = () => {
    setQuizPlay((prevData) => (prevData = true));
    !quizPlay &&
      update(ref(database), {
        question: questions[0].question,
        option1: questions[0].opt_a,
        option2: questions[0].opt_b,
        option3: questions[0].opt_c,
        option4: questions[0].opt_d,
        questionId: questions[0].id,
      }).then(async () => {
        await axios.post("customer/question/updateQuestion", {
          questionId: questions[0].id,
          is_displayed: true,
        });
      }).catch(err => {
        console.log(err)
      })
  };

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
    } else {
      update(ref(database), {
        showResult: true,
      }).then(() => {
        console.log("data saved");
      }).catch(err => {
        console.log(err)
      });

      setStopGame((prevData) => (prevData = true));
    }
  }

  // console.log(questions[1]?.question);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const { data } = await axios.get("customer/question/allQuestions");
        setQuestions((prevData) => ({ ...prevData, ...data.data }));
        // update(ref(database), {
        //   question: data.data[0].question,
        //   option1: data.data[0].opt_a,
        //   option2: data.data[0].opt_b,
        //   option3: data.data[0].opt_c,
        //   option4: data.data[0].opt_d,
        //   questionId: data.data[0].id,
        // }).then(() => {
        //   console.log("data saved");
        // }).catch(err => {
        //   console.log(err)
        // })

        update(ref(database), {
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          questionId: -1,
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
      }).then(async () => {
        console.log("data saved");
        await axios.post("customer/question/updateQuestion", {
          questionId: questions[next].id,
          is_displayed: true,
        })
      }).catch(err => {
        console.log(err)
      })
  }, [next]);

  return (
    <PlayContainer>
      {
        quizPlay
          ? <div className="play-wrapper">
            {
              stopGame
                ? <h1 className="end-game">End of Game.</h1>
                : <>
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
                </>
            }

            {
              !stopGame && <button onClick={handleNextButton} type="button" className="next-question-button">{next < Object.keys(questions)?.length - 1 ? "Next" : "Stop"}</button>
            }
          </div>

          : <button className="quiz-play-button" onClick={playQuizButton}>&#9654; Play</button>
      }
    </PlayContainer>
  );
};

export default Play;