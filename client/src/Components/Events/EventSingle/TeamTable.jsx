import React from "react";

const TeamTable = () => {
  return (
    <div className="overflow-x-auto w-full my-16">
      <h2 className="mt-8 mb-8 text-4xl font-bold md:text-5xl">
        Team Information
      </h2>
      <table className="table table-zebra w-full ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Institution</td>
            <td>Email</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold whitespace-normal">
                    Lucifer Morningstar
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-normal">
              Indian Institute of Engineering Science and Technology, Shibpur
            </td>
            <td className="whitespace-normal">lucimorn@gmail.com</td>
            <td>
              <div className="badge badge-info">Registered</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold"> Lucifer Morningstar</div>
                </div>
              </div>
            </td>
            <td>
              Indian Institute of Engineering Science and Technology, Shibpur
            </td>
            <td>lucimorn@gmail.com</td>
            <td>
              <div className="badge badge-info">Registered</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold"> Lucifer Morningstar</div>
                </div>
              </div>
            </td>
            <td>
              Indian Institute of Engineering Science and Technology, Shibpur
            </td>
            <td>lucimorn@gmail.com</td>
            <td>
              <div className="badge badge-info">Registered</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold"> Lucifer Morningstar</div>
                </div>
              </div>
            </td>
            <td>
              Indian Institute of Engineering Science and Technology, Shibpur
            </td>
            <td>lucimorn@gmail.com</td>
            <td>
              <div className="badge badge-info">Registered</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
