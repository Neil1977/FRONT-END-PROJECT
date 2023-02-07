# FRONT-END-PROJECT - DRAFT

PROJECT:
Useful tool for future? – KSB display and search app/evidence tracker etc - FLESH THIS OUT FURTHER, GOOD LOOK AT KSB SITE AND THINK ABOUT WHAT VALUE I WILL BE CREATING HERE AND NEEDS REPRESENTING - FUNCTIONALITY?/END GOAL? - TASK 1

AMEND TIERS BELOW TO REFLECT THIS - TASK 2

Meramaid wireframe - Create - TASK 4

Convert KSBs to JSON file - TASK 5 - RESEARCHING TOOLS BELOW - SEE ALSO EXISTING RAW PACKAGE.JSON FILE

Display using REACT - Task 6

Resources:

KSBs - Software developer / Institute for Apprenticeships and Technical Education! https://www.instituteforapprenticeships.org/apprenticeship-standards/software-developer-v1-1

https://docs.google.com/document/d/1i4nl5qcE4Su4cGID3-WcM19D52SKerHjzg5cUQ0MgjU/edit#heading=h.6ectn7wd6qx2 - LINK THIS SOMEHOW ALSO?

MERMAID –(Markdown Preview Plugin) - INSTALLED! (For wireframe etc)

https://codebeautify.org/blog/how-to-create-json-file/

https://jsonformatter.curiousconcept.com/

https://www.youtube.com/watch?v=iiADhChRriM&t=11s

https://www.atlassian.com/agile/project-management/user-stories

https://asana.com/templates/for/engineering - (May not need this as solo project/Projects on Github would be better anyway?)

https://www.atlassian.com/agile/tutorials/issues - (May not need this as solo project/Projects on Github would be better anyway)

https://github.com/Neil1977/FinalProject-ToDoList - Final project repo from bootcamp (for MVP format etc - vanilla only)

https://stirring-puffpuff-36090a.netlify.app/ - Bootcamp end project app (for inspiration - similar theme? - see above)

https://directlinegroup-my.sharepoint.com/:p:/g/personal/lunb_directlinegroup_co_uk/EVBNqqvNXqFGiyloWj0Kon0BRJFeNnhKp0tFzLuDD8GdiQ?e=OZcS9g - Bootcamp end project Powerpoint link (for inspiration/format - recording this time though)

https://www.tutorialfunda.com/reactjs/setup-create-react-app-in-visual-studio-code/ - Create React app?

https://www.tutorialfunda.com/reactjs/setup-react-js-project-with-next-js-vs-code/ - React.js?





SYSTEM REQUIREMENTS:

REACT.js or Create-react-app? - see above links  - npm install / npx create-react-app my-app / npm start /
npm install react react-dom next –save /  npm init -y / npm run dev -  should be hosted at http://localhost:3000/

NODE.js - https://nodejs.org/en/download/

LOCAL STORAGE? (Netlify etc?)




Tiers to hit: (To amend to MVP etc)

#Tier 1 - MVP application - Index page (or Home page) with Styled Components (CSS Framework)
Fetch a list of things and display them nicely using a CSS Framework of styled Components.
• As a user, I want to see the data nicely organized, so that I can consume and interact with it.
• As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.

#Tier 2 - Client-Side Routing
Implement routing to access different pages in the application. It’s ok if there’s no Nav bar yet, that can be handled in a later tier
• As a user, I want to see the URL change as I move through different parts of the application, so that I can bookmark my favorite page and share it with friends.
• As a user, I want the app to be dynamic and interactive, so that I can enjoy my time using the app.
• As a user, I want the app to dynamically and quickly swap the content out on the page when I’m navigating to another section of the app, so that the page doesn’t refresh and it feels like a better and faster experience.

#Tier 3 - Dynamic Routes - Show Page
Add nested routes using query params e.g. /cats/:name and render a Show page (or, details page, etc.) about that specific queried thing. (i.e. /cats/fluffykins should show all the details about the cat named fluffykins).
• As a user, I want to view details about a single thing, so that I can learn more about it.
• As a user, I want the URL to change to include the thing I’m looking at, so that I can bookmark the page and share it with friends.

#Tier 4 - Global State & Search/Filter
Store some data globally in state (i.e. context) and share it between multiple components. i.e. user enters input in one component and the value from the input is used elsewhere to filter a list. This is purely a “behind-the-scenes” piece of functionality, and it’s difficult to write a user story for how this works, but here’s an example of how that could work.
• As a user entering a value in an input, I want the list of things to be filtered based on the value I entered.

#Tier 5 - Navigation (Nav Bar)
Since we should already have multiple routes and navigation functionality, let’s add an app-wide Nav bar to connect those routes.
• As a user, I want to see a convenient and user-friendly Nav bar, so that I can easily navigate my way around the app.

#Tier 6 - Unit Tests
Implement Jest & Testing-Library/React (or appropriate framework) unit tests for components.
Verify components are rendering as expected, dynamic components update accordingly, modifying props changes functionality, etc

#Tier 7 - Accessibility
Using the Lighthouse feature of Chrome-based browsers, verify your Accessibility is in the Green!

Potential barriers:


