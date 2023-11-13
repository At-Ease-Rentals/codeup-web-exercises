"use strict";


// When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.
const buttonLi = document.querySelector('.btnLi');
const h3Change = document.querySelectorAll('.national-parks-list');
function changeLastLi() {
    for (let i = 0; i < h3Change.length; i++) {
        h3Change[i].style.fontWeight = 'bold';
    }
}
buttonLi.addEventListener('click',changeLastLi);

// When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.
