function CrearArray (callback) {
    const arr = [1, 2, 3];
    callback(arr);
}

function Suma(arr, callback) {
    let res = 0;
    for (const num of arr) {
        res += num;
    }
    if (callback) {
        callback(res);
    }
}

function MultiplicaPor2(num, callback) {
    const res = num * 2;
    return callback(res);
}

function MuestraResultado(res) {
    console.log('>> El resultado es: ', res);
}

export function ejecutarOperaciones (callback) {
    CrearArray( function(arr) {
        Suma(arr, function (num) {
            MultiplicaPor2(num, function (resultado) {
                MuestraResultado(resultado);
                if (callback) {
                    callback();
                }
            });
        });
    });
}
