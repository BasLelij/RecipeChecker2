import "./Details.css";
import WincLogo from "../assets/WincLogo.png";

const allowedLabels = [
  "Energy",
  "Fat",
  "Carbs",
  "Protein",
  "Cholesterol",
  "Sodium",
];

export function RecipeDetails({ recipe }) {
  const {
    image,
    url,
    yield: yieldRecipe,
    label,
    mealType,
    totalTime,
    ingredientLines,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
  } = recipe;

  return (
    <div id="recipe-details">
      <img src={WincLogo} alt="Winc Logo" className="WincLogo" />

      <img className="details-images" src={image} alt={label} />
      <div className="bottom-half-details">
        <div className="left-side-details">
          <h2>{mealType}</h2>
          <a href={url}>
            <h1>{label}</h1>
          </a>
          <span>
            <p className="cooking-time">
              Total cooking time:{" "}
              <span className="recipe-time">{totalTime} minutes</span>
            </p>
          </span>
          <span>
            <p className="serving-amount-details">
              Servings: <span className="recipe-yield">{yieldRecipe}</span>
            </p>
          </span>
          <h3>Ingredient:</h3>
          <p>
            {ingredientLines.map((ingredient, index) => (
              <div key={index} className="ingredient-instructions">
                {ingredient}
                <br />
              </div>
            ))}
          </p>
        </div>
        <div className="right-side-details">
          <p id="health-label-paragraph">Health labels: </p>
          <p>
            {healthLabels.map((healthlabel, index) => (
              <span key={index} className="health-labels-purple">
                {healthlabel}{" "}
              </span>
            ))}
          </p>
          <p id="diet-label-paragraph">Diet: </p>
          <p>
            {dietLabels.map((dietlabel, index) => (
              <span className="diet-labels-green" key={index}>
                {dietlabel}{" "}
              </span>
            ))}
          </p>
          <p id="caution-label-paragraph">Cautions: </p>
          <p>
            {cautions.map((cautions, index) => (
              <span className="caution-labels-orange" key={index}>
                {cautions}{" "}
              </span>
            ))}
          </p>
          <h4>Total nutrients: </h4>
          <div id="nutrients-grid">
            {Object.keys(totalNutrients).map((nutrient) => {
              const nutrientLabel = totalNutrients[nutrient].label;
              return (
                <div key={nutrient}>
                  {allowedLabels.includes(nutrientLabel) && (
                    <p className="nutrient-spans">
                      {Math.round(totalNutrients[nutrient].quantity)}
                    </p>
                  )}
                  {allowedLabels.includes(nutrientLabel) && (
                    <p className="nutrient-spans">
                      {totalNutrients[nutrient].unit}
                    </p>
                  )}
                  {allowedLabels.includes(nutrientLabel) && (
                    <p className="nutrient-labels">{nutrientLabel}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
