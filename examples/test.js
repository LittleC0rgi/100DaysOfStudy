function protect(obj, protectedKeys) {
  return new Proxy(obj, {
    set(target, prop, value) {
      console.log(prop);
      if (typeof prop === "string" && protectedKeys.includes(prop)) {
        throw new Error(`Access to '${prop}' is restricted`);
      }
      target[prop] = value;
      return true;
    },
    get(target, prop) {
      console.log(prop);
      if (typeof prop === "string" && protectedKeys.includes(prop)) {
        throw new Error(`Access to '${prop}' is restricted`);
      }
      return target[prop];
    },
  });
}
const user = {
  name: "John",
  age: 25,
  password: "secret",
};
const protectedProps = ["password"];
const protectedUser = protect(user, protectedProps);
console.log(protectedUser.name);
console.log(protectedUser.age);
console.log(protectedUser.password);
console.log((protectedUser.name = "Jane"));
console.log((protectedUser.password = "newPassword"));
