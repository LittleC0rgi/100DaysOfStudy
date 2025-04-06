// Интерфейс абстракции "Пользователь":

// user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
// user.getFriends() – возвращает список друзей (то есть пользователей).
// const user1 = makeUser({
//   friends: [
//     makeUser({ id: 1 }),
//     makeUser({ id: 2 }), // общий друг
//   ],
// });
// const user2 = makeUser({
//   friends: [
//     makeUser({ id: 2 }), // общий друг
//     makeUser({ id: 3 }),
//   ],
// });

// getMutualFriends(user1, user2); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ] - массив состоящий из одного пользователя, общего друга

// interface User {
//   id: number;
//   friends: User[];
//   getFriends(): User[];
// }

// function getMutualFriends(user1: User, user2: User): User[] {
//   const friends1 = user1.getFriends();
//   const friends2 = user2.getFriends();
//   const commonFriends: User[] = [];

//   for (const element of friends1) {
//     const mutualFriend = friends2.find((f) => f.id === element.id);
//     if (mutualFriend) commonFriends.push(mutualFriend);
//   }

//   return commonFriends;
// }

// function getMutualFriends(user1: User, user2: User): User[] {
//   const friends1 = user1.getFriends();
//   const friends2 = user2.getFriends();
//   const commonFriends = new Map<string | number, User>();
//   friends2.forEach((friend) => commonFriends.set(friend.id, friend));
//   return friends1.filter((friend) => commonFriends.has(friend.id));
// }

// function  {
//   return "i am a regular function without name";
// }();
