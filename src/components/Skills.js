import "./Skills.css";
import { FaCss3, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoHeroku } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";








const Skills = () => {
  return (
    <>
      <div id="skills" className="skills">
        <h1 className="h1skills">MY SKILLS</h1>
        <br></br>
        <br></br>
        <br></br>
        <FaPython className="icon" />
        <IoLogoJavascript className="icon" />
        <FaHtml5 className="icon" />
        <FaCss3 className="icon" />
        <FaReact className="icon" />
        <IoLogoFirebase className="icon" />
        <BiLogoHeroku className="icon"/>
        <FaGithub className="icon" />

      </div>
    </>
  );
};

export default Skills;
