import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AssignmentItem from "./AssignmentItem";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "assignments"), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setAssignments(data);
  });

  return () => unsubscribe(); // cleanup when component unmounts
}, []);

  return (
    <div>
      {assignments.map((a) => (
        <AssignmentItem key={a.id} assignment={a} />
      ))}
    </div>
  );
}

export default AssignmentList;