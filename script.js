
document.addEventListener("DOMContentLoaded", () => {

    const fontSelect = document.getElementById("fontSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    const colorSelect = document.getElementById("colorSelect");
    const displayText = document.getElementById("displayText");

    fontSelect.addEventListener("change", updateTextStyle);
    sizeSelect.addEventListener("change", updateTextStyle);
    colorSelect.addEventListener("change", updateTextStyle);

    function updateTextStyle() {
        const selectedFont = fontSelect.value;
        const selectedSize = sizeSelect.value;
        const selectedColor = colorSelect.value;

        displayText.style.fontFamily = selectedFont;
        displayText.style.fontSize = `${selectedSize}px`;
        displayText.style.color = selectedColor;
    }
});
