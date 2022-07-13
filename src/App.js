import styled from 'styled-components';
import { useState } from "react";
import Papa from "papaparse";
import { Title, BodyWrapper, Label, Form, FormWrapper, Button, Input } from "./styles/index"


function App() {
  const [data, setData] = useState({});

  const handleOnChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  };

  //todo: create capitalize function
  //instructions page
  //preview view
//disable button until from is completed and valid

  const csvHandler = (event) => {
    // console.log(event.target.files[0])
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // console.log(results.data)
        let participants = results.data.map(participant => {
          return participant["Participant Name"]
        });
        console.log(participants)
      },
    })
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const fetchData = await fetch("http://localhost:3000/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({event: data})
    });
  }

  return (
    <BodyWrapper className="App">

        <Title>Certificate Generator</Title>
      <FormWrapper>
        <Form onSubmit={handleOnSubmit}>
          <Label htmlFor="eventName">Event Name:</Label>
          <Input onChange={handleOnChange} type="text" id="eventName "name="event_name" required/>
          <Label htmlFor="eventDate">Event date:</Label>
          <Input onChange={handleOnChange} type="date" id="eventDate "name="event_date" required/>
          <Label htmlFor="speaker">Speaker:</Label>
          <Input onChange={handleOnChange} type="text" id="speaker "name="speaker" required/>
          <Label htmlFor="participants">Upload participants:</Label>
          <Input onChange={csvHandler} type="file" id="participants "name="participants" accept=".csv" required />
          <Button type="submit">Generate</Button>
        </Form>
      </FormWrapper>
    </BodyWrapper>
  );
}

export default App;
