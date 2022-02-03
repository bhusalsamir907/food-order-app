import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <TwitterIcon onClick={() =>  window.open("https://twitter.com/bhusalsamir907","_blank")}/>
            <InstagramIcon onClick={() =>  window.open("https://www.instagram.com/","_blank")}/>
            <FacebookIcon onClick={() =>  window.open("https://www.facebook.com/","_blank")}/>
            <GitHubIcon onClick={() =>  window.open("https://github.com/bhusalsamir907","_blank")} />
            <LinkedInIcon onClick={() =>  window.open("https://www.linkedin.com/in/samir-bhusal-a683a6213/","_blank")}/>
        </div>
        <p>&copy;2022 Samir Bhusal</p>
    </div> 
  )
}

export default Footer
