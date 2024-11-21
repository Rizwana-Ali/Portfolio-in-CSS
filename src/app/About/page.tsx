import Link from "next/link";

import "../style/about.css";
import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          As a passionate and detail-oriented Web Developer, I specialize in HTML, CSS,<br/> Typescript, Next.js, and Tailwind CSS. I deliver tailored solutions that meet client&apos;s<br/>unique needs my passion lies in merging creativity with technical precision, ensuring <br/>elegant, efficient, and scalable web applications.Let&apos;s collaborate to bring your vision to life!
        </p>


        <div>
        <h1 className="about-title">My Skills</h1>
        </div>

        <div>
          {/* skills */}
        <div className="about-skill1">
          <h1>HTML</h1>
        <p>Transforming ideas with HTML, the foundation of<br/> innovative web experiences.</p>
        </div>
        <div className="about-skill2">
          <h1>CSS</h1>
          <p>Bringing designe to life with CSS, harmonizing form<br/> and function for unforgetable digital experiences. </p>
        </div>

        <div className="about-skill3">
          <h1>Typscript</h1>
        <p>Elevating JavaScript with TypeScript type safty,<br/> streamlining development and ensuring flowless execution.</p>
        </div>
        <div className="about-skill4">
          <h1>Next.js</h1>
          <p>Next-level web development with Next.js speed, <br/>scalability and unparalleled user engagment. </p>
        </div>

</div>

      </div>
      <div className="about-image-container">
        <Image
          src="/pink.jpg"
          alt="portfolio image"
          layout="responsive"
          width={336}
          height={400}
          className="about-image"
        />
      </div>
      
    </div>
  );
} 