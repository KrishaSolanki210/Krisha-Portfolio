import { useEffect, useState, useRef } from "react";
import "./App.css";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const roles = ["AI Designer", "MERN Stack Developer", "Frontend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (isLoading) return;

  const currentRole = roles[roleIndex];
  const speed = isDeleting ? 45 : 90;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      const next = currentRole.substring(0, typedText.length + 1);
      setTypedText(next);

      if (next === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      const next = currentRole.substring(0, typedText.length - 1);
      setTypedText(next);

      if (next === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, speed);

  return () => clearTimeout(timer);
}, [typedText, isDeleting, roleIndex, isLoading]);


// 👇 YE NAYA CODE YAHAN
useEffect(() => {
  if (isLoading) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  const sections = document.querySelectorAll(
    ".section, .contact-section"
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [isLoading]);


if (isLoading) {
  return (
    <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-logo">KS</div>
          <div className="loader-line"><span /></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <nav className="navbar">
        <a className="brand" href="#home">Krisha Solanki</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
          {darkMode ? "☀" : "☾"}
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello"><span />Hello, World!</p>
          <h1><span>Krisha</span><strong>Solanki</strong></h1>
          <h2 className="typing-text">{typedText}<span className="cursor">|</span></h2>
          <p className="hero-description">
            B.Sc Computer Science graduate passionate about creating modern digital experiences with web development, UI/UX, graphic design and AI-powered tools.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">⚡ &nbsp;View Projects</a>
            <a href="/Krisha_Resume.pdf" download className="btn secondary">
  ▣ &nbsp;Download Resume
</a>
          </div>
          <div className="socials">
            <a
  href="https://github.com/KrishaSolanki210"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
</a>
            
            <a href="mailto:solankikrisha2006@gmail.com">✉</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-card">
            <div className="window-bar"><i /><i /><i /><span>developer.js</span></div>
            <div className="code-body">
              <p><em>1</em> <span>const</span> developer = {'{'}</p>
              <p><em>2</em>&nbsp;&nbsp; name: <b>"Krisha Solanki"</b>,</p>
              <p><em>3</em>&nbsp;&nbsp; location: <b>"Ahmedabad, Gujarat"</b>,</p>
              <p><em>4</em>&nbsp;&nbsp; role: <b>"AI Designer"</b>,</p>
              <p><em>5</em>&nbsp;&nbsp; stack: <b>["MERN", "Python"]</b>,</p>
              <p><em>6</em>&nbsp;&nbsp; skills: [</p>
              <p><em>7</em>&nbsp;&nbsp;&nbsp;&nbsp; <b>"UI/UX",</b></p>
              <p><em>8</em>&nbsp;&nbsp;&nbsp;&nbsp; <b>"AI Tools",</b></p>
              <p><em>9</em>&nbsp;&nbsp;&nbsp;&nbsp; <b>"Full Stack"</b></p>
              <p><em>10</em>&nbsp;&nbsp; ],</p>
              <p><em>11</em>&nbsp;&nbsp; available: <strong>true</strong></p>
              <p><em>12</em>{'}'}</p>
            </div>
          </div>
          <div className="hero-stats">
            <div><strong>3+</strong><span>Full Stack Projects</span></div>
            <div><strong>10+</strong><span>Technologies</span></div>
            <div><strong>∞</strong><span>Code &amp; Creativity</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
  <div className="about-card">
    <div className="about-profile">
      <div className="about-avatar">KS</div>

      <div>
        <h3>Krisha Solanki</h3>
        <span>// AI Designer</span>
      </div>
    </div>

    <div className="about-info">
      <p>📍 Ahmedabad, Gujarat, India</p>
      <p>🎓 B.Sc Computer Science</p>
      <p>💼 Open to Internship / Full-time</p>
      <p>⚡ MERN Stack + Python</p>
    </div>
  </div>

  <div className="about-content">
    <p className="section-tag">// about me</p>

    <h2>
      Crafting <span>Digital</span>
      <br />
      Experiences
    </h2>

    <p className="about-text">
      I am a passionate B.Sc IT graduate with hands-on experience in
      web development, UI/UX, graphic design and AI-powered tools.
      I enjoy creating modern, responsive and user-friendly digital
      experiences.
    </p>

    <p className="about-text">
      I love learning new technologies and turning creative ideas
      into practical digital solutions. Currently, I am focused on
      improving my frontend and full-stack development skills.
    </p>

    <div className="about-features">
      <div>🔐 <span>JWT Auth &amp;<br />Security</span></div>
      <div>☁️ <span>Cloud<br />Integration</span></div>
      <div>📊 <span>Analytics<br />Dashboards</span></div>
      <div>🌐 <span>REST API Design</span></div>
      <div>🚀 <span>Deployment &amp;<br />DevOps</span></div>
      <div>📱 <span>Responsive Design</span></div>
    </div>
  </div>
</section>
      <section id="skills" className="skills-section">
  <div className="skills-header">
    <p className="section-tag">// technical skills</p>

    <h2>
      My <span>Tech Stack</span>
    </h2>

    <p className="skills-description">
      A curated set of technologies I use to build modern,
      scalable applications.
    </p>
  </div>

  <div className="skills-grid">

    {/* Frontend */}
    <div className="skill-card">
      <div className="skill-title">
        <div className="skill-icon">🎨</div>
        <h3>Frontend</h3>
      </div>

      <div className="skill-tags">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Tailwind CSS</span>
        <span>Bootstrap</span>
      </div>
    </div>

    {/* Backend */}
    <div className="skill-card">
      <div className="skill-title">
        <div className="skill-icon">⚙️</div>
        <h3>Backend</h3>
      </div>

      <div className="skill-tags">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>REST APIs</span>
        <span>JWT Auth</span>
        <span>Java</span>
        <span>Advanced Java</span>
        <span>Servlet</span>
        <span>JSP</span>
        <span>PHP</span>
        <span>Python</span>
      </div>
    </div>

    {/* Database */}
    <div className="skill-card">
      <div className="skill-title">
        <div className="skill-icon">🗄️</div>
        <h3>Database</h3>
      </div>

      <div className="skill-tags">
        <span>MongoDB</span>
        <span>MongoDB Atlas</span>
        <span>MySQL</span>
      </div>
    </div>

    {/* Tools */}
    <div className="skill-card">
      <div className="skill-title">
        <div className="skill-icon">🛠️</div>
        <h3>Tools &amp; Platforms</h3>
      </div>

      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Postman</span>
        <span>Cloudinary</span>
        <span>Vercel</span>
        <span>Render</span>
      </div>
    </div>

    {/* Other Skills */}
    <div className="skill-card">
      <div className="skill-title">
        <div className="skill-icon">✨</div>
        <h3>Other Skills</h3>
      </div>

      <div className="skill-tags">
        <span>Machine Learning</span>
        <span>AI Integration</span>
        <span>Deployment</span>
        <span>Authentication</span>
        <span>Analytics Dashboard</span>
        <span>Report Generation</span>
      </div>
    </div>

  </div>
</section>
     <section id="projects" className="section projects-section">
  <p className="section-tag">// my work</p>

  <h2 className="projects-title">
    Featured <span>Projects</span>
  </h2>

  <p className="projects-description">
    Real-world applications built with modern technologies.
  </p>

  <div className="projects-grid">

    {/* PROJECT 1 */}
    <div className="project-card khushi-project-card">
      <div className="project-image project-blue">
        <span className="project-badge">MERN Stack</span>
        <div className="project-icon">🚧</div>
      </div>

      <div className="project-content">
        <h3>Toll Management System</h3>

        <p>
          MERN based toll management platform with authentication,
          wallet recharge, dashboards and revenue tracking.
        </p>

        <div className="project-points">
          <span>◆ JWT Authentication</span>
          <span>◆ Wallet Recharge</span>
          <span>◆ Admin Dashboard</span>
        </div>

        <div className="project-tags">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JWT</span>
        </div>

        <div className="project-buttons">
          <a href="https://toll-management-system-nine.vercel.app" className="btn primary">↗ Live Demo</a>
          <a
  href="https://github.com/KrishaSolanki210/Toll-Management-System"
  target="_blank"
  rel="noreferrer"
  className="project-btn github"
>
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
  GitHub
</a>
        </div>
      </div>
    </div>

    {/* PROJECT 2 */}
    <div className="project-card khushi-project-card">
      <div className="project-image project-green">
        <span className="project-badge">MERN Stack</span>
      <div className="project-icon">☕</div>
      </div>

      <div className="project-content">
        <h3>Haveli Cafe Management System</h3>

        <p>
          Cafe management application for menu, billing and
          management operations.
        </p>

        <div className="project-points">
          <span>◆ Menu Management</span>
          <span>◆ Billing System</span>
          <span>◆ Order Management</span>
        </div>

        <div className="project-tags">
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>

        <div className="project-buttons">
          <a href="https://haveli-cafe-management.vercel.app" className="btn primary">↗ Live Demo</a>
          <a
  href="https://github.com/KrishaSolanki210/Haveli-Cafe-Management-System"
  target="_blank"
  rel="noreferrer"
  className="project-btn github"
>
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
  GitHub
</a>
        </div>
      </div>
    </div>

    {/* PROJECT 3 */}
    <div className="project-card khushi-project-card">
      <div className="project-image project-purple">
        <span className="project-badge">Machine Learning</span>
        <div className="project-icon">🏍️</div>
      </div>

      <div className="project-content">
        <h3>Bike Sharing Demand Prediction</h3>

        <p>
          Machine learning project for demand forecasting using
          data preprocessing and Random Forest.
        </p>

        <div className="project-points">
          <span>◆ Data Preprocessing</span>
          <span>◆ Demand Prediction</span>
          <span>◆ Data Visualization</span>
        </div>

        <div className="project-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Random Forest</span>
        </div>

        <div className="project-buttons">
          <a href="https://bike-sharing-demand-prediction.vercel.app" className="btn primary">↗ Live Demo</a>
          <a
  href="https://github.com/KrishaSolanki210/Bike-Sharing-Demand-Prediction"
  target="_blank"
  rel="noreferrer"
  className="project-btn github"
>
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46-.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
  GitHub
</a>
        </div>
      </div>
    </div>

  </div>
</section> 
      <section id="education" className="section education-section">
  <p className="section-tag">// education</p>

  <h2>
    Academic <span>Background</span>
  </h2>

  <p className="section-description">
    The foundation of my technical knowledge and problem-solving abilities.
  </p>

  <div className="education-card">
    <div className="education-icon">🎓</div>

    <div className="education-info">
      <h3>B.Sc Computer Science</h3>
      <p className="degree">B.Sc Computer Science</p>
      <p>Gujarat, India</p>
    </div>

    <span className="education-year">2023 – 2026</span>
  </div>
</section>

      <section id="contact" className="contact-section">
  <div className="contact-container">

    <p className="section-tag">// contact</p>

    <h2>
      Let's <span>Connect</span>
    </h2>

    <p className="contact-intro">
      Open to internships, full-time roles, and exciting project
      collaborations. Let's build something great together.
    </p>

    <div className="contact-links">

      <a href="mailto:YOUR_EMAIL" className="contact-link">
        <div className="contact-icon">✉</div>
        <div>
          <small>EMAIL</small>
          <strong>solankikrisha2006@gmail.com</strong>
        </div>
      </a>


      <a
        href="https://github.com/KrishaSolanki210"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <div className="contact-icon">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
</div>
        <div>
          <small>GITHUB</small>
          <strong>https://github.com/KrishaSolanki210</strong>
        </div>
      </a>

    </div>
  </div>
</section>
      <footer className="footer">
  <div className="footer-top">

    <h3>Krisha Solanki</h3>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>

    <div className="footer-socials">
      <a
  href="https://github.com/KrishaSolanki210"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
</a>
    
      <a href="mailto:YOUR_EMAIL">✉</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Krisha Solanki. Designed &amp; Built with 💗. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
