import Border from "../utils/Border";
import Heading from "../utils/Heading";
import "./about.css";

export default function About() {
  const picStyle = {
    backgroundImage: `url('profilePic.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "550px",
    maxHeight: "600px",
  };
  return (
    <div className="main-container">
      <Heading name="About Me" />
      <Border />
      <div className="about-container">
        <div className="pic-container" style={picStyle}></div>
        <div className="text-container">
          <div id="name" className="dfc">
            Aishwarya Upadhyay
          </div>
          <div className="p-container">
            <p>
              {`I'm Aishwarya Upadhyay, your dedicated yoga instructor. With few years
          of experience in the world of yoga, I have dedicated myself to the
          practice and teaching of this ancient art of traditional yoga.`}
            </p>
            <p>
              {`
          Thirteen years ago, in Ranchi, my journey commenced when I participated in a national yoga competition. Engaging in advanced asanas and chanting OM offered me deep relaxation, bringing me back to my authentic self. From that moment, yoga marked the start of an enduring voyage for me.`}
            </p>
            <p>
              {`
          My teaching style is deeply rooted in Pranayama, Meditation, Yin yoga,
          prenatal yoga and Ashtanga yog with anatomy. I love learning more and
          more about yoga, and I want to share all this amazing knowledge with
          everyone. `}
            </p>
            <p>
              {`
        The more I learn, the better I become at teaching it in a
          fun and exciting way. It's truly an honour to take this incredible
          journey with my students and I'm passionate about helping students
          discover the physical, mental, and spiritual benefits of yoga.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
