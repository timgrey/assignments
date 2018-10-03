const chai = require("chai");
const assert = chai.assert;
const parBalance = require("../app.js").parBalance;


describe("Testing if Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.", function() {
    it ("Should be true", function() {
        assert.isTrue(parBalance("()()"), true)
    })
    it ("Should be true", function() {
        assert.isTrue(parBalance("(())"), true)
    })
    it ("Should be false", function() {
        assert.isFalse(parBalance("()))"), false)
    })
    it ("Should be false", function() {
        assert.isFalse(parBalance(")()("), false)
    })
    it ("Should be false", function() {
        assert.isFalse(parBalance("())("), false)
    })
})