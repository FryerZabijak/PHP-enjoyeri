import React from "react";

export default function VyhodyCard(props) {
  return (
    <div className="h-80 w-1/3">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
