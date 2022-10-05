import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import emailjs from '@emailjs/browser';
import AOS from "aos";
AOS.init();

export function ContactMe() {
  
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_2dpduyu', 'template_2pg89um', e.target, 'I3XK0vxYYKFqq8e-k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Your message have been sent, Thank you!!!")
      // <Alert severity="success">
      //   <AlertTitle>Success</AlertTitle>
      //   Your message have been sent — <strong>Thank you!!!</strong>
      // </Alert>
  }

  return <div className="contactMe" id="contact">
    <div className="topic" data-aos="zoom-in-up">
      <span style={{ color: "black" }}>Contact</span>
      <span style={{ paddingLeft: "8px", color: "#38ef7d" }}>Me</span>
    </div>
    <div className="row" style={{ textAlign: "center" }}>
      <div className="col-sm-3 email" style={{ textAlign: "center", color: "#00674b" }} data-aos="fade-up">
        <EmailIcon
                onClick={() =>window.open('mailto:vinoth00619@gmail.com', '_blank')}

          sx={{ fontSize: 70, color: "#00674b", cursor: "pointer" }}
          className="emailIcon" />
        <h5>
          <strong>Email</strong>
        </h5>
        <a href="mailto: vinoth00619@gmail.com" style={{ fontSize: "16px", textDecoration:"none", color: "#00674b"}}>vinoth00619@gmail.com</a>
      </div>
      <div className="col-sm-3 email" style={{ textAlign: "center", color: "#00674b" }} data-aos="fade-up">
        <GitHubIcon
        onClick={() =>window.open('https://github.com/vino00619', '_blank')}
          sx={{ fontSize: 70, color: "#00674b", cursor: "pointer" }}
          className="emailIcon" />
        <h5>
          <strong>Github</strong>
        </h5>
        <a
          href="https://github.com/vino00619"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#00674b" }}
        >
          Vinoth Manoharan
        </a>
      </div>

      <div className="col-sm-3 email" style={{ textAlign: "center", color: "#00674b" }} data-aos="fade-up">
        <LinkedInIcon
        onClick={() =>window.open('https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/', '_blank')}
        // href="https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/"
          sx={{ fontSize: 70, color: "#00674b", cursor: "pointer" }}
          className="emailIcon" />
        <h5>
          <strong>LinkedIn</strong>
        </h5>
        <a
          href="https://www.linkedin.com/in/vinoth-manoharan-7437b1a3/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#00674b" }}
        >
          Vinoth Manoharan
        </a>
      </div>
    </div>
    <div className="row" style={{width:"100%"}}>
      <div className="col-sm-6 sendMail" data-aos="zoom-in">
        <div className="topic">
          <span style={{ color: "black" }}>Send</span>
          <span style={{ paddingLeft: "8px", color: "#38ef7d" }}>
            Email
          </span>
        </div>
        <div>
          <form onSubmit={sendEmail}
          >
            <TextField
              fullWidth
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              type="text"
              name="user_name"
              label="Name"
              id="name"
              style={{ marginTop: "20px", marginLeft: "5px" }} />
            <TextField
              fullWidth
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="user_email"
              label="Your email"
              id="email"
              style={{ marginTop: "20px", marginLeft: "5px" }} />
            <TextField
              style={{ marginTop: "20px", marginLeft: "5px" }}
              id="emailMessage"
              label="Message"
              name="message"
              multiline
              rows={7}
              fullWidth />
            <Button
              type="submit"
              style={{ marginTop: "20px", backgroundColor:"#00674b" }}
              variant="contained"
              endIcon={<SendIcon />}
              
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>;
}
