import React from "react";
import ReactDOM from "react-dom";
import myimage1 from "./img/seth1.jpg";
// import myimage2 from "./img/seth2.jpg";
// import myimage3 from "./img/seth3.jpg";

import "./index.css";
// adding props
const Person = ({ img, name, job, children }) => {
  // using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img className="img" src={myimage1} />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// now to create a component
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="spider" job="web developer"></Person>
      <Person img="22" name="seth" job="designer"></Person>
      <Person img="56" name="megbetor" job="boss">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          nisi.
        </p>
      </Person>
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
