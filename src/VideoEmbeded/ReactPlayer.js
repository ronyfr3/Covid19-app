import React from "react";
import ReactPlayer from "react-player";
import "./ReactPlayers.css";

function ReactPlayers() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=NMre6IAAAiU"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default ReactPlayers;
