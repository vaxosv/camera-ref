let button =  document.getElementById("button");

button.addEventListener("click", function () {
    console.log("vaxo")
});

document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}