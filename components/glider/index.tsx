import React from "react";
import Glider from "react-glider";

const MainGlider = (props: any) => {
  const stats = [
    {
      label: "Posts",
      value: 120,
    },
    {
      label: "Connects",
      value: 1002,
    },
    {
      label: "Connecting",
      value: 4599,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <Glider
      className="glider-container"
      hasArrows
      hasDots
      slidesToShow={1}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 775,
          settings: {
            slidesToShow: "auto",
            slidesToScroll: "auto",
            itemWidth: 150,
            duration: 0.25,
          },
        },
      ]}
    >
      {props.children}
    </Glider>
  );
};

export default MainGlider;
