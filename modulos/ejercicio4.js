function estadisticas(jugadores) {
  try {
    if (!Array.isArray(jugadores) || jugadores.length === 0) {
      throw new Error("La lista de jugadores no es válida.");
    }

    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

    let puntosTotales = 0;
    for (const { stats: { puntos } } of jugadores) {
      puntosTotales += puntos;
    }

    const informe = {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados: [...jugadores]
    };

    return informe;

  } catch (error) {
    console.error("Error en el cálculo de estadísticas:", error.message);
  }
}

export { estadisticas };