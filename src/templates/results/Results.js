import React, { useEffect, useState } from "react";
import { ResultContainer } from "./result.styles";
import { onValue, ref } from "firebase/database";
import { database } from "../../utils/firebase";
import axios from "axios";
import userImage from "../../assets/images/user.png";

const Results = () => {

  const [allUsers, setAllUsers] = useState(() => ([]));
  const [allQuestions, setAllQuestions] = useState(() => ([]));
  const [allResults, setAllResults] = useState(() => ([]));

  console.log("allResults", allResults);
  // console.log("allQuestions", allQuestions);

  useEffect(() => {
    onValue(ref(database, "/geolocation"), (snapshot) => {
      const data = snapshot.val();
      data && setAllUsers(() => ([...data]));
      // 
    });

    const fetchAllQuestions = async () => {
      try {
        const { data } = await axios.get("customer/question/allQuestions");
        setAllQuestions(() => data.data);

      } catch (err) {
        console.log(err);
      };
    };

    fetchAllQuestions();

    return () => {
      onValue(ref(database, "/geolocation"), (snapshot) => {
        const data = snapshot.val();
        data && setAllUsers(() => ([...data]));
      });
    }
  }, []);

  useEffect(() => {

    if (allUsers.length !== 0 && allQuestions !== 0) {
      const filteredQs = allQuestions.map((item) => ({ question: item.question, qid: item.id, ans: item[item.correct_ans] }));

      const filteredUsers = allUsers.map((item) => ({ userAvatar: item.imageUrl, userName: item.name, userMob: item.mobileNumber }));

      filteredQs.forEach((item) => {
        let dataObj = { qs: item.question, ans: item.ans };
        let users = [];


        // console.log(item)//
        const fetchData = async () => {
          try {
            const { data } = await axios(`https://tih-dev.annapurnamsme.net/customer/question/getUserAnswered/time/${item.qid}`);
            // console.log(data.response); 



            // console.log("msg", questionDetails);

            data?.response.forEach((item) => {
              // console.log(item)
              let founduser = filteredUsers.find((value) => (value.userMob === item.userMobile));
              if (founduser) {
                let userD = { name: founduser.userName, mob: founduser.userMob, avatar: founduser.userAvatar, qsId: item.questionNo, time: item.timeTakenInSecond }
                users = [...users, userD];
              }
            });

            // console.log(dataObj);
          } catch (err) {
            console.log(err)
          }

          // setAllResults((prevData) => ([...prevData, { ...dataObj, users }]));

        }

        setAllResults((prevData) => ([...prevData, { ...dataObj, users }]));

        fetchData();
      });
      // console.log(allFilteredData);
      // console.log("first")
    } else {
      console.log("not working");
    }

    // return () => {

    // }
  }, [allUsers, allQuestions])

  return (
    <ResultContainer>
      {
        allResults.map((item, index) => (
          <div className="result-rapper" key={index}>
            <div className="left-container">
              <div className="question-container">
                <h3 className="question">{item?.qs}</h3>
                <h5 className="correct-answer">{item?.ans}</h5>
              </div>
              <div className="user-results-container">
                {
                  item.users.map((value, index) => (
                    <div className="user-container" key={index}>
                      <img src={value?.avatar || userImage} alt="user-avatar" className="user-avatar" />
                      <div className="user-details-container">
                        <h3 className="user-name">{value?.name}</h3>
                        <h5 className="result-time">{value?.time} Sec</h5>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* <div className="right-container">
          <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="winner-avatar" className="winner-avatar" />
          <h3 className="winner-name">John Doe</h3>
          <h2 className="winner-tag">Winner !</h2>
        </div> */}
          </div>
        ))
      }
    </ResultContainer>
  );
};

export default Results;