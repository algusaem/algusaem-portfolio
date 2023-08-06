import React from "react";
import useFadeIn from "../Hooks/useFadeIn";

const Contact = () => {
  const FadeIn = useFadeIn();

  return (
    <FadeIn>
      <div>Projects</div>
    </FadeIn>
  );
};

export default Contact;
