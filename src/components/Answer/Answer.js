import React from "react";

const Answer = () => {
  return (
    <div className="container">
      <h4>How React Works</h4>
      <p>
        Answer : React does not commit state changes one after the other if
        there are multiple state changes. Instead,React goes through its virtual
        DOM ,creates a list of those changes that need to be made to the actual
        DOM and then does it all in one single process. In fancy words, React
        does batch updates.
      </p>
      <h4>How useState works</h4>
      <p>
        Answer : useState is a Hook that allows you to have state variables in
        functional components. You pass the initial state to this function and
        it returns a variable with the current state value (not necessarily the
        initial state) and another function to update this value.
      </p>
    </div>
  );
};

export default Answer;
