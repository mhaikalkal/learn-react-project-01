import React, { useState, useEffect } from "react";
import Tour from "./TourList/tours";
import { data } from "./data/tours-data";

import "./index.css";
import { DualRing } from "react-loading-io"; // spinner

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setList(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  const removeTourHandler = (id) => {
    const tourList = [...list];
    let newData = tourList.filter((tour) => tour.id !== id);
    setList(newData);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-4">Our Tours</h1>
      {isLoading ? (
        <div className="container">
          <div className="row justify-content-center">
            <DualRing size={64} color="#0d6efd" speed="3" />
          </div>
        </div>
      ) : (
        <Tour tours={list} removeTour={removeTourHandler} />
      )}
    </>
  );
}

export default App;
