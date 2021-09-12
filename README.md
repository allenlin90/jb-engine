# jb-engine
<a href="https://jb-engine.netlify.app/" target="_blank">Demo</a>

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

### Project setup 
1. Install Vue CLI globally with `npm install -g @vue/cli`.
2. Use `vue create [project_name]` to create a new Vue project.
   1. Please pick a preset: `Manually select features`.
   2. Check the features needed for your project: `Choose Vue version`, `Babel`, `Router`, `Vuex`, `Linter / Formatter`.
   3. Choose a verion of Vue.js that you want to start the project with: `2.x`. 
   4. Use history mode for router? `Y`
   5. Pick a linter /formatter config: `ESLint + Airbnb config`.
   6. Pick additional lint features: `Lint on save`.
   7. Where do you prefer placing config for Babel, ESLint, etc.? `In dedicated config files`.
3. Install Vuetify with `Vue add vuetify`. 

## Project Requests
### Step 1

1. - [x] Create a Vue.js application
2. - [x] Make use of Vuetify component framework to create the user interface
3. - [x] You can find inspiration with the image below
4. - [x] Create a first page the UI displaying the different news headlines (List view)
5. - [x] Create another page using Vue Router displaying more information about a selected news headline (Detail view)
6. Create a toolbar in a child functional component linked to each headline.
   1. - [x] One button will redirect the user to the selected headline page
   2. - [x] A second button opens a popup/dialog with a text field to modify the headline's title. A validator is expected to prevent the new title to be too long.
7. - [x] Display a history of the visited headlines
8. Show off your CSS skills by making it look: 
   1. - [x] Nice (Interface Design)
   2. - [x] Responsive (on Mobile, Tablet and Desktop)

### Step 2

This second step focuses on retrieving and managing data via a public API.

- [x] Make an API call to this URL [https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY) to get the latest headlines from different sources
- [x] Display the headlines in the UI
- [x] Make another API call to this URL [https://newsapi.org/v2/sources?apiKey=API_KEY](https://newsapi.org/v2/sources?apiKey=API_KEY) to get the list of sources
- [ ] Allow the user to select a source to display the filtered headlines
- [x] Add a search bar to be able to fetch and display only headlines with the included text. You will call this URL [https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY), Please note the api should be called as and when the user types or press the key.
- [x] Add a spinner when the headlines are fetching
- [x] Make a wrong API call to this URL [https://newsapi.org/v2/sources?apiKey](https://newsapi.org/v2/sources?apiKey) and display an error message
- [x] Use Vuex for the state management

<img src="https://github.com/jb-engine/challenges/raw/master/vue/challenge-example.png">

### Features
1. Side drawer allow users to navigate.
2. Provide a simple, direct view for users to browse news. 
   1. Help users search for certain headline
   2. Filter resource into preferrable sorted list
3. `News` route
   1. "Filter" button is disabled by default and will be activated after the source list is fetched.
   2. A button fixed at bottom right corner to allow users to navigate to the top.
   3. News card
      1. "Read more" to local link to news details.
      2. A button with "pencil-edit" icon to allow editing the headline with limited length of text.
      3. A button next to "pencil-edit" to visit original source.
   4. Search feature 
      1. Delayed search is enabled at `500ms` to prevent abusing API request when the user is still typing.
      2. Query text is encoded by default `encodeURI` in case the users give illegal URL characters according to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt).
4. `History` route
   1. The timeline follow a descending chronological order and grouped by date.
   2. Keep the records in `localStorage` in router navigation guard.
   3. User can choose to delete certain record or all records at once.
   4. To ensure data is still kept, `localStorage` is not cleared directly. 
5. Issues on 3rd party API (NewsAPI)
   1. NewsAPI has limitation on its developer plan and have limited request to only 1,000 requests / day. To prevent API abuse, the data in `assets` as JSON files for developing purpose in case that the APIKEY is out of quota. 
   2. NewsAPI sometimes will be blocked by `cors` setting which couldn't be handled by pure frontend (A proxy could be applied to solve this issue. However, a better service integration on both front and back should be considered).


### Vue App Structure
1. `@` is added as the alias for `src` folder for file path in `vue.config.js`.
2. `App.vue` is the main entry point which contains `router-view` to render components on different routes with a defined layout. The followings are the main view in the app.
   1. News
   2. News Detail
   3. History
3. `NewsGrid` is the main component to show the list of news. Each news is rendered in a child component `NewsCard`. 
4. Global `OverlayLoader` can be triggered when the component is fetching/loading data.
5. Global `Dialog` can be triggered to show notification or error. 
6. Deprecated component - Users can check news in details on `NewsPost` access with `/news/:id`, while `id` is provided as the `props` to the component.
7. Create `ButtonGroup` for the buttons on `NewsCard`.


### Issues to improve
#### User experience
1. Add smother transition animations.
   1. View teir
   2. Component teir
2. Skeleton loading animation for images.
3. Infinite scrolling could be applied according to design on user experience. 
4. User behavior, logs, and records can be trasmitted with cookies and stored in database for further analysis and marketing purpose. However, we don't have a backend in this case, so all the user related data is kept in `localStorage` in this mockup.
5.  A dedicated 404 catch all page
   1.  Providing suggeted routes
   2.  Redirect users after a certain amount of time (5 minutes)
6. The "Filter" feature to select source for headlines could be more advanced by applying multiple options and porperties. 
7. Error messages can be optimized for non-tech users. Some scenarios for API request handling issue messages can be more friendly to users.
8. Misunderstanding to read details of the news. Instead of fetching the details, the app is supposed to redirect the user to the source of the article.
9. Truncation one headline and content can be more responsive.

#### App structure 
1. The app can be deployed as PWA that it can 
   1. Allow users to browse stored information when offline.
   2. Push notification to users.
   3. Provide other offline features such as editing content. 
2. Some components could be more "generic" to be used for different routes and purposes. For example, `Popover` used in `NewsGrid` could be more generic as a universal comopnent.
3.  Code source control can be separated to different branches in `git` such as `develop` and `features` if the app or team is larger that requires much more coordination.

#### App Security 
1. Security strategy isn't carefully concerned, as there's no backend structure to refer. In this case, the API key is exposed in the frontend code directly.
2. However, XXS and scripting injection could be an issue when allowing users to edit contents, especially if this app is considered a CMS (Content Management System). 


### Concerns and uncetainties

These subjects could seriously affect how user experience and user flow are designed. The followings are my own reasoning and assumptions from the given requirements.

1. What's the business model and product positioning?
   1. Can advertisement prsented in the app?
   2. Can products be placed by a direct or implicit way? 
2. What's the main painpoint or problem that this app is targeted to solve?
   1. This app could be a CMS like wordpress that allows news editors or jounralists editing title and content before publishing the news.
   2. A media or news aggregator such as [Feedly](https://feedly.com/) for users to subscribe news feeds from certain source.
   3. A blogging platform allows users publishing posts.
   4. A social media similar to twitter.
3. Authentication and authorization to certain features could be defined. 
   1. Premium functions (paid)
   2. Custom features (paid)
   3. API services
4. Requesting service to 3rd party API can be embedded by server or other proxy to keep API keys and credentials safe if the API service provider couldn't limit the domain to request. 
5. Requesting domain guard must check with `href` or `origin` that includes `http` or `https` to prevent forgery by subdomains of malicious attacker such as `your.domain.malicious.com`. 
6. Instead redirect the users to the origin source of the app, is there any approach to keep the user stays with the app?