const miArr = [];
miArr.push({id: 1, prod: "A", monto: "50"});
miArr.push({id: 2, prod: "B", monto: "20"});
miArr.push({id: 3, prod: "C", monto: "10"});

const arrMontos = miArr.map(p => parseInt(p.monto));

const res = arrMontos.reduce((p, c) => p + c, 0);
console.log(`arrMontos: ${arrMontos}`);
console.log(`Suma de montos: ${res}: `);
