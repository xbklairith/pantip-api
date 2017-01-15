
var async = require('async');
var parsing = require('./parser');
var request = require('request')

module.exports = {

  loadTopic: function(tid, clb) {
    // tid = 36007046
    topic = {}
    async.waterfall([function get_topic(callback) {
      request(`http://pantip.com/topic/${tid}`, function(error, response, body) {
        if (error) {
          return callback(error);
        } else {
          callback(null, body); //sending to next function
        }
      });
    }, function(html, callback) {
      console.log("Getting topic");
      // if (err) return console.error(err)
      topic.tags = parsing.getTags(html)
      topic.title = parsing.getTitle(html)
      topic.story = parsing.getStory(html);
      // console.log(topic);
      clb(null, topic)
    }
    ])
  }


}