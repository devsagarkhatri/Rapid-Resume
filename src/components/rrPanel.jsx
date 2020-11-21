import React, { Component } from 'react';

import logo from './../resources/images/rrlogo.png';
import Education from './Education';
import Profile from './Profile';
import Projects from './Projects';
import "./rrPanel.css";
import Skills from './Skills';
import Themes from './Themes';
import Theme1 from './themes/theme1';
import Work from './Work';
import PrismaZoom from 'react-prismazoom';
import { printDiv } from './rrPanel.js';

class RRPanel extends Component {
    state = { 
        progress: 100 / 6,
        menu: 1,
        name: "",
        email: "",
        mobile: "",
        linkedin: "",
        github: "",
        desc:"",
     }
    render() { 
        return (
            <React.Fragment>
                <div className="head col-sm-12">
                    <img alt="" src={logo} className="head_img"/>
                </div>
                <div className="row vh90">                
                    <div className="col-sm-3 bg">
                        <div className="row">                                                       
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#themes" onClick={()=>{this.setState({menu:1});}} role="tab" aria-controls="home"> Themes</a>                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile" onClick={()=>{this.setState({menu:2});}}  role="tab" aria-controls="home"> Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#education" onClick={()=>{this.setState({menu:3});}} role="tab" aria-controls="profile"> Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#work" onClick={()=>{this.setState({menu:4});}} role="tab" aria-controls="messages"> Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#skills" onClick={()=>{this.setState({menu:5});}} role="tab" aria-controls="settings"> Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#projects" onClick={()=>{this.setState({menu:6});}} role="tab" aria-controls="settings"> Projects</a>
                                </li>
                                <li>                                                
                                    <br /><br />
                                    <input type="submit" value="GO" className="form-submit" />                                                    
                                </li>    
                                <li>                                                
                                    <br/>
                                    <input type="reset" value="Reset" className="form-submit" />
                                </li>    
                            </ul>
                            <form>
                                <div className="tab-content">   
                                    <Themes/>    
                                    <Profile/>
                                    <Education/>
                                    <Work/>
                                    <Skills/>
                                    <Projects/>                                            
                                </div>
                            </form>                        
                        </div> 
                    </div>

                    <div className="col-sm-9 right">
                        <div className="row toolbar">
                            <button >   Print    </button>
                            <button>Download PDF</button> 
                            {/* <button>Zoom Out</button> */}
                        </div>
                        {/* <PrismaZoom maxZoom="1.5" > */}
                            <page size="A4" class="printpage">
                                <Theme1/>
                            </page>
                        {/* </PrismaZoom> */}
                    </div>
                </div>
                {/* Footer styarts here */}
                <div className="footer row">
                    <div className="col-sm-4 foot">
                    <a href="https://devsagarkhatri.github.io/" >Developed by <u>Sagar Khatri</u></a>
                    </div>
                    <div className="col-sm-4 foot row">
                        <div className="col-sm-2">
                            <button>Prev</button>
                        </div>
                        <div className="col-sm-8 foot">
                            
                        <div className="progress bg-dark" style={{height:"5px"}}>
                            <div className="progress-bar " style={{width:this.state.menu*this.state.progress+"%",height:"5px",background: "linear-gradient(270deg, #1e90ff, #7b68ee)"}}></div>
                        </div>
                        
                        </div>
                        <div className="col-sm-2">
                            <button>Next</button>
                        </div>
                    </div>
                    <div className="col-sm-4 foot">
                    Contact : dev.sagarkhatri@gmail.com
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default RRPanel;