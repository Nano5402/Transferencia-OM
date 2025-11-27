function crearEstudiante(nombre, ...notas) {
      try {
          for (const nota of notas) {
              if (typeof nota !== "number" || isNaN(nota)) {
                  throw new Error(`La nota "${nota}" no es válida (debe ser un NÚMERO).`);
              }
          }

          const [primeraNota, ...restoNotas] = notas;

          let promedioResto = 0;
          if (restoNotas.length > 0) {
              let suma = 0;
              for (const n of restoNotas) {
                  suma += n;
              }
              promedioResto = suma / restoNotas.length;
          }

          return {
              nombre,
              primeraNota,
              promedioResto,
              totalNotas: notas.length
          };

      } catch (error) {
          console.error("Error en el registro académico:", error.message);
      }
  }

  export { crearEstudiante };