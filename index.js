// variables
const sentenceTag = document.querySelector("input.checker_config-input");

const typeSizeTag = document.querySelector(`input[name="typeSize"]`);
const typeSizeOutput = document.querySelector("span.font-size-output");

const fontWeightTag = document.querySelector(`input[name="typeWeight"]`);
const fontWeightOutput = document.querySelector("span.font-weight-output");

const lineHeightTag = document.querySelector(`input[name="lineHeight"]`);
const lineHeightOutput = document.querySelector("span.line-height-output");

const italicTag = document.querySelector(`input[name="checkbox"]`);

const typefaceTag = document.querySelector(`select[id="typeface"]`);

const colorTags = document.querySelectorAll("div.checker_color div");

const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// event listener to copy the text from the sentence input to the H1
sentenceTag.addEventListener("keyup", function () {
	// if the sentence has something written in it (a value)
	if (this.value) {
		outputTag.value = this.value;
	} else {
		outputTag.value = originalText;
	}
});

// when typing in text-area, sentenceTag is is updated accordingly
outputTag.addEventListener("keyup", function () {
	sentenceTag.value = this.value;
});

// when font-size-range is adjusted, the font-size-output (number) adjusts accordingly along with the font size in the text area
typeSizeTag.addEventListener("input", function () {
	outputTag.style.fontSize = `${this.value}px`;
	typeSizeOutput.innerHTML = `${this.value} px`;
});

// when font-weight-range is adjusted, the font-weight-output adjusts accordingly along with the font weight in the text-area
fontWeightTag.addEventListener("input", function () {
	outputTag.style.fontWeight = this.value;
	fontWeightOutput.innerHTML = this.value;
});

// when line-height-range is adjusted, the line-height-output adjusts accordingly along with the line height in the text-area
lineHeightTag.addEventListener("input", function () {
	outputTag.style.lineHeight = this.value;
	lineHeightOutput.innerHTML = this.value;
});

// when italic-checkbox is clicked, the output in text-area changes accordingly
italicTag.addEventListener("change", function () {
	// add the is-italic class to html embed
	if (this.checked) {
		outputTag.style.fontStyle = "italic";
	} else {
		outputTag.style.fontStyle = "normal";
	}
});

// when typeface option is selected, the output in text-area changes accordingly
typefaceTag.addEventListener("input", function () {
	outputTag.style.fontFamily = this.value;
});

// iterate over all colours, get the background colour and apply it to the text in text-area
colorTags.forEach(function (tag) {
	const compStyles = window.getComputedStyle(tag);
	const fontColor = compStyles.getPropertyValue("background-color");
	tag.addEventListener("click", function () {
		outputTag.style.color = fontColor;
	});
});
