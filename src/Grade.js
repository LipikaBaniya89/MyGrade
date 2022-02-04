import {useState, useRef, useEffect, Component} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import './App.css'
import { FaTrash } from 'react-icons/fa';

    
const styles = {
    textCenter: {textAlign: 'center',  fontSize: '15px' ,fontFamily:'Segoe UI', color:'#FFFFFF'},
    textRight: {textAlign:'right', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'},
    textLeft: {textAlign:'left', fontSize: '14px' ,fontFamily:'Segoe UI', color:'#525050', paddingLeft:"10px"},
    bold: {fontWeight: 'bold',color:'#187bcd'},
    textLeftWithColor: {fontSize: '15px' ,fontFamily:'Segoe UI', color:'#3a9bdc',textAlign:'left',paddingLeft:"10px"},
    left: {textAlign:'left', fontSize: '14px' ,fontFamily:'Segoe UI', color:'#525050', paddingLeft:"10px"},
};

var semCount = [];
var semCount1 = [];
var semCount2 = [];
var semCount3 = [];
var semCount4 = [];
var semCount5 = [];
var semCount6 = [];
var semCount7 = [];


function Grade({data,setDataItems}){
    const [dataRows, setDataRows] = useState();
    const [dataTotal,setDataTotal] = useState(0);

    const [dataSem,setDataTotalSem] = useState(0);
    const [dataSem1,setDataTotalSem1] = useState(0);
    const [dataSem2,setDataTotalSem2] = useState(0);
    const [dataSem3,setDataTotalSem3] = useState(0);
    const [dataSem4,setDataTotalSem4] = useState(0);
    const [dataSem5,setDataTotalSem5] = useState(0);
    const [dataSem6,setDataTotalSem6] = useState(0);
    const [dataSem7,setDataTotalSem7] = useState(0);

    useEffect(() => {
        let finalScore=0;
        let total =0;
        let credit=3;

        let sem=0;
        let semFinal=0;
        let sem1=0;
        let semFinal1=0;
        let sem2=0;
        let semFinal2=0;
        let sem3=0;
        let semFinal3=0;
        let sem4=0;
        let semFinal4=0;
        let sem5=0;
        let semFinal5=0;
        let sem6=0;
        let semFinal6=0;
        let sem7=0;
        let semFinal7=0;

        const z= data.map((v,i) => {

            if (v.grade==="A") {
                v.grade=4.0;
            } 
            if (v.grade==="A-") {
                v.grade= 3.75;
            } 
            if (v.grade==="B+") {
                v.grade=3.25;
            } 
             if (v.grade==="B") {
                v.grade=3.0;
            } 
            if (v.grade==="B-") {
                v.grade=2.75;
            } 
            if (v.grade==="C+") {
                v.grade=2.25;
            } 
            if (v.grade==="C") {
                v.grade=2;
            } 
            if (v.grade==="C-") {
                v.grade=1.75;
            } 
            if (v.grade==="D") {
                v.grade=1.0;
            } 
            if (v.grade==="F"){
                v.grade=0.0;
            }
            if (v.grade==="W" || v.grade==="I" || v.grade==="S" || v.grade==="U" || v.grade==="R" || v.grade==="TR") {
                v.grade=null;
            }

          
          if (v.year==="2/2018") {
            semFinal+=v.grade * credit;
            semCount.push(v)
            sem=semFinal/(credit*semCount.length);
              
        }

        if (v.year==="1/2019") {
            semFinal1+=v.grade * credit;
            semCount1.push(v)
            sem1=semFinal1/(credit*semCount1.length);
        }
  
        if (v.year==="2/2019") {
            semFinal2+=v.grade * credit;
            semCount2.push(v)
            sem2=semFinal2/(credit*semCount2.length);
        }

        if (v.year==="1/2020") {
            semFinal3+=v.grade * credit;
            semCount3.push(v)
            sem3=semFinal3/(credit*semCount3.length);
        }

        if (v.year==="2/2020") {
            semFinal4+=v.grade * credit;
            semCount4.push(v)
            sem4=semFinal4/(credit*semCount4.length);
        }

        if (v.year==="3/2020") {
            semFinal5+=v.grade * credit;
            semCount5.push(v)
            sem5=semFinal5/(credit*semCount5.length);
        }

        if (v.year==="1/2021") {
            semFinal6+=v.grade * credit;
            semCount6.push(v)
            sem6=semFinal6/(credit*semCount6.length);
        }

        if (v.year==="2/2021") {
            semFinal7+=v.grade * credit;
            semCount7.push(v)
            sem7=semFinal7/(credit*semCount7.length);
        }

        finalScore+=v.grade * credit;
        total=finalScore/(credit*data.length);
  
            if (v.grade===4.0) {
                v.grade="A";
            } 
            if (v.grade===3.75) {
                v.grade= "A-";
            } 
            if (v.grade===3.25) {
                v.grade="B+";
            } 
             if (v.grade===3.0) {
                v.grade="B";
            } 
            if (v.grade===2.75) {
                v.grade="B-";
            } 
            if (v.grade===2.25) {
                v.grade="C+";
            } 
            if (v.grade===2) {
                v.grade="C";
            } 
            if (v.grade===1.75) {
                v.grade="C-";
            } 
            if (v.grade===1.0) {
                v.grade="D";
            } 
            if (v.grade===0.0){
                v.grade="F";
            }
            if (v.grade===null){
                v.grade="W";
            }

            return (
                <tr key={i}>  
                    <td style={styles.textLeft}>{v.year}</td>
                    <td style={styles.textLeft}>{v.id}</td>
                    <td style={styles.textLeft}>{v.subject}</td>
                    <td style={styles.textLeft}>{v.grade}</td>
                    <td style={styles.textLeft}><FaTrash onClick={() => deleteClick(i)}/></td>
                    <th colSpan={4}></th>
                </tr>

            );

        });

        setDataRows(z)
        setDataTotal(total);

        setDataTotalSem(sem);
        setDataTotalSem1(sem1);
        setDataTotalSem2(sem2);
        setDataTotalSem3(sem3);
        setDataTotalSem4(sem4);
        setDataTotalSem5(sem5);
        setDataTotalSem6(sem6);
        setDataTotalSem7(sem7);
    }, [data])


    const clearTable = () => {
        setDataItems([]);
        setDataRows([]);
    }; 
    
  const deleteClick = (i) => {
    data.splice(i,1)
    setDataItems([...data])
  }

    const formatNumber = (x) => {
        x = Number.parseFloat(x)
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

        return (
            <div style={{backgroundColor: "#F5F5F5", paddingBottom:"30px"}}>
            <Container className="center-alignment">
                <Row>
                    <Col>
                    <h3 style={{paddingTop:"20px", fontSize: '18px' ,fontFamily:'Segoe UI'}}>ESTIMATE GRADE</h3>
                    </Col>
                </Row>

                    <div>
                        <Table style={{width: "60px",marginLeft:"630px",backgroundColor:"#3a9bdc",borderRadius:"20px"}}>
                            <thead>
                                <th style={styles.textCenter}>{(formatNumber(dataTotal))}</th>
                            </thead>

                        </Table>
                    </div>

                <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", width:"700px"}}>
                    <Table  style={{width:"700px"}}>
                    <thead>
                        <tr> 
                            <th style={styles.textLeftWithColor }>SEMESTER</th>
                            <th style={styles.textLeftWithColor }>CODE</th>
                            <th style={styles.textLeftWithColor}>COURSE</th>
                            <th style={styles.textLeftWithColor}>GRADE</th>
                            <th colSpan={8}></th>
                        </tr>
                    </thead>
                    <tbody>{dataRows}</tbody>
                </Table>
                </div>

                <Row>
                    <Col>
                    <h2>ESTIMATED GRADE OF EACH SEMESTER</h2>
                    </Col>
                </Row>

                <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", width:"700px"}}>
                    <Table  style={{width:"700px",height:"80px"}}>   
                    <thead >
                        <tr > 
                            <th style={styles.textLeftWithColor}> SEMESTER 2/2018 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 1/2019 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 2/2019 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 1/2020 </th>
                         
                            <th colSpan={8}></th>
                        </tr>
                        </thead>
                        <td style={styles.left}>{(formatNumber(dataSem))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem1))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem2))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem3))}</td>
                   

                  
                  
                </Table>
                </div>


                <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", width:"700px"}}>
                    <Table  style={{width:"700px",height:"80px"}}>   
                    <thead>
                        <tr> 
                            <th style={styles.textLeftWithColor}> SEMESTER 2/2020 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 3/2020 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 1/2021 </th>
                            <th style={styles.textLeftWithColor}> SEMESTER 2/2021 </th>
                            <th colSpan={8}></th>
                        </tr>
                        </thead>
                        <td style={styles.left}>{(formatNumber(dataSem4))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem5))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem6))}</td>
                        <td style={styles.left}>{(formatNumber(dataSem7))}</td>
                   
                  
                </Table>
                </div>

                <Col>
                    <Button className="button-size" backgroundcolor="#87CEEB" onClick={clearTable}>
                    Clear
                    </Button>
                </Col>
            </Container>

            </div>
        );
   
}

export default Grade;

