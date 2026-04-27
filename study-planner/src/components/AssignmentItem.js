import React from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const AssignmentItem = ({ assignment }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "assignments", assignment.id));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  const handleComplete = async () => {
    try {
      await updateDoc(doc(db, "assignments", assignment.id), {
        completed: true
      });
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h3 style={{ textDecoration: assignment.completed ? "line-through" : "none" }}>
        {assignment.title}
      </h3>
      <p>Due: {assignment.dueDate}</p>
      <p>Class: {assignment.className}</p>

      <button onClick={handleComplete} disabled={assignment.completed}>
        {assignment.completed ? "Completed" : "Mark Complete"}
      </button>

      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
};

export default AssignmentItem;