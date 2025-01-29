const categories = document.querySelector("ul#categories")
const lists = categories.querySelectorAll("li.item");

console.log(`Number of categories: ${lists.length}`);

lists.forEach(elem => {
    const title = elem.querySelector("h2");
    const listCount = elem.querySelectorAll('li').length
    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${listCount}`)
});