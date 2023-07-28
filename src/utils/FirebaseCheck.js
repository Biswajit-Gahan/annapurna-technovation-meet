import { onValue, ref, set, update } from "firebase/database";
import { database } from "../utils/firebase";

import React from 'react'

const FirebaseCheck = () => {

  // onValue(ref(database), (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // })

  update(ref(database), {
    questionId: 5
  }).then(() => {
    console.log("data saved");
  }).catch(err => {
    console.log(err)
  })

  console.log(database)
  return (
    <div>FirebaseCheck</div>
  )
}

export default FirebaseCheck;