import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">
  {/* ===== HERO / INTRO ===== */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Home | About Us</p>
      </section>

      {/* ===== ABOUT COMPANY ===== */}
      <section className="about-company">
        <h2>About Company</h2>
        <p>
          Stackly is a powerful platform that streamlines workflow, enhances efficiency,
          and drives digital success. It offers a user-friendly experience with seamless
          integration, making it an essential tool for businesses and individuals looking
          to optimize their online operations.
        </p>
        <p>
          Founded in 2015, Stackly has grown into one of the leading and most innovative
          IT companies in the industry. With a team of over 120 talented professionals,
          we specialize in delivering cutting-edge technology solutions that drive business
          success. Our commitment to innovation, excellence, and customer satisfaction
          has positioned us as a trusted partner for businesses seeking to leverage
          technology for growth and efficiency.
        </p>

        <ul className="values">
          <li>Strong Leadership</li>
          <li>Work-Life Balance</li>
          <li>Recognition and Rewards</li>
          <li>Continuous Learning</li>
          <li>Trust</li>
          <li>Communication</li>
          <li>Culture</li>
          <li>Amazing Design</li>
        </ul>
      </section>

      {/* ===== MISSION / VISION / WHY US ===== */}
      <section className="mission-vision">
        <div className="card">
          <h3>1. Our Mission</h3>
          <p>
            Our mission is simple—create tools that solve real problems. With a strong
            focus on innovation, reliability, and user satisfaction, we aim to enhance
            your experience, whether you're an individual or part of a growing business.
          </p>
        </div>

        <div className="card">
          <h3>2. Our Vision</h3>
          <p>
            We envision a future where technology serves as an enabler for creativity and
            productivity. Stackly strives to be a leader in providing smart, scalable, and
            user-friendly tools that cater to the diverse needs of our users.
          </p>
        </div>

        <div className="card">
          <h3>3. Why Us?</h3>
          <p>
            Our team brings a wealth of experience and knowledge to every project. We
            prioritize your needs and goals to deliver solutions that truly add value. We
            stick to deadlines and offer ongoing support to keep your digital presence
            thriving.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <h2>What People Say?</h2>

        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              "As a freelancer, I needed an all-in-one solution to manage my projects.
              Stackly is the perfect fit!"
            </p>
            <h4>Emily T</h4>
            <span>Project Manager</span>
          </div>

          <div className="testimonial">
            <p>
              "Stackly transformed the way I manage my campaigns. The automation features
              saved me countless hours!"
            </p>
            <h4>Joe Davis</h4>
            <span>CEO</span>
          </div>

          <div className="testimonial">
            <p>
              "The best part about Stackly is its user-friendly interface. It’s so simple
              yet powerful! Highly recommend."
            </p>
            <h4>Daniel Roden</h4>
            <span>Managing Director</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-top">
          <h3>Have a project in mind? Let’s get to work.</h3>
          <p>info@thestackly.com | +91 70107 92745</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Headquarters</h4>
            <p>
              MMR COMPLEX, <br />
              SALEM, Tamil Nadu 636008
            </p>
          </div>

          <div>
            <h4>Social Media</h4>
            <div className="social-icons">
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Copyright Stackly. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;