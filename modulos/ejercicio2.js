function fusionarCatalogos(a, b) {
    try {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Los catálogos proporcionados no son válidos (deben ser arreglos).");
        }

        const catalogoFinal = [...a, ...b];

        const catalogoOrdenado = [...catalogoFinal].sort((x, y) => x.precio - y.precio);

        return catalogoOrdenado;
    } catch (error) {
        console.error("Error en la fusión de catálogos:", error.message);
    }
}

export { fusionarCatalogos };