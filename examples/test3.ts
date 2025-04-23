// const mapping = {
//   json: JsonParser,
//   yml: YamlParser,
//   yaml: YamlParser,
// };
// export default class ConfigFactory {
//   static factory(filePath) {
//     const file = fs.readFileSync(filePath);
//     const extension = filePath.split(".")[1];
//     const parser = new mapping[extension]();
//     const data = parser.parse(file);
//     return new Config(data);
//   }
// }

export default class HTMLElement {
  attributes: object;

  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    // BEGIN (write your solution here)
    let str = "";

    for (const key in this.attributes) {
      if (Object.prototype.hasOwnProperty.call(this.attributes, key)) {
        const element = this.attributes[key];
        str += ` ${key}="${element}"`;
      }
    }

    return str;

    // END
  }
}

class HTMLHrElement extends HTMLElement {
  toString() {
    const attributes = this.stringifyAttributes();
    return attributes ? `<hr ${attributes}>` : "<hr>";
  }
}
