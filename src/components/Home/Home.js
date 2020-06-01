import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


function Home() {
	return (
	<div>
		<Jumbotron>
		  <h1 style={{ textAlign: "center" }}>
		  	<i class="fa fa-hand-peace-o"></i>
		  	<span class="welcome" >Welcome! to the site of</span>
		  	<span class="name"> Sumit Khanna</span>
		  </h1>
		  <br />
		  <p class="desc">
		    <i class='fas fa-code'></i>Thou shall find here, an experience hardened <mark>Data Architect</mark>, a Seasoned <mark>Full-Stack</mark>, And a <code style={{ fontsize: "48px"}}>Code Craftsman at Heart</code> <i class="fas fa-heart"></i></p>
		  <p></p>
		  <p class="desc" style={{textAlign: "centre" }}>Let's just grab a cup of coffee <i class='fas fa-coffee'></i> ... as I tour you around</p>
		</Jumbotron>
		<Container fluid style={{ marginBottom: "10px" }}>
		<Row>
		<Col xs="3" sm="3">
			<Breadcrumb>
			  <Breadcrumb.Item href="#"><hp>Home</hp></Breadcrumb.Item>
			  <Breadcrumb.Item href="#">
			    <hp>Introduction</hp>
			  </Breadcrumb.Item>
			  <Breadcrumb.Item active><hp>Display Pic</hp></Breadcrumb.Item>
			</Breadcrumb>
			<Image fluid rounded thumbnail style={{ marginTop: "35px" }} src="./dp.png" fluid />
		</Col>
		<Col xs="4" sm="4">
			<Breadcrumb>
			  <Breadcrumb.Item href="#"><hp>Home</hp></Breadcrumb.Item>
			  <Breadcrumb.Item href="#">
			    <hp>Introduction</hp>
			  </Breadcrumb.Item>
			  <Breadcrumb.Item active><hp>About Me</hp></Breadcrumb.Item>
			</Breadcrumb>
			<Card bg="light">
			<Card.Header><hp>Education</hp></Card.Header>
			<Card.Body>
				<Card.Text>
					<hp>I am a Major in Computer Science, from <code>BITS Pilani - Pilani Campus</code>, Batch of 2014.
				</hp></Card.Text>
			</Card.Body>
			</Card>
			<Card style={{ marginTop: "10px"}} bg="light">
			<Card.Header><hp>Experience</hp></Card.Header>
			<Card.Body>
				<Card.Text style={{ textAlign: "centre"}}>
				  <hp>Carrying <code>6 years of experience</code> as a Backend / Data Engineer, I have championed Big Data Pipelines
			      at Scale combating the 5Vs of Data, built real-time bidding systems, recommendation engines, Streaming Use Cases
			      and of late, vouched end-to-end for an Enterprise Architecture Solution.<br/>
			      All these years, I have picked a good grasp of Full Stack, Cloud, Machine Learning, beyond my comfort zone.
			    </hp></Card.Text>
			</Card.Body>
			</Card>
		</Col>
		<Col xs="5" sm="5">
			<Breadcrumb>
			  <Breadcrumb.Item href="#"><hp>Home</hp></Breadcrumb.Item>
			  <Breadcrumb.Item href="#">
			    <hp>Profile</hp>
			  </Breadcrumb.Item>
			  <Breadcrumb.Item active><hp>Current Where Abouts</hp></Breadcrumb.Item>
			</Breadcrumb>
			<Card style={{ marginTop: "10px"}} bg="light">
			<Card.Body>
				<Card.Text style={{ textAlign: "centre"}}>
				  <hp>Presently, I am working as a <code>Data Engineering Manager</code>, building an 
				  <code> Enterprise Data Analytics Solution</code> for an Oil, Gas and Commodities Trading Giant, 
				  combating Scale and Variety in Financial Data we ingest and believe in. <br/>
				  Nestling atop AWS, this is a comprehensive, Fault-Tolerant Solution with strict SLA 
				  adhered to.</hp> 
				</Card.Text>
			</Card.Body>
			</Card>
			<Breadcrumb style={{ marginTop: "19px" }}>
			  <Breadcrumb.Item href="#"><hp>Home</hp></Breadcrumb.Item>
			  <Breadcrumb.Item href="#">
			    <hp>Profile</hp>
			  </Breadcrumb.Item>
			  <Breadcrumb.Item active><hp>Contact Coordinates</hp></Breadcrumb.Item>
			</Breadcrumb>
			<Accordion defaultActiveKey="0">
			  <Card>
			    <Accordion.Toggle as={Card.Header} eventKey="0">
			      <hp>Connect Professionally</hp>
			    </Accordion.Toggle>
			    <Accordion.Collapse eventKey="0">
			      <Card.Body>
			      <i class="fa fa-github-square"></i><a style={{marginLeft: "5px" }} href="https://github.com/bohemia420"><hp>bohemia420</hp></a><hp> on Github</hp>
			      <br/>
			      <i class="fa fa-stack-overflow"></i><a style={{marginLeft: "5px" }} href="https://stackoverflow.com/users/3356424/khanna"><hp>khanna</hp></a><hp> on Stack Overflow</hp>
			      <br/>
			      <i class="fa fa-linkedin"></i><a style={{marginLeft: "5px" }} href="https://www.linkedin.com/in/sumit-khanna-96910438/"><hp>Sumit Khanna</hp></a><hp> on LinkedIn</hp>
			      </Card.Body>
			    </Accordion.Collapse>
			  </Card>
			  <Card>
			    <Accordion.Toggle as={Card.Header} eventKey="1">
			      <hp>Or, Just reach out at</hp>
			    </Accordion.Toggle>
			    <Accordion.Collapse eventKey="1">
			      <Card.Body>
			      <i class="fa fa-twitter"></i><a style={{marginLeft: "5px" }} href="https://twitter.com/khanna109">khanna109</a><hp> on Twitter</hp>
			      <br/>
			      <i class="fa fa-google-plus-circle"></i><a style={{marginLeft: "5px" }} href="ksumeet40@gmail.com">ksumeet40</a><hp> on Gmail</hp>
			      <br/>
			      <i class="fa fa-linkedin"></i><a style={{marginLeft: "5px" }} href="https://www.linkedin.com/in/sumit-khanna-96910438/">Sumit Khanna</a><hp> on LinkedIn</hp>
			      </Card.Body>
			    </Accordion.Collapse>
			  </Card>
			</Accordion>
		</Col>
		</Row>
		</Container>
	</div>
	);
}

export default Home;
