// material ui

import { Container, Grid } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__time">
              <div className="col">
                <span className="footer__time-day">Sunday</span>
                <span className="footer__time-day">Monday</span>
                <span className="footer__time-day">Tuesday</span>
                <span className="footer__time-day">Wednesday</span>
                <span className="footer__time-day">Friday</span>
                <span className="footer__time-day">Saturday</span>
              </div>
              <div className="col">
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
              </div>
              <div className="col">
                <span className="footer__time-hours">Closed</span>
                <span className="footer__time-hours">8.00-20.00</span>
                <span className="footer__time-hours">10.00-5.00</span>
                <span className="footer__time-hours">12.00-9.00</span>
                <span className="footer__time-hours">7.00-1.00</span>
                <span className="footer__time-hours">9.00-12.00</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">Address</h4>

              <div className="footer__contact">
                <PhoneInTalkOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">+8488 8888888</span>
              </div>

              <div className="footer__contact">
                <SpeakerNotesOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  thanhhunq2k@gmail.com
                </span>
              </div>

              <div className="footer__contact">
                <BusinessOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">Quy Nhon, Binh Dinh</span>
              </div>
              <div className="footer__contact footer__contact--icons">
                <FacebookIcon style={{ fill: "#2D88FF" }} />
                <TwitterIcon style={{ fill: "#5DA9DD" }} />
                <InstagramIcon style={{ fill: "#F56040" }} />
                <YouTubeIcon style={{ fill: "#FF0000" }} />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61992.40169048611!2d109.17180718872676!3d13.807477419657209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6b40b8e49397%3A0x9b8d78aea618939e!2zTmjGoW4gQsOsbmgsIFRwLiBRdWkgTmjGoW4sIELDrG5oIMSQ4buLbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1644331721038!5m2!1svi!2s"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                scrolling="auto"
                title="map"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
