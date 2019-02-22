import React from "react";

const authenticate = Foobar => Banana => props => {
  const user = localStorage.getItem("username");

  if (user) {
    return <Foobar />;
  } else {
    return <Banana />;
  }
};

export default authenticate;
