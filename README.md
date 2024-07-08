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

2. Create a new page with custom modal dialog text.
   - Create a new page component under the `/src/pages` directory.
   - Export `getStaticProps()` function from the new page component. The function should construct and return the `title`, `background` and `paragaraphs[]` key-value pairs.

      ```jsx
       export async function getStaticProps () {
         return {
           props: {
             title: "Hello, World!",
             background: "/images/rg_inazuma2.jpg",
             paragraphs: [
               { id: 0, content: "Sample text 1" },
               { id: 1, content: "Sample text 2" },
              ...
            ]
          }
        }
      }
      ```
   - Import and use the `NoticePage` component into the component created from the previous step. It should receive the `title`. `backgroud` and `paragraphs` props from the `getStaticProps()` function, and pass them to the `NoticePage` component. For example:

      ```jsx
      function App ({ title, paragraphs, background }) {
        return (
          <NoticePage
            title={title}
            paragraphs={paragraphs}
            background={background}
            Component={LinkTo}
          />
        )
      }
      ```


## Deployment

### Firebase Hosting

Follow these steps for manually deploying the static site to Firebase Hosting.

Create the **GitHub Actions Secrets** described in the [GitHub Actions](#github-actions) section to automatically deploy the `dev` branch to Firebase Hosting on every new push or update to the `dev` branch.

#### Requirements

1. Firebase project with Firebase Hosting pre-configured and set-up.
2. Firebase CLI (Firebase Admin)
   - Installed preferrably using the `"npm install -g firebase-tools"` command.

#### Steps

1. Open the `firebaserc` file in the client directory.
2. Replace the `"<FIREBASE_PROJECT_NAME>"` key with a target Firebase project.
3. Replace the `"<FIREBASE_HOSTING_NAME_UNDER_FIREBASE_PROJECT>"` key with a target Firebase Hosting name under the `"<FIREBASE_PROJECT_NAME>"`.
4. Build the static site.<br>
`npm run build`
5. Login to your Firebase account using the Firebase CLI.<br>
`firebase login`
6. Deploy the static site.<br>
`firebase deploy --only hosting`

## GitHub Actions

Add the following GitHub Actions "Secrets" for deploying the development app to Firebase Hosting

| GitHub Secret Name | Description |
| --- | --- |
| FIREBASE_PROJECT | Firebase project ID |
| FIREBASE_HOSTING | Firebase Hosting name under the `FIREBASE_PROJECT` |
| FIREBASE_TOKEN | Firebase CI token used for deploying the /client app to Firebase Hosting. This is obtained by signing-in to the firebase CLI with `"firebase login:ci"`. |

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

### `gen:randomtext`

Generates a sentence containing random words.

@weaponsforge<br>
20240708
