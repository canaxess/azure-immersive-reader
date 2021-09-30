# Azure Immersive Reader

Immersive reader is a Microsoft Azure cognitive services tool to help a user's ability to understand content on a page. It's a single API call which displays a dialog containing the page content and a range of reading options including highlighting nouns, verbs and adjectives.

Read the article [Using Azure to help users with lower levels of literacy](https://www.canaxess.com.au/articles/using-azure-helps-users-with-lower-levels-literacy/) for more information.

Follow [these instructions](https://docs.microsoft.com/azure/cognitive-services/immersive-reader/how-to-create-immersive-reader) to create an immersive reader resource and configure Azure active directory authentication.

1. Run the provided script that will create an Immersive Reader resource and configure Azure Active Directory (Azure AD) authentication.
1. Run the `Create-ImmersiveReaderResource` powershell function using the below details:

```
Create-ImmersiveReaderResource -SubscriptionName '<PARAMETER_VALUES>' -ResourceName '<PARAMETER_VALUES>' 
-ResourceSubdomain '<PARAMETER_VALUES>' -ResourceSKU '<PARAMETER_VALUES>' 
-ResourceLocation '<PARAMETER_VALUES>' -ResourceGroupName '<PARAMETER_VALUES>' 
-ResourceGroupLocation '<PARAMETER_VALUES>' -AADAppDisplayName '<PARAMETER_VALUES>' 
-AADAppIdentifierUri '<PARAMETER_VALUES>' -AADAppClientSecret '<PARAMETER_VALUES>' 
-AADAppClientSecretExpiration '<PARAMETER_VALUES>'
```

Replacing `<PARAMETER_VALUES>` with your own values.

## About
This is a Node.js Express server which handles routing and API calls to Microsoft Azure for active directory authentication and immersive reader capability. DOTENV is used to manage environment variables locally.

## Development Environment

1. run `npm i` to install all dependencies
1. Run `yarn run start` (or `nodemon start` if you want to view changes you make after doing a browser refresh)
1. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the sample

## CI/CD Integration
* `git push` triggers an automatic deployment to [Heroku](https://canaxess-immersive-reader.herokuapp.com/)

## Azure AAD
The **AADAppClientSecretExpiration** token expires on `2022-06-01`.

## Heroku
The configuration variables need to set in Heroku to mirror the environment variables in the solution (not committed to repository).


