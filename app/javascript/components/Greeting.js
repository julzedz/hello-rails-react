import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Fetch random greeting from API endpoint
    fetch("/greetings/random")
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return (
    <div>
      <h1>Hello from Rails and React!</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
