import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from '../../utilities/Bar';
import { WelcomeAlerts } from '../../utilities/Alerts';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import * as d3 from "d3";

class Resume extends React.Component  {
  constructor(props) {
  	super(props);
  	this.state = {
  		order : {
  			'cloud': 'sort','sre': 'sort',
  			'de': 'sort', 'backend': 'sort',
  			'fe': 'sort', 'swe': 'sort',
  			'ml': 'sort', 'lead': 'sort'
  		},
  		blink : {
  			'cloud': false, 'sre': false,
  			'de': false, 'backend': false,
  			'fe': false, 'swe': false,
  			'ml': false, 'lead': false
  		}
  	}
  	this.showCloud = this.showCloud.bind(this);
  	this.showSRE = this.showSRE.bind(this);
  	this.showDE = this.showDE.bind(this);
  	this.showBackend = this.showBackend.bind(this);
  	this.showFE = this.showFE.bind(this);
  	this.showSWE = this.showSWE.bind(this);
  	this.showML = this.showML.bind(this);
  	this.showPM = this.showPM.bind(this);
  }

  showCloud() {
  	this.setState({blink:{'cloud':!this.state.blink.cloud}});
  }

  showSRE() {
  	this.setState({blink:{'sre':!this.state.blink.sre}});
  }

  showDE() {
  	this.setState({blink:{'de':!this.state.blink.de}});
  }

  showBackend() {
  	this.setState({blink:{'backend':!this.state.blink.backend}});
  }

  showFE() {
  	this.setState({blink:{'fe':!this.state.blink.fe}});
  }

  showSWE() {
  	this.setState({blink:{'swe':!this.state.blink.swe}});
  }

  showML() {
  	this.setState({blink:{'ml':!this.state.blink.ml}});
  }

  showPM() {
  	this.setState({blink:{'lead':!this.state.blink.lead}});
  }

