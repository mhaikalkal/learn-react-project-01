import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less"; // buat readmore or readless
import "./tours.css";

function Tour(props) {
  const { tours, removeTour } = props;

  return (
    <>
      {tours.map((tour) => {
        const { id, title, price, body, img_url } = tour; // ini kalau pake props data

        return (
          <React.Fragment key={id}>
            <div className="container">
              <div className="row justify-content-center mb-3">
                <div className="col-lg-6">
                  <div className="card shad">
                    <img src={img_url} className="card-img-top" style={{ height: "200px" }} />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <h5 className="card-title">{title}</h5>
                        </div>
                        <div className="col-lg-2">
                          <span className="badge text-bg-info text-white">${price}</span>
                        </div>
                      </div>
                      <p className="card-text">
                        <ReactReadMoreReadLess charLimit={200} readMoreText={"Read more"} readLessText={"Read less"} readMoreStyle={{ color: "#4fabc9", cursor: "pointer" }} readLessStyle={{ color: "#4fabc9", cursor: "pointer" }}>
                          {body}
                        </ReactReadMoreReadLess>
                      </p>
                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-outline-primary" onClick={() => removeTour(id)}>
                          Not Interested
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Tour;
