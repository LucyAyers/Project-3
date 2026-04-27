import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AssignmentForm() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "assignments"), {
        title,
        dueDate,
        className,
        completed: false
      });

      console.log("Assignment added!");

      // clear form
      setTitle("");
      setDueDate("");
      setClassName("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        placeholder="Class"
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AssignmentForm;