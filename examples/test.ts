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

// export default class Truncater {
//   static defaultOptions = {
//     separator: "...",
//     length: 200,
//   };

//   // BEGIN (write your solution here)

//   constructor(options = {}) {
//     this.options = { ...Truncater.defaultOptions, ...options };
//   }

//   truncate(text, options = {}) {
//     const finalOptions = { ...this.options, ...options };
//     const { separator, length } = finalOptions;

//     if (text.length <= length) {
//       return text;
//     }

//     return text.substring(0, length).concat(separator);
//   }
//   // END
// }

// class Url {
//   url: URL;

//   constructor(url) {
//     this.url = new URL(url);
//   }

//   getScheme() {
//     return this.url.toString().split(":")[0];
//   }
//   getHostName() {
//     return this.url.hostname;
//   }
//   getQueryParams() {
//     return Object.fromEntries(this.url.searchParams);
//   }
//   getQueryParam(key: string, defaultValue: undefined | string | null = null) {
//     return this.url.searchParams.get(key) ?? defaultValue;
//   }
//   equals(url: Url) {
//     return url.url.toString() === this.url.toString();
//   }
// }

// const url = new Url("http://yandex.ru:80?key=value&key2=value2");
// console.log(url.getScheme()); // 'http'
// console.log(url.getHostName()); // 'yandex.ru'
// console.log(url.getQueryParams());
// // {
// //   key: 'value',
// //   key2: 'value2',
// // };
// console.log(url.getQueryParam("key")); // 'value'
// // второй параметр - значение по умолчанию
// console.log(url.getQueryParam("key2", "lala")); // 'value2'
// console.log(url.getQueryParam("new", "ehu")); // 'ehu'
// console.log(url.getQueryParam("new")); // null
// console.log(url.equals(new Url("http://yandex.ru:80?key=value&key2=value2"))); // true
// console.log(url.equals(new Url("http://yandex.ru:80?key=value"))); // false

// class Collection {
//   coll: any[];

//   constructor(coll) {
//     this.coll = coll;
//   }

//   map(fn) {
//     const newColl = this.coll.map((element) => fn(element));

//     return new Collection(newColl);
//   }

//   filter(fn) {
//     const newColl = this.coll.filter((element) => fn(element));

//     return new Collection(newColl);
//   }

//   // Возвращает саму коллекцию, а не this.
//   // Этот метод всегда последний в цепочке вызовов Collection.
//   all() {
//     return this.coll;
//   }
// }

// const cars = new Collection([
//   { model: "rapid", year: 2016 },
//   { model: "rio", year: 2013 },
//   { model: "mondeo", year: 2011 },
//   { model: "octavia", year: 2014 },
// ]);

// const filteredCars = cars.filter((car) => car.year > 2013);
// const mappedCars = filteredCars.map((car) => car.model);
// console.log(mappedCars.all()); // [rapid, octavia]
// console.log(cars.all());
// [
//   { model: 'rapid', year: 2016 },
//   { model: 'rio', year: 2013 },
//   { model: 'mondeo', year: 2011 },
//   { model: 'octavia', year: 2014 },
// ]

// interface IParams {
//   name: string;
//   country: string;
// }

// function getUpperTrimString(str: string) {
//   return str.trim().toLocaleLowerCase();
// }

// function normalize(countries: IParams[]) {
//   const result: object = {};

//   countries.forEach((elem) => {
//     const country = getUpperTrimString(elem.country);
//     const name = getUpperTrimString(elem.name);
//     const otherNames = result[country];
//     const names = new Set(otherNames);
//     names.add(name);
//     result[country] = Array.from(names);
//   });

//   for (const key in result) {
//     if (Object.prototype.hasOwnProperty.call(result, key)) {
//       const element = result[key];
//       const sortElement = element.sort();
//       result[key] = sortElement;
//     }
//   }

//   console.log(result);
//   return result;
// }

// const countries = [
//   { name: "Miami", country: "usa" },
//   { name: "samarA", country: "  ruSsiA" },
//   { name: "Moscow ", country: " Russia" },
// ];

// normalize(countries);
// // {
// //   russia: [
// //     'moscow',
// //     'samara',
// //   ],
// //   usa: [
// //     'miami',
// //   ],
// // }

// function protect(obj: object, protectedKeys: string[]) {
//   return new Proxy(obj, {
//     set(target, prop: string | symbol, value) {
//       console.log(prop);
//       if (typeof prop === "string" && protectedKeys.includes(prop)) {
//         throw new Error(`Access to '${prop}' is restricted`);
//       }
//       target[prop] = value;
//       return true;
//     },
//     get(target, prop: string | symbol) {
//       console.log(prop);
//       if (typeof prop === "string" && protectedKeys.includes(prop)) {
//         throw new Error(`Access to '${prop}' is restricted`);
//       }
//       return target[prop];
//     },
//   });
// }

// const user = {
//   name: "John",
//   age: 25,
//   password: "secret",
// };

// const protectedProps = ["password"];

// const protectedUser: any = protect(user, protectedProps);
// console.log(protectedUser.name); // John
// console.log(protectedUser.age); // 25
// console.log(protectedUser.password); // Error: Access to 'password' is restricted
// console.log((protectedUser.name = "Jane")); // установит значение 'Jane' в свойство 'name'
// console.log((protectedUser.password = "newPassword")); // Error: Access to 'password' is restricted
