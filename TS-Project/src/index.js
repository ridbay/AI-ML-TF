import "./styles.css";
import * as tf from '@tensorflow/tfjs'

document.getElementById("app").innerHTML = `
<h1>Ridwan TensorFlow</h1>
${tf.version.tfjs}
`;
