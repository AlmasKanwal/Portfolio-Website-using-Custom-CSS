import { FaLaptop } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Services() {
  return (
    <main className="main">
      <div className="service-container">
        {/* top div */}
        <div className="top-div-service">
          <h1 className="header-text">My Services</h1>
          <p className="header-para">I bring skills in Video Editing, Graphic Designing,2D Animation and manage my YouTube Channel &quot;Chamakte Sitare&quot;, where I handle video editing, thumbnails, and channel management. I am excited to develop further as a web developer and make meaningful contributions to my field.</p>
        </div>

        {/* bottom div */}
        <div className="boxes-container">
          
            <div className="box">
          <FaLaptop className="service-icon"/>
          <h2><b>Web Development</b></h2>
          <a href="https://github.com/AlmasKanwal" target="blank" style={{color: '#fff'}}><b>View My Projects</b></a>
            </div>

            <div className="box">
          <FaYoutube className="service-icon"/>
          <h2><b>My YouTube Channel</b></h2>
          <a href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q" target="blank" style={{color: '#fff'}}><b>Visit Channel</b></a>
            </div>

            <div className="box">
          <FaLaptop className="service-icon"/>
          <h2><b>2D Animation</b></h2>
          <a href="/2d-animation-video.mp4" target="blank" style={{color: '#fff'}}><b>Demo Video</b></a>
            </div>
            
        </div>

      </div>
    </main>
  );
}
