import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Navbar } from "react-bootstrap";
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Grade from "./Grade";
import useLocalStorage from 'react-localstorage-hook'
import List from "./List";
import Line from "./Line";
import jsonData from './details.json';

var semCount= new Map();

function App() {
  const yearRef= useRef();
  const idRef=useRef();
  const subjectRef=useRef();
  const freeRef=useRef();
  const gradeRef=useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);
  const [dataCount,setDataCount] = useLocalStorage("dataCount",[]);
  
  
    const addItem = () => {
      if (idRef.current.value == "") {
        alert("Item name is empty");
        return;
      }
    
    const sID=idRef.current.value;
    const currYear= yearRef.current.value
    // const subject = idList.find( e => e.id == sId)

    if(semCount.has(currYear)) {
      if(semCount.get(currYear) >= 7) {
        alert("Limit reached. Cannot add more than 7 items for " + currYear);
        return;
      } else {
        semCount.set(currYear, semCount.get(currYear) + 1);
      }
    } else {
      semCount.set(currYear, 1);
    }
    
    var subjectObj = {
      year: yearRef.current.value,
      id: idRef.current.value,
      subject: subjectRef.current.value,
      grade: gradeRef.current.value,
    };
  
    dataItems.push(subjectObj);
    setDataItems([...dataItems]);

    dataCount.push(semCount);
    setDataCount([...dataCount]);
    };

    const details = jsonData.faculty

  
    const productChange = (e) => {
      const sId= idRef.current.value;
      const option=details.find((e) => e.id === sId);
      subjectRef.current.value=option.subjects.name

      // const sId= idRef.current.value;
      // const subject=idList.find((e) => e.id == sId);
      // subjectRef.current.value= subject.subject
    }

   
  
      return (
        <div style={{backgroundColor: "#F5F5F5", paddingBottom:"30px"}}>
          <Container>
            <img src="/img/logo.png"></img>
              <div className="wrapper" style={{ display: 'block', width: 1000}}>
                <Tabs className="center-alignment" defaultActiveKey="second">
                  <Tab eventKey="first" title="Add Grade" >
                    <h3 className="center-alignment" style={{paddingTop:"18px", paddingBottom:"20px", fontSize: '20px' ,fontFamily:'Segoe UI', color:'#525050'}}>ADD DESIRED COURSES</h3>
                      <div className="center-alignment" style={{backgroundColor:"#FAFAFA", marginRight:"10px", borderRadius:"15px"}}>
                        <Row>
                          <Col xs={12} >
                            <Form className="left-alignment"> 
                              <Form.Group className="mb-3" controlId="formYear">
                                <Form.Label style={{fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}>YEAR</Form.Label>
                                  <Form.Select 
                                    aria-label="Default select example" style={{backgroundColor:'#C1C1C1', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}} ref={yearRef} >
                                    {details.map (v => (<option key={v.id} value={v.id}>{v.sem}</option>))}
                                  </Form.Select>
                                </Form.Group>
                
                            <Form.Group className="mb-3" controlId="formYear">
                              <Form.Label style={{fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}>COURSE ID</Form.Label>
                                <Form.Select 
                                  aria-label="Default select example" 
                                  style={{backgroundColor:'#C1C1C1', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}
                                  ref={idRef} 
                                  onChange={productChange}>
                                  {details[0].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[1].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[2].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[3].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[4].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[5].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[6].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                  {details[7].subjects.map (v => (<option key={v.id} value={v.id}>{v.code}</option>))}
                                 
                                </Form.Select>
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label style={{fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}> COURSE NAME </Form.Label>
                                <Form.Select aria-label="Default select example" 
                                  style={{backgroundColor:'#C1C1C1', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}} ref={subjectRef}>
                                  {details[0].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[1].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[2].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[3].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[4].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[5].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[6].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                  {details[7].subjects.map (v => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                </Form.Select>
                              </Form.Group>
               
                              <Form.Group className="mb-3" controlId="formGrade">
                                  <Form.Label style={{fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}>GRADE</Form.Label>
                                  <Form.Select aria-label="Default select example"  
                                  style={{backgroundColor:'#C1C1C1', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}} ref={gradeRef}>
                                    {details[8].grades.map(v=>(<option key={v.id} value = {v.id}>{v.grade}</option>))}
                                    </Form.Select>
                              </Form.Group> 
      
                            <Button className="button-size" style={{backgroundColor:"#87CEEB"}} onClick={addItem }>
                              Add
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                  </div>
                  </Tab>
                  <Tab eventKey="second" title="Study Plan">
                      <Col>
                      <div><List/></div>  
                      </Col>
                  </Tab>
                    <Tab eventKey="third" title="Grade Estimation">
                      <Col>
                        <Grade data={dataItems} setDataItems={setDataItems}/>
                      </Col>
                    </Tab>
                   <Tab eventKey="fourth" title="Progress">
                      <Col>
                        <div><Line/></div>
                      </Col>
                  </Tab>
                </Tabs>
              </div>
            </Container>
            </div>
             );

    
    }


    export default App;
     
