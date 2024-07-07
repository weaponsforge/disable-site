## disable-site

Simple one-page static site displaying a "disabled" version of a website, featuring configurable basic text content.

> The client app is bootstrapped using NextJS v14.2.4. It uses the NextJS pages router since it only publishes static content.

### Requirements

The following dependencies are used for this project. Feel free to experiment using othere dependencies and versions.

1. Windows 10 64-bit OS
2. nvm version 1.1.12 (for Windows)
3. NodeJS LTS v20.15.0
   - node v20.15.0
   - npm 10.7.0

### Core Libraries and Frameworks

#### Client app
  - NextJS 14.2.4
  - TailwindCSS 3.4.1
  - React 18

## Installation

1. Clone this repository.<br>
`git clone https://github.com/weaponsforge/disable-site.git`

2. Install dependencies.<br>
   ```
   cd client
   npm install
   ```

3. Set up the environment variables. Create a `.env` file inside the **/client** directory with reference to the `.env.example` file.

   | Variable Name | Description |
   | --- | --- |
   | NEXT_PUBLIC_BASE_PATH | Root directory path name that NextJS uses for assets, media and client-side routing for the app.<br>Set its value to blank `''` when working on development mode in localhost.<br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when deploying on a repository (sub-directory) of a root GitHub Pages site, i.e, on<br>`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>` |

## Usage

1. Run the client app in development mode on localhost.<br>
   ```
   cd client
   npm run dev
   ```

## Available Scripts

### `npm run dev`

Starts the local NextJS app in development mode on localhost.

### `npm run build`

Builds the static site into the `"out"` directory.

### `npm start`

Serves the static build output of the `"npm run build"` script on http://localhost:3000

### `npm run lint`

Checks lint errors.

### `npm run lint:fix`

Fixes lint errors.

@weaponsforge<br>
20240708
