import "./main.css";
import john from "./media/image-john.jpg";
import tanya from "./media/image-tanya.jpg";
import { useState } from "react";

function Main() {
  const [imageSrc, setimageSrc] = useState(john);
  const [paragraph, setparagraph] = useState(
    "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
  );
  const [name, setname] = useState("John Tarkpor");
  const [role, setrole] = useState("Junior Front-end Developer");

  const handleRight = () => {
    setimageSrc(tanya);
    setparagraph(
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    );
    setname("Tanya Sinclair");
    setrole("UX Engineer");
  };
  const handleLeft = () => {
    setimageSrc(john);
    setparagraph(
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    );
    setname("John Tarkpor");
    setrole("Junior Front-end Developer");
  };

  return (
    <>
      <div className="card">
        <div className="flex-images">
          <img
            className="bg-image"
            src={require("./media/pattern-bg.svg").default}
          ></img>
          <img className="avatar" src={imageSrc}></img>
          <div className="icons-div">
            <img
              className="icon"
              onClick={() => handleLeft()}
              src={require("./media/icon-prev.svg").default}
            ></img>
            <img
              className="icon"
              onClick={() => handleRight()}
              src={require("./media/icon-next.svg").default}
            ></img>
          </div>
        </div>
        <div className="flex-text">
          <img
            className="quotes"
            src={require("./media/pattern-quotes.svg").default}
          ></img>
          <p>{paragraph}</p>
          <h6 className="name">{name}</h6>
          <h6 className="role">{role}</h6>
        </div>
      </div>

      <img
        className="curve"
        src={require("./media/pattern-curve.svg").default}
      ></img>
    </>
  );
}

export default Main;
