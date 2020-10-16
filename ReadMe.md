# Azure Immersive Reader

Immersive reader is a Microsoft Azure cognitive services tool to help a user's ability to understand content on a page. It's a single API call which displays a dialog containing the page content and a range of reading options including highlighting nouns, verbs and adjectives.

Read the article [Using Azure to help users with lower levels of literacy](https://www.canaxess.com.au/articles/using-azure-helps-users-with-lower-levels-literacy/) for more information.

Follow [these instructions](https://docs.microsoft.com/azure/cognitive-services/immersive-reader/how-to-create-immersive-reader) to create an immersive reader resource and configure Azure active directory authentication.

## About
This is a Node.js Express server which handles routing and API calls to Microsoft Azure for active directory authentication and immersive reader capability. DOTENV is used to manage environment variables, several of which are exposed via API calls allowing the changing of the process environment variables during runtime.

## Development Environment

1. Run `yarn run start` (or `nodemon start` if you want to view changes you make after doing a browser refresh)
1. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the sample

## CI/CD Integration
* `git push` triggers an automatic deployment to Heroku [https://canaxess-immersive-reader.herokuapp.com/](https://canaxess-immersive-reader.herokuapp.com/)

## API endpoints
Two endpoints exist to get and set environment variables for the Node process.

* `/getframework` returns the Javascript and CSS frameworks as JSON
* `/setframework` sets the Javascript and CSS framework environment variables for the process as a GET method i.e. `/setframework?framework=BOOTSTRAP`

**Allowed values**
* `framework=REACT|ANGULAR|VUE|BOOTSTRAP|FOUNDATION`

**URLs**
* [https://canaxess-immersive-reader.herokuapp.com/getframework](https://canaxess-immersive-reader.herokuapp.com/getframework)
* [https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=VUE](https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=VUE)

## Todo improvements

* Decouple the frontend UI from the Node.js server
* Replace JQuery event handlers with React

