import React, { Component } from 'react';


class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { count:1 }
        this.addCount = this.addCount.bind(this);
        this.removeCount=this.removeCount.bind(this);        
    }
    
    componentDidMount() { }
    
    addCount(){
        if(true){
        this.setState({count:this.state.count+1});
        console.log(this.state.count);
        }
    }
    removeCount(){
        if(this.state.count>1){
            this.setState({count:this.state.count-1});
            console.log(this.state.count);
        }
    }
    render() {
        let rows=[]
        for(let i=0;i<this.state.count;i++){
            rows.push(
            <React.Fragment  key={i}>
                <div className="form-row">
                    {/* <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"style={{background:"transparent", color:"rgb(144,134,132)"}}>
                            Select Your Degree
                        </button>
                        <div className="dropdown-menu bg-dark">
                        <a className="dropdown-item" href="#">High School</a>
                        <a className="dropdown-item" href="#">Intermediate</a>
                                <a className="dropdown-item" href="#">Diploma</a>
                                <a className="dropdown-item" href="#">Bachelors Degree</a>
                                <a className="dropdown-item" href="#">Masters Degree</a>
                        </div>
                    </div> */}
                </div>
                <div className="form-row">
                        <input type="text" id="form-name" className="form-textbox" required/>
                    <label htmlFor="form-name" className="form-label">University Name</label>
                </div>
                <div className="form-row">
                    <input type="text" id="form-email" className="form-textbox" required/>
                    <label htmlFor="form-email" className="form-label">Degree Name</label>
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
                    <label htmlFor="form-location" className="form-label">C.G.P.A</label>
                </div>
                
                <div className="form-row">
                        <button id="add" onClick={() => this.addCount()}> Add More </button>
                        {i>0?<button id="remove" onClick={() => this.removeCount()}> Delete It </button>:""}
                </div>
            </React.Fragment>
            )
        } 
        return (
        <div className="tab-pane" id="education" role="tabpanel">                                                
            <h1 className="form-heading">
                    Education Information
            </h1>
            {rows}                                                            
        </div>
        );
    }
}
 
export default Education;