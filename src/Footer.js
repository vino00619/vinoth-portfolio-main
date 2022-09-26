import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return <div className="row footer">
    <div className="offset-sm-1 col-sm-3 footerHover">
      {/* <span className="name">Vinoth Manoharan</span> <br/> */}
      {/* <p style={{ color: "#3b82f6" }}>Full Stack Web Developer</p> */}
      <a href="mailto: vinoth00619@gmail.com" style={{ fontSize: "17px", textDecoration:"none", color: "whitesmoke"}}>Mail : vinoth00619@gmail.com</a> <br/> <br/>
      {/* <span className="name" style={{ fontSize: "17px"}}>Mail : vinoth00619@gmail.com</span> <br/> */}
      <a href="tel: 79041 30051" style={{ fontSize: "17px", textDecoration:"none", color: "whitesmoke"}}>Call : +91 79041-30051</a>
      {/* <span className="name" style={{ fontSize: "17px"}}>Call : +91 79041 30051</span> */}
    </div>
    <div className="offset-sm-5 col-sm-2">
      <a
        href="https://github.com/vino00619"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <GitHubIcon
          sx={{ fontSize: 45, color: "whitesmoke" }}
          className="emailIcon" />
      </a>
      <a
        href="https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <LinkedInIcon
          sx={{ fontSize: 45, color: "whitesmoke" }}
          className="emailIcon" />
      </a>
      {/* <EmailIcon sx={{ fontSize: 45 }} className="emailIcon" /> */}
    </div>
  </div>;
}
