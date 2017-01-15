var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var parser = require('../../libs/parser');
var fs = require('fs')
var path = require('path');


describe('parser', function() {
  var pantip_html = ''


  before(function() {
    var html_path = path.join(__dirname, 'pantip_topic.html');
    pantip_html = fs.readFileSync(html_path, 'utf8')
  // console.log(pantip_html.length);
  // runs before all tests in this block
  });

  it('should have title', function() {
    title = parser.getTitle(pantip_html);
    expect(title).not.to.be.empty;
    expect(title).to.eql('คู่มือ แฉ แบไต๋ "ซื้อประกัน" อย่างคุ้มค่าและไร้กังวล {ลูกค้าอ่านดี ตัวแทนอ่านได้}')
  });

  it('should have post story', function() {
    story = parser.getStory(pantip_html);
    expect(story).not.to.be.empty;
  });

  it('should have tags', function() {
    tags = parser.getTags(pantip_html);
    expect(tags).not.to.be.empty;
  });
});