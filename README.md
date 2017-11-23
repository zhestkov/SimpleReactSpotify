# React.JS introduction example


If you found this manual useful please star this repo to me to know
how useful this is. If misunderstanding occurred feel free
to open any issues you faced to

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Below you will find some information on how to perform common tasks.<br>
You can find detailed info [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Useful links

[Create React App](https://github.com/facebookincubator/create-react-app)

[react-hot-loader](https://github.com/gaearon/react-hot-loader)

[The best react book ever](https://reactjs.org/docs/)

[Webpack configuration examples](https://webpack.js.org/guides/)



## Creating

To create the initial react project you have to install 
create-react-app module <b><u>GLOBALLY</u></b> to your computer

    npm i -g create-react-app
    
After this you will be able to run  create-react-app command at terminal/console/cmd/watever-called-command-line:

    create-react-app your-project-name
    
This command generates initial React project. To start develop just start:

    npm start
    
## Enabling [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Why?

Because after project's rebuild this awesome package allows you to
provide all changes you made to the localhosted web-page
without page reloading piece-by-piece in <b>!!!real-time!!!</b>. 

### Configuring Build settings

First of all you have to add react-hot-loader module to your projects deps:
    
    npm i -D react-hot-loader
    
Next step according to react-hot-loader documentation
is to configure babel setting. For this purpose you
have to eject all build script from create-react-app:

    npm start eject
    
This command creates all build configuration files you need.

To enable babel plugin for  react-hot-loader at the packege.json line:85 add

    "plugins": ["react-hot-loader/babel"]

Then at the config/webpack.config.dev.js line:30 add following information:

    'react-hot-loader/patch',

### Enable react-hot-load module in React scripts

Refactor your your main JS file - /src/index.js something like this

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
```

### Developing

Just start your project as previous:

    npm start
   
try to modify /src/App.js file in anyway you want, save it
and code as a real react.js developer ;)