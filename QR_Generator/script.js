
let qrContentInput = document.getElementById("qrcontent");
let qrGenerationForm = document.getElementById("qrform");
let qrCode;
 
function generateQrCode(qrContent) {
  return new QRCode("qr-code", {
    text: qrContent,
    width: 256,
    height: 256,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

qrGenerationForm.addEventListener("submit", function (event) {

  event.preventDefault();
  document.getElementById('qr-code').style.padding='10px';
  let qrContent = qrContentInput.value;
  if (qrCode == null) {      
    qrCode = generateQrCode(qrContent);
  } else {
    qrCode.makeCode(qrContent);
  }
});