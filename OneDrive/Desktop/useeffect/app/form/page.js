"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  const [data, setData]= useState("");
  console.log(input)

  const fetchData = async()=>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos/" + input);
    const newData = await response.json();
    console.log(newData);
    setData(newData);
  }

useEffect(() => {
  fetchData();
}, [input]);
 
  return (
    <div>
      <div className="inputField">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="container">
        <h1>id: {data.id}</h1>
        <h1>title: {data.title}</h1>
      </div>
    </div>
  );
};

export default page;
