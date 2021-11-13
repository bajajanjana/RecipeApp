import React, { useState } from "react";
// import axios from 'axios';
import Inputs from "./Inputs";
import Recipes from "./Recipes";
import "./Layout.css";
import Loader from "react-loader-spinner";

function Layout() {
  const [RecipeList, setRecipeList] = useState([]);
  const [isLoading,setIsloading]=useState(false);
  
  const setRecipes = (list) => {
    setLoader();
    setRecipeList(list);
  };

  const setLoader=()=>{
      setIsloading((prevState)=>!prevState);
  }
  return (
    <div className="mycontainer">
      <div className="head">
        <h1> Food Recipes Plaza</h1>
      </div>
      <div className="content">
        <div>
          <Inputs getRecipes={setRecipes} setLoader={setLoader} />
        </div>
        <div className="Recipes">
        <Loader
        type="Circles"
        color="#2C2891"
        height="50px"
        width="50px"
        visible={(isLoading)? 'true' :'false'}
        className="loader"
        />
        {(RecipeList.length===0 && !isLoading) && <div><h5>Select Your options and Get your Recipes here</h5></div>}
        <Recipes Recipes={RecipeList} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
