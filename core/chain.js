const Block = require('./block');

class Chain{
    constructor(){
        this.blockchain = [this.initialBlock()];
    }

    initialBlock(){
        return new Block(0, {'amount': 10000, 'from': 'User-1', 'to': "User-2"}, Date.now(), "0");
    }

    latestBlock(){
        var index = this.blockchain.length - 1;
        return this.blockchain[index];
    }

    addBlock(block)
    {
        var latestBlock = this.latestBlock();
        var previousHash = latestBlock.hash;
        block.previousHash = previousHash;
        block.hash = block.createHash();
        this.blockchain.push(block);
    }
}

module.exports = Chain;