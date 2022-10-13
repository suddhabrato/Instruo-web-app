import React from "react";

const Register = () => {
  return (
    <>
      <div className="hero-content px-4 md:px-2 mx-auto flex flex-col">
        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              You are not registered for this event. Click below to register.
            </span>
          </div>
        </div>

        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Congratulations! You are registered for this event!</span>
          </div>
        </div>

        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Sorry! Registration for this event is closed.</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <label
            htmlFor="my-modal-6"
            className="btn btn-primary btn-wide lg:mx-4 my-2 lg:btn-lg"
          >
            Register
          </label>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Registration</h3>
              <p className="py-4">
                Are you sure you want to register for this event?
                <br /> Click Yes to proceed and NO to cancel.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  No
                </label>
                <a
                  href="/events"
                  htmlFor="my-modal-6"
                  className="btn btn-primary"
                >
                  Yes
                </a>
              </div>
            </div>
          </div>

          <label
            htmlFor="my-modal-1"
            className="btn btn-error btn-wide lg:mx-4 my-2 lg:btn-lg"
          >
            Unregister
          </label>

          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Unregistration</h3>
              <p className="py-4">
                Are you sure you want to unregister from this event?
                <br /> Click Yes to proceed and NO to cancel.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-1" className="btn">
                  No
                </label>
                <a
                  href="/events"
                  htmlFor="my-modal-1"
                  className="btn btn-primary"
                >
                  Yes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Register;
