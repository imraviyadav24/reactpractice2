// import React from "react";

// // function Greet() {
// //   return <h1>Hello Guys</h1>;
// // }

// const Greet = () => <h1>Hello Guys</h1>;
// export default Greet;

import React from "react";

const Greet = (props) => {
  const {name} = props
 
  return <h1>Hello {name}</h1>;
};

export default Greet;
