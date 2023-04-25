import { useState } from "react";
import { data } from "../utils/data";
import { useEffect } from "react";
import { RecipeHeading } from "./HealthLabels";
import { CautionLabelsOrange } from "./OrangeLabels";
import { RecipeDetails } from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

const recipes = data.hits;
const recipe = recipes.map((recipe) => {
  return recipe.recipe;
});

export const Recipes = () => {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);

  const handleSearchTextChange = (event, index) => {
    setSearchText(event.target.value);
    if (index !== null) {
      setSelectedRecipeIndex(index);
    }
  };

  const handleListItemClick = (index) => {
    setSelectedRecipeIndex(index);
    hideUl();
    window.scrollTo(0, 0);
  };

  // making h2's green and purple
  useEffect(() => {
    const headings = document.querySelectorAll("h2");

    headings.forEach((heading) => {
      const text = heading.innerText.toLowerCase();

      if (text.includes("vegan") || text.includes("vegetarian")) {
        heading.style.color = "purple";
        heading.style.backgroundClip = "content-box";
        heading.style.backgroundColor = "#FADAFC";
      } else if (
        text.includes("low-carb") ||
        text.includes("low-sodium") ||
        text.includes("low-fat") ||
        text.includes("high-fiber") ||
        text.includes("high-protein") ||
        text.includes("balanced")
      ) {
        heading.style.color = "green";
        heading.style.backgroundClip = "content-box";
        heading.style.backgroundColor = "#EBFBDE";
      }
    });
  }, []);

  // search bar

  const [searchText, setSearchText] = useState("");

  const filteredRecipe = recipe.filter((recipe) =>
    recipe.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const [isDivVisible, setIsDivVisible] = useState(true);

  // hiding ul

  function hideUl() {
    const elements = document.getElementById("div-main-page");
    elements.style.display = "none";
    setIsDivVisible(false);
  }

  // show ul

  function showUl() {
    setIsDivVisible(true);
  }

  // code voor de ul

  return (
    <div id="main-page-wrapper">
      {isDivVisible && (
        <div id="div-main-page">
          <div className="search-bar-container">
            <input
              id="search-bar"
              type="text"
              value={searchText}
              onChange={(event) => handleSearchTextChange(event, null)}
              placeholder="Search by recipe name"
            />
          </div>

          <ul className="grid-list">
            {filteredRecipe.map((recipe, keyVoorListItems) => (
              <li
                key={recipe.label}
                className="grid-item"
                onClick={() => {
                  handleListItemClick(keyVoorListItems);
                }}
              >
                <img src={recipe.image} alt={recipe.label} />
                <h3 className="meal-types">{recipe.mealType}</h3>
                <h1 className="recipe-labels">{recipe.label}</h1>{" "}
                <RecipeHeading healthLabels={recipe.healthLabels} />
                {recipe.dietLabels.map((dietLabel) => (
                  <h2 className="diet-labels" key={dietLabel}>
                    {" "}
                    {dietLabel}{" "}
                  </h2>
                ))}
                {recipe.dishType.length > 0 && (
                  <div className="dish-type-div">
                    <p>Dish: </p>
                    {recipe.dishType.map((dishType) => (
                      <h4 key={dishType}>{dishType}</h4>
                    ))}
                  </div>
                )}
                {recipe.cautions.length > 0 && (
                  <div className="caution-div">
                    <p>Cautions: </p>
                    {recipe.cautions.map((caution) => (
                      <h5 key={caution}>{caution}</h5>
                    ))}
                    <CautionLabelsOrange />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isDivVisible && (
        // code voor de recipe info
        <div>
          <div id="button-div">
            <button onClick={showUl}>
              <FontAwesomeIcon id="arrow-icon" icon="arrow-left" />
            </button>
          </div>
          {selectedRecipeIndex !== null && (
            <RecipeDetails recipe={filteredRecipe[selectedRecipeIndex]} />
          )}
        </div>
      )}
    </div>
  );
};
