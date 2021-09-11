# jb-engine

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
   1. - [ ] One button will redirect the user to the selected headline page
   2. - [ ] A second button opens a popup/dialog with a text field to modify the headline's title. A validator is expected to prevent the new title to be too long.
7. - [ ] Display a history of the visited headlines
8. Show off your CSS skills by making it look: 
   1. - [x] Nice (Interface Design)
   2. - [x] Responsive (on Mobile, Tablet and Desktop)

### Step 2
This second step focuses on retrieving and managing data via a public API.

- [x] Make an API call to this URL [https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY) to get the latest headlines from different sources
- [x] Display the headlines in the UI
- [x] Make another API call to this URL [https://newsapi.org/v2/sources?apiKey=API_KEY](https://newsapi.org/v2/sources?apiKey=API_KEY) to get the list of sources
- [ ] Allow the user to select a source to display the filtered headlines
- [ ] Add a search bar to be able to fetch and display only headlines with the included text. You will call this URL [https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY), Please note the api should be called as and when the user types or press the key.
- [x] Add a spinner when the headlines are fetching
- [ ] Make a wrong API call to this URL [https://newsapi.org/v2/sources?apiKey](https://newsapi.org/v2/sources?apiKey) and display an error message
- [x] Use Vuex for the state management

<img src="https://github.com/jb-engine/challenges/raw/master/vue/challenge-example.png">

### Features
1. Side drawer all users to navigate.
2. Provide a simple, direct view for users to browse news. 
   1. Help users search for certain headline
   2. Filter resource into preferrable sorted list
3. `News` route
   1. "Filter" button is disabled by default and will be activated after the source list is fetched.
   2. A button fixed at bottom right corner to allow users to navigate to the top.
   3. News card
      1. "Read more" to local link to news details.
      2. A button next to "pencial-edit" to visit original source.


### Vue App Structure
1. `App.vue` is the main entry point which contains `router-view` to render components on different routes with a defined layout. The followings are the main view in the app.
   1. News
   2. News Detail
   3. History
2. `NewsGrid` is the main component to show the list of news. Each news is rendered in a child component `NewsCard`. 
3. Users can check news in details on `NewsPost` access with `/news/:id`, while `id` is provided as the `props` to the component.
4. Global `OverlayLoader` can be triggered when the component is fetching/loading data.
5. Global `Dialog` can be triggered to show notification or error. 


### Issues to improve
1. Add smother transition animations.
   1. View teir
   2. Component teir
2. Skeleton loading animation for images.
3. Infinite scrolling could be applied according to design on user experience. 
4. User behavior, logs, and records can be trasmitted with cookies and stored in database for further analysis and marketing purpose. However, we don't have a backend in this case, so all the user related data is kept in `localStorage` in this mockup.
5. The app can be deployed as PWA that it can 
   1. Allow users to browse stored information when offline.
   2. Push notification to users.
   3. Provide other offline features such as editing content. 
6. Some components could be more "generic" to be used for different routes and purposes.
7. Security strategy isn't carefully concerned, as there's no backend structure to refer. 
8. However, XXS and scripting injection could be an issue when allowing users to edit contents, especially if this app is considered a CMS. 
9.  A dedicated 404 catch all page
   1.  Providing suggeted routes
   2.  Redirect users after a certain amount of time (5 minutes)
10. Code source control can be separated to different branches in `git` such as `develop` and `features` if the app or team is larger that requires coordination.
11. NewsAPI has limitation of developer plan and have limited request 1,000 requests / day. To prevent API abuse, I keep the data in `assets` as JSON files for developing purpose.
12. `Popover` used in `NewsGrid` could be more generic as a universal comopnent.
13. The "Filter" feature to select source for headlines could be more advanced by applying multiple options and porperties.


### Concerns and uncetainties
1. These subjects could seriously affect how user experience and flow are designed.
2. The followings are my own reasoning and assumptions from the given requirements.
3. What's the business model and product positioning?
   1. Can advertisement prsented in the app?
   2. Can products be placed by a direct or implicit way? 
4. What's the main painpoint or problem that this app is targeted to solve?
   1. This app could be a CMS like wordpress that allows news editors or jounralists editing title and content before publishing the news.
   2. A media or news aggregator such as [Feedly](https://feedly.com/) for users to subscribe news feeds from certain source.
   3. A blogging platform allows users publishing posts.
   4. A social media similar to twitter.
5. Authentication and authorization to certain features could be defined. 
   1. Premium functions (paid)
   2. Custom features (paid)
   3. API services
6. Requesting service to 3rd party API can be embedded by server to keep API keys or credentails safe if the API service provider couldn't limit the domain to request. 
7. Requesting domain guard must check with `href` or `origin` that includes `http` or `https` to prevent forgery by subdomains of malicious attacker such as `your.domain.malicious.com`. 
8. Instead redirect the users to the origin source of the app, is there any approach to keep the user stays with the app?