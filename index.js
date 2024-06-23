import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { className: "parent" },
    [React.createElement(
      "div",
      { className: "child" },
      React.createElement(
        "div",
        { className: "grand-child" },
        [
          React.createElement("h1", { className: "heading" }, "I am a heading"),
          React.createElement("h2", { className: "heading" }, "I am a heading")
        ]
      )
    ),
    React.createElement(
      "div",
      { className: "child" },
      React.createElement(
        "div",
        { className: "grand-child" },
        [
          React.createElement("h1", { className: "heading" }, "I am a heading"),
          React.createElement("h2", { className: "heading" }, "I am a heading")
        ]
      )
    )]
  );
  const heading = <h1>Fghvjbxs</h1>
  const head = (<><div className="Dhinesh" id="name"><h1>Dhinesk Kumar </h1></div><div className="Dhinesh" id="name"><h1>Dhinesk Kumar </h1></div></>);
  console.log(heading)

  // Function Component
  // Component Composition
  const Heading = () => (
    <><h1> Function Component Heading</h1>

{Name()}
    <h2>Dhinesh</h2></>
  );

  const FoodCourt =() => {
    return (<div>
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />

    </div>)
  }

  const FoodCard = () => {
    return (<div className="card">
      <img src="" />
      <h2>Briyani</h2>
      <h3>South Indian Food</h3>
      <span>Rs.250</span>
      <span>5.5 </span>
    </div>)
  }
  const rootElement = document.querySelector(".root");
  const root = ReactDOM.createRoot(rootElement);
  root.render(<FoodCourt />);
