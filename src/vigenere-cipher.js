import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct){
    this.direct = direct
  }
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") throw new Error("Incorrect arguments!");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = this.keyTransformation(message, key);
    let arr = [];
    for(let i = 0; i < message.length; i++){
      let z = alphabet.indexOf(message[i])
      let x = alphabet.indexOf(key[i])
      if(z == -1){
        arr.push(message[i])
      }else if (z + x > 25){
        arr.push(alphabet[z + x - 26])
      }else {
        arr.push(alphabet[z + x])
      }
    }
    if(this.direct === false){
      return arr.reverse().join('')
    }
    return arr.join('')
  }    
  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage == "undefined" || typeof key == "undefined") throw new Error("Incorrect arguments!");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    encryptedMessage = encryptedMessage.toUpperCase();
    key = this.keyTransformation(encryptedMessage, key);
    let arr = [];
    for(let i = 0; i < encryptedMessage.length; i++){
      let z = alphabet.indexOf(encryptedMessage[i])
      let x = alphabet.indexOf(key[i])
      if(z == -1){
        arr.push(encryptedMessage[i])
      }else if (z - x < 0){
        arr.push(alphabet[z + 26 - x])
      }else {
        arr.push(alphabet[z - x])
      }
    }
    if(this.direct === false){
      return arr.reverse().join('')
    }
    return arr.join('')
  }
  keyTransformation(message, key){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase()
    key = key.toUpperCase()
    let a = ''
    let j = -1;
    for(let i = 0; i < message.length; i++){
      j++
      let b = alphabet.indexOf(message[i]);
      if(b == -1){
        a = a + " ";
        j--; 
      }else {
        a = a + key[j]
      }
      if(key.length == (j+1)) j = -1;
    }
    return a.toUpperCase();
  }  
}
