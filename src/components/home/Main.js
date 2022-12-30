import React from "react";
import "../main.css";
import img1 from "../../images/logo.jpg";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="cols cols0">
        <span className="topline">مرحبا</span>
        <h1 className="text1">
          موقع <span className="multiText"> متبرع</span>
          <p>تبرعك هيساعد ناس كتير</p>
          <div className="btns">
            <button className="btts">
              <a href="#donate">مشاهدة التبرعات</a>
            </button>
          </div>
        </h1>
      </div>
      <div className="cols cols1"></div>
      <div className="imgbox">
        <img src={img1} id="splash" />
      </div>
    </div>
  );
};

export default Main;
