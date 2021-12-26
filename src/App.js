import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap.js';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
// import image from './../src/resources/images/banner.png';
// import logo from './../src/resources/images/rrlogo.png';
import RRPanel1 from './components/rrPanel1';



function App() {
  return (
    <React.Fragment>
      <RRPanel1/>
    </React.Fragment>
  );
  // return (
  //   <div className="container-fluid">
  //     <div className="row" style={{color:"white",height:"95vh"}}>
  //       <div className="col-sm-6 left">
  //         <img alt="" src={logo} className="logo" /><br />
  //         <button className="form form-control" onClick={rrPanel}>
  //           Make New Resume
  //         </button>
  //       </div>
  //       <div className="col-sm-6 right">
  //         <img alt="" src={image} className="banner"/>
  //       </div>
  //     </div>
  //     <div class="footer row">
  //       <div className="col-sm-4 foot">
  //        <a href="https://devsagarkhatri.github.io/" >Developed by <u>Sagar Khatri</u></a>
  //       </div>
  //       <div className="col-sm-4 foot">
          
  //       </div>
  //       <div className="col-sm-4 foot">
  //         Contact : dev.sagarkhatri@gmail.com
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
