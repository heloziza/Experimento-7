const amqp = require('amqplib/callback_api');

function processarPedido(pedido) {
    console.log(`Processando pedido: ${JSON.stringify(pedido)}`);
}

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        const queue = 'pedidos_loja_online';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log('Aguardando pedidos...');

        channel.consume(queue, function(msg) {
            const pedido = JSON.parse(msg.content.toString());
            processarPedido(pedido);
            setTimeout(function() {
                console.log(`Pedido processado: ${JSON.stringify(pedido)}`);
            }, 1000);
        }, {
            noAck: true
        });
    });
});
