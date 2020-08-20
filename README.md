
# Weather Forecast Test App

Simple Weather Forecast App using the MetaWeather API

## Installation

To install all necessary libraries, run this command, make sure you have npm installed
```bash
npm i
```
## Usage

Start Reverse Proxy Server (localhost:3001)

```bash
npm run server
```

Start Localost App in develop environment, the application will run at localhost:3000
**Note**: It will take a short time for the proxy to be applied, you can either wait for it or use private mode of the browser.

```bash
npm start
```

Running Jest Test

```bash
npm test
```
Test Coverage

```bash
npm run coverage
```
Check tslint

```bash
npm run lint
```
## Develop

This App is built with [Create-React-App](https://create-react-app.dev/) with [TypeScript](http://typescriptlang.org/) so you can refer to their documents for the basic understanding.

 - [Redux Toolkit](https://redux-toolkit.js.org/): New way of using redux.
 - [Redux Saga](https://redux-saga.js.org/): Side effects middleware.
 - [Antdesign](https://ant.design/): React bootstrap style UI framework.
 - [Styled-component](https://styled-components.com/): CSS in JS.

Due to the API does not support **CORS**. You will need to proxy your request via Node using **Express**.

**Folders structure** 

 - **src**: is the main folder, all the code will be placed here.
 - **src/components**: for dump components, just for presentation.
 - **src/containers**: for smart components (containers), mostly contains main route containers or large feature.
 - **src/models**: Data model structure for the whole application.
 - **src/services**: API services.
 - **src/store**: Application store, reducers and sagas.
 - **src/utils**: Ultilities functions.
**tests** folder under a component, container, reducer ... folder will contain all the test files for allmost all of its parent's files.
**Styled** is common file name for styled-component
**Unit Test** using **Jest**, **Enzyme** or the built-in **React testing library**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits

Thanks to [MetaWeather](https://www.metaweather.com/) for providing an Open API to the Internet.