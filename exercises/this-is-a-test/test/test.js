var chai = require("chai")
var assert = chai.assert;

var getLongest = require('../app.js').getLongest;

par1 = ['','a','bb','cc', 'dd', 'ee']
par2 = ['abc','abcd','ab','xyzz']
par3 = ['']

describe ("Testing which string is longest", function(){
    it ("Should be 'bb'.", function() {
        assert.strictEqual(getLongest(par1),'bb')
    })
    it ("Should be 'abcd'.", function() {
        assert.strictEqual(getLongest(par2),'abcd')
    })
    it ("Should be a blank string.", function() {
        assert.strictEqual(getLongest(par3),'')
    })
    
})

describe ("Are they deeply Equal?", function(){
    it ("Should be 'true'.", function() {
        assert.deepEqual([1,2,3],[1,2,3])
    })
    it ("Should be 'false'.", function() {
        assert.deepEqual([1,2,3],[3,2,1])
    })
   
    
})