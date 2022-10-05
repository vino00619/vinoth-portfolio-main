import cegLogo from "./logo/CEG_main_logo.png";
import Arunai from "./logo/Arunai.png";
import AOS from "aos";
AOS.init();

export function MyEducation() {
  return <div className="myEducation" id="education">
    
    <div className="topic" data-aos="zoom-in">
      <span>My</span>
      <span style={{ paddingLeft: "8px", color: "#38ef7d" }}>
        Education
      </span>
    </div>
    <div className="colleges">
      <div className="row" data-aos="zoom-in">
        <div className="col-sm-3 cegLogo">
          <img src={cegLogo} alt="ceg logo" />
        </div>
        <div className="col-sm-9 msc">
          <p>Passed out - 2018</p>
          <p>College of Engineering Guindy - Master's in Remote Sensing & Geomatics</p>
          <strong>CGPA - 7.4/10</strong>
        </div>
      </div>
      <hr />
      <div className="row" data-aos="zoom-in" style={{marginBottom:"10vh"}}>
        <div id="arunai" className="col-sm-3 cegLogo">
          <img style={{ height: "80px"}} src={Arunai} alt="Arunai logo" />
        </div>
        <div className="col-sm-9 msc">
          <p>Passed out - 2015</p>
          <p>Arunai Engineering College - Bachelor's in Civil Engineering</p>
          <strong>CGPA - 6.7/10</strong>
        </div>
      </div>
    </div>
  </div>;
}
