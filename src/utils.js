const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 1024 });

// let publicKey = key.exportKey("public");
// let privateKey = key.exportKey("private");


let secretMessage = "My new message";


let myPrivateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIICWwIBAAKBgQCUbqgylvgl6DEjf5JzhGbRcuEwzZtj5ngeQ8CI9Qt6L3zn9oBL\n" +
    "OaHffnAiYtQyqaFssEYDXIlDGoONKTogersPbnOqCYT6qK2tcekm9gB+Fh9emtdY\n" +
    "wu8QYAY0Z0jdf+li4Ybp/IJDX3+GIb2S5UrrDYZcIatiHFaCSuc6B4oLcQIDAQAB\n" +
    "AoGAT0JDeDgbK4qv6oeteRejG4ZfbwLrTc38KBT/k2JeDZGb/fUnjoOox0GpuQLS\n" +
    "0na35uS9jf/0n6thwZfZHQzMI2AZBCTRNoPTYsHCLOm+CSDbeckewv+q691BDDGl\n" +
    "hOR66esP+zjGaFbp+mCP5hhxhF6SZD85SqOSdqwH9z/ylx0CQQDgSIH/m+2oiSd+\n" +
    "ykVnfe/FlUVStsJ+JEhm+iS9SeRd3ZdEB9uHwTRZOOmQ32aO+S0Weccsoepbx7qh\n" +
    "ay0xXzIrAkEAqWwx+0FQrKVuA0uaI0DDRWTOzM0rXdzCIkjGcJg9c2xY9lO9hWJ0\n" +
    "vAmbXpoqQdMX1U4mhxsGjGYPno0BSUwW0wJAP0fV/gPFw2anURvLB08+JpZeT98m\n" +
    "8yZTk1KCqTG/EEjkVBqPczctCPuI0wplSnO9p/jGHK62jBzHaKHvx11frwJAY4ks\n" +
    "SCgUZIoAezEkioeW8aMLGCmFy+xRpeDJrQbUO4axMW77Tm0Mlhiyzj6Wivug6fGz\n" +
    "EvcevseLb6P52H06fwJAHhP+kFikIZXhZ1H53UkgD+ixUigtTyr6VNhMe8bKBG0w\n" +
    "upW4ZWUUFKOomkHs5j21wVl7J53IhSB9mAQjRtl24g==\n" +
    "-----END RSA PRIVATE KEY-----";

let myPublicKey = "-----BEGIN PUBLIC KEY-----\n" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCUbqgylvgl6DEjf5JzhGbRcuEw\n" +
    "zZtj5ngeQ8CI9Qt6L3zn9oBLOaHffnAiYtQyqaFssEYDXIlDGoONKTogersPbnOq\n" +
    "CYT6qK2tcekm9gB+Fh9emtdYwu8QYAY0Z0jdf+li4Ybp/IJDX3+GIb2S5UrrDYZc\n" +
    "IatiHFaCSuc6B4oLcQIDAQAB\n" +
    "-----END PUBLIC KEY-----";

let keyForPrivateEncrypt = new NodeRSA(myPrivateKey);

let keyForPublicEncrypt = new NodeRSA(myPublicKey);


let encryptedMessage = keyForPublicEncrypt.encrypt(secretMessage, 'base64');

console.log(encryptedMessage);

export const encryptData = (data) => {
    return keyForPublicEncrypt.encrypt(data, 'base64');
}

let decryptedMessage = keyForPrivateEncrypt.decrypt(encryptedMessage, 'utf8');


export const decryptData = (data)=>{
    return keyForPrivateEncrypt.decrypt(data, 'utf8');
}


console.log(decryptedMessage);