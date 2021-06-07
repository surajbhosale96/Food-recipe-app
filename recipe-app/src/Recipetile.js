import React from "react";
import "./Recipetile.css";

function Recipetile(props) {
  return (
    <div className=" col-xs-6 col-sm-6 col-md-4 col-lg-4 mt-3">
      <div className="card">
        <img
          className="card-img-top shadow"
          src={props.recipes["recipe"]["image"]}
          alt="Card  img cap"
        />
        <div className="card-body shadow">
          <h5 className="card-title text-center">
            {props.recipes["recipe"]["label"]}
          </h5>
          <hr className="mt-3" />
          <div className="btn">
            <a href={props.recipes["recipe"]["url"]} target="blank_">
              <button type="button" className="btn btn-outline-success ">
                GET RECIPE
              </button>
            </a>
          </div>
          <hr />
          <p className="calories text-center">
            Calories:{props.recipes["recipe"]["calories"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipetile;
