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


- [x] Create a Vue.js application
- [x] Make use of Vuetify component framework to create the user interface
- [x] You can find inspiration with the image below
- [x] Create a first page the UI displaying the different news headlines (List view)
- [] Create another page using Vue Router displaying more information about a selected news headline (Detail view)
- [] Create a toolbar in a child functional component linked to each headline.
- [] One button will redirect the user to the selected headline page
   - [] A second button opens a popup/dialog with a text field to modify the headline's title.
   - [] A validator is expected to prevent the new title to be too long.
- [] Display a history of the visited headlines
- [] Show off your CSS skills by making it look: 
   - [] Nice (Interface Design)
   - [] Responsive (on Mobile, Tablet and Desktop)

### Step 2
This second step focuses on retrieving and managing data via a public API.

- [] Make an API call to this URL [https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY) to get the latest headlines from different sources
- [] Display the headlines in the UI
- [] Make another API call to this URL [https://newsapi.org/v2/sources?apiKey=API_KEY](https://newsapi.org/v2/sources?apiKey=API_KEY) to get the list of sources
- [] Allow the user to select a source to display the filtered headlines
- [] Add a search bar to be able to fetch and display only headlines with the included text. You will call this URL [https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY](https://newsapi.org/v2/top-headlines?q=SEARCH_TEXT&apiKey=API_KEY) , Please note the api should be called as and when the user types or press the key.
- [] Add a spinner when the headlines are fetching
- [] Make a wrong API call to this URL [https://newsapi.org/v2/sources?apiKey](https://newsapi.org/v2/sources?apiKey) and display an error message
- [] Use Vuex for the state management


### Issues to improve


### Concerns and uncetainty