import React from "react";
import "../main.css";
import img1 from "../../images/e1afe4915eb59e45ff636e99f6b821d0.jpg";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="cols cols0">
        <span className="topline">مرحبا</span>
        <h1 className="text1">
          موقع <span className="multiText"> متبرع</span>
          <p>تبرعك هيساعد ناس كتير</p>
          <div className="btns">
            <button className="btts">مشاهدة التبرعات</button>
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
