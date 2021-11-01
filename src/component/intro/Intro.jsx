import "./intro.css";
import tina from "../../img/tina.png";

// https://www.youtube.com/watch?v=hQjlM-8C4Ps&ab_channel=LamaDev

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tina M. Cho</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Teacher</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Influencer</div>
              <div className="i-title-item">Prayer Warrior</div>
              <div className="i-title-item">Child of God</div>
            </div>
          </div>
          <p className="i-desc">
            Hello, I am the author of Rice from Heaven, a picture book from
            Little Bee Books August 2018, Korean Celebrations, a nonfiction
            picture book from Tuttle, August 2019, My Breakfast with Jesus, a
            nonfiction picture book from Harvest House June 2, 2020, The Ocean
            Calls: A Mermaid Haenyeo Story from Kokila, an imprint of Penguin
            Random House August 4, 2020, and her first middle grade graphic
            novel in verse, The Other Side of Tomorrow by Harper Alley Fall
            2023.
          </p>
        </div>
      </div>

      <div className="i-right">
        <img src={tina} alt="" className="i-img" />
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
