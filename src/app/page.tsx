
import Link from "next/link";

import Image from "next/image";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text home-text-left">
        <h1>Hello,</h1>
        <h1 className="home-title ">
           I&apos;m <span>Rizwana Ali</span></h1>
        <h2 className="home-title">I&apos;m <span>Web Developer</span></h2>
        <p className="home-description">
         I&apos;m a passionate Web Developer dedicated to delevering<br/> exceptional digital experiences.
         Exploring the intersaction<br/> of creativity and technology,showcasing my passion for <br/>
         innovative design,where art meets functionality. 
        </p>
        <div className="home-buttons">
          <button className="button-pink">
            <a href="/Projects">Explore My Work</a>
          </button>
          <button className="button-white">
            <a href="/Contact">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="home-image-container">
        <Image
          src="/pink.jpg"
          alt="portfolio"
          layout="responsive"
          width={336}
          height={400}
          className="home-image"
        />
      </div>
      
    </div>
  );
}