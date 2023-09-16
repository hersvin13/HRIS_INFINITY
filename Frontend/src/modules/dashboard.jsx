import React, { useState } from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Dashboard = () => {
  const [currentDate] = useState(getDate());
  return (
    <>
      <div className=" flex justify-between">
        {/* <div className=" font-poppins font-bold  font text-3xl">Dashboard</div> */}
        <div className="font-poppins font-bold text-2xl">{currentDate}</div>
      </div>
      {/* <div className="">
        <div className="w-96">hi</div>
      </div> */}
    </>
  );
};

export default Dashboard;
