import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaArchive,
  FaBan,
  FaCheck,
  FaCommentDots,
  FaFile,
  FaFileCsv,
  FaInfoCircle,
  FaList,
  FaMicrophone,
  FaObjectUngroup,
  FaShieldAlt,
  FaUnlock,
  FaUnlockAlt,
} from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaShareFromSquare } from "react-icons/fa6";
import "./BankModal.css";
import { FaPlus } from "react-icons/fa";
import { SiProtondb } from "react-icons/si";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import Modal from "../../components/ui/Modal/Modal";
import { MdDelete } from "react-icons/md";
import Select from "react-dropdown-select";

const BankModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal =() =>{
    setShowModal(true)
  }
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
    {
      value: 3,
      label: "Dipu",
    },
    {
      value: 4,
      label: "Razi",
    },
    {
      value: 5,
      label: "Alimur",
    },
  ];
  
  return (
    <>
      {/* 2nd modal */}
      <div className="my-2">
        <SectionContainer
          icon={FaObjectUngroup}
          className={"w-full"}
          title={"Update Application"}
        >
          <div className="flex md:flex-row flex-col gap-5">
            <div className="border border-secondary rounded-lg w-20 h-16">
              <button className="w-full flex justify-center">
                <SiProtondb className="text-xl" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex items-center">
                  <div className="md:w-32 w-[90px]">
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
                  <div className="md:w-32 w-[90px]">
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
                  <p className="font-bold md:block hidden">Description</p>
                </div>
              </div>
              <div className="flex">
                <div className="lg:w-[150px] md:w-[80px] w-[90px]">
                  <p className="font-bold">Policies</p>
                </div>
                <div className="md:w-full ">
                  <input
                    type="text"
                    className="border border-secondary w-full p-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="lg:w-[155px] w-[130px] md:hidden block ">
                <p className="font-bold">Description</p>
              </div>
              <div className="border border-secondary lg:w-80 md:w-44 w-full">
                <input
                  class="input"
                  className="h-full w-full p-1"
                  type="text"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div className="flex items-center gap-1">
              <FaList /> Rules
            </div>
            <div className="bg-secondary rounded-sm p-1">
              <button onClick={() => handleShowModal(true)}>+ New Rule</button>
            </div>
          </div>
          <div>
            <div>
              <table className="w-full mx-auto text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-3">#</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>Target</th>
                    <th>Action</th>
                    <th>Open</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaInfoCircle />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaShareFromSquare />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleUp />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleDown />
                          </button>
                        </div>
                        <div>
                          <button className="border border-red-500 p-1 rounded-sm">
                            <RiDeleteBin5Line className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaMicrophone />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaUnlockAlt />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaUnlock />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaCheck />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                  <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaInfoCircle />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaShareFromSquare />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleUp />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleDown />
                          </button>
                        </div>
                        <div>
                          <button className="border border-red-500 p-1 rounded-sm">
                            <RiDeleteBin5Line className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaMicrophone />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaShieldAlt />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaArchive />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaBan />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <IoChatboxSharp />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaCommentDots />
                          </button>
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                  <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaInfoCircle />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaShareFromSquare />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleUp />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleDown />
                          </button>
                        </div>
                        <div>
                          <button className="border border-red-500 p-1 rounded-sm">
                            <RiDeleteBin5Line className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaMicrophone />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaUnlockAlt />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaUnlock />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaCheck />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                  <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaInfoCircle />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaShareFromSquare />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleUp />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                            <FaAngleDown />
                          </button>
                        </div>
                        <div>
                          <button className="border border-red-500 p-1 rounded-sm">
                            <RiDeleteBin5Line className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <Select multi options={options} />
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaMicrophone />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaShieldAlt />
                          </button>
                        </div>
                        <div>
                          <button className="bg-secondary p-1 rounded-sm">
                          <FaCommentDots />
                          </button>
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                <p className="flex justify-between w-40 p-1">Description</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Description"
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between w-40 p-1">Type</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="System"
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="flex justify-between w-40 p-1">Device</p>
                <input
                  type="file"
                  name=""
                  id=""
                  className="border border-secondary w-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <p className="flex justify-between w-28 lg:w-32 p-1">Path</p>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-secondary w-68 lg:w-80"
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
                  <p className="w-28 lg:w-32"></p>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-secondary lg:w-80"
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
                  <p className="w-28 lg:w-32">Hash</p>
                </div>
                <div className="w-full h-12 border border-dotted border-secondary hover:border-info">
                  <div className="w-[180px] lg:w-[318px] gap-2 flex justify-center items-center relative">
                    <FaFile /> File
                    <input
                      className="top-0 bottom-0 left-0 right-0 absolute opacity-0"
                      type="file"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className=" bg-secondary p-1 rounded-sm">
                    <FaFileCsv />
                  </button>
                </div>
              </div>
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
