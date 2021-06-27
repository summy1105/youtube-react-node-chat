const users = [];

const addUser = ({ id, name, room }) => {
  //all lowercase letters and all as one word
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isExistUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (isExistUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];//제거하는 user를 반환
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom}