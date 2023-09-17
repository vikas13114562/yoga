import "./about.css";

export default function About() {

    const picStyle = {
        backgroundImage: `url('profile.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
        height:'500px',
        
      };
  return (
    <div className="main-container">
      <div className="dfc heading">About Me</div>
      <div className="about-container">
      <div className="pic-container" style={picStyle}></div>
      <div className="text-container">
        <div id="name" className="dfc">Aishwarya Upadhyay</div>
        <div className="p-container">
        <p>
          I'm Aishwarya Upadhyay, your dedicated yoga instructor. With few years
          of experience in the world of yoga, I have dedicated myself to the
          practice and teaching of this ancient art of traditional yoga.
        </p>
        <p>
          My journey began 2-years ago in Rishikesh When I had joined my first
          class the experience of Savasana and OM chanting provided me with
          profound relaxation and a sense of returning to my true self. This is
          when yoga become the beginning of a lifelong journey for me.
        </p>
        <p>
          My teaching style is deeply rooted in Pranayama, Meditation, Yin yoga,
          prenatal yoga and Ashtanga yog with anatomy. I love learning more and
          more about yoga, and I want to share all this amazing knowledge with
          everyone. 
        </p>
        <p>
        The more I learn, the better I become at teaching it in a
          fun and exciting way. It’s truly an honour to take this incredible
          journey with my students and I'm passionate about helping students
          discover the physical, mental, and spiritual benefits of yoga."
        </p>
        </div>
      </div>
      </div>
    </div>
  );
}
