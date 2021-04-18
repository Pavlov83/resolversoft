import Navbar from '../layouts/Navbar'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {Link} from 'react-router-dom'

import React from 'react'
import {Card,Button, Container, Row} from 'react-bootstrap'

const Home = () => {
    return (
        <Container >   
        <Header/>    
<div >
<Row>
  <Card style={{ width: '18rem',margin:10,padding:10 }}>
   <Card.Img variant="top"/>
    <Card.Body>
        <Card.Title>Automation Tutorials</Card.Title>
        <Card.Text>
     Series of tutorials for Automation testing by using Java,Selenium WebDriver,
     TestNG and more...
    </Card.Text>
    <button variant="secondary">
    <Link to="/articles">Automated Testing
        </Link> 
        </button>

  </Card.Body>
</Card>

<Card style={{ width: '18rem',margin:10,padding:10 }}>
<Card.Img variant="top"/>
 <Card.Body>
     <Card.Title>JavaScript Tutorials</Card.Title>
     <Card.Text>
   Series of tutorials for Vanilla JavaScript.Including ES6 Syntax,Design Patterns  and more...
 </Card.Text>
 <Button variant="secondary"> JavaScript Tutorials</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem',margin:10,padding:10 }}>
<Card.Img variant="top"/>
 <Card.Body>
     <Card.Title>React Tutorials</Card.Title>
     <Card.Text>
   Series of tutorials for Vanilla JavaScript.Including ES6 Syntax,Design Patterns  and more...
 </Card.Text>
 <Button variant="secondary">   Coming Soon!!!  </Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem',margin:10,padding:10 }}>
<Card.Img variant="top"/>
 <Card.Body>
     <Card.Title>Computer Science</Card.Title>
     <Card.Text>
  Series of tutorials for common algorithms and data structures and general computer science 
 </Card.Text>
 <Button variant="secondary">   Coming Soon!!!  </Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem',margin:10,padding:10 }}>
<Card.Img variant="top" />
 <Card.Body>
     <Card.Title>Math Studies</Card.Title>
     <Card.Text>
  Series of tutorials for Linear Algebra, Equations,Matrix calculations,solving problems by math principles 
 </Card.Text>
 <Button variant="secondary">   Coming Soon!!! </Button>
</Card.Body>
</Card>


<Card style={{ width: '18rem',margin:10,padding:10 }}>
<Card.Img variant="top"/>
 <Card.Body>
     <Card.Title>Java Tutorials</Card.Title>
     <Card.Text>
         Tutorials for the Java Language,OOP Concepts,DataTypes,Loops and More...
 </Card.Text>
 <Button variant="secondary">   Coming Soon!!!  </Button>
</Card.Body>
</Card>



</Row>

</div>
<Footer />
</Container>
       
        
    )
}

export default Home;
