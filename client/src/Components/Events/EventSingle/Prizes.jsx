import React from "react";

const Prizes = () => {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold text-center">Prizes</h2>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat place-items-center">
            <div className="stat-title ">Winner</div>
            <div className="stat-value text-primary">INR 3500</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title ">Runner Up</div>
            <div className="stat-value text-secondary">INR 1500</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Top 5</div>
            <div className="stat-value">GFG Coupons</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
