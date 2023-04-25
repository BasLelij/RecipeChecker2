export function RecipeHeading({ healthLabels }) {
  const isVegan = healthLabels.includes("Vegan");
  const isVegetarian = healthLabels.includes("Vegetarian");

  if (isVegan && isVegetarian) {
    return (
      <div className="VV-Healt-Labels">
        <h6> Vegan </h6>
        <h6> Vegetarian </h6>
      </div>
    );
  } else if (isVegan) {
    return <h6 className="VV-Healt-Labels"> Vegan </h6>;
  } else if (isVegetarian) {
    return <h6 className="VV-Healt-Labels"> Vegetarian </h6>;
  } else {
    return null;
  }
}
