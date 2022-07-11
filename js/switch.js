let estacion = prompt(
  "Selecciona su estaciono preferida : 1- verano, 2- primavera, 3- otoño, 4- invierno"
);

if (estacion === "1") {
  document.write(`
    <ul>
        <li>Comida= Sandwich de Milanesa</li>
        <li>Bebida= Cerveza</li>
    </ul>`);
}else{
    if(estacion === '2'){
        document.write(`
    <ul>
        <li>Comida= Tacos </li>
        <li>Bebida= Tequila </li>
    </ul>`);
    }else if(estacion === '3'){
        document.write(`
        <ul>
            <li>Comida= Humita </li>
            <li>Bebida= Tequila </li>
        </ul>`);
    }else if(estacion === '4'){
        document.write(`
        <ul>
            <li>Comida= Guiso </li>
            <li>Bebida= Agua </li>
        </ul>`);
    }else(document.write('seleccionaste una opcion erronea'))
}