  render(){
  	const data = {
  		"cloud": [{"i":0,"tech":"AWS VPC","value":4},{"i":1,"tech":"AWS IAM","value":4.5},{"i":2,"tech":"AWS CFN","value":3.5},{"i":3,"tech":"AWS Lambda","value":4}],
  		"sre": [{"i":0,"tech": "ELK","value":4},{"i":1,"tech": "CloudWatch","value":3.5},{"i":2,"tech": "Nagios","value":3}, {"i":3,"tech": "Chaos Engineering","value":4}],
  		"de": [{"i":0,"tech": "Kafka","value":5},{"i":1,"tech": "Spark","value":4.5},{"i":2,"tech": "Flink","value":3.5},{"i":3,"tech": "NoSQL","value":4}],
  		"backend": [{"i":0,"tech": "Play/Akka","value":4},{"i":1,"tech": "Microservices","value":4.5},{"i":2,"tech": "Nodejs","value":3},{"i":3,"tech": "Django","value":4}],
  		"fe": [{"i":0,"tech": "React","value":4.5},{"i":2,"tech": "Redux","value":3.5},{"i":2,"tech": "D3","value":4},{"i":3,"tech": "css","value":3}],
  		"swe": [{"i":0,"tech": "Java","value":3},{"i":1,"tech": "Javascript","value":3.5},{"i":2,"tech": "Scala","value":4},{"i":3,"tech": "Python","value":5}],
  		"ml": [{"i":0,"tech": "Kubeflow","value":3.5},{"i":1,"tech": "Keras","value":3},{"i":2,"tech": "Scikit-Learn","value":4},{"i":3,"tech": "Spark ML-Lib","value":4}],
  		"lead": [{"i":0,"tech": "JIRA/Confluence","value":4},{"i":1,"tech": "Mentorship","value":4},{"i":2,"tech": "Project Ownership","value":4.5}]
  	}
    return (
    	<>
    	<Container fluid>
    	<Breadcrumb style={{ marginTop: "15px" }}>
		  <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
		  <Breadcrumb.Item href="#">
		    Work
		  </Breadcrumb.Item>
		  <Breadcrumb.Item active>Experience</Breadcrumb.Item>
		</Breadcrumb>
    	<Table responsive striped bordered hover variant="dark">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Employer</th>
		      <th>Location</th>
		      <th>Designation</th>
		      <th>From</th>
		      <th>Until</th>
		      <th>Mission Statement</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>5</td>
		      <td>Trafigura Pte Ltd</td>
		      <td>Mumbai / Geneva</td>
		      <td>Data Engineering Manager</td>
		      <td>July, 2019</td>
		      <td>Current</td>
		      <td>Building <code>Enterprise Data Analytics</code> Solution</td>
		    </tr>
		    <tr>
		      <td>4</td>
		      <td>Paytm</td>
		      <td>Noida</td>
		      <td>Machine Learning Engineer</td>
		      <td>July, 2018</td>
		      <td>June, 2019</td>
		      <td>Building <code>Machine Learning Capabilities</code> at <code>Scale</code></td>
		    </tr>
		    <tr>
		      <td></td>
		      <td>Paytm Labs</td>
		      <td>Noida / Toronto</td>
		      <td>Senior Data Engineer</td>
		      <td>September, 2016</td>
		      <td>June, 2018</td>
		      <td>Building <code>Stream Analytics</code>, <code>Daily Reporting</code> & <code>Dashboarding</code> Solutions</td>
		    </tr>
		    <tr>
		      <td>3</td>
		      <td>Askme.com</td>
		      <td>Gurgaon</td>
		      <td>Senior Software Engineer</td>
		      <td>April, 2016</td>
		      <td>September, 2016</td>
		      <td>Building <code>Big Data ETL</code> Capabilities</td>
		    </tr>
		    <tr>
		      <td>2</td>
		      <td>Vizury Interactive Pvt. Ltd</td>
		      <td>Bengaluru</td>
		      <td>Software Engineer</td>
		      <td>March, 2015</td>
		      <td>March, 2016</td>
		      <td>Scaling <code>Real-Time Bidding</code> Strategy</td>
		    </tr>
		    <tr>
		      <td>1</td>
		      <td>Groupon U.S.</td>
		      <td>Chennai</td>
		      <td>Data Scientist</td>
		      <td>July, 2014</td>
		      <td>February, 2015</td>
		      <td>Contributing to <code>Pre-Sales Demand Forecasting</code>, Inventory Management Solutions</td>
		    </tr>
		  </tbody>
		</Table>
		</Container>
		<Container fluid>
		  <Breadcrumb style={{ marginTop: "15px" }}>
		  <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
		  <Breadcrumb.Item href="#">
		    Work
		  </Breadcrumb.Item>
		  <Breadcrumb.Item active>Projects</Breadcrumb.Item>
		</Breadcrumb>
		<Accordion defaultActiveKey="0">
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="0">
		      Enterprise Data Architecture & Governance
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="0">
		      <Card.Body>
		      @<code>Trafigura Pte. Ltd</code>, Championed an Architecture & its Generic Implementation on <b>Serverless Paradigms</b>, <b>Streaming
			  Use Cases</b>, <b>Capabilities for Data Science</b>, <b>Daily Reporting & Dashboarding</b> atop Data Life Cycle. <a href="https://bohemia420.github.io/khanna-me/#/projects/">explained here</a>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="1">
		      ContentFeed Recommendation System
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="1">
		      <Card.Body>
		      @<code>Paytm</code>, Owned the Backend comprising <b>Complex Event Processing</b> on Feed, ClickStream, Fundamental
			  Datasets to build a Source of Truth; Fanning out <b>Feature Lookups</b> to maintain User States underneath
			  a <b>Serving Interface</b>. <a href="https://bohemia420.github.io/khanna-me/#/projects/">explained here</a>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="2">
		      Daily Reporting & Dashboarding at Scale
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="2">
		      <Card.Body>
		      @<code>Paytm Labs</code>, Implemented <b>Complex Event Processing</b>/<b>ETL Pipelines</b> to build OLAP Cubes and SSoTs as <b>Speed
& Batch Layers</b> of a <b>Lambda Architecture</b>. <a href="/projects">explained here</a>
			  <br/><br/>
			  <b>Individual Contributor</b> and <b>Architect</b> to a <b>Scalable, Responsive Reporting Framework</b> atop 
<b>Microservices</b> for Query Execution, Storage Systems, Customization, Notification Services. <a href="/projects">explained here</a>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="3">
		      Streaming Analytics Solution
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="3">
		      <Card.Body>
		      @<code>Paytm Labs</code>, Wrote <b>Change Data Capture</b> Connectors and transformations around <b>stateful joins</b>.
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="4">
		      Big Data Ingestion & Processing Pipelines
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="4">
		      <Card.Body>
		      @<code>Askme.com</code>, <b>Simple</b> & <b>Complex Event Processing</b> for many-to-many data sources /sinks. <a href="/projects">explained here</a>
			  </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="5">
		      Scaling, Enhancing Real-Time Bidding Solutions 
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="5">
		      <Card.Body>
		      @<code>Vizury Interactive Pvt. Ltd</code>, Scaled Real-Time Bidding atop Pre-computes and Serving as <b>Lamda Architecture</b>. <a href="/projects">explained here</a>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		</Accordion>
		</Container>
		<Container fluid>
		<Breadcrumb style={{ marginTop: "15px" }}>
		  <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
		  <Breadcrumb.Item href="#">
		    Skills
		  </Breadcrumb.Item>
		  <Breadcrumb.Item active>Expertise</Breadcrumb.Item>
		</Breadcrumb>
		<div>
		  <Badge onClick={this.showCloud} variant="primary">Cloud</Badge>{' '}
		  <Badge onClick={this.showSRE} style={{ marginLeft: "5px" }} variant="secondary">Site Reliability</Badge>{' '}
		  <Badge onClick={this.showDE} style={{ marginLeft: "5px" }} variant="success">Data Engineering</Badge>{' '}
		  <Badge onClick={this.showBackend} style={{ marginLeft: "5px" }} variant="dark">Backend</Badge>{' '}
		  <Badge onClick={this.showFE} style={{ marginLeft: "5px" }} variant="light">Front-End</Badge> 
		  <Badge onClick={this.showSWE} style={{ marginLeft: "5px" }} variant="danger">Software Development</Badge>{' '}
		  <Badge onClick={this.showML} style={{ marginLeft: "5px" }} variant="warning">Machine Learning</Badge> 
		  <Badge onClick={this.showPM} style={{ marginLeft: "5px" }} variant="info">Management</Badge>
		</div>
		<Row style={{ marginTop: "10px" }}>
		<Col xs="3" sm="3">
			{this.state.blink.cloud ? <Spinner animation="grow" variant="primary" /> : <span/>}
		    <span style={{ marginLeft: "4px" }} className="label">Cloud</span>
		    <Bar
		      blink={this.state.blink.cloud}
		      sort={this.state.order.cloud}
		      key="cloud"
		      data={data.cloud}
		      width={250}
		      height={200}
		      top={20}
		      bottom={30}
		      left={30}
		      right={0}
		    />
		</Col>
		<Col xs="3" sm="3">
			{this.state.blink.sre ? <Spinner animation="grow" variant="secondary" /> : <span/>}
		    <span style={{ marginLeft: "4px" }} className="label">Site Reliability</span>
		    <Bar
		    blink={this.state.blink.sre}
		      sort={this.state.order.sre}
		      key="sre"
		      data={data.sre}
		      width={250}
		      height={200}
		      top={20}
		      bottom={30}
		      left={30}
		      right={0}
		    />
		</Col>
		<Col xs="3" sm="3">
			{this.state.blink.de ? <Spinner animation="grow" variant="success" /> : <span/>}
		    <span style={{ marginLeft: "4px" }} className="label">Data Engineering</span>
		    <Bar
		    blink={this.state.blink.de}
		      sort={this.state.order.de}
		      key="de"
		      data={data.de}
		      width={250}
		      height={200}
		      top={20}
		      bottom={30}
		      left={30}
		      right={0}
		    />
		</Col>
		<Col xs="3" sm="3">
			{this.state.blink.backend ? <Spinner animation="grow" variant="dark" />: <span/>}
		    <span style={{ marginLeft: "4px" }} className="label">Backend Engineering</span>
		    <Bar
		    blink={this.state.blink.backend}
		      sort={this.state.order.backend}
		      key="backend"
		      data={data.backend}
		      width={250}
		      height={200}
		      top={20}
		      bottom={30}
		      left={30}
		      right={0}
		    />
		</Col>
		</Row>
		<Row style={{ marginTop: "10px" }}>
			<Col xs="3" sm="3"><div>
				{this.state.blink.fe ? <Spinner animation="grow" variant="light" />: <span/>}
			    <span style={{ marginLeft: "4px" }} className="label">Front-End</span>
			    <Bar
			    blink={this.state.blink.fe}
		      sort={this.state.order.fe}
			      key="fe"
			      data={data.fe}
			      width={250}
			      height={200}
			      top={20}
			      bottom={30}
			      left={30}
			      right={0}			    
			    />
			</div></Col>
			<Col xs="3" sm="3"><div>
			{this.state.blink.swe ? <Spinner animation="grow" variant="danger" />: <span/>}
			    <span style={{ marginLeft: "4px" }} className="label">Software Engineering</span>
			    <Bar
			    blink={this.state.blink.swe}
		      sort={this.state.order.swe}
			      key="swe"
			      data={data.swe}
			      width={250}
			      height={200}
			      top={20}
			      bottom={30}
			      left={30}
			      right={0}
			    />
			</div></Col>
			<Col xs="3" sm="3"><div>
			{this.state.blink.ml ? <Spinner animation="grow" variant="warning" />: <span/>}
			    <span style={{ marginLeft: "4px" }} className="label">Machine Learning</span>
			    <Bar
			    blink={this.state.blink.ml}
		      sort={this.state.order.ml}
			      key="ml"
			      data={data.ml}
			      width={250}
			      height={200}
			      top={20}
			      bottom={30}
			      left={30}
			      right={0}
			    />
			</div></Col>
			<Col xs="3" sm="3"><div>
			{this.state.blink.lead ? <Spinner animation="grow" variant="info" />: <span/>}
			    <span style={{ marginLeft: "4px" }} className="label">Management</span>
			    <Bar
			    blink={this.state.blink.lead}
		      sort={this.state.order.lead}
			      key="lead"
			      data={data.lead}
			      width={250}
			      height={200}
			      top={20}
			      bottom={30}
			      left={30}
			      right={0}
			    />
			</div></Col>
		</Row>
		</Container>
		</>
    );
  }
}

export default Resume;
//<WelcomeAlerts style={{ marginTop: "20px" }} key="Resume" message="My Resume here :-) Well not too mainstream though! "/>

