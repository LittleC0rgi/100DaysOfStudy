function stringify(tag) {
  const blackList = ["name", "tagType", "body"];
  let str = "";
  let attributes = "";
  for (const key in tag) {
    if (blackList.includes(key)) continue;
    if (Object.prototype.hasOwnProperty.call(tag, key)) {
      const element = tag[key];
      attributes += ` ${key}="${element}"`;
    }
  }
  if (tag.tagType === "single") {
    str = `<${tag.name}${attributes}>`;
  } else {
    str = `<${tag.name}${attributes}>${tag.body ?? ""}</${tag.name}>`;
  }
  return str;
}
const hrTag = {
  name: "hr",
  class: "px-3",
  id: "myid",
  tagType: "single",
};
const html = stringify(hrTag);

console.log(html);
