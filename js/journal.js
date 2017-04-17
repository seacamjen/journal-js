function Journal(body) {
  this.body = body;
}

Journal.prototype.wordCount = function(body) {
  var result = body.split(" ");
  var resultLength = result.length;
  return resultLength;
}

Journal.prototype.vowelCount = function(body) {
  return body.match(/[a,e,i,o,u]/gi).length;
}

Journal.prototype.consonantCount = function(body) {
return body.match(/[^a,e,i,o,u]/gi).length;
}

Journal.prototype.getTeaser = function(body) {
  var result =  body.split(" ");
  console.log(result);
  var resultLength = result.length;
  console.log(resultLength);
  if (resultLength > 8) {
    var sliced = result.slice(0, 8);
    return teaser = sliced.join(' ');
  } else {
     return teaser = result.join(' ');
  }
};

exports.journalModule = Journal;
