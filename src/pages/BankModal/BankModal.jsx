import React, { useState } from 'react'
import { FaDownload, FaFilter, FaList, FaObjectUngroup } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronDown, FaPlus, FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import SectionContainer from '../../components/ui/SectionContainer/SectionContainer';
// import {FaObjectUngroup} from '../../assets/Icons/Icons';
import { FaBuilding } from "react-icons/fa";
import Modal from '../../components/ui/Modal/Modal';


const BankModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
    <div className='bg-white'>
          <h2 className="flex items-center gap-1">
          <FaObjectUngroup /> Update Object
          </h2>
         <div className="flex justify-between">
         <div className="flex items-center gap-1">
          <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm w-40 p-1">Hostname <span className="p-1"><FaChevronDown /></span></button>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          <div className="flex items-center gap-1">
          <button className="flex justify-items-center gap-1 rounded-sm bg-info text-sm p-1"><span className="p-1"><FaSearch /></span>Search</button>
          <button className="flex gap-1 rounded-sm bg-secondary text-sm p-1">2/2 results</button>
          <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm p-1"><span className="p-1"><FaFilter /></span>Add filter</button>
          <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm p-1"><span className="p-1"><FaList /></span>Columns<span className="p-1"><IoMdArrowDropdown /></span></button>
          <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm p-1"><span className="p-1"><FaDownload /></span></button>
          </div>
         </div>
        </div>

        <div>
      <SectionContainer
        icon={FaObjectUngroup}
        className={"w-full"}
        title={"Update Object"}
      >
        <div className="flex items-center gap-1">
          <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm w-40 p-1">Hostname <span className="p-1"><FaChevronDown /></span></button>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
      </SectionContainer>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        className={"w-1/2"}
      >
        <SectionContainer title={"Section Tile"}>
          <div>
          <div className="flex items-center gap-1">
          <p className="flex justify-between gap-1text-sm w-40 p-1">Name</p>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          <div className="flex items-center gap-1">
          <p className="flex justify-between gap-1text-sm w-40 p-1">Description</p>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          <div className="flex items-center gap-1">
          <p className="flex justify-between gap-1text-sm w-40 p-1">Type</p>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          <div className="flex items-center gap-1">
          <p className="flex justify-between gap-1text-sm w-40 p-1">Device</p>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          <div className="flex items-center gap-1">
          <p className="flex justify-between gap-1text-sm w-40 p-1">Path</p>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          </div>
          </div>
          </SectionContainer>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </div>
    </>
  )
}

export default BankModal