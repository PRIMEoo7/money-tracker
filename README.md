# Getting Started with Money-Tracker (React App)

## Available Scripts

In the project directory, you can run:

### `yarn start-react`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `node ./src/api/index.js`

To run BE code which will be exposed on http://localhost:4040/...

## Databases
I have used Mongodb Atlas (have some issue while connecting coz of its boot up time)
(Issue: Mongoose allows to make changes to collection before even establishing the connection with db This causes CONN Timeout)

TODO: Need to try with local Mongodb or some other alternate Db servicce

## Docker
Also dockerized the application
Did the Setup to Containerize nodejs and mongo atlas 
(TODO: React setup)
