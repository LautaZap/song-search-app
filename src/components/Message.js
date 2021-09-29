import React from "react";

const Message = ({ msg, bgColor }) => {
  const styles = {
    padding: "1rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
