# Trail Magic

<img src="https://media.giphy.com/media/YsNVlqrQkvLuaeILSO/giphy.gif" width="auto" text-align="center">

Welcome to Trail Magic, a clone of the app Alltrails, that makes it easy for users to explore the natural world (of Colorado). The website currently allows users to create their own account with username and password, explore a map of twelve trails in Colorado and see currated trailguides with information about, a map, and photos of each trail. Users can search for trails by name on the splash page, write, edit and delete reviews of trails for all users to see, upload and delete their own photos of trails.


## Where can I find the App?

A non-up-to-date version of Trail Magic is hosted live at https://trailmagic.herokuapp.com. We are working on getting the most up-to-date version of Trail Magic hosted on Heroku soon.

## Technologies

Trail Magic is a fullstack application developed with:

 * Ruby on Rails backend
 * PostgreSQL database
 * React-Redux frontend 
    * implementing Uber's React-Map-Gl libary
 * AWS S3 cloud stored photos

## Highlited Features

### Map Popups

This application makes good use of the Redux state and of the modular nature of React Components for consistently smooth navigation and interactive displays within a compact codebase. On the explore page a slice of the redux state keeps track of the trail that is currently selected, linking a `TrailIndexItem`s in the sidebar with location markers on the `Map` component. This allows users to both click icons at trailhead locations on the map and simply hover over the trail in the trail index sidebar in order to open a popup with that trails information at it's map location. The trail information in the popup reuses the `TrailIndexItem` React component from the sidebar, styled differently. 

### Consistent Page Landings

On an individual trail page, a sidebar lists nearby trails reusing the same `TrailIndexItem` React component, styled differently based on its use case. Here Redux keeps track of the type of view of the trails page, either showing Reviews or Photos. When users click on a nearby trail, the same `Trail` React component is rendered with the information of the new trail but the Redux state sets initial view to show Reviews for a consistent landing on each trail page regardless of where the user is coming from. 

### Location Based Rendering

On each trail page, the app makes use of the Haversine Distance formula to only show trails within a certain distance in the Nearby Trails sidebar.
