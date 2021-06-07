import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./keys";
import { apiKey, appId } from "./keys";
import React, { useState } from "react";
import Recipetile from "./Recipetile";
import "./App.css";
function App() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  let url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&from=0&to=20&calories=591-722`;

  const getrecipies = () => {
    // setRecipe([]);
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res2) => {
        setRecipe(res2.hits);
        console.log(res2.hits);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };
  const onSubmit = () => {
    if (query) {
      getrecipies();
    }
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div className="input-container">
        <h1 className="mt-3">Food Recipe App</h1>
        <input
          type="text"
          className="form-control "
          placeholder="What are you craving for?"
          value={query}
          onChange={onchangeHandler}
        />
        <input
          type="submit"
          className="form-control bg-danger text-white "
          value="SEARCH"
          onClick={onSubmit}
        />
      </div>
      {loading && (
        <p className="text-center loader mt-4 text-success">Loading....</p>
      )}
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            {recipe &&
              recipe.length !== 0 &&
              recipe.map((items) => {
                return <Recipetile recipes={items} />;
              })}
            {recipe && recipe.length === 0 && (
              <div>
                <p className="text-center mt-4 font-weight-bold text-danger">
                  No recipe found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
