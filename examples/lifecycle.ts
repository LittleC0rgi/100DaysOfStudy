import {
  Module,
  Injectable,
  Controller,
  Get,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
  OnApplicationBootstrap,
} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Сервис, использующий хуки жизненного цикла
@Injectable()
class ExampleService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  // Вызывается сразу после инициализации модуля
  // Хорошо подходит для установки соединений с базами данных
  async onModuleInit() {
    console.log("1. Service: onModuleInit - Модуль инициализируется");
    // Здесь можно, например, установить соединение с БД
  }

  // Вызывается после того, как все модули были инициализированы,
  // но до того как приложение начнет принимать запросы
  async onApplicationBootstrap() {
    console.log(
      "3. Service: onApplicationBootstrap - Приложение загружено, но еще не слушает запросы"
    );
    // Здесь можно выполнить любую логику, которая должна запускаться после полной инициализации приложения
  }

  // Вызывается перед уничтожением модуля (при корректном завершении работы)
  async onModuleDestroy() {
    console.log("4. Service: onModuleDestroy - Модуль уничтожается");
    // Здесь можно закрыть соединения, отписаться от событий и т.д.
  }

  // Вызывается до обработки сигнала завершения, позволяет выполнить асинхронные операции
  async beforeApplicationShutdown(signal?: string) {
    console.log(
      `5. Service: beforeApplicationShutdown - Перед завершением приложения. Сигнал: ${signal}`
    );
    // Здесь можно выполнить асинхронные операции перед завершением приложения
  }

  // Вызывается во время завершения работы приложения
  async onApplicationShutdown(signal?: string) {
    console.log(
      `6. Service: onApplicationShutdown - Приложение завершает работу. Сигнал: ${signal}`
    );
    // Здесь можно освободить все ресурсы
  }
}

// Контроллер, использующий хуки жизненного цикла
@Controller("example")
class ExampleController implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getHello(): string {
    return "Hello World!";
  }

  async onModuleInit() {
    console.log("2. Controller: onModuleInit - Контроллер инициализируется");
  }

  async onApplicationBootstrap() {
    console.log(
      "3. Controller: onApplicationBootstrap - Контроллер готов к работе"
    );
  }
}

// Модуль приложения
@Module({
  controllers: [ExampleController],
  providers: [ExampleService],
})
class AppModule {}

// Запуск приложения
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Обработка сигналов для корректного завершения приложения
  app.enableShutdownHooks();

  await app.listen(3000);
  console.log("Приложение запущено и слушает порт 3000");

  // Для демонстрации завершения через 5 секунд
  setTimeout(() => {
    app.close();
  }, 5000);
}

bootstrap();
