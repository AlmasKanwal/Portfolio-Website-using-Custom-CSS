export default function HomeSection() {
    return (
      <div className="hero-section">
        <div className="hero">
          {/* left */}
          <div>
            <img src="/profile.jpg" alt="profile" className="hero-image"/>
          </div>
  
  {/* right */}
          <div className="hero-right-div">
            <h1 className="header-text">Hi, I am <span>Almas Kanwal</span></h1>
            <h3 className="header-text">Future Web Developer</h3>
            <p className="header-para">
              I am an enthusiastic learner with a background in Computer Science, currently exploring web development as a beginner. I aim to apply my growing skills in a dynamic organization, while continuously learning and expanding my technical expertise. My journey includes coursework in Artificial Intelligence, Web 3.0, and Metaverse development at Governor House Karachi. I bring skills in Video Editing, Graphic Designing,2D Animation and manage my YouTube Channel, "Chamakte Sitare", where I handle video editing, thumbnails, and channel management. I am excited to develop further as a web developer and make meaningful contributions to my field.
            </p>
  
            <button className="hero-btn">Hire Me</button>
            <button className="resume"><a
                href="https://milestones1-2-flame.vercel.app/"
                target="_blank"
              >
                {" "}
                Resume/CV
              </a></button>
          </div>
        </div>
      </div>
    );
  }