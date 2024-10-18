// Função para imprimir apenas o protocolo
function imprimirProtocolo() {
    const protocolo = document.getElementById('protocolo').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = protocolo;
    window.print();
    document.body.innerHTML = originalContent;
}
