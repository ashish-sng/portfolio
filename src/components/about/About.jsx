import "./about.css";
import certificate from "../../img/certificate.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Loves to code and have good problem solving skills.
        </p>
        <p className="a-desc">
          3* start Coder at Codechef.
          <br />
          Ex-Frontend Web Application Intern at LETSTREAM VENTURES PRIVATE LIMITED.
          <br />
          Good at languages such as HTML, CSS, JavaScript, React, NodeJS, MongoDB, MySQL, Express, and more.
          <br />
        </p>
        <div className="a-award">
          <img src={certificate} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certificates acquired till now! </h4>
            <p className="a-award-desc">
              The Complete C++ Developer Course Udemy.
            </p>
            <p className="a-award-desc">
              DSA Foundation GFG.
            </p>
            <p className="a-award-desc">
              The Complete Web Developer Course 2.0 Udemy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;