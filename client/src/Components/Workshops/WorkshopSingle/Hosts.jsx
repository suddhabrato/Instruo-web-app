import React from "react";
import HostsCard from "./HostsCard";

const Hosts = ({ hosts }) => {
  return (
    <div className="my-16">
      <h2 className="mb-8 text-5xl font-bold">Speakers</h2>
      <div className="pt-10 flex flex-wrap gap-10 justify-center">
        {hosts.map((host, idx) => (
          <HostsCard key={idx} {...host} />
        ))}
      </div>
    </div>
  );
};

export default Hosts;
