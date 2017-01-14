var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var parsing = require('../../libs/parsing');
var fs = require('fs')
var path = require('path');


describe('Parsing', function() {
  var pantip_html = ''


  before(function() {
    var html_path = path.join(__dirname, 'pantip_topic.html');
    pantip_html = fs.readFileSync(html_path, 'utf8')
  // console.log(pantip_html.length);
  // runs before all tests in this block
  });

  it('should have title', function() {
    title = parsing.getTitle(pantip_html);
    expect(title).not.to.be.empty;
    expect(title).to.eql('คู่มือ แฉ แบไต๋ "ซื้อประกัน" อย่างคุ้มค่าและไร้กังวล {ลูกค้าอ่านดี ตัวแทนอ่านได้}')
  });

});