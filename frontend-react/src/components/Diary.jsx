import React from "react";
import { useState, useEffect } from "react";
import DiaryForm from "../mini-com/DiaryForm";
import axios from "axios";

const Diary = () => {
  const url = "http://localhost:5000/goals/diary";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data.sort((a, b) => b.created.localeCompare(a.created)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (toSend) => {
    axios
      .post(url, toSend)
      .then((res) => {
        console.log("Uploaded Data Successfully");
        const updatedData = [res.data, ...datas];
        setDatas(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-3/5 p-4">
        <DiaryForm handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-2/5 p-4">
        <div className="mb-4">
          {datas &&
            datas.map((entry) => (
              <div
                key={entry.id}
                className="flex flex-col mb-4 bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-300 mb-4">
                  {entry.title}
                </h2>
                <p className="text-gray-500">{formatDate(entry.created)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Diary;
