import React from 'react';
//import AssignmentPlanner from './AssignmentPlanner';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';


export default function App() {
  return (
    <div>
      <h1>Study Planner</h1>
      <AssignmentForm />
      <AssignmentList />
    </div>
  );
}