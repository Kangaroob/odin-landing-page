const viewStyleToggleSet = document.getElementById("viewStyleToggle");
viewStyleToggleSet.addEventListener("click", swapViewStyle);

function swapViewStyle() {
    const styleSet = document.querySelector('#style');
    const titleSet = document.getElementById('title');
    const topSet = document.getElementById('top');
    const exampleImageSet = document.getElementById('exampleImage');
    const currentStyleSet = styleSet.getAttribute("href");
    if (currentStyleSet === "style.css") {
        styleSet.setAttribute("href", "styleMobile.css");
        titleSet.insertBefore(exampleImageSet, titleSet.children[1]);
        titleSet.classList.add("flex");
        titleSet.classList.add("column");
        viewStyleToggleSet.innerHTML = "Desktop View"
    } else if (currentStyleSet === "styleMobile.css") {
        styleSet.setAttribute("href", "style.css");
        topSet.insertBefore(exampleImageSet, null);
        titleSet.classList.remove("flex");
        titleSet.classList.remove("column");
        viewStyleToggleSet.innerHTML = "Mobile View"
    }
}

if (window.outerWidth < 840) {
    swapViewStyle();
}