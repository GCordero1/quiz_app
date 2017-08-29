var allQuestions = [{
        question: "Who is the only Knick to win MVP?",
        choices: ["Patrick Ewing", "John Starks", "Allan Houston", "Willis Reed"],
        answer: 4}
      ,{
        question: "Which Knick has the most 3-Point field goals made ?",
        choices: ["Carmelo Anthony", "John Starks", "J.R. Smith", "Allan Houston"],
        answer: 2}
      ,{
        question: "Which Knick has the most offensive rebounds ?",
        choices: ["Charles Oakley", "Patrick Ewing", "Bill Cartwright", "Kurt Thomas"],
        answer: 1}
      ,{
        question: "What year did the Knicks become an NBA team ?",
        choices: ["1931", "1954", "1946", "1929"],
        answer: 3}
      ,{
        question: "When did the Knicks win their first NBA title ?",
        choices: ["1965", "1971", "1970", "1962"],
        answer: 3}
      ,{
        question: "What is the name of the first Knick to win a scoring title ?",
        choices: ["Bernard King", "Carmelo Anthony", "Allan Houston", "Stephon Marbury"],
        answer: 1}
      ,{
        question: "Who is currently the Knicks starting Shooting Guard ?",
        choices: ["Courtney Lee", "Lance Thomas", "Tim Hardaway, Jr.", "Kyle O'Quinn"],
        answer: 3}
      ,{
        question: "When was the last time the Knicks went to the NBA Finals ?",
        choices: ["1980-81", "1994-95", "1975-76", "1998-99"],
        answer: 4}
      ,{
        question: "What is the most losses the Knicks have had in a season ?",
        choices: ["50", "57", "61", "65"],
        answer: 4}
      ,{
        question: "What number does Kristaps Porzingis wear ?",
        choices: ["7", "11", "6", "33"],
        answer: "3"
}];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var displayQA = function () {
        if (questionNumber === allQuestions.length) {
            $("h2").text("You finished the quiz! You scored " + numberCorrect + " points!");
            for (i = 0; i < 4; i++) { $("#a" + i).remove(); }
        } else {
            $("h2").text(allQuestions[questionNumber].question);
            for (i = 0; i < 4; i++) {
                $("#a" + i).html("<input type='radio' name='answer' value='" + i + "'>" + allQuestions[questionNumber].choices[i] + "</input>");
            }
        }
    };
    displayQA();
    $("#button").on("click", "#text", function() {
        var userAnswer = +$('input[name=answer]:checked').val();
        var correctAnswer = allQuestions[questionNumber].answer - 1; //Grabbing answer from array and correcting number for 0 offset
        if (userAnswer === correctAnswer) {
            numberCorrect = numberCorrect + 1;
            alert("You're right! " + numberCorrect + " points");
        } else {
            alert("Sorry, you missed it! Still " + numberCorrect + " points");
        }
        questionNumber = questionNumber + 1;
        displayQA();
    });
});