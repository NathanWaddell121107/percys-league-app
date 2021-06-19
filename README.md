# Pool League App

An application to help in-house pool hall league operators manage / track league data

## Getting Started

### Recommended vscode extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

### Install dependencies with yarn

`yarn`

### Setting up the environment

run the command below to automatically populate the required environment variables

_if this command doesn't work, ask a friendly dev to send the updated list and create / add these to a .env file in the root of the project_

`yarn pull-env`

#### List of current env variables

`MONGODB_URI="CHANGEME"` - the connection string for the mongo cluster/database  
`MONGODB_DB="CHANGEME"` - the actual name of the database for the environment

### Running the app

runs at `http://localhost:3000`

On the first time running the app, you may need to change the selected debug `RUN` option in the dropdown to `Debug: League App - Chrome`

- Open the `Run and Debug` tab - _Windows_: `ctrl+shift+d` _Mac_: `⌘+shift+d`
- Select `Debug: League App - Chrome` from the dropdown select menu
- Press the green play button to launch chrome, start the server, and run the app

After the first run of the app, you should be able to run the app by just hitting `f5`

## Development information

### Development cycle

There is a Production branch (`main`) and a Staging branch (`staging`)  
Branch off of the `staging` branch and when you create a PR set it to be merged into the `staging` branch

### Linting

Before creating a PR please run `yarn lint` to check for linting / formatting errors

### Debugging

The API is using the API Routes feature implemented in Next.js 9.  
No issues debugging locally but if something does not work in the deployment it can be tricky to debug.  
Because of Next.js using AWS Serverless Lambda functions, the only good way to debug a preview deployment that I have found so far is to add logs and search for the logs / errors in the Vercel deployment function logs

## Testing

TBD...
