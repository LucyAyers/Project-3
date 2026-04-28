import React from 'react';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';


export default function App() {
  return (
    <div>
      <h1 className="text-center display-4 my-4 fw-bold">Study Planner</h1>
      <AssignmentForm />
      <AssignmentList />
    </div>
  );
}