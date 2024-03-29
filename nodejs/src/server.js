const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})

// Handle shutdown (close server, close database connection, wait for ongoing requests to finish, etc)
process.on("SIGTERM", () => {
  fastify.log.info("Shutting down gracefully...");
  fastify.close().then(() => {
    console.log("Server shut down successfully");
    process.exit(0);
  });
});