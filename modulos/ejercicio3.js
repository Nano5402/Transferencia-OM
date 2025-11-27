function procesarCompra(cliente, productos) {
    try {
        const { nombre, correo } = cliente;
        if (!nombre || !correo) {
            throw new Error("El cliente no tiene la información completa (nombre y correo requeridos).");
        }

        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("La lista de productos no es válida.");
        }
        for (const p of productos) {
            if (!p.nombre || typeof p.precio !== "number") {
                const productoInfo = p.nombre ? p.nombre : "Producto sin nombre";
                throw new Error(`El producto "${productoInfo}" no es válido (debe tener nombre y precio numérico).`);
            }
        }

        const clienteFinal = { ...cliente };

        const [primerProducto, ...otrosProductos] = productos;

        let precioTotal = 0;
        for (const p of productos) {
            precioTotal += p.precio;
        }

        const informe = {
            cliente: clienteFinal,
            totalProductos: productos.length,
            precioTotal,
            primerProducto
        };

        return informe;

    } catch (error) {
        console.error("Error en el procesamiento de la compra:", error.message);
    }
}

export { procesarCompra };