// Допустим, у нас есть:
// - Старая библиотека, которая возвращает данные методом getData()
// - Новый код, который ожидает, что метод будет называться fetch()

// Адаптер делает вот что:

class OldLibrary {
  getData() {
    return "данные из старой библиотеки";
  }
}

class Adapter {
  oldLibrary: OldLibrary;

  constructor(oldLibrary) {
    this.oldLibrary = oldLibrary;
  }

  fetch() {
    // Адаптируем старый метод к новому
    return this.oldLibrary.getData();
  }
}

const old = new OldLibrary();
const adapter = new Adapter(old);

console.log(adapter.fetch()); // работает, как будто это новая библиотека
