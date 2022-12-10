import React from "react";
import Image from "next/image";
import dodongLogo from "../../public/images/common/dodong-logo.svg";
import Link from "next/link";

const Statuses = () => {
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
    <div className="relative overflow-auto my-2 px-3">
      <div className="flex flex-nowrap gap-4 text-sm font-bold leading-6 rounded-lg">
        {stats.map((stat, k) => (
          <div key={k} className="flex-none my-5 py-3 last:pr-8">
            <Image
              src={"https://picsum.photos/300/200"}
              className="w-24 h-24 rounded-md border-b-4 border-trending-icon"
              width={100}
              height={100}
              alt="Dodong Logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statuses;
