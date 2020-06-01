import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WelcomeAlerts } from '../../utilities/Alerts';
import { Card, Accordion, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

class Projects extends React.Component  {
  render(){
    return (
    	<>
    	<Jumbotron fluid>
		  <Container>
		    <h2 style={{ textAlign: "center" }}><span class="welcome">A Space for My Projects</span> - <span class="name">Personal</span>, and <span class="name">Team Business!</span></h2>
		    <br/>
		    <p class="desc">
		      This space contains a High Level Design, the Business Use-Cases behind and a glimpse of Journey for these projects,<br/> all these years into Software Development.
		    </p>
		  </Container>
		</Jumbotron>
    	<Accordion defaultActiveKey="0">
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="0">
		      <a href="https://bohemia420.github.io/khanna-me/#/projects/#project1">Enterprise Data Architecture & Governance</a>
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="0">
		      <Card.Body>T.B.Detailed, Project 1</Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="1">
		      <a href="https://bohemia420.github.io/khanna-me/#/projects/#project2">Content Feed Recommendation System</a>
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="1">
		      <Card.Body>
		      <u>Motivation</u> : <br/><br/>The ContentFeed Recommendation System, was intended at introducing a diverse yet personalized
		      feed on News, User Generated Content, Tweets etc. as a Capability to the Paytm App.  <br/>
		      Seethed with A plethora of content spawning a vast gamut <br/>
		      - News varying from Local to International<br/>
		      - User Generated Content on axis of Signal, Noise, Mood, Sentiment<br/>
		      - Tweets at a lightening speed<br />
		      - Subtle Merchant Feed and Promotions<br/>
		      The Feed Datasets, constantly gushing in through APIs, Messaging Queues, were further subject, <br/>
		      to be fanned out to a variety of End Users that Paytm, India's largest Wallet Giant, hosts.<br/>
		      <br/><u>Line of Action</u> : <br/><br/> A middleware was placed between the Mobile Platforms and the  Backend Core Capabilities powering the 
		      Recommendation / Personalization Logic. <br/>
		      To scale at 1,000 Requests per second, A pre-compute Strategy was evolved, pumping our feature-stores
		      to maintain the User states and Rule Engines, that communicated to a middleware via our serving layer. 
		      <br/>The middleware, believing in paginating the results of the infinite scroll. was first line of defense combating scale. 
		      <br/><br/><u>Architecture</u> : <br/><br/> A High-Level Design of the Architecture championing this complex Recommendation Engine, is as follows: <br/><br />
		      <Image fluid rounded thumbnail style={{ marginTop: "35px" }} height="30%" src="./feed.png" fluid />
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		</Accordion>
		</>
    );
  }
}

export default Projects;

// <WelcomeAlerts key="Interests" message="Welcome! View from 10,000 ft above the various Projects I have done thus far! "/>

