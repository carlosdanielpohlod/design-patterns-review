const Database = require("./database");
const Server = require("./server");

function createCore() {
  const database = new Database();
  const server = new Server(database);
  function start(){
      console.log('starting server')
      server.start();
      console.log('database start')
      database.start();
  }
  function stop(){
      console.log('stopping server')
      server.stop();
      console.log('database stop')
      database.stop();
  }
  return {
    start,
    stop
  };
}

module.exports = createCore;