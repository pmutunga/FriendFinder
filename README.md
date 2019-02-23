# FriendFinder aka Rafiki.
Find a friend who's compatible with you. Rafiki is a Swahili word that means "friend".

FriendFiner is a full-stack site will take in results from users' surveys, then compares their answers with those from other users in order to find the best match. The app displays the name and picture of the user with the best overall match.

I used Express to handle routing. This app is available on this Heroku link.
Rafiki!]https://rakifi.herokuapp.com/

# Key Features 

The app has 2 HTML pages

* Home Page. This is the first page a user sees when the application is launched. It has a link to the survey page.
* Survey Page. This is where a user fills out the survey. Once all questions are answered and submitted, the name and picture of the most compatible friend are displayed in a pop-op.

# Technology used

* Express
* Path

# How I built this app.

## Requirements analysis and design
- [x] Review Requirements and map out functionality. Landing page with a link to a survey.
- [x] Psuedo code of friend matching logic and presentation to the user

## Git repository
- [x] Create Git repository and clone it locally

## Development - set up dev environment
- [x] Create package.json using "npm init"
- [x] install required packages and save dependencies to package.json using "npm i [package name] --save"

## Development - Front End
- [x] Create 2 HTML pages styled with Bootstrap; home.html and survey.html
- [x] Create the Front end logic that presents user the information they need and captures their inputs

## Development - Back End
- [x] Create friends JSON object array
- [x] Create server.js - this is the JSON code that exectues when the app starts
- [x] Create html routing file that routes html pages to the user
- [x] Create api routing that routes data from back-end to the front-end

## Testing
- [x] Test locally to ensure all features work

## Deployment
- [x] Deployment to GIT repository
- [x] Deployment to Heroku. Lessons learned - ensure server.js and package.json are in the root directory.

# Screenshots

## Home page


![Friend Finder Home](app/public/images/ffhome.PNG)

## Survey Page

![Friend Finder Survey](app/public/images/ffsurvey.PNG)

## API displaying all friends

![Friend Finder API](app/public/images/ffapi.PNG)