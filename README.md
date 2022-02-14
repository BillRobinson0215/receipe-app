## Explanation of Application
Recipes.com is the easiest way to ditch that cook book and have your recipes easily accessible on the web. By inputting your recipes into Recipes.com they will be saved for you to reference when ever you need. You can also edit the recipes for those "work in process" recipes you've been working on. 

## Deployment

√ Be deployed online, where the rest of the world can access it.

√ Host on your public Github page, not Github Enterprise.

√ Deploy client application on GH pages.

√ Deploy server application on Heroku.

## Version Control

Demonstrate using version control by:

√ Sharing your work through a git repository hosted on Github.

√ Making frequent, cohesive commits dating back to the first day of the 
project week.

√ 1 commit on the first day of project week on both repos.

√ At least 1 commit every day during project week (not necessarily on both repos).

## Documentation

Produce documentation on Github:

√ Create 2 Github repos (one for your front-end and one for your back-end)

√ Pin both repositories on GitHub as a Popular Repository


Both front-end and back-end repos should include README's with:

√ An explanation of the what the app does and how it works.

√ Complete the repository Description field and Website field with a 
meaningful sentence description of the application and link to the live URL github image
√ A link to the other repo

    Front End Repo: https://github.com/BillRobinson0215/receipe-app

    Back End Repo: https://github.com/BillRobinson0215/receipe-app-server

√ A link to both deployed sites

    Front End: https://billrobinson0215.github.io/receipe-app/

    Back End: https://dashboard.heroku.com/apps/shrouded-meadow-94851
    
  - List of technologies used

        √ Mongo DB
        √ Express
        √ JS
        √ React
√ List unsolved problems which would be fixed in future iterations.

√ Document your planning, process and problem-solving strategy

    √ I talked with my wife about not knowing what I wanted to do for this project and she gave me the idea for a recipe tracking application.
    √Then I thought about all the things that needed to be tracked about a recipe and drew up wireframes for how I would like an application like that to   flow.
    √Then I made it! :D

## Your front-end repo's README should also have:

√ Link to wireframes and user stories
  √ WireFrame:
      ![Imgur](https://imgur.com/yBrkM5C.png)

  - User Stories:
          
          √ User must be able to sign up
          √ User must be able to sign in
          √ User must be able to sign out
          √ User must be able to change password
          √ User must be able to create a recipe
          √ User must be able to view all their recipes
          √ User must be able to view a recipe
          √ User must be able to update a recipe
          √ User must be able to delete a recipe
    
√ An embedded screenshot of the app
  √Screen Shot: 
    ![Imgur](https://imgur.com/rMvuhf8.png)

√ Set up and installation instructions for front end application
  
  √ Set Up:

     Fork and clone repo
     Navigate into repo
     NPM install
     NPM Start

## Your back-end repo's README should also have

√ Link to Entity Relationship Diagram (ERD).
  ERD: 
  
  ![Imgur](https://imgur.com/KSkCcv2.png)

√ A catalog of routes (paths and methods) that the API expects.

  - Routes:
          
         -  recipes/new
              creates a new recipe

         -  recipes/find-recipes
              finds all recipes owned by the current user

         -  recipes/delete/:userid/:id
              deletes the selected recipes

         -  recipes/update/:id
              updates the recipes ingredients or steps
      
√ Set up and installation instructions for back end application

-   √ Set Up:

        Fork and clone repo

        Navigate into repo

        NPM install

        Nodemon server.js

## Auth Specifications

√ Signup with email, user, password, and password confirmation.

√ Login with username and password.

√ Logout when logged in.

√ Change password with current and new password.

√ Signup and Signin must only be available to not signed in users.

√ Logout and Change password must only be available to signed in users.

√ Give feedback to the user after each action's success or failure.

√ All forms must clear after submit success and user sign-out
      *** Update Forms to not clear on purpose for functionality. ***

 (Optional) Reset form to initial state on failure

## Client Specifications

√ Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.

√ Have semantically clean HTML and CSS

√ User must be able to create a new resource

√ User must be able to update a resource

√ User must be able to delete a resource

√ User must be able to view a single or multiple resource(s)

√ All resource actions that change data must only be available to a signed in user.

√ Give feedback to the user after each action's success or failure.

√ All forms must clear after submit success or failure
    
    *** Update Forms do not clear on purpose for functionality. ***

√ Protect against Cross-site Scripting

API Specifications

√ Use Express or Django to build an API.

√ Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests for a resource other than User.

√ Have at least 1 resource that has a relationship to User

√ Any actions which change data must be authenticated and the data must be "owned" by the user performing the change or a user determined by an access     control list

DO NOT!!
Your app must not:

√ Delete your repository at any time or start over.

√ Rely on refreshing the page for any functionality.

√ Have any user-facing bugs.

√ Display non-functional buttons, nor buttons that do not successfully complete a task.

√ Show actions at inappropriate times (example: change password form when a user is not signed in).

√ Forms not clearing at appropriate times (example: sign up form not 
clearing after success).

√ Use alerts for anything.

√ Display errors or warnings in the console.

√ Display debugging messages in the console.