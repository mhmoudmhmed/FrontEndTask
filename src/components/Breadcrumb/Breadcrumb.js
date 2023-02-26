import React from "react";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcumb_container">
      <div className="breadcumb_row">
        <p className="link parent">men</p>
        <span>/</span>
        <p className="link parent">clothing</p>
        <span>/</span>
        <p className="link parent">tops</p>
        <span>/</span>
        <p className="link parent">addidas</p>
        <span>/</span>
        <p className="link">addidas black t-shirt</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
