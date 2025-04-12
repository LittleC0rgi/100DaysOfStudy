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

interface ITag {
  name: string;
  class: string;
  id: string;
  tagType: string;
  body?: string;
}

function stringify(tag: ITag) {
  const blackList = ["name", "tagType", "body"];
  let str = "";
  let attributes = "";

  for (const key in tag) {
    if (blackList.includes(key)) return;
    if (Object.prototype.hasOwnProperty.call(tag, key)) {
      const element = tag[key];
      attributes += `${key}="${element}"`;
    }
  }

  if (tag.tagType === "single") {
    str = `<${tag.name} ${attributes}>`;
  } else {
    str = `<${tag.name} ${attributes}>${tag.body ?? ""}</${tag.name}>`;
  }

  return str;
}

const hrTag = {
  name: "hr",
  class: "px-3",
  id: "myid",
  tagType: "single",
};
const html = stringify(hrTag); // <hr class="px-3" id="myid">
