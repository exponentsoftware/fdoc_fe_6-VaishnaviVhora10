import React from "react";
import Album from "./Album";

const Albums = (props) => {
  return props.albums.map((album) => (
      
    <Album  className="maincontainer"
      key={album.id}
      album={album.album}
      artist={album.artist}
      albumCover={album.albumCover}
     />
   
  ));
};

export default Albums;