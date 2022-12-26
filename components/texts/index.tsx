import React from "react";

type HeadingProps = {
  title: string;
  icon: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
  return (
    <div className="flex">
      <div className="mr-2 my-auto">{props.icon}</div>
      <div className="text-lg font-extrabold">{props.title}</div>
    </div>
  );
};

const SubHeading = (props: HeadingProps) => {
  return <div className="text-lg font-semibold">{props.title}</div>;
};

export { Heading, SubHeading };
