var scrap = require('cheerio');

module.exports = {
  getTitle: function(html) {
    var parsedHTML = scrap.load(html)
    return parsedHTML('h2').text()
  }
}