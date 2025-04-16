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
