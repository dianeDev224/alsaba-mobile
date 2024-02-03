var CryptoJS = require("crypto-js");
const { appSecrete } = require("../../app.data");

export function encryptData({ plainTextPayload }) {
    return CryptoJS.AES.encrypt(JSON.stringify(plainTextPayload), appSecrete).toString();
}

export function decryptData({ encryptedPayload }) {
    var bytes = CryptoJS.AES.decrypt(encryptedPayload, appSecrete);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
