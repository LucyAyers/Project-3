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

      data.sort((a, b) => {
        if (a.completed !== b.completed) {
          return a.completed - b.completed;
        }
        return new Date(a.dueDate) - new Date(b.dueDate);
      });

      setAssignments(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mt-4">
      {assignments.map((a) => (
        <AssignmentItem key={a.id} assignment={a} />
      ))}
    </div>
  );
}

export default AssignmentList;