import '../style/Body.css';

function Body() {
  return (
    <div className="Body">

      {/* HOME Section */}
      <section id="home" className="section card-section">
        <div className="card">
          <h2>Hello, I'm <span className="highlight">Khyati Mistry</span> 👋</h2>
          <p>
            A Computer Science undergraduate skilled in web development (React.js, Node.js),
            C++, Python, and databases. Fast learner, team player, and detail-oriented.
          </p>
        </div>
      </section>

      {/* EXPERIENCE Section */}
      <section id="experience" className="section card-section">
        <div className="card">
          <h3>💼 GDSC Club – Core Member</h3>
          <p>
            Frontend Developer at ITM University (2023–2024).<br />
            Worked on layout for footer, contact page, and contributed to collaborative frontend builds.
          </p>
        </div>
      </section>

      {/* SKILLS Section */}
      <section id="skills" className="section card-section">
        <div className="card">
          <h3>💡 Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript, React.js, PHP</li>
            <li>Node.js, Express.js (Exploring)</li>
            <li>C, C++ (Industry Trained)</li>
            <li>Python (OOP + DSA Basics)</li>
            <li>MySQL & MongoDB</li>
            <li>Soft Skills: Teamwork, Communication, Problem Solving</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section id="projects" className="section">
        <h3>🛠️ Projects</h3>
        <div className="pamplets">
          <div className="card">
            <h4>E-Commerce Web Server</h4>
            <p>Core Node.js app with custom routing, real-time cart & templating.</p>
          </div>
          <div className="card">
            <h4>Tic Tac Toe – React.js</h4>
            <p>Classic game built with React Hooks and clean component structure.</p>
          </div>
          <div className="card">
            <h4>Streak Tracker Calendar</h4>
            <p>Calendar tracker with dynamic JSON storage & streak highlights.</p>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      {/* <section id="contact" className="section card-section">
        <div className="card">
          <h3>📬 Contact</h3>
          <p>Email: khyatimistry2025@gmail.com</p>
          <p>GitHub: <a href="https://github.com/1005khyati" target="_blank" rel="noreferrer">github.com/1005khyati</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/khyati1005" target="_blank" rel="noreferrer">linkedin.com/in/khyati1005</a></p>
          <p>Phone: 9712141362, 9824443980</p>
        </div>
      </section> */}

    </div>
  );
}

export default Body;
