// Интерфейс для состояния
interface ScreenState {
  touch(): void;
  swipe(): void;
}

// Главный класс экрана
class MobileScreen {
  // Словарь всех возможных состояний
  states = {
    powerOff: PowerOffState,
    screenDisabled: ScreenDisabledState,
    screenOn: ScreenOnState,
  };

  state: ScreenState;

  constructor() {
    this.state = new this.states.powerOff(this); // начальное состояние
  }

  setState(stateName: keyof typeof this.states) {
    this.state = new this.states[stateName](this);
  }

  notify(event: "touch" | "swipe") {
    console.log(`notify: ${event}`);
  }

  touch() {
    this.state.touch();
  }

  swipe() {
    this.state.swipe();
  }
}

// Состояние: телефон выключен
class PowerOffState implements ScreenState {
  constructor(private screen: MobileScreen) {}

  touch(): void {
    // ничего не происходит
    console.log("PowerOffState: touch -> ничего не происходит");
  }

  swipe(): void {
    // ничего не происходит
    console.log("PowerOffState: swipe -> ничего не происходит");
  }
}

// Состояние: экран выключен, но телефон включен
class ScreenDisabledState implements ScreenState {
  constructor(private screen: MobileScreen) {}

  touch(): void {
    // включаем экран
    console.log("ScreenDisabledState: touch -> экран включается");
    this.screen.setState("screenOn");
    this.screen.notify("touch");
  }

  swipe(): void {
    // ничего не происходит
    console.log("ScreenDisabledState: swipe -> ничего не происходит");
  }
}

// Состояние: экран включен
class ScreenOnState implements ScreenState {
  constructor(private screen: MobileScreen) {}

  touch(): void {
    console.log("ScreenOnState: touch -> передаем в активное приложение");
    this.screen.notify("touch");
  }

  swipe(): void {
    console.log("ScreenOnState: swipe -> передаем в активное приложение");
    this.screen.notify("swipe");
  }
}

// Пример использования:
const phone = new MobileScreen();

phone.touch(); // ничего не происходит
phone.swipe(); // ничего не происходит

phone.setState("screenDisabled");
phone.touch(); // экран включается + notify

phone.swipe(); // передается в активное приложение
