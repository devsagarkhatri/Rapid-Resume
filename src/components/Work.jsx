import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="tab-pane" id="work" role="tabpanel">                                                
                <h1 className="form-heading">
                    Work History
                </h1>
                <div className="form-row">
                    <input type="text" id="form-name" className="form-textbox" required/>
                    <label htmlFor="form-name" className="form-label">Comapny Name</label>
                </div>
                <div className="form-row">
                    <input type="text" id="form-email" className="form-textbox" required/>
                    <label htmlFor="form-email" className="form-label">Job Role</label>
                </div>
                <div className="form-row">
                    <input type="phone" id="form-phone" className="form-textbox" required/>
                    <label htmlFor="form-phone" className="form-label">Year Started</label>
                </div>
                <div className="form-row">
                    <input type="phone" id="form-phone1" className="form-textbox" required/>
                    <label htmlFor="form-phone1" className="form-label">Year Ended</label>
                </div>                
                <div className="form-row">
                    <input type="location" id="form-location" className="form-textbox" required/>
                    <label htmlFor="form-location" className="form-label">Location</label>
                </div>
                <div className="form-row">
                    <input type="website" id="form-website" className="form-textbox" required/>
                    <label htmlFor="form-website" className="form-label">Your Job Role Contribution</label>
                </div>                                                
                <div className="form-row">
                    <button id= "add">Add More</button>
                </div> 
                <div className="form-row">
                    <input type="text" id="form-name" className="form-textbox" required/>
                    <label htmlFor="form-name" className="form-label">Comapny Name</label>
                </div>
                <div className="form-row">
                    <input type="text" id="form-email" className="form-textbox" required/>
                    <label htmlFor="form-email" className="form-label">Job Role</label>
                </div>
                <div className="form-row">
                    <input type="phone" id="form-phone" className="form-textbox" required/>
                    <label htmlFor="form-phone" className="form-label">Year Started</label>
                </div>
                <div className="form-row">
                    <input type="phone" id="form-phone1" className="form-textbox" required/>
                    <label htmlFor="form-phone1" className="form-label">Year Ended</label>
                </div>                
                <div className="form-row">
                    <input type="location" id="form-location" className="form-textbox" required/>
                    <label htmlFor="form-location" className="form-label">Location</label>
                </div>
                <div className="form-row">
                    <input type="website" id="form-website" className="form-textbox" required/>
                    <label htmlFor="form-website" className="form-label">Your Job Role Contribution</label>
                </div>                                                
                <div className="form-row">
                    <button id= "add">Add More</button>
                </div> 
            </div>
         );
    }
}
 
export default Work;