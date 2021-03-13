 users = [];

function joinUser(socketId , userName, roomName) {
    const user = {
      letsocketID :  socketId,
      username : userName,
    }
      users.push(user)
    return user;
}

function removeUser(id) {
  const getID = users => users.socketID === id;
  const index =  users.findIndex(getID);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  }

  function findUser(id) {
    return users.find((user)=>{
      user.id === id;
    })
  }

  module.exports = { joinUser, removeUser }

