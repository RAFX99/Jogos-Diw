function buscarIdUrl() {
    const idEncontrado = window.location.search
    const filtrandoID = idEncontrado.replace('?', '')
    return filtrandoID;
}
