import React from "react";

type HeadingProps = {
  title: string;
  subtitle: string | null;
};

const Heading = (props: HeadingProps) => {
  return <div className="text-lg font-bold">{props.title}</div>;
};

const SubHeading = (props: HeadingProps) => {
  return <div className="text-lg font-semibold">{props.title}</div>;
};

export { Heading, SubHeading };
