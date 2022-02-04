import React, {Component} from 'react';


const styles = {
    textCenter: {textAlign: 'center'},
    textRight: {textAlign: 'right'},
    textLeft: {textAlign:'left', padding:"10px",color:'#525050', fontWeight:"normal"},
    light: {color: "F5F5F5" , marginTop:"10px",marginBottom: "20px",  fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'},
    label: {fontSize: '15px' ,fontFamily:'Segoe UI', color:'#3a9bdc',fontWeight:"bold"}
};

class List extends Component {
    constructor () {
        super ();
        this.state = { 
            data :[
                {
                    sem: "SEMESTER 2/2018",
                    details : [
                        {
                            "id"   : 1,
                            "code" : "MGT 1101  : ",
                            "name" : "INTRODUCTION TO BUSINESS",
                            "credit" : "   3 Cr "
                        },
                        {
                            "id"   : 2,
                            "code" : "IT 2231 : ",
                            "name" : "INFORMATION TECHNOLOGY",
                            "credit" : " 3 Cr "
                        },
                        {
                            "id"   : 3,
                            "code" : "IT 2130 : ",
                            "name" : "SYSTEMS SCIENCE",
                            "credit" : " 3 Cr "
                        },
                        {
                            "id"   : 4,
                            "code" : "DA 1121 : ",
                            "name" : "BASIC MATHEMATICS AND STATICTICS",
                            "credit" : " 3 Cr "
                        },
                        {
                            
                            "id"   : 5,
                            "code" : "BG 1001 : ",
                            "name" : "ENGLISH I ",
                            "credit" : " 3 Cr "

                        },
                        {
                            "id"   : 5,
                            "code" : "CS 1201 : ",
                            "name" : "COMPUTER PROGRAMMING I ",
                            "credit" : "3 Cr",
                        }
                    ]
                },
                {
                    sem: "SEMESTER 1/2019",
                    details : [
                            {
                                "id"   : 6,
                                "code" : "IT 2230 : ",
                                "name" : "INFORMATION STRUCTURES",
                                "credit" : "3 Cr",
                            },
                            {
                                "id"   : 7,
                                "code" : "IT 2220 : ",
                                "name" : "COMPUTER SYSTEM CONCEPTS",
                                "credit" : "3 Cr"
                            },
                            {
                                "id"   : 8,
                                "code" : "IT 1251 : ",
                                "name" : "BUSINESS SYSTEMS",
                                "credit" : "3 Cr"
                            },
                            {
                                "id"   : 9,
                                "code" : "GE 2101 : ",
                                "name" : "WORLD CIVILIZATION",
                                "credit" : "3 Cr"
                            },
                            {
                                "id"   : 10,
                                "code" : "BG 1002 : ",
                                "name" : "ENGLISH II ",
                                "credit" : "3 Cr"
                            },
                            {
                                "id"   : 11,
                                "code" : "DA 2103 : ",
                                "name" : "PRINCIPLE OF STATISTICS",
                                "credit" : "3 Cr"
                            }
                        ]
                    },
                    {
                        sem: "SEMESTER 2/2019",
                        details : [
                            {
                                "id"   : 12,
                                "code" : "IT 3253 : ",
                                "name" : "DATA COMMUNICATION AND NETWORKING",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 13,
                                "code" : "IT 3210 : ",
                                "name" : "DATABASE MANAGEMENT SYSTEMS",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 14,
                                "code" : "IT 2211 : ",
                                "name" : "REQUIREMENT ENGINEERING ",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 15,
                                "code" : "IT 2557 : ",
                                "name" : "HUMAN COMPUTER INTEREACTION",
                                "credit" : " 3 Cr "
                            },
                            {
                                
                                "id"   : 16,
                                "code" : "DA 2101 : ",
                                "name" : "CALCULUS I ",
                                "credit" : " 3 Cr "
    
                            },
                            {
                                "id"   : 17,
                                "code" : "BG 2000 : ",
                                "name" : "ENGLISH III ",
                                "credit" : "3 Cr"
                            }
                        ]
                    },
                    {
                        sem: "SEMESTER 1/2020",
                        details : [
                            {
                                "id"   : 18,
                                "code" : "MT 4201 : ",
                                "name" : "SOCIAL INTERESTS, GOVERNMENT POLICIES AND TECHNOLOGY",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 19,
                                "code" : "IT 3211 : ",
                                "name" : "INFORMATION STORAGE AND RETRIEVAL",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 20,
                                "code" : "IT 2371 : ",
                                "name" : "OBJECT ORIENTED PROGRAMMING I ",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 21,
                                "code" : "DA 2203 : ",
                                "name" : "PROBABILITY AND STATISTICAL METHODS ",
                                "credit" : " 3 Cr "
                            },
                            {
                                
                                "id"   : 22,
                                "code" : "IT 3111 : ",
                                "name" : "USER INTERFACE DESIGN ",
                                "credit" : " 3 Cr "
    
                            },
                            {
                                "id"   : 23,
                                "code" : "BG 2001 : ",
                                "name" : "ENGLISH IV ",
                                "credit" : "3 Cr"
                            }
                        ]
                    },
                    {
                        sem: "SEMESTER 2/2020",
                        details : [
                            {
                                "id"   : 24,
                                "code" : "LA 4606 : ",
                                "name" : "INTELLECTUAL PROPERTY LAW",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 25,
                                "code" : "IT 4443 : ",
                                "name" : "SELECTED TOPIC IN PRESENTATION AND DATA VISUALIZATION AND TECHNIQUES",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 26,
                                "code" : "IT 4442 : ",
                                "name" : "SELECTED TOPIC IN DESIGN THINKING ",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 27,
                                "code" : "IT 3232 : ",
                                "name" : "INFORMATION SYSTEMS DESIGN ",
                                "credit" : " 3 Cr "
                            },
                            {
                                
                                "id"   : 28,
                                "code" : "IT 3111 : ",
                                "name" : "INFORMATION SYSTEM ANALYSIS ",
                                "credit" : " 3 Cr "
    
                            },
                            {
                                "id"   : 29,
                                "code" : "IT 3230 : ",
                                "name" : "MANAGEMENT INFORMATION SYSTEMS ",
                                "credit" : "3 Cr"
                            }
                        ]
                    },
                    {
                        sem: "SEMESTER 3/2020",
                        details : [
                            {
                                "id"   : 30,
                                "code" : "GE 1301 : " ,
                                "name" : "ENVIRONMENTAL SCIENCE",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 31,
                                "code" : "CS 1022 : ",
                                "name" : "INTRODUCTION TO PUBLIC RELATIONS ",
                                "credit" : " 3 Cr "
                            },
                        ]
                    },
                    {
                        sem: "SEMESTER 1/2021",
                        details : [
                            {
                                "id"   : 32,
                                "code" : "IT 4445 : ",
                                "name" : "SELECTED TOPIC IN NETWORK SECURITY",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 33,
                                "code" : "IT 4315 : ",
                                "name" : "OBJECT ORIENTED SOFTWARE ANALYSIS AND DESIGN",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 34,
                                "code" : "IT 4314 : ",
                                "name" : "SOFTWARE ENGINEERING CONCEPTS ",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 35,
                                "code" : "IT 4291 : ",
                                "name" : "SENIOR PROJECT I ",
                                "credit" : " 3 Cr "
                            },
                            {
                                
                                "id"   : 36,
                                "code" : "IT 3355 : ",
                                "name" : "MOBILE APPLICATIONS DEVELOPMENT ",
                                "credit" : " 3 Cr "
    
                            },
                            {
                                "id"   : 37,
                                "code" : "GE 2202 : ",
                                "name" : "ETHICS ",
                                "credit" : "3 Cr"
                            }
                        ]
                    },
                    {
                        sem: "SEMESTER 2/2021",
                        details : [
                            {
                                "id"   : 38,
                                "code" : "IT 4438 : ",
                                "name" : "SELECTED TOPIC IN DATA SCIENCE",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 39,
                                "code" : "IT 4425 : ",
                                "name" : "SELECTED TOPIC IN ENTREPRENEURSHIP IN TECHNOLOGY BUSINESS",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 40,
                                "code" : "IT 4292 : ",
                                "name" : "SENIOR PROJECT II ",
                                "credit" : " 3 Cr "
                            },
                            {
                                "id"   : 41,
                                "code" : "IT 3351 : ",
                                "name" : "WEB DESIGN AND DEVELOPMENT I ",
                                "credit" : " 3 Cr "
                            },
                        ]
                    },
            ]
        }
    }

    render() {
        return (      
            <div className="center-alignment" style={{backgroundColor:"#FAFAFA", marginRight:"10px", marginTop:"5px", borderRadius:"15px"}}>
                <h3>LIST OF SUBJECTS</h3>
                <ol style={{listStyleType:"upper-roman"}}>
                    {this.state.data.map((dataDetail) =>
                        <li>
                            <div style={styles.label}>{dataDetail.sem}
                                <ol  style={styles.light}>
                                    {dataDetail.details.map((sub) =>
                                        <li  style={styles.textLeft}>{sub.code} {sub.credit} <br>
                                            </br>
                                            { sub.name}<br>
                                            </br>
                                            {sub.line}
                                        </li>  
                                    )}
                                </ol>
                            </div>
                        </li>
                    )}
                </ol>
            </div>     
        )
    }
}

export default List
