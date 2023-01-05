import toDoAppImage from "./logo/to-do-app-auth-screenshot.PNG";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import weatherAppImage from "./logo/weather-app-screenshot.PNG";
import travelStories from "./logo/travel-stories.JPG";
import googleKeeper from "./logo/google-keeper.JPG";
import chat2meet from "./logo/chat2meet.JPG";
import cryptoapp from "./logo/cryptoapp.PNG";
import eCommerceAppImage from "./logo/e-commerce-app-screenshot.PNG";
import LaunchIcon from '@mui/icons-material/Launch';
import AOS from "aos";
AOS.init();

export function ProjectWork() {
  return (
    <div className="projectWork" id="projects" >
      <div className="topic" data-aos="zoom-in">
        <span style={{ color: "white" }}>Projects &</span>
        <span style={{ paddingLeft: "8px", color:"#38ef7d" }}>Work</span>
      </div>
      <div className="row" style={{ marginTop: "40px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5 moblieView">
          <img style={{ borderRadius: "10px" }} src={travelStories} alt="Travel Stories" width="100%"></img>
        </div>
        <div className="col-sm-5 moblieView" style={{ color: "whitesmoke" }}>
          <a href="https://travel-stories-app.netlify.app/"
            target="_blank"
            rel="noreferrer" style={{ fontSize: "30px", textDecoration: "underline", color:"white", fontWeight:"bold" }}>Travel Stories <LaunchIcon style={{fontSize:"medium"}}/></a> <br />
          <p>
            <span style={{ color:"#38ef7d" }}>About: </span>Travel app using React, Map box, Node, Express and MongoDB. <br /> <br />
            <span style={{ color:"#38ef7d" }}>Usage: </span>In this application, you can pin the location you visited and share your reviews with other users.
          </p>
          <a
            href="https://travel-stories-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn" style={{ backgroundColor:"#00674b", borderColor:"#00674b" }}>
            <LaunchIcon style={{fontSize:"25px"}}/>
              <span> Go</span>
            </button>
          </a>
          <a
            href="https://github.com/vino00619/map-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn gitbtn" style={{ color:"#38ef7d", borderColor:"#38ef7d", fontWeight:"bolder", fontSize:"18px" }}>
              <GitHubIcon /> Code
            </button>
          </a>
        </div>
      </div>
{/* ..................................................... */}
<div className="row" style={{ marginTop: "40px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5 moblieView">
          <img style={{ borderRadius: "10px" }} src={cryptoapp} alt="cryptoapp" width="100%"></img>
        </div>
        <div className="col-sm-5 moblieView" style={{ color: "whitesmoke" }}>
        <a href="https://crypto-finder-01.netlify.app/"
            target="_blank"
            rel="noreferrer" style={{ fontSize: "30px", textDecoration: "underline", color:"white", fontWeight:"bold" }}>Crypto Tracker <LaunchIcon style={{fontSize:"medium"}}/></a> <br />
          <p>
            <span style={{ color:"#38ef7d" }}>About: </span>A crypto tracking app using React, Axios and chartjs2. <br /> <br />
            <span style={{ color:"#38ef7d" }}>Usage: </span>This application, allows you to explore various information and previous price history of several crypto currencies.
          </p>

          <a
            href="https://crypto-finder-01.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn" style={{ backgroundColor:"#00674b", borderColor:"#00674b" }}>
            <LaunchIcon style={{fontSize:"25px"}}/>
              <span> Go</span>
            </button>
          </a>
          <a
            href="https://github.com/vino00619/crypto-tracker"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn gitbtn" style={{ color:"#38ef7d", borderColor:"#38ef7d", fontWeight:"bolder", fontSize:"18px" }}>
              <GitHubIcon /> Code
            </button>
          </a>
        </div>
      </div>
{/* ----------------------------------------------------------------- */}
      <div className="row" style={{ marginTop: "40px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5 moblieView">
          <img style={{ borderRadius: "10px" }} src={chat2meet} alt="chat2meet" width="100%" ></img>
        </div>
        <div className="col-sm-5 moblieView" style={{ color: "whitesmoke" }}>
        <a href="https://chat2meet.netlify.app/"
            target="_blank"
            rel="noreferrer" style={{ fontSize: "30px", textDecoration: "underline", color:"white", fontWeight:"bold" }}>Chat 2 Meet <LaunchIcon style={{fontSize:"medium"}}/></a> <br />
          <p>
            <span style={{ color:"#38ef7d" }}>About: </span>Chat 2 Meet app using React, Redux, Node, Express and Mongoose. <br /> <br />
            <span style={{ color:"#38ef7d" }}>Usage: </span>This application allows you to chat with other 'chat 2 meet' users.
          </p>
          <a
            href="https://chat2meet.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn" style={{ backgroundColor:"#00674b", borderColor:"#00674b" }}>
            <LaunchIcon style={{fontSize:"25px"}}/>
              <span> Go</span>
            </button>
          </a>
          <a
            href="https://github.com/vino00619/ChatApp-Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn gitbtn" style={{ color:"#38ef7d", borderColor:"#38ef7d", fontWeight:"bolder", fontSize:"18px" }}>
              <GitHubIcon /> Code
            </button>
          </a>
        </div>
      </div>
{/* ..................................................... */}
      
{/* ..................................................... */}
      <div className="row" style={{ marginTop: "40px", paddingBottom: "50px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5 moblieView">
          <img style={{ borderRadius: "10px" }} src={googleKeeper} alt="weatherApp" width="100%"></img>
        </div>
        <div className="col-sm-5 moblieView" style={{ color: "whitesmoke" }}>
        <a href="https://google-keeper-clone-frontend.netlify.app/"
            target="_blank"
            rel="noreferrer" style={{ fontSize: "30px", textDecoration: "underline", color:"white", fontWeight:"bold" }}>Google Keeper <LaunchIcon style={{fontSize:"medium"}}/></a> <br />
          <p>
            <span style={{ color:"#38ef7d" }}>About: </span>React front end application using react-dom, material-ui libraries.<br /> <br />
            <span style={{ color:"#38ef7d" }}>Usage: </span>This application allows you to take personal notes on the go.
          </p>
          <a
            href="https://google-keeper-clone-frontend.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn" style={{ backgroundColor:"#00674b", borderColor:"#00674b" }}>
            <LaunchIcon style={{fontSize:"25px"}}/>
              <span> Go</span>
            </button>
          </a>
          <a
            href="https://github.com/vino00619/Google_Keeper_Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn gitbtn" style={{ color:"#38ef7d", borderColor:"#38ef7d", fontWeight:"bolder", fontSize:"18px" }}>
              <GitHubIcon /> Code
            </button>
          </a>
        </div>
      </div>


    </div>
  );
}
