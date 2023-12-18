import React, { useState } from 'react';
import Trainings from './components/Trainings'
import Form from './components/Form'
import './App.css';

export default function App() {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'Ru'
};

  const [form, setForm] = useState({
    date: "",
    distanc: ""
  })

  const [trainigs, setTrainings] = useState([])

  return (
    <React.Fragment>
      <Form form={form} setForm={setForm} setTrainings={setTrainings}/>
      <Trainings trainigs={trainigs} setTrainings={setTrainings}/>
    </React.Fragment>
  );
}