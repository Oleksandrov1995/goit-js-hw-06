const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach((categorie) => {
//   const categorieTitle = categorie.querySelector("h2").textContent;
//   console.log(`Category: ${categorieTitle}`);
//   const categorieAmount = categorie.querySelectorAll("li").length;
//   console.log(`Elements: ${categorieAmount}`);
// });

categoriesList.forEach((categorie) => {
  const categorieTitle = categorie.firstElementChild.textContent;
  console.log(`Category: ${categorieTitle}`)
  const categorieAmount = categorie.lastElementChild.children.length;
  console.log(`Elements: ${categorieAmount}`);
})