import InputContact from "../../assets/components/contactinput/inputcontact";
import "./landing.css";
import bannerimg from "../../assets/images/banner.png";
import ButtonFormat from "../../assets/components/buttonformat/format_button";

export default function Landing() {
  return (
    <div className="banner">
      <div className="container">
        <h1>Contact Us</h1>
        <p>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>

        <div className="contact-display">
          <div className="left-banner">
            <div className="button-group">
              <ButtonFormat
                text="VIA SUPPORT CHAT"
                spanclass="ic--baseline-message"
              />
              <ButtonFormat text="VIA CALL" spanclass="mdi-light--phone" />
            </div>

            <div className="contact-form">
              <InputContact text="Name" type="text" />
              <InputContact text="E-Mail" type="email" />
              <InputContact text="TEXT" type="text-area" />
            </div>

            <button className="submit-button">SUBMIT</button>
          </div>
          <div className="contact-image">
            <img src={bannerimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
