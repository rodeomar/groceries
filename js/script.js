
function userInput(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input[name=groceries]:checked");
    const inputsArray = Array.from(inputs);
    inputsArray.forEach(function(item){
        const paragraph = document.createElement("p");
        paragraph.append(item.value);
        document.body.append(paragraph);
    })
    console.log(inputsArray)
}
window.addEventListener("load", function(){
document.querySelector("form").addEventListener("submit", userInput)
});











// function handleForm(event) {
//     event.preventDefault();
//     const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
//     const userSelectionsArray = Array.from(userSelections);
  
//     const resultsHeading = document.createElement("h2");
//     resultsHeading.append("You use the following methods of transportation to travel to work or school:");
//     document.body.append(resultsHeading);
  
//     userSelectionsArray.forEach(function(element) {
//       const paragraph = document.createElement("p");
//       paragraph.append(element.value);
//       document.body.append(paragraph);
//     });
//   }
  
//   window.addEventListener("load", function() {
//     document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
//   });