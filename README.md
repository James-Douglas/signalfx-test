This basic app uses Node version manager and a .nvmrc file to manage the node/NPM versions.

It requires that Node Version Manager be installed locally - alternatively install the version of node listed in the .nvmrc file.

This app has been tested with the following node versions:
* Node 8.15.0   NPM: 6.4.1
* Node 10.20.1  NPM: 6.14.4

To run the app, run:

```bash
nvm use
npm install
npm run dev
```

To replicate how habitat services are run locally in docker containers, run:
```bash
make up
```

The app will available at http://localhost:8000

