import "./styles.css";
import * as nsfwjs from "nsfwjs";

const img = document.getElementById("img");

// Load model from my S3.
// See the section hosting the model files on your site.
nsfwjs.load().then(function(model) {
  model.classify(img).then(function(predictions) {
    // Classify the image
    console.log("Predictions: ", predictions);
    document.getElementById("app").innerText = `
    <b>Identified as ${predictions[0].className}</b>
    ${predictions[0].className} - ${Math.round(
      predictions[0].probability * 100
    )}%
    ${predictions[1].className} - ${Math.round(
      predictions[1].probability * 100
    )}%
    ${predictions[2].className} - ${Math.round(
      predictions[2].probability * 100
    )}%
    ${predictions[3].className} - ${Math.round(
      predictions[3].probability * 100
    )}%
    `;
  });
});
