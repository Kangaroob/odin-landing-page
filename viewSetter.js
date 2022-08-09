const styleSet = document.querySelector('#style');
const titleSet = document.getElementById('title');
const exampleImageSet = document.getElementById('exampleImage');

if (window.outerWidth < window.outerHeight) {
    styleSet.setAttribute("href", "./styleMobile.css");
    titleSet.insertBefore(exampleImageSet, titleSet.children[1]);
    titleSet.classList.add("flex");
    titleSet.classList.add("column");
}