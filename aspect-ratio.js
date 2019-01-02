//Input Element Class
class inputElement {
    constructor(element) {
        this.element = document.getElementById(element);
        this.value = this.element.value;
        //bind floating element with its pair
        let floaterId = element.replace(/-+/, "-new-");
        this.floater = document.getElementById(floaterId);
    }
    focus() {
        this.element.style.backgroundColor = "white";
    }
    unFocus() {
        this.element.style.backgroundColor = "Gainsboro";
    }
    revealFloater(cssActionClass) {
        //Style floater as input element and assign action via css class
        this.floater.className += " input " + cssActionClass;
        this.floater.disabled = false;
        let newPlaceholder = this.element.placeholder.replace(/\s+/, " New ");
        this.floater.placeholder = newPlaceholder;
    }

    resetFloater() {
        //Sets default values and triggers reverse transition
        this.floater.className = "floater";
        this.floater.disabled = true;
        this.floater.placeholder = "";
        this.floater.value = "";
    }
}

//Focus transition activated when element value is not empty
let focusOnInput = element => {
    element = new inputElement(element);
    element.value !== "" ? element.focus() : element.unFocus();
    element.value !== ""
        ? element.revealFloater("reveal")
        : element.resetFloater();
};
//Calculate ratio of original width and height
let calcRatio = (w, h) => {
    return w !== 0 && h !== 0 ? w / h : 0.0;
};

//Calculate Aspect Ratio
let calcAspect = property => {
    let width = document.getElementById("input-width").value;
    let height = document.getElementById("input-height").value;
    if (property === "width") {
        let newHeight = document.getElementById("input-new-height").value;
        let newWidth = Math.floor(newHeight * calcRatio(width, height));
        document.getElementById("input-new-width").value = newWidth;
    } else if (property === "height") {
        let newWidth = document.getElementById("input-new-width").value;
        let newHeight = Math.floor(newWidth / calcRatio(width, height));
        document.getElementById("input-new-height").value = newHeight;
    }
};
