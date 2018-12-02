# APCS-BlizzardKicker
ApplePeelerCorerSlicer

# Docker is The Preferred Way to Run!
It allows you to run everything on any computer without running mongo or node.

## Docker Instructions
1. Download and install docker https://store.docker.com/search?offering=community&type=edition for your specific device
2. `cd` into your APCS-BlizzardKicker folder
3. `docker-compose up -d --build`
4. Whenever you make changes run `docker-compose up -d --build` again to see them update
5. To stop the service run `docker-compose down`

# How to Run the Server
1. Install node.js and mongodb
2. launch your mongodb server on the default port
3. `cd` into APCS-BlizzardKicker in your terminal and type `npm run watch`
4. go to http://localhost:3000 in your browser

## Mac Instructions
1. Run `brew install mongodb`
2. `brew install node`
3. cd into your APCS-BlizzardKicker
4. `brew services start mongodb`
5. `npm run watch`
6. Go to http://localhost:3000

<<<<<<< HEAD
If it is not running locally change `DATABASE=mongodb://localhost:27017/BlizzardKickerDev` to `DATABASE=localhost://mongo:27017/BlizzardKickerDev` in .env
=======
If it is not running locally change `DATABASE=mongodb://mongo:27017/BlizzardKickerDev` to `DATABASE=mongodb://localhost:27017/BlizzardKickerDev` in .env
For local running: DATABASE=mongodb://localhost:27017/BlizzardKickerDev
=======
If it is not running locally change `DATABASE=mongodb://mongo:27017/BlizzardKickerDev` to `DATABASE=mongodb://localhost:27017/BlizzardKickerDev` in .env
For local running: DATABASE=mongodb://localhost:27017/BlizzardKickerDev
>>>>>>> dev
>>>>>>> 243d6a77e19a22e70562ae8bf6200876b38aa8ce
