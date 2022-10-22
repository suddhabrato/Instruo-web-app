import React from "react";
import { Link } from "react-router-dom";

const WorkshopCard = ({ workshopId }) => {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Workshop Poster" />
      </figure>
      <div className="card-body overflow-y-auto">
        <h2 className="card-title text-2xl">Workshop Title</h2>
        <div className="badge badge-outline badge-md">
          Workshop Date & Workshop time
        </div>
        <p>
          Short Description Workshop: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis, et. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius eos ex illo
        </p>
        <div className="card-actions justify-end">
          <Link to={`/workshops/${workshopId}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
