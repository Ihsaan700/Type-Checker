// variables
const sentenceTag = document.querySelector("input.checker_config-input");
const outputTag = document.querySelector("textarea.checker_output");
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
	sentenceTag.value = this.value
})
