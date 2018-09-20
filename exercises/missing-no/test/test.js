var chai = require("chai")
var assert = chai.assert
var findMissingNo = require("../app").findMissingNo

var testCases = {
    one: [2,1,3,5],
    two: [12,10,9],
    three: [-3,0,-2,3,2,-1]
  }

describe("Find the missing number", function(){
    it("Should be 1", function(){
        assert.strictEqual(findMissingNo(testCases.one), 4)
    })
    it("Should be 1", function(){
        assert.strictEqual(findMissingNo(testCases.two), 11)
    })
    it("Should be 1", function(){
        assert.strictEqual(findMissingNo(testCases.three), 1)
    })
})