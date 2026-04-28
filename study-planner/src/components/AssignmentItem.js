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

  const isDueTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const due = new Date(assignment.dueDate + "T00:00:00");

    return (
      due.getFullYear() === tomorrow.getFullYear() &&
      due.getMonth() === tomorrow.getMonth() &&
      due.getDate() === tomorrow.getDate()
    );
  };

  return (
    <div className={`card mb-3 
      ${assignment.completed ? "bg-secondary bg-opacity-25 border border-secondary"
      : isDueTomorrow() ? "bg-danger bg-opacity-10 border border-danger" : ""
      }
`    }>
      <div className="card-body">
        <h3 style={{ textDecoration: assignment.completed ? "line-through" : "none" }}>
          {assignment.title}
        </h3>
        <p>Due: {assignment.dueDate}</p>
        <p>Class: {assignment.className}</p>

        <button className="btn btn-success btn-sm me-2" onClick={handleComplete} disabled={assignment.completed}>
          {assignment.completed ? "Completed" : "Mark Complete"}
        </button>

        <button className="btn btn-danger btn-sm" onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentItem;