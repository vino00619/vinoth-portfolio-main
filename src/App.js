import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";
import SchoolIcon from "@mui/icons-material/School";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AOS from "aos";
import{AboutMe} from "./AboutMe"
import { ContactMe } from "./ContactMe";
import { Footer } from "./Footer";
import { MyEducation } from "./MyEducation";
import { ProjectWork } from "./ProjectWork";
import { MySkills } from "./MySkills";
import { HashLink as Link } from "react-router-hash-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Particle from "./Component/Particle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

AOS.init();

function App() {


  return (
    <div className="Container-fluid">
      
      <div className="aboutMe" id="#">
      <Particle/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBar">
          <div style={{ marginLeft: "3vw" }} >
            <span className="name"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path></svg>
              Vinoth's Portfolio</span>
            {/* <p style={{ color: "#3b82f6" }}>Full Stack Web Developer</p> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {/* <Link path="/skills" style={{color:"whitesmoke", textDecoration:"none"}}><div className="menuData">
              <HandymanIcon />
                <span> Skills</span>
              </div></Link> */}
              <Link
                smooth
                to={"#skills"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                {/* <HandymanIcon /> */}
                <span> Skills</span>
              </Link>
              <Link
                smooth
                to={"#projects"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                {/* <CodeIcon /> */}
                <span> Projects</span>
              </Link>
              <Link
                smooth
                to={"#education"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                {/* <SchoolIcon /> */}
                <span>Education</span>
              </Link>
              
                <a 
                  href="https://drive.google.com/file/d/1IH2Bj0XCPF9-Mb8czU87N-mTID1I6oCW/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                  className="menuData"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  {/* <InsertDriveFileIcon /> */}
                  <span> Resume</span>
                </a>
             
              <Link
                smooth
                to={"#contact"}
                style={{
                  color: "whitesmoke",
                  textDecoration: "none",
                  marginRight: "5vw",
                }}
                className="menuData"
              >
                {/* <EmailIcon /> */}
                <span> Contact</span>
              </Link>
            </div>
          </div>
        </nav>
        {/* <div className="contactIconInAboutMe"> 
        <a
          href="https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
         <LinkedInIcon
          sx={{ fontSize: 60, color: "whitesmoke" }}
          className="emailIcon" />
        </a><br/>
        <a
          href="https://github.com/vino00619"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
        <GitHubIcon
          sx={{ fontSize: 60, color: "whitesmoke" }}
          className="emailIcon" />
        </a>
        </div> */}
        
        <div className="row selfIntro">
          <span className="intro" >
            Hi, I'm <span style={{ color:"#38ef7d"}} className="vinoth">Vinoth Manoharan</span>
          </span>
          <p>I'm a Full Stack Developer</p>
        </div>
        <div className="projectGitBtn">
          {/* <Link smooth to={"#projects"}>
            <button type="button" class="btn btn-primary btn">
              <CodeIcon />  <span>- </span>
              Projects
            </button>
          </Link> */}
          <a
            href="https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary gitbtn" style={{ backgroundColor:"#00674b", borderColor: "#007965"}}>
              <LinkedInIcon /> <span>- </span>
               <strong style={{ letterSpacing: "1px",  }}>LinkedIn</strong>
            </button>
          </a>
          <a
            href="https://github.com/vino00619"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline btn gitbtn"  style={{ borderColor: "#007965", color:"#007965"}}>
              <GitHubIcon />  <span>- </span>
              <strong style={{ letterSpacing: "1px", fontSize:"17px" }}>Github</strong>
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1IH2Bj0XCPF9-Mb8czU87N-mTID1I6oCW/view"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary gitbtn " style={{ backgroundColor:"#00674b", borderColor: "#007965"}}>
              <TextSnippetIcon /> <span>- </span>
              <strong style={{ letterSpacing: "1px" }}>Resume</strong>
            </button>
          </a>
        </div>
        <Link smooth to={"#"}>
          <KeyboardArrowUpIcon sx={{ backgroundColor:"#00674b", fontSize: 40 }} className="upIcon" />
        </Link>
      </div>
      <MySkills />
      <ProjectWork />
      <MyEducation />
      <AboutMe/>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
