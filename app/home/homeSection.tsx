import Image from 'next/image';

export default function HomeSection() {
    return (
      <div className="hero-section">
        <div className="hero">
          {/* left */}
          <div>
            <Image src="/profile.jpg" alt="profile" width={220} height={220} className="hero-image"/>
          </div>
  
  {/* right */}
          <div className="hero-right-div">
            <h1 className="header-text">Hi, I am <span>Almas Kanwal</span></h1>
            <h3 className="header-text">Future Web Developer</h3>
            <p className="header-para">
            Aspiring to utilize my academic background and passion for CS(Computer Science) to contribute effectively to a dynamic organization, while continuously learning and enhancing my skills to achieve professional growth and excellence.
            </p>
  
            <button className="hero-btn"><a href="/contact">Hire Me</a></button>
            <button className="resume"><a
                href="https://milestones1-2-flame.vercel.app/"
                target="_blank"
              >
                Resume/CV
              </a></button>

          </div>

        </div>
      </div>
    );
  }