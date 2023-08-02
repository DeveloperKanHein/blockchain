const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(index, data, timestamp, previousHash){
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }

    createHash(){
        return SHA256(this.index + JSON.stringify(this.data) + this.timestamp + this.previousHash).toString();
    }
}

module.exports = Block;