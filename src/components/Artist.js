import React from "react";
import { Card, Image } from "react-bootstrap";

const Artist = (props) => {
  const artistData = props.bio.artists[0];

  return (
    <Card>
      <Card.Img
        className="logo"
        variant="top"
        src={artistData.strArtistLogo}
        alt="artist Logo."
      />
      <blockquote>{artistData.strBiographyEN}</blockquote>
      <a href={`http://${artistData.strWebsite}`}>Official website.</a>
      <Image src={artistData.strArtistFanart} />
    </Card>
  );
};

export default Artist;
