// variables
const sentenceTag = document.querySelector("input.checker_config-input")
const outputTag = document.querySelector("div.checker_main-layout")

// event listener to copy the text from the sentence input to the H1
sentenceTag.addEventListener("keyup", function () {
    outputTag.innerHTML = this.value
})
