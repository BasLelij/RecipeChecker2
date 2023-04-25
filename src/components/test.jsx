const RecipeImage = ({ label, data }) => {
  const recipe = data.find((recipe) => recipe.label === label);
  const imageUrl = recipe.image;

  return <img src={imageUrl} alt={label} />;
};

export default RecipeImage;
