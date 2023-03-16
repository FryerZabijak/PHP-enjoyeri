import React from "react";

export default function VyhodyCard(props) {
  return (
    <div className="flex-1 rounded-lg shadow-lg">
      <div className="rounded-lg rounded-b-none"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundPosition: `${props.position}`,
          height: "400px",
        }}
      />
      <div className="p-4 min-h-[150px] rounded-b-lg grid place-items-center">
        <h4 className="text-3xl text-center">{props.title}</h4>
        <p className="text-center">{props.description}</p>
      </div>
    </div>
  );
}
