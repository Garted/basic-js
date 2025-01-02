const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position % 1 !== 0 ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};
console.log(
  chainMaker
    .addLink('8.963')
    .reverseChain()
    .reverseChain()
    .reverseChain()
    .reverseChain()
    .addLink({ 0: 'first', 1: 'second', length: 2 })
    .reverseChain()
    .addLink(3.14)
    .addLink('DEF')
    .reverseChain()
    .finishChain()
);
module.exports = {
  chainMaker,
};
