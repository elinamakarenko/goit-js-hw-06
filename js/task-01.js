const quantity=document.querySelectorAll('.item');
console.log(`Number of categories: ${quantity.length}`);
quantity.forEach(element => {
    console.log(`Category: ${element.firstElementChild.innerHTML}`);
    console.log(`Elements: ${element.firstElementChild.nextElementSibling.childElementCount}`);
});