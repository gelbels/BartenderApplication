import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="contacts">
        <InstagramIcon /><FacebookIcon /><TwitterIcon />
      </div>
      <p> &copy; 2023 shotsnpours.com</p>
    </div>
  )
}

export default footer
