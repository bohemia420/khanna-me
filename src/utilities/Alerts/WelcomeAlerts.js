import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeAlerts(props) {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert style={{height:"45px"}} variant="info" onClose={() => setShow(false)} dismissible>
        <p>
          { props.message }
        </p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

export default WelcomeAlerts;
