$(document).ready(function () {

    function obtenerCategoria() {

        let categoria = prompt("Ingrese la categoría del producto (Ropa/Electronica):");

        while (categoria !== "Ropa" && categoria !== "Electronica") {

            alert("Categoría no válida. Por favor ingrese 'Ropa' o 'Electronica'.");

            categoria = prompt("Ingrese la categoría del producto:");
        }

        return categoria;

    }

    function calcularDescuento(categoria, precio) {

        let descuento = 0;

        if (categoria === "Ropa") {
            descuento = precio * 0.05;
        } else if (categoria === "Electronica") {
            descuento = precio * 0.10;
        }

        return descuento;
    }

    function calcularPrecioTotal(categoria, cantidad, precioUnitario) {

        let total = 0;

        for (let i = 0; i < cantidad; i++) {
            let descuento = calcularDescuento(categoria, precioUnitario);
            total += precioUnitario - descuento;
        }

        return total;

    }

    function procesarCompra() {

        let categoria = obtenerCategoria();
        let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
        let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));

        if (isNaN(cantidad) || isNaN(precioUnitario) || cantidad <= 0 || precioUnitario <= 0) {

            alert("Datos inválidos. Por favor inténtelo de nuevo.");
            return obtenerCategoria();
        }

        let precioTotal = calcularPrecioTotal(categoria, cantidad, precioUnitario);

        alert(`El precio total de su compra es: ${precioTotal}`);
    }

    procesarCompra();

});




