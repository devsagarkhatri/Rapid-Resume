import React, { Component } from 'react';
import "./theme1.css";

class Theme1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {  
        
        if (this.props.profile !== {} && this.props.profile!==this.state.profile) {
            this.setState({profile : this.props.profile});    
        }
        
        

        return (
            <React.Fragment>
                {console.log("  >>> " +this.props.profile)}
                <h1 className="name">{this.props.profile.name? this.props.profile.name :"Default Name"}</h1>
                <ul className="profile">
                    <li>{this.props.profile.email? this.props.profile.email :"Default email"}</li>
                    <li>{this.props.profile.phone ? this.props.profile.phone : "Phone number"}</li>
                    <li>{this.props.profile.location ? this.props.profile.location : "Location"}</li>
                    <li>{this.props.profile.github? this.props.profile.github :"Github URL"}</li>
                    <li>{this.props.profile.website? this.props.profile.website :"Website URL"}</li>
                    
                </ul>
                
                
                <div className="heading">
                    {this.props.profile.desc ? <React.Fragment><hr style={{ borderColor: "black" }} /><br/> {this.props.profile.desc}<br/> </React.Fragment>:""}
                </div>

                <div className="heading">                    
                    Education
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>

                <div className="heading">                    
                    Skills
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>

                <div className="heading">                    
                    Work
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>

                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>
                
                <div className="heading">                    
                    Projects
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Theme1;