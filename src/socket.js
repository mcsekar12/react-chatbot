import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:4000');

function connect(userId, cb) {
  socket.on('connect', () => {
    socket.emit('authentication', {
      userId: userId
    });
    socket.open();
    cb('connection', userId + ' Connected successfully');
    socket.on('disconnect', reason => {
      console.log(`Disconnected: ${reason}`);
      cb('connection', `${userId} Disconnected: ${reason}`);
    });
  });
}

function askBot(search, cb) {
  console.log('askBot');
  socket.emit('askBot', {
    userId: 'chan',
    q: search
  });
}

function getAnswer(cb) {
  socket.removeAllListeners('new_msg');

  socket.on('new_msg', data => {
    console.log('new_msg');
    cb(data);
  });
}
export { connect, askBot, getAnswer };
