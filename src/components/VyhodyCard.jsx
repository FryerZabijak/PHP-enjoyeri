import React from "react";

export default function VyhodyCard(props) {
  return (
    <div className="flex-1 h-80 w-1/3 rounded-lg shadow-lg">
      <div className="rounded-lg"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundPosition: `${props.position}`,
          width: "100%",
          height: "400px",
        }}
      />
      <div className="py-4">
        <h4 className="text-3xl text-center">{props.title}</h4>
        <p className="text-center">{props.description}</p>
      </div>
    </div>
  );
}
