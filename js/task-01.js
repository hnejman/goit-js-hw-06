const listRaw = document.getElementsByClassName("categories__list");
const list = Array.from(listRaw);
const countElements = (list) => {
    return `Number of categories: ${list.length}`;
}
console.log(countElements(list));

const titles = document.getElementsByTagName("h2");
const titlesList = Array.from(titles);
const countTitles = (titlesList, listRaw) => {
    titlesList.forEach( (title, index) => { 
          console.log( `Category: ${title.textContent}`)
          console.log(`Elements: ${listRaw[index].children.length}`);
        })
};
countTitles(titlesList, listRaw);


