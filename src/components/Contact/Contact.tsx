import React from "react";
import useFadeIn from "../Hooks/useFadeIn";

const Contact = () => {
  const FadeIn = useFadeIn();

  return (
    <FadeIn>
      <div>Contact</div>
    </FadeIn>
  );
};

export default Contact;
