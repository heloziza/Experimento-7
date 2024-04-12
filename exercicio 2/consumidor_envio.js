const amqp = require('amqplib/callback_api');

function enviarPedidoSistemaEnvio(pedido) {
    console.log(`Enviando pedido para o sistema de envio: ${JSON.stringify(pedido)}`);
}

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        const queue = 'pedidos_processados';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log('Aguardando pedidos processados...');

        channel.consume(queue, function(msg) {
            const pedido = JSON.parse(msg.content.toString());
            enviarPedidoSistemaEnvio(pedido);
            setTimeout(function() {
                console.log(`Pedido enviado para o sistema de envio: ${JSON.stringify(pedido)}`);
            }, 1000);
        }, {
            noAck: true
        });
    });
});