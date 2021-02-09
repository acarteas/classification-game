import React from 'react';
//import {MouseEvent} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';

interface QuestionModel {
  questionHeader: string,
  questionDescription: string,
  userResponse?: boolean,
  userChoices: {}
}

function getQuestion() {

  const questionHeaders = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Cras eget leo ut leo maximus venenatis interdum non urna?",
    "Nunc lobortis pellentesque vulputate. Duis in augue non nisl euismod efficitur?",
    "Vestibulum elementum molestie aliquet?",
    "Sed est metus, posuere vel pharetra id, dapibus non magna?",
  ];

  const questionDescriptions = [
    "Quisque luctus diam nec tellus congue volutpat eget id orci. Etiam pharetra imperdiet nulla et mattis. Fusce in molestie lorem. Curabitur facilisis magna id ornare ullamcorper. Aenean imperdiet dignissim risus vel porttitor. Vestibulum rutrum scelerisque tortor, nec pellentesque magna pellentesque eu. In pharetra mauris non cursus lacinia. Vivamus interdum lectus sit amet commodo convallis. Donec eget placerat elit.",
    "Vivamus quis lacinia erat. Proin aliquam eros a nisi consequat porttitor. Morbi maximus blandit bibendum. Fusce vitae dolor vel tortor sagittis mollis at non leo. Suspendisse volutpat quam nec mi congue aliquet. Quisque dignissim molestie turpis ac tempor. Suspendisse ac orci ullamcorper, faucibus risus et, maximus nibh.",
    "Nullam venenatis egestas enim, placerat ullamcorper lacus mollis ac. Aenean vel ultricies elit. Duis ac tellus at justo gravida malesuada. Donec condimentum efficitur neque ac ullamcorper. Nulla mauris quam, fringilla ut mi ac, posuere ullamcorper sapien. Maecenas ut massa et eros volutpat sollicitudin sit amet et urna. ",
    "Pellentesque tempor, nibh nec lobortis vehicula, turpis risus gravida enim, non dignissim justo purus id magna. Praesent euismod, neque eu varius tincidunt, est sem maximus purus, a rhoncus felis massa eget purus. Duis sit amet diam felis. Morbi in orci efficitur arcu auctor varius. Integer ut ipsum risus. Fusce at dapibus mi. Praesent et efficitur sem, sed congue risus. Ut maximus orci eu augue rhoncus mattis.",
    "Aenean leo arcu, placerat eu mauris non, vulputate consectetur nibh. Cras massa est, interdum at convallis nec, ullamcorper eget turpis. Duis sed hendrerit eros. ",
    "Nunc malesuada, massa vitae rutrum lacinia, tellus orci egestas est, a accumsan arcu magna et turpis. Maecenas eu sem euismod, vestibulum nisi ut,",
    "Aenean imperdiet dignissim risus vel porttitor. Vestibulum rutrum scelerisque tortor, nec pellentesque magna pellentesque eu. In pharetra mauris non cursus lacinia. Vivamus interdum lectus sit amet commodo convallis. Donec eget placerat elit.",
    "Quisque sit amet nunc vitae lacus fringilla lobortis. Suspendisse luctus luctus diam ut imperdiet. Vestibulum elementum molestie aliquet. Sed est metus, posuere vel pharetra id, dapibus non magna. Etiam velit magna, tristique a molestie at, cursus ut metus."
  ];

  const userChoices = [
    { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" },
    { 1: "Yes", 2: "No" },
    { 0: "Never", 1: "Very little", 2: "Somewhat", 3: "A lot" }
  ];

  const header: string = questionHeaders[Math.floor(Math.random() * questionHeaders.length)];
  const description: string = questionDescriptions[Math.floor(Math.random() * questionDescriptions.length)];
  const choices = userChoices[Math.floor(Math.random() * userChoices.length)];

  const question: QuestionModel = {
    questionHeader: header,
    questionDescription: description,
    userChoices: choices
  };

  return question;
}
function App() {

  const buttonClick = (evt: React.MouseEvent<HTMLElement>, result) => {
    setModel({ ...model, userResponse: result });
  };

  const [model, setModel] = React.useState(getQuestion());
  return (
    <div className="App">
      <Container>
        <Row className="mt-2">
          <Col>
            <h2>{model.questionHeader}</h2>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            {model.questionDescription}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            {Object.keys(model.userChoices).map((keyName, i) => (
              <Button className="mx-1" key={keyName} onClick={(evt) => buttonClick(evt, keyName)}>{model.userChoices[keyName]}</Button>
            ))}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button className="btn-success" onClick={() => setModel(getQuestion())}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;