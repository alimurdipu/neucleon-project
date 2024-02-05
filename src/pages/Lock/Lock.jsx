import React from "react";
import { FaDownload, FaFilter, FaList } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Bar, Doughnut } from "react-chartjs-2";
import { HiRefresh } from "react-icons/hi";
import { FaChevronDown, FaPlus, FaSearch } from "react-icons/fa";
import { DataType, Table } from 'ka-table';
import { RxCross2 } from "react-icons/rx";
import './Lock.css';

const Lock = () => {

  const data = {
    labels: ["green", "gray", "violet", "blue", "red", "orange"],
    
    datasets: [
      {
        label: "My First Dataset",
        data: [10, 20, 30, 40, 50, 60 ],
        backgroundColor: ["green", "gray", "violet", "blue", "red", "orange"],
    },
],
};

  const data2 = {
    labels: [],
    datasets: [
        {
            label: 'my second chart',
            data: ['100'],
            backgroundColor: ["green"]
        }
    ]
  }
  
  const data3 = {
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const dataArray = Array(5).fill(undefined).map(
    (_, index) => ({
        column1:`24/01/2024 18:12:25`,
        column2: `25/01/2025 row:${index}`,
        column3: `column:3 row:${index}`,
        column4: `column:4 row:${index}`,
        column5: `column:5 row:${index}`,
        column6: `column:6 row:${index}`,
        id: index,
    }),
);


  return (
    <>
      {/* chart start */}
      <div className="grid grid-cols-3 gap-2 mt-2">
      <div className="bg-dark-gray w-full m-auto p-1">
        <div className="flex items-center justify-around">
          <h2 className="text-info">License Usage</h2>
          <HiRefresh className="bg-secondary" />
        </div>
        <div className="w-60 m-auto">
        <Doughnut data={data}></Doughnut>
        </div>
      </div>
      <div className="bg-dark-gray w-full m-auto p-1">
        <div className="flex items-center justify-around">
          <h2 className="text-info">Enable endpoints</h2>
          <HiRefresh className="bg-secondary" />
        </div>
        <div className="w-60 m-auto">
        <Doughnut data={data2}></Doughnut>
        </div>
      </div>
      <div className="bg-dark-gray w-full m-auto">
        <div className="flex items-center justify-between p-1">
          <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm">Last 24 hourse <span className="p-1"><FaChevronDown /></span></button>
          <h2 className="text-info text-center">endpoints count</h2>
          <HiRefresh className="bg-secondary" />
        </div>
       <div className="w-full h-60 m-auto">
       <Bar className="flex" data={data3}></Bar>
       </div>
      </div>
      </div>
      {/* chart end */}
      {/* ka table start */}
      <div className="bg-white mt-2 border-t-2 border-info p-1">
        <div>
          <h2 className="flex items-center gap-1">
            <FiMonitor/> Endpoints
          </h2>
         <div className="flex justify-between">
         <div className="flex items-center gap-1">
          <button className="flex justify-items-center gap-1 rounded-sm bg-secondary text-sm p-1"><span className="p-1"><FaPlus /></span>Last 24 hourse</button>
          <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm w-40 p-1">Hostname <span className="p-1"><FaChevronDown /></span></button>
          <input type="text" name="" id="" className="border border-info w-80 p-1" />
          <button className="flex justify-between gap-1 rounded-sm bg-secondary text-sm p-1"><span className="p-1"><RxCross2 /></span></button>
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
      <Table
            columns= {[
                { key: 'column1', title: 'Last Connection', dataType: DataType.String },
                { key: 'column2', title: 'Host Name', dataType: DataType.String },
                { key: 'column3', title: 'Os Version', dataType: DataType.String },
                { key: 'column4', title: 'Endpoint version', dataType: DataType.String },
                { key: 'column5', title: 'Policy', dataType: DataType.String },
                { key: 'column6', title: 'Status', dataType: DataType.String },
            ]}
            data={dataArray}
            rowKeyField={'id'}
            childComponents={{
                cellText: {
                    content: (props) => {
                        switch (props.column.key){
                        // case ':delete': return <DeleteRow {...props}/>;
                        }
                    }
                }
            }}
        />
      </div>
      {/* ka table end */}
    </>
  );
};

export default Lock;
