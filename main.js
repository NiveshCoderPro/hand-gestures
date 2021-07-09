prediction1 = "";

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '"/>'
    });
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/u8mF-B5Uu/model.json",modelLoaded);

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is" + prediction1;
    var utterthis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterthis);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function predict_emoji() {
 img = document.getElementById("capture_image");
 classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("Prediction").innerHTML = results[0].label;
        prediction1 = results[0].label;
        speak();

        if (results[0].label = "Thumbs Up") {
            document.getElementById("Prediction2").innerHTML = "&#128077";
        }
        if (results[0].label = "Victory") {
            document.getElementById("Prediction2").innerHTML = "&#9996";
        }

        if (results[0].label = "Amazing") {
            document.getElementById("Prediction2").innerHTML = "&#128076";
        }
    } 

}