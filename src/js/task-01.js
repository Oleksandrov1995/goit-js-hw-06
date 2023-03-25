const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((categorie) => {
  const categorieTitle = categorie.querySelector("h2").textContent;
  console.log(`Category: ${categorieTitle}`);
  const categorieAmount = categorie.querySelectorAll("li").length;
  console.log(`Elements: ${categorieAmount}`);
});
