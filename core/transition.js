const Chain = require('./chain');

class Transition{
    chain = new Chain();

    makeTransition(block){
        this.chain.addBlock(block);
    }
    
    checkChain(){
        for(var i = 1; i < this.chain.blockchain.length; i++){
            const previous = this.chain.blockchain[i - 1];
            const current = this.chain.blockchain[i];
            if(current.previousHash !== previous.hash){
                console.log("Chain has transition error at " + i);
            }
        }
    }

}

module.exports = Transition;