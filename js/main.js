import { 
    paginationRockets
} from "./modulesComponents/pagination.js";

let paginacion = document.querySelector("#paginacion");
paginacion.append(await paginationRockets())

