import React from "react";

function Album(props) {
  return (
    <div className="maincontainer">
    <div className="album">
      <img src={props.albumCover} alt="Album-cover" className="album_img" />
      <div className="album_info">
        <p>{props.albumTitle}</p>
        <p>{props.album}</p>
        <span className="album_category">{props.artist}</span>
      </div>
    </div>
    </div>
  );
}

export default Album;