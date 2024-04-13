<h1>RabbitMQ</h1>

<h2>Descrição</h2>
<p>Este repositório contém uma aplicação de exemplo para demonstrar o uso do RabbitMQ para comunicação assíncrona entre diferentes componentes de um sistema distribuído. A aplicação consiste em quatro partes: consumidor_envio.js, consumidor_processamento.js, integracao_envio.js e produtor.js.</p>

<h2>Arquivos</h2>
<p><b>consumidor_envio.js:</b> Este script atua como um consumidor que recebe pedidos processados da fila 'pedidos_processados' e os envia para um sistema de envio externo.<br><b>consumidor_processamento.js:<b/> Este script atua como um consumidor que recebe pedidos da fila 'pedidos_loja_online' e os processa.
<b>integracao_envio.js:</b> Este script é responsável por integrar os pedidos recebidos pelo consumidor_envio.js a um sistema de envio externo, usando uma requisição HTTP.
<b>produtor.js:</b> Este script é responsável por enviar pedidos para a fila 'pedidos_loja_online', simulando pedidos recebidos de uma loja online.</p>
