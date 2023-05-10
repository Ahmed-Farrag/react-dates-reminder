import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";
function App() {
  const [personDate, setPersonDate] = useState(person);
  const onDelete = () => {
    setPersonDate([]);
  };
  const onViewData = () => {
    setPersonDate(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-2">
        <DatesCount person={personDate} />
        <DatesList person={personDate} />
        <DatesAction deleteData={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
