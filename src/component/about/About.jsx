import Writer from "../../img/writer.jpg";
import Award from "../../img/jlg.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-bg"></div>
        <div className="a-img">
          <img src={Writer} alt="" className="writer" />
        </div>
      </div>
      <div className="a-right">
        <div className="right-wrapper">
          <h1 className="me">About Me</h1>
          <h5 className="desc">
            Tina received a M.S. in Education (Effective, Teaching, Learning, &
            Leadership) from Drake University and a B.S. in Elementary Education
            from Faith Baptist Bible College.
          </h5>
          <p className="aboutme">
            She also wrote The Girl's Guide to Manners (and all that great
            stuff) by Legacy Press Kids 2014, over 100 guided reading books from
            Lakeshore Learning, Compass Media, Oxford University Press, Literacy
            Planet, and The Moffatt Girls. An e-book Seasons of the Asian Pear
            Tree, was published by Schoolwide 2015. She taught at an
            international school in South Korea and writes for the children's
            and educational markets. She currently moved back to the states, her
            home state of Iowa.
          </p>
          <div className="award">
            <img src={Award} alt="" className="award-img" />

            <div className="award-right">
              <p className="award-title">
                The Ocean Calls is a Junior Library Gold Standard Selection!
              </p>
              <p className="award-desc">
                A breathtaking picture book featuring a Korean girl and her
                haenyeo (free diving) grandmother about intergenerational bonds,
                finding courage in the face of fear, and connecting with our
                natural world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
