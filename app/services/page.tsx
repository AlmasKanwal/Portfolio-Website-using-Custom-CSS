import { FaLaptop } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiMicrosoftword } from "react-icons/si";


export default function Services() {
  return (
    <main className="main">
      <div className="service-container">
        {/* top div */}
        <div className="top-div-service">
          <h1 className="header-text">My Services</h1>
          <p className="header-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus sequi, eaque voluptates iste maxime. Cupiditate eius, odio voluptatem veritatis harum assumenda veniam minima tenetur.</p>
        </div>

        {/* bottom div */}
        <div className="boxes-container">
          
            <div className="box">
          <FaLaptop className="service-icon"/>
          <h3>Web Development</h3>
          <a href="https://github.com/AlmasKanwal" target="blank" style={{color: '#080808'}}>My Projects</a>
            </div>

            <div className="box">
          <FaYoutube className="service-icon"/>
          <h3>My YouTube Channel</h3>
          <a href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q" target="blank" style={{color: '#080808'}}>Chamakte Sitare</a>
            </div>

            <div className="box">
          <FaLaptop className="service-icon"/>
          <h3>2D Animation</h3>
          <video src="/2d-animation-video.mp4" controls>Demo</video>
            </div>
            
        </div>

      </div>
    </main>
  );
}
