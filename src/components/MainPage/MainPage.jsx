import React from "react";
import "./MainPage.css";
import mainPageImg from "../../assets/mainpage-image.png";

const MainPage = ({ children }) => {
  return (
    <section>
      <div className="main" style={{ backgroundImage: `url(${mainPageImg})` }}>
        <div className="main-container">{children}</div>
      </div>
    </section>
  );
};
export default MainPage;
