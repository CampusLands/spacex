export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listMasa = [];
    let listPayloadWeights = [];
    data.forEach((val, id) => {
        listMasa.push(val.mass.kg);
        listPayloadWeights.push(...val.payload_weights)
    });
    
    listMasa.sort((a,b) => b - a)
    listPayloadWeights.sort((a,b) => b.kg - a.kg)
    data.push({kg_max: listMasa.shift(), payload_weights: listPayloadWeights.shift().kg});
    return data;
}