import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="hero-section">
      <div className="hero">
        {/* Left Section */}
        <div className="hero-left-div">
          <img src="/profile-1.jpg" alt="profile" className="hero-image" />

          <div className="social-icons">
            <a
              href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="s-icons" />
            </a>
            <a
              href="https://github.com/AlmasKanwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="s-icons" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right-div">
          <h1 className="header-text">About Me</h1>
          <h3 className="header-text">
            <span>YouTube Content Creator</span>
          </h3>
          <p className="header-para">
            I am an enthusiastic learner with a background in Computer Science,
            currently exploring web development as a beginner. I aim to apply my
            growing skills in a dynamic organization, while continuously
            learning and expanding my technical expertise. My journey includes
            coursework in Artificial Intelligence, Web 3.0, and Metaverse
            development at Governor House Karachi. I bring skills in Video
            Editing, Graphic Designing, 2D Animation, and manage my YouTube
            Channel, "Chamakte Sitare", where I handle video editing,
            thumbnails, and channel management. I am excited to develop further
            as a web developer and make meaningful contributions to my field.
          </p>

          {/* Education Section */}
          <div className="education-main">
            <div className="education-content">
              <h1 className="header-text">Education</h1>
              <p className="header-para">
                I completed my matriculation from T.C.F(The Citizens Foundation) and my intermediate from
                SRE Majeed College. Currently, I am pursuing a course in GIAIC
                and an online course in Generative AI from Pak Angels.
              </p>
            </div>

            <div className="education-box">
              <div>
                <h1 className="class">Matriculation</h1>
                <span className="text">(2019-2021)</span>
              </div>

              <div className="science-group">
                <h1 className="class">Pre-Medical in Science Group</h1>
                <p className="text">Matriculation in Pre-Medical with an A+ Grade</p>

              </div>
            </div>

            <div className="education-box">
              <div>
                <h1 className="class">Intermediate</h1>
                <span className="text">(2021-2023)</span>
              </div>

              <div className="science-group">
                <h1 className="class">Computer Science in General Science Group</h1>
                <p className="text">Intermediate in Computer Science with an A Grade</p>

              </div>
            </div>

            <div className="education-box">
              <div>
                <h1 className="class">GIAIC</h1>
                <span className="text">(2024/Ongoing)</span>
              </div>

              <div className="science-group">
                <h1 className="class">Artificial Intelligence, Web 3.0 & Metaverse</h1>
                <p className="text">Currently learning AI and web development as a beginner</p>

              </div>
            </div>

            <div className="education-box">
              <div>
                <h1 className="class">Pak Angels</h1>
                <span className="text">(2024/Ongoing)</span>
              </div>

              <div className="science-group">
                <h1 className="class">Essential Generative AI Training</h1>
                <p className="text">I am studying this program to equip myself with cutting-edge skills in harnessing the power of Generative AI applications to elevate my professional journey.</p>

              </div>
            </div>
          </div>

          {/* Certifications Section */}
           <div className="certification">
            <h3 className="header-text">Certifications</h3>
            <p className="header-para">
              <b className="bold">Video Editing:</b> From Digital Academy
            </p>
            <p className="header-para">
              <b className="bold">Graphic Designing:</b> From Digital Academy
            </p>
            <p className="header-para">
              <b className="bold">2D Animation:</b> From F.S TechLancers
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
