# React.JS introduction example

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Creating

To create the initial react project you have to install 
create-react-app module <b><u>GLOBALLY</u></b> to your computer

    npm i -g create-react-app
    
After this you will be able to run  create-react-app command at terminal/console/cmd/watever-called-command-line:

    create-react-app your-project-name
    
This command generates initial React project. To start develop just start:

    npm start
    
## Enabling [react-hot-loader](https://github.com/gaearon/react-hot-loader)

First of all you have to add react-hot-loader module to your projects deps:
    
    npm i -D react-hot-loader
    
Next step according to react-hot-loader documentation
is to configure babel setting. For this purpose you
have to eject all build script from create-react-app:

    npm start eject
    
This command creates all build configuration files you need.
