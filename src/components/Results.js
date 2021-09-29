import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Artist from "./Artist";
import Message from "./Message";
import Song from "./Song";

const Results = ({ search, bio, lyrics }) => {
  if (!bio || !lyrics) return null;

  return (
    <Container className="mt-3" fluid>
      {bio.artists ? (
        <>
          <Row>
            <Col className="mb-3" lg={{ span: 8, offset: 2 }}>
              <Image src={bio.artists[0].strArtistBanner} fluid rounded />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              {lyrics.err || lyrics.name === "AbortError" ? (
                <Message
                  msg={`Error: The song ${search.song} cannot be found.`}
                  bgColor={"#dc3545"}
                />
              ) : (
                <Song lyrics={lyrics.lyrics} title={search.song} />
              )}
            </Col>
            <Col lg="6">{bio.artists && <Artist bio={bio} />}</Col>
          </Row>
        </>
      ) : (
        <Message
          msg={`Error: The artist ${search.artist} cannot be found.`}
          bgColor={"#dc3545"}
        />
      )}
    </Container>
  );
};

export default Results;
