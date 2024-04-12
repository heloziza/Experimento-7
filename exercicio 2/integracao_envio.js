const axios = require('axios');

const URL_ENVIO = 'http://endereco_do_sistema_de_envio/logistica';

function enviarPedidoSistemaEnvio(pedido) {
    axios.post(URL_ENVIO, pedido)
        .then(function(response) {
            console.log(`Pedido enviado com sucesso para o sistema de envio: ${JSON.stringify(pedido)}`);
        })
        .catch(function(error) {
            console.log(`Falha ao enviar pedido para o sistema de envio: ${JSON.stringify(pedido)}`);
        });
}