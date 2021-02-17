var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, { type: 'text/html' }); // the blob
console.log(oMyBlob);
