export function copiarTexto(elemento) {
  navigator.clipboard
    .writeText(elemento)
    .then(() => {
      return elemento;
    })
    .catch((err) => {
      return 'Erro ao copiar texto: ', err;
    });
}
