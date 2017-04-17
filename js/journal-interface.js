var Journal = require("./../js/journal.js").journalModule;

$(document).ready(function(){
  $('#journal-entry').submit(function(event){
    console.log("Pre preventDefault");
  event.preventDefault();
    console.log("After preventDefault");
  var body = $('#body').val();
  var newJournal = new Journal(body);
  var wordCount = newJournal.wordCount(body);
  var vowels = newJournal.vowelCount(body);
  var consonants = newJournal.consonantCount(body);
  var teaser = newJournal.getTeaser(body);
  $('#bodyList').text("Word count is " + wordCount);
  $('#vowels').text("Vowel count is " + vowels);
  $('#consonants').text("Consonant count is " + consonants);
  $('#teaser').text("Teaser is " + teaser);


  });
});
