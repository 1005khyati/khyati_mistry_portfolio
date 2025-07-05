import React from 'react';
import '../style/footer.css';

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="ft">
      <div className="ct_ft_link">
        <b>Contact</b><br />
        <a href="https://www.linkedin.com/in/khyati1005/" target="_blank" rel="noopener noreferrer">
          <img src="/images/Linkedin.png" alt="linkedin" className="social" />
        </a>
        <a href="https://github.com/1005khyati" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="github" className="social" id="github" />
        </a>
        <a href="https://x.com/mistry__khyati" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.jpg" alt="twitter" className="social" />
        </a>
      </div>

      <div id="about_ft">
        <div className="font_ft"><i><u>khyatimistry2025@gmail.com</u></i></div>
        <div className="font_ft"><i><u>9712141362</u></i></div>
      </div>

      <div className="cn_ft">
        <b>Content</b><br />
        <div className="font_ft" onClick={() => scrollToSection('home')}>Home</div>
        <div className="font_ft" onClick={() => scrollToSection('experience')}>Experience</div>
        <div className="font_ft" onClick={() => scrollToSection('skills')}>Skills</div>
        <div className="font_ft" onClick={() => scrollToSection('projects')}>Projects</div>
        <div className="font_ft" onClick={() => scrollToSection('contact')}>Contact</div>
      </div>
    </div>
  );
}

export default Footer;
