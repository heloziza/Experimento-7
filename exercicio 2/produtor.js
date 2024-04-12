const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        const queue = 'pedidos_loja_online';
        const pedidos = [
            { cliente: "Cliente A", produto: "Produto X", quantidade: 2 },
            { cliente: "Cliente B", produto: "Produto Y", quantidade: 1 },
            { cliente: "Cliente C", produto: "Produto Z", quantidade: 3 }
        ];

        channel.assertQueue(queue, {
            durable: false
        });

        pedidos.forEach(function(pedido) {
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(pedido)));
            console.log(`Pedido enviado: ${JSON.stringify(pedido)}`);
        });
    });
});