import "./Hero.css";
import heroImg from "./assets/Comp 1_2.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Let <span className="hero-ai">AI</span>
            <br />
            handle the boring work.
          </h1>

          <p className="hero-subtitle">
            Briefix automates repetitive workflows so your team
            <br />
            can focus on what truly matters.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">Book Demo</button>
            <button className="hero-btn hero-btn-secondary">
              Meet Brixy 🎉
            </button>
          </div>
        </div>

        <div className="hero-illustration" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={heroImg} alt="hero illustration" style={{width: '100%', height: 'auto', maxWidth: '747px', borderRadius: '20px', boxShadow: '0 30px 80px rgba(150, 100, 255, 0.5), 0 0 60px rgba(200, 150, 255, 0.4)', backgroundColor: 'transparent', backgroundImage: 'none'}} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
