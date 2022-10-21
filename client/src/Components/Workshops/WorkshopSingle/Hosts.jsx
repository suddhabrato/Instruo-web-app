import React from "react";

const Hosts = () => {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
      <div className="card-body">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h2 className="card-title text-2xl">Event Title</h2>
        <div className="badge badge-outline badge-md">
          Event Date & Event time
        </div>
        <p>
          Short Description Event: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis, et. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius eos ex illo
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Hosts;
