import { getAllRockets } from "./modules/rockets.js";
import { progressRocketWeight, progressPayloadWeights } from "./modulesComponents/progressBar.js";


let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()

let [Rockets1, Rockets2, Rockets3] = dataRockets; 


information__2.append(...progressRocketWeight(Totales.kg_max, [Rockets3]))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))

