import React from "react";
import { LoaderContainer } from "./LoaderStyle";
import { Bars } from "react-loader-spinner"; // Імпортуємо конкретний компонент

const Loader = () => {
  return (
    <LoaderContainer>
      <Bars
        color="#063d1f"
        height={50}
        width={50}
      />
    </LoaderContainer>
  );
};

export default Loader;
