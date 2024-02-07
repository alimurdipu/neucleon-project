import React, { useState } from "react";
import {
  FaDownload,
  FaFile,
  FaFileCsv,
  FaFilter,
  FaList,
  FaObjectUngroup,
} from "react-icons/fa";
import './BankModal.css'
import { FiMonitor } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronDown, FaPlus, FaSearch } from "react-icons/fa";
import { SiProtondb } from "react-icons/si";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
// import {FaObjectUngroup} from '../../assets/Icons/Icons';
import { FaBuilding } from "react-icons/fa";
import Modal from "../../components/ui/Modal/Modal";
import { MdDelete } from "react-icons/md";

const BankModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {/* <div className="bg-white">
        <h2 className="flex items-center gap-1">
          <FaObjectUngroup /> Update Object
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm w-40 p-1">
              Hostname{" "}
              <span className="p-1">
                <FaChevronDown />
              </span>
            </button>
            <input
              type="text"
              name=""
              id=""
              className="border border-info w-80 p-1"
            />
          </div>
          <div className="flex items-center gap-1">
            <button className="flex justify-items-center gap-1 rounded-sm bg-info text-sm p-1">
              <span className="p-1">
                <FaSearch />
              </span>
              Search
            </button>
            <button className="flex gap-1 rounded-sm bg-secondary text-sm p-1">
              2/2 results
            </button>
            <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm p-1">
              <span className="p-1">
                <FaFilter />
              </span>
              Add filter
            </button>
            <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm p-1">
              <span className="p-1">
                <FaList />
              </span>
              Columns
              <span className="p-1">
                <IoMdArrowDropdown />
              </span>
            </button>
            <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm p-1">
              <span className="p-1">
                <FaDownload />
              </span>
            </button>
          </div>
        </div>
      </div> */}

      {/* 2nd modal */}
      <div className="my-2">
        <SectionContainer
          icon={FaObjectUngroup}
          className={"w-full"}
          title={"Update Application"}
        >
          <div className="flex gap-5">
            <div className="border border-secondary rounded-lg w-20 h-16">
              <button className="w-full flex justify-center">
                <SiProtondb className="text-xl" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-32">
                    <p className="font-bold">Name</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      className="border border-secondary w-full p-1"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32">
                    <p className="font-bold">Priority</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Priority"
                      className="border border-secondary w-full p-1"
                    />
                  </div>
                </div>
                <div>
                  <p>Description</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[155px]">
                  <p className="font-bold">Policies</p>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className="border border-secondary w-full p-1"
                  />
                </div>
              </div>
            </div>
          <div className="border border-secondary w-80 bg-yellow-400">
            <input class="input" className="h-full w-full p-1 border border-red-500" type="text" placeholder="Description" />
          </div>
          </div>
        </SectionContainer>
      </div>
      {/* 2nd modal end */}
      <div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          className={"w-1/2"}
        >
          <SectionContainer title={"Section Tile"}>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1 text-sm w-40 p-1">
                  Name
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Description
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Description"
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Type
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="System"
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Device
                </p>
                <input
                  type="file"
                  name=""
                  id=""
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <p className="flex justify-between gap-1 text-sm w-32 p-1">
                    Path
                  </p>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-secondary w-80"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button className=" bg-secondary p-1 rounded-sm">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <p className="w-32"></p>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-secondary w-80"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button className="rounded-sm bg-secondary p-1">
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <p className="w-32">Hash</p>
                </div>
                <div className="w-full h-12 border border-dotted border-secondary hover:border-info">
                  <div className="w-[318px] gap-2 flex justify-center items-center">
                    <FaFile /> File
                    <input type="file" />
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className=" bg-secondary p-1 rounded-sm">
                    <FaFileCsv />
                  </button>
                </div>
              </div>
              {/* middile file */}
              {/* <div className="h-20 w-[730px] m-4  border-dotted border-4  rounded-xl">
                <div className="flex justify-center gap-4 items-center h-[120px]">
                  Drag & Drop Hare
                  <input type="file" className="appearance-none border-none" />
                </div>
              </div> */}
              {/* middile file end */}
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Command Line
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Signed
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between gap-1text-sm w-40 p-1">
                  Signature
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="border border-secondary w-full"
                />
              </div>
            </div>

            <div className="border border-secondary"></div>
            <div className="flex justify-between items-center p-1 bg-white">
              <button className="rounded-sm border-2 border-red-500 text-sm text-red-500 px-4 py-2 w-20 ">
                Delete
              </button>

              <div className="flex gap-1 items-center">
                <button className="bg-secondary text-sm px-4 py-2 w-20 ">
                  Update
                </button>
                <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm px-4 py-2">
                  CLone
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          </SectionContainer>
        </Modal>
      </div>
    </>
  );
};

export default BankModal;
