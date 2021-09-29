import React, { useState, useEffect } from "react";
import ReqForm from "./components/ReqForm";
import { Loader } from "./components/Loader";
import { helpHttp } from "./helpers/helpHttp";
import { Container } from "react-bootstrap";
import Results from "./components/Results";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [bio, setBio] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSearch = (input) => {
    setSearch(input);
  };

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoader(true);
      const [artistRes, lyricsRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(lyricsUrl),
      ]);

      setBio(artistRes);
      setLyrics(lyricsRes);

      setLoader(false);
    };

    fetchData();
  }, [search]);

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container className="justify-content-md-center mt-3 App">
        {search && !loader ? (
          <Results bio={bio} lyrics={lyrics} search={search} />
        ) : (
          <ReqForm handleSearch={handleSearch} />
        )}
        {loader && <Loader />}
      </Container>
    </>
  );
}

export default App;
