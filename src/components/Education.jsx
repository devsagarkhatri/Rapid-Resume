import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="tab-pane" id="education" role="tabpanel">                                                
            <h1 className="form-heading">
                Education Information
            </h1>
            <div className="form-row">
                <input type="text" id="form-name" className="form-textbox" required/>
                <label htmlFor="form-name" className="form-label">Full 1Name</label>
            </div>
            <div className="form-row">
                <input type="text" id="form-email" className="form-textbox" required/>
                <label htmlFor="form-email" className="form-label">Email address</label>
            </div>
            <div className="form-row">
                <input type="phone" id="form-phone" className="form-textbox" required/>
                <label htmlFor="form-phone" className="form-label">Phone Number</label>
            </div>
            <div className="form-row">
                <input type="location" id="form-location" className="form-textbox" required/>
                <label htmlFor="form-location" className="form-label">Location</label>
            </div>
            <div className="form-row">
                <input type="website" id="form-website" className="form-textbox" required/>
                <label htmlFor="form-website" className="form-label">Website Link</label>
            </div>                                                
        </div>
        );
    }
}
 
export default Education;