import React, { useState } from "react";


function MyComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/images/LOGO3.png" alt="Suha Digitech" />
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </button>

          <div className={`nav-links ${menuOpen ? "show" : ""}`} id="navLinks">
            <a href="#home">Home</a>
            <a href="#course">Courses</a>
            <a href="#who-we-are">Blog</a>
            <a href="#company">About Us</a>
            <a href="#foot">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          <div className="content">
            <div className="left">
              <h1>
                <span>Upgrade</span> Your Tech Career with Kerala’s Top Institute
              </h1>

              <p>
                Join the future of AI, software development, data science and digital marketing training with real-time
                projects, mentorship, and hands-on learning in Nilambur, kerala
              </p>

              <div className="cta-group">
                <a href="#course" className="cta-btn">🚀 Start Learning</a>
                <div className="phone">
                  📞 <a href="tel:8590338499">85 90 33 84 99</a>
                </div>
              </div>

              <div className="tech-stack">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              </div>
            </div>

            <div className="right">
              <div className="image-wrap">
                <img src="/images/men png.jpeg" alt="Student" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="course-section" id="course">
        <h2 className="section-heading">Our Featured Courses</h2>

        <div className="course-container">

          <div className="course-card">
            <img src="/images/ai image.jpg" alt="Artificial Intelligence" className="course-image" />
            <div className="course-title">Artificial Intelligence (AI)</div>
            <div className="course-info">
              <p><i className="fa-regular fa-clock"></i> Duration: <strong>1 Year</strong></p>
              <p>💼 100% Placement Assistance</p>
            </div>
            <a href="https://wa.me/918590338499?text=Artificial%20Intelligence%20(AI)" className="see-more">
              Chat on WhatsApp
            </a>
          </div>

          <div className="course-card">
            <img src="/images/image.jpg" alt="Python Full Stack" className="course-image" />
            <div className="course-title">Python Full Stack with React</div>
            <div className="course-info">
              <p><i className="fa-regular fa-clock"></i> Duration: <strong>6 Months</strong></p>
              <p>💼 100% Placement Assistance</p>
            </div>
            <a href="https://wa.me/918590338499?text=python%20full%20stack%20with%20react%20%2C%20details" className="see-more">
              Chat on WhatsApp
            </a>
          </div>

          <div className="course-card">
            <img src="/images/ds image.jpg" alt="Data Science" className="course-image" />
            <div className="course-title">Data Science with Analytics</div>
            <div className="course-info">
              <p><i className="fa-regular fa-clock"></i> Duration: <strong>7 Months</strong></p>
              <p>💼 100% Placement Assistance</p>
            </div>
            <a href="https://wa.me/918590338499?text=data%20science%20with%20analytics%2C%20details" className="see-more">
              Chat on WhatsApp
            </a>
          </div>

          <div className="course-card">
            <img src="/images/digital image.jpg" alt="Digital Marketing with Graphic Design" className="course-image" />
            <div className="course-title">Digital Marketing with Graphic Design</div>
            <div className="course-info">
              <p><i className="fa-regular fa-clock"></i> Duration: <strong>5 Months</strong></p>
              <p>💼 100% Placement Assistance</p>
            </div>
            <a href="https://wa.me/918590338499?text=Digital%20Marketing%20details" className="see-more">
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are">
        <div className="container">
          <div className="left">
            <div className="image-row">
              <div className="image-wrapper">
                <img src="/images/IMG_6686.JPG" alt="Training sessions at our institute" />
              </div>
              <div className="image-wrapper">
                <img src="/images/grand.jpg" alt="Students learning at our institute" />
              </div>
            </div>
          </div>

          <div className="right">
            <span className="badge"><i className="fas fa-certificate"></i> Industry Experts</span>

            <h2>
              Gain Expertise from <span>Global</span><br />
              <span>Industry Experts</span>
            </h2>

            <p className="description">
              We are a top software training institute in Nilambur, committed to empowering individuals with the right
              skills to thrive in the tech world. Our seasoned instructors, well-structured courses, and global connections
              make us the perfect place to start or advance your tech career.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="instagram-section" id="company">
        <div className="container">

          <div className="section-header">
            <h2 className="section-title">Suha Group of Companies</h2>
            <p className="section-subtitle">
              Follow us on <a href="https://instagram.com" className="social-link">Instagram</a>
            </p>
          </div>

          <div className="slider-container">
            <div className="slider-track">

              {/* First set of slides */}
              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_20c3ecaa.jpg" alt="Suha Group Project 1" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_abf936c3.jpg" alt="Suha Group Team Member" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_ae24b114.jpg" alt="Suha Group Office" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.45_914a6e71.jpg" alt="Suha Group Achievement" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.45_a0ae720b.jpg" alt="Suha Group Event" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.46_93ba8941.jpg" alt="Suha Group Event" />
                </div>
              </div>

              {/* Duplicate slides for infinite scroll */}
              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_20c3ecaa.jpg" alt="Suha Group Project 1" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_abf936c3.jpg" alt="Suha Group Team Member" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.44_ae24b114.jpg" alt="Suha Group Office" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.45_914a6e71.jpg" alt="Suha Group Achievement" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src="/grp_img/WhatsApp Image 2025-05-06 at 11.00.45_a0ae720b.jpg" alt="Suha Group Event" />
                </div>
              </div>

            </div>
          </div>



          <div className="logos-section">
            <div className="section-header">
              <h3 className="section-title">Our Companies</h3>
            </div>

            <div className="logos-container">
              <div className="logo-box"><img src="/grp_img/GOLD.jpg" alt="Gold" /></div>
              <div className="logo-box"><img src="/images/LOGOS/MEDICAL.jpg" alt="Medical" /></div>
              <div className="logo-box"><img src="/images/LOGOS/DIGITECH.jpg" alt="Digitech" /></div>
              <div className="logo-box"><img src="/images/LOGOS/BULDING.jpg" alt="Building" /></div>
              <div className="logo-box"><img src="/images/LOGOS/PHARMACY.jpg" alt="Pharmacy" /></div>
              <div className="logo-box"><img src="/images/LOGOS/TYRE.jpg" alt="Tyre" /></div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY SUHA */}
      <section id="why-suha">
        <div className="container">
          <span className="section-label">Our Commitment to Excellence</span>

          <h2>
            Why Choose <span className="highlight">Suha Digitech</span>
          </h2>

          <div className="features">

            <div className="feature-box">
              <img src="/images/handshake-svgrepo-com (1).svg" alt="Placement Icon" />
              <h3>Career-Focused Support</h3>
            </div>

            <div className="feature-box">
              <img src="/images/suit-and-tie-outfit.png" alt="Expert Trainers Icon" />
              <h3>Expert Mentorship</h3>
            </div>

            <div className="feature-box">
              <img src="/images/icons8-coding-50.png" alt="Project Icon" />
              <h3>Project-Based Learning</h3>
            </div>

            <div className="feature-box">
              <img src="/images/icons8-iso-50.png" alt="ISO Certified Icon" />
              <h3>International Standards</h3>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="custom-footer" id="foot">
        <div className="footer-container">

          <div className="footer-left">
            <div className="logo-row">
              <img src="/images/LOGOS/LOGO 2.png" alt="Logo" className="footer-logo" />
              <img src="/images/LOGOS/iso 9001 copy.png" alt="ISO Quality Logo" className="footer-logo-small" />
              <img src="/images/LOGOS/WhatsApp Image 2025-05-24 at 11.55.50_e5bd1db6.png" alt="ISO Education Logo" className="footer-logo-small" />
              <img src="/images/LOGOS/IAF.png" alt="IAF Logo" className="footer-logo-small" />
            </div>
          </div>

          <div className="footer-center">
            <h3>Resources</h3>
            <ul>
              <li>Artificial Intelligence Developer</li>
              <li>Data Science with Analytics</li>
              <li>Python Fullstack with React Developer</li>
              <li>AI Integrated Digital Marketing</li>
            </ul>
          </div>

          <div className="footer-right">
            <h3>Contact</h3>
            <a href="https://www.instagram.com/suha.digitech">
              <p>
                <img src="/images/instagram.png" alt="Instagram" className="icon" />
                suha.digitech
              </p>
            </a>
            <p>📧 suhadigitech@gmail.com</p>
            <p>📞 8590338499</p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default MyComponent;
