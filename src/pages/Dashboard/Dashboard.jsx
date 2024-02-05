import React, { useEffect, useState } from "react";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import { FaBuilding } from "../../assets/Icons/Icons";
// import BasicTable from "../../components/ui/Table.jsx/BasicTable";

import LineChart from "../../components/ui/Chart/LineChart";
import Modal from "../../components/ui/Modal/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <SectionContainer
        icon={FaBuilding}
        className={"w-full"}
        title={"Entities"}
      ></SectionContainer>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        className={"w-1/2"}
      >
        <SectionContainer title={"Section Tile"}></SectionContainer>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Dashboard;
