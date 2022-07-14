import chalk from "chalk";

console.log( chalk.yellow('¡BIENVENIDOS A LA APP!') );
console.log( chalk.green('Aquí va la tabla del 2:') );
console.log( '' );

const numerosDel1Al10 = [1,2,3,4,5,6,7,8,9,10];

// Creo la tabla del 2, al crear un nuevo array pero 
// con los valores de 'numerosDel1Al10' multiplicados x 2
const tablaDel2 = numerosDel1Al10.map((val) => {
    return val * 2;
})

// Muestro los valores de 'tablaDel2'
tablaDel2.forEach((val, index) => {

    // Si el índice es par, en 'fnColor' guardo la 
    // función del color ROJO, sino un color Azul
    const fnColor = index % 2 === 0 ? chalk.red : chalk.blueBright;

    // Uso la función guardada en 'fnColor' para mostrar el mensaje
    console.log(fnColor(`  ${index+1} x 2 = ${val}`));
});

console.log('');
console.log(chalk.green('Muchas gracias por usar la App'));
console.log(chalk.yellow('¡HASTA LUEGO!'));
