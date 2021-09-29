import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, FloatingLabel } from "react-bootstrap";

const initialValues = {
  artist: "",
  song: "",
};

const ReqForm = ({ handleSearch }) => {
  const [input, setInput] = useState(initialValues);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(input);
          setInput(initialValues);
        }}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Artist Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="ex: Korn"
            name="artist"
            onChange={handleChange}
            value={input.artist}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Song Name">
          <Form.Control
            type="text"
            placeholder="ex: Freak on a Leash"
            name="song"
            onChange={handleChange}
            value={input.song}
            required
          />
        </FloatingLabel>
        <Button className="mt-3" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReqForm;
