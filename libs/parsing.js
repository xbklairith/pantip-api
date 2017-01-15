var scrap = require('cheerio');

module.exports = {
  getTitle: function(html) {
    var parsedHTML = scrap.load(html)
    // get title from class .display-post-title
    return parsedHTML('.display-post-title').text()

  },
  getStory: function(html) {
    var parsedHTML = scrap.load(html)
    // get title from class .display-post-story
    return parsedHTML('.display-post-story').text()
  },
  getTags: function(html) {
    var parsedHTML = scrap.load(html)
    // get title from class .display-post-tag-wrapper
    tags = []
    parsedHTML('.display-post-tag-wrapper')
      .find('.tag-item')
      .each(function(i, elem) {
        tags[i] = elem.children[0].data
      });
    return tags
  }
}