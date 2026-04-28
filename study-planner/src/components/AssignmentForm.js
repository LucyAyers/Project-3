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

      setTitle("");
      setDueDate("");
      setClassName("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 col-md-6">
      <input
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        type="date"
        className="form-control mb-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        className="form-control mb-2"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        placeholder="Class"
      />

      <button className="btn btn-primary w-100" type="submit">Add</button>
    </form>
  );
}

export default AssignmentForm;