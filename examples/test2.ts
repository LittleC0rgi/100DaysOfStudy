// const tags = [
//   { name: "img", src: "hexlet.io/assets/logo.png" },
//   { name: "div" },
//   { name: "link", href: "hexlet.io/assets/style.css" },
//   { name: "h1" },
// ];

// interface ITags {
//   name: string;
//   src?: string;
//   href?: string;
// }

// export default (tags: ITags[]) => {
//   const links = new Set();

//   tags.forEach((tag) => {
//     switch (tag.name) {
//       case "a":
//         links.add(tag.href);
//       case "link":
//         links.add(tag.href);
//         break;
//       case "img":
//         links.add(tag.src);
//         break;
//     }
//   });

//   return Array.from(links);
// };
// // const links = getLinks(tags);
// // [
// //   'hexlet.io/assets/logo.png',
// //   'hexlet.io/assets/style.css'
// // ];

// const mapping = {
//   female: (user) => user.maidenName,
//   male: (user) => user.lastName,
// };

// // Выбираем нужную функцию по названию пола и вызываем ее
// // Внутрь функции передается пользователь
// const lastNames = users.map((user) => mapping[user.gender](user));

// const mapping = {
//   female: (user) => user.maidenName,
//   male: (user) => user.lastName,
// };

// interface ITag {
//   name: string;
//   class: string;
//   id: string;
//   tagType: string;
//   body?: string;
// }

// function stringify(tag: ITag) {
//   const blackList = ["name", "tagType", "body"];
//   let str = "";
//   let attributes = "";

//   for (const key in tag) {
//     if (blackList.includes(key)) return;
//     if (Object.prototype.hasOwnProperty.call(tag, key)) {
//       const element = tag[key];
//       attributes += `${key}="${element}"`;
//     }
//   }

//   if (tag.tagType === "single") {
//     str = `<${tag.name} ${attributes}>`;
//   } else {
//     str = `<${tag.name} ${attributes}>${tag.body ?? ""}</${tag.name}>`;
//   }

//   return str;
// }

// const hrTag = {
//   name: "hr",
//   class: "px-3",
//   id: "myid",
//   tagType: "single",
// };
// const html = stringify(hrTag); // <hr class="px-3" id="myid">

// export default class DatabaseConfigLoader {
//   constructor(pathToConfigs) {
//     this.pathToConfigs = pathToConfigs;
//   }

//   load(env) {
//     const config = this.loadConfig(env);
//     return this.recursive(config);
//   }

//   loadConfig(env) {
//     const filename = `database.${env}.json`;
//     const filepath = path.join(this.pathToConfigs, filename);
//     const content = fs.readFileSync(filepath, "utf-8");
//     return JSON.parse(content);
//   }

//   recursive(config) {
//     const { extend, ...configWithoutExtend } = config;

//     if (!extend) {
//       return configWithoutExtend;
//     }

//     const parentConfig = this.loadConfig(extend);
//     const mergedConfig = {
//       ...this.recursive(parentConfig),
//       ...configWithoutExtend,
//     };

//     return mergedConfig;
//   }
// }

// const hasComments = (commentable) => {
//   // Если это статья
//   if (commentable instanceof Article) {
//     return commentable.getArticleComments().length > 0;
//     // Если это топик
//   } else if (commentable instanceof Topic) {
//     return commentable.getTopicComments().length > 0;
//   }
// };

// class Article {
//   // some code

//   getArticleComments() {
//     return this.comments;
//   }
// }

// class Topic {
//   // some code

//   getTopicsComments() {
//     return this.comments;
//   }
// }

// // Article.first() — метод, который возвращает первую статью из базы данных
// const article = Article.first();
// console.log(hasComments(article));

// export default class InMemoryKV {
//   data = {};
//   constructor(initialData = {}) {
//     this.data = { ...initialData };
//   }

//   get(key, defaultValue = null) {
//     return key in this.data ? this.data[key] : defaultValue;
//   }

//   set(key, value) {
//     this.data[key] = value;
//   }

//   unset(key) {
//     delete this.data[key];
//   }

//   toObject() {
//     return _.cloneDeep(this.data);
//   }
// }

// class FakeSubscription {
//   isAdmin: boolean;

//   constructor(isAdmin: boolean = false) {
//     this.isAdmin = isAdmin;
//   }

//   hasPremiumAccess() {
//     return this.isAdmin;
//   }

//   hasProfessionalAccess() {
//     return this.isAdmin;
//   }
// }
