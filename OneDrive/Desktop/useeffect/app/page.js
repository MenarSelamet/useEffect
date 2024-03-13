"use client";
import { useEffect, useState } from 'react';

function ColorBox() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  const handleBox1 = () => {
    setBox1(!box1);
  };

  const handleBox2 = () => {
    setBox2(!box2);
  };

  // useEffect(()=>{
  //   console.log("I have to dependency array")
  // })

  // useEffect(() => {
  //   console.log("I have an empty dependency array dependency array");
  // },[]);

    useEffect(() => {
      console.log("I am dependant on a state ");
    }, [box2, box1]);

  return (
    <div className="color-box-container">
      <div
        className="color-box"
        style={{ backgroundColor: box1? "Yellow" : "Purple" }}
        onClick={handleBox1}
      ></div>
      <div
        className="color-box"
        style={{ backgroundColor: box2? "Blue" : "Orange" }}
        onClick={handleBox2}
      ></div>
    </div>
  );
}


export default ColorBox;
