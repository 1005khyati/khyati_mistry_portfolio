import '../style/NavBar.css';

function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <div className="nav-link"><button onClick={() => scrollToSection('home')}>Home</button></div>
      <div className="nav-link"><button onClick={() => scrollToSection('experience')}>Experience</button></div>
      <div className="nav-link"><button onClick={() => scrollToSection('skills')}>Skills</button></div>
      <div className="nav-link"><button onClick={() => scrollToSection('projects')}>Projects</button></div>
      <div className="nav-link"><button onClick={() => scrollToSection('contact')}>Contact</button></div>
      <div className="nav-search">
        <input type="search" placeholder="🔍 Search..." />
      </div>
    </div>
  );
}

export default NavBar;
