import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  
    chain : [],
  
    getLength() {
      return this.chain.length;
    },
  
    addLink(value) {
      this.chain.push('( ' + value + ' )');
      return this;
    },
  
    removeLink(position) {
      if (position < 1 || position > this.chain.length) {
        this.chain = [];
        throw new Error();
      } else {
      this.chain.splice(position - 1, 1);
      return this;
      }
    },
  
    reverseChain() {
      this.chain.reverse();
      return this;
    },
  
    finishChain() {
      let arr = [];
      let arr1 = arr.concat(this.chain)
      this.chain = [];
      return arr1.join("~~");
    }
  
};
