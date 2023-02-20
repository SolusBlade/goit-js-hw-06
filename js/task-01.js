const list = document.querySelector('#categories');
// #1 
console.log(`Number of categories: ${list.children.length}`);
// #2
const listItem = list.children;
for(const item of listItem){
    console.log(``);
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const childListItems = item.querySelectorAll('ul li');
    console.log(`Elements: ${childListItems.length}`);
}
// done