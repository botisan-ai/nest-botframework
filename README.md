# BotFramework wrapped in NestJS

This is a Microsoft BotFramework template written with NestJS Framework.

We prefer to use a more mature framework to set up chatbot projects. With features like dependency injection, one can easily swap out the parts and compile a BotFramework chatbot that suits the needs of the project.

We currently decided to use the declarative form of adaptive dialogs in BotFramework to set up the main bot dialogs. Please search the documentations for more information.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

Once started, you can use the [BotFramework Emulator](https://aka.ms/botframework-emulator) to test your bot.

## License

Nest is [MIT licensed](LICENSE).
