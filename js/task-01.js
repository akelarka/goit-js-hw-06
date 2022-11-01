const categoriesAmount = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${categoriesAmount.length}`);
categoriesAmount.forEach((el) => {
   console.log(`Category: ${el.querySelector("h2").textContent}`);
   console.log(`Elements: ${el.querySelectorAll("li").length}`);
})
