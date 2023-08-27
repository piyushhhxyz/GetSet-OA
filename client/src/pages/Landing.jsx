import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Landing() {
  let navigator = useNavigate();

  const [text] = useTypewriter({
    words: ["Google", "Meta", "Netflix", "Sprinklr"],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 80,
  });

  return (
    <div className="wrapper">
      <div className="blackDiv">
        <div className="inlineLanding">
          <img
            className="appLogo"
            src="wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
          />
          <h1 className="name">GetSet</h1>
          <h1 className="nameGr">OA</h1>
        </div>

        <div className="typeWriter">
          <h2 className="typeWriterH2">
            OA ques from
            <span> {text}</span>
            <span className="typeWriterCursor">
              <Cursor />
            </span>
          </h2>
        </div>

        <div className="inline top">
          <p className="big">Pooling All </p>
        </div>

        <div className="inline">
          <p className="big ques"> OA Questions</p>
          <p className="small">from</p>
        </div>

        <div className="inline">
          <p className="big tier">TIER-1 Colleges</p>
        </div>

        <div className="inline">
          <p className="small bottom"> across</p>
          <p className="big india">India</p>
        </div>
        <button className="startBtn" onClick={() => navigator("/auth")}>
          Start Solving
        </button>
      </div>

      <div className="purpleDiv">
        <button className="registerBtn" onClick={() => navigator("/auth")}>
          REGISTER
        </button>
        <img src="bg-removed.jpeg" className="landingImg"></img>
      </div>
    </div>
  );
}

export default Landing;