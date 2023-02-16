# FRONT-END-PROJECT - DRAFT

Notes only from learning recap before continuing task 4:
**React Bootstrap/React Functional components - Start again this way and restructure (struggling to proceed past task 4 below so reviewing approach)**
**Example to reference if needed - https://github.com/Jaardy/trivia/blob/main/src/App.js - Wk2 Recording also**

PROJECT:
Useful tool for future? – KSB display and search app/evidence tracker etc - FLESH THIS OUT FURTHER, GOOD LOOK AT KSB SITE AND THINK ABOUT WHAT VALUE I WILL BE CREATING HERE AND NEEDS REPRESENTING - FUNCTIONALITY?/END GOAL? - TASK 1 - COMPLETED
Ability to add notes/links to evidence for each etc?
Link in Portfolio guide somehow? (see link in resources below)

AMEND TIERS BELOW TO REFLECT THIS - TASK 2 - COMPLETED

Create REACT App - TASK 3 - COMPLETED

**Create Card component and render x 2 - TASK 4**

**CHECK IN WITH COACH AT THIS POINT**

Meramaid wireframe - Create - TASK 5
Wireframes submitted to coach for mock up design for your application

Include Testing - Task 6

Include WCAG accessability? - (very relevant based on content and usage) - https://www.w3.org/WAI/standards-guidelines/wcag/docs - Task 7
Minimum of 60 score, but aim higher for green

Presentation/Host & Record - Task 8
Max of 2 minutes per section
Max of 10 minutes total presentation

TO INCLUDE:
Walk through the app (deployed if possible)
Completed tiers
List page for a bunch of items / Show page for single item
Search for thing
Navigation & client-side routing (URL & query params)
Unit Tests
Accessibility Rating (from Lighthouse)
Bonus goals?

1st Segment:
Your best test(s)
Test success story
Saved you time
Prevented bugs

2nd Segment:
Overview of State management and Routes
What items are stored and shared in global state?
What does the routing hierarchy look like?
Are you using global state values to search and filter through other state?

3rd Segment:
Successful practices
Learning moment
What would you do differently

RECORDING:
Zoom - https://www.youtube.com/watch?v=P6cTbnUPwfY
Create a script for your video
Follow the order of your presentation
Do at least one “run through” of the presentation before you start recording
Upload to YouTube - https://www.youtube.com/watch?v=TrYVcY5hN5Q - **NEEDS PREMIUM ACCOUNT?**

Resources:
KSBs - Software developer / Institute for Apprenticeships and Technical Education! https://www.instituteforapprenticeships.org/apprenticeship-standards/software-developer-v1-1

https://docs.google.com/document/d/1i4nl5qcE4Su4cGID3-WcM19D52SKerHjzg5cUQ0MgjU/edit#heading=h.6ectn7wd6qx2 - **LINK THIS SOMEHOW ALSO? - Portfolio guide - see above**

MERMAID –(Markdown Preview Plugin) - INSTALLED! (For wireframe etc) - https://www.bing.com/videos/search?&q=mermaid+markdown+preview+youtube+guide&view=detail&mid=86AF1FED11FBAD3C871386AF1FED11FBAD3C8713&FORM=VDRVSR&ru=%2Fvideos%2Fsearch%3Fq%3Dmermaid%2Bmarkdown%2Bpreview%2Byoutube%2Bguide%26FORM%3DHDRSC4&ajaxhist=0 - **LINKS TO READ ME SOMEHOW?**

https://codebeautify.org/blog/how-to-create-json-file/ -
https://jsonformatter.curiousconcept.com/ - JSON formatter

https://www.youtube.com/watch?v=iiADhChRriM&t=11s - learn JSON in 10 mins - **DO I NEED 2 AS CREATED? (manifest.json created by react app set up, but have package.json already?)**

https://www.atlassian.com/agile/project-management/ - Guide to creating user stories/Agile/Scrum/Jira etc - **Not needed as solo project?**

https://github.com/Neil1977/FinalProject-ToDoList - **Final project repo from bootcamp (for MVP format etc - vanilla only though, link somehow all into this as per stretch goals on todolist?)**

https://stirring-puffpuff-36090a.netlify.app/ - Bootcamp end project app **(for inspiration - similar theme for this project for styling etc? - see above)**

https://directlinegroup-my.sharepoint.com/:p:/g/personal/lunb_directlinegroup_co_uk/EVBNqqvNXqFGiyloWj0Kon0BRJFeNnhKp0tFzLuDD8GdiQ?e=OZcS9g - **Bootcamp end project Powerpoint link (for inspiration/format - recording this time though)**

https://www.tutorialfunda.com/reactjs/setup-create-react-app-in-visual-studio-code/ - Create React app tutorial

Auditing with Lighthouse (ACCESABILITY CHROME ONLY!) - https://app.codingrooms.com/app/org/multiverse-k4VMnFm/course/uk-front-end-module-6yz6WrC/b/6.-exercise:-lighthouse-0qazFph

SYSTEM REQUIREMENTS:

Create-react-app - see above links - npm install / npx create-react-app my-app / npm start / npm run dev - should be hosted at http://localhost:3000/

Testing - https://app.codingrooms.com/app/org/multiverse-k4VMnFm/course/uk-front-end-module-6yz6WrC/b/5.-testing-react-components-l857RnV **CODING ROOMS FILE IS DIFFERENT TO setupTests.js (see comment there - which?)**
npm install -save-dev @testing-library/react jest
npm run start
npm run test

NODE.js - https://nodejs.org/en/download/

Hosting - https://www.netlify.com/
https://app.codingrooms.com/app/org/multiverse-k4VMnFm/course/uk-front-end-module-6yz6WrC/b/9.-deployment-Ah0UMYo - INSTRUCTIONS

Tiers to hit: (To amend to MVP etc)

#Tier 1 - MVP application - Index page (or Home page) with Styled Components (CSS Framework)
Fetch a list of things and display them nicely using a CSS Framework of styled Components.
• As a user, I want to see the data nicely organized, so that I can consume and interact with it.
• As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.
. As a user, want to be able to access individual KSBs and add notes/evidence/uploads (link portfolio guide also - see resources)

#Tier 2 - Client-Side Routing
Implement routing to access different pages in the application. It’s ok if there’s no Nav bar yet, that can be handled in a later tier
• As a user, I want to see the URL change as I move through different parts of the application, so that I can bookmark my favorite page and share it with friends.
• As a user, I want the app to be dynamic and interactive, so that I can enjoy my time using the app.
• As a user, I want the app to dynamically and quickly swap the content out on the page when I’m navigating to another section of the app, so that the page doesn’t refresh and it feels like a better and faster experience.

#Tier 3 - Dynamic Routes - Show Page
Add nested routes using query params e.g. /cats/:name and render a Show page (or, details page, etc.) about that specific queried thing. (i.e. /cats/fluffykins should show all the details about the cat named fluffykins).
• As a user, I want to view details about a single thing, so that I can learn more about it.
• As a user, I want the URL to change to include the thing I’m looking at, so that I can bookmark the page and share it with friends.
• As a user, I want a clear add/edit/delete field for notes and ability to upload document evidence also.

#Tier 4 - Global State & Search/Filter
Store some data globally in state (i.e. context) and share it between multiple components. i.e. user enters input in one component and the value from the input is used elsewhere to filter a list. This is purely a “behind-the-scenes” piece of functionality, and it’s difficult to write a user story for how this works, but here’s an example of how that could work.
• As a user entering a value in an input, I want the list of things to be filtered based on the value I entered.

#Tier 5 - Navigation (Nav Bar)
Since we should already have multiple routes and navigation functionality, let’s add an app-wide Nav bar to connect those routes.
• As a user, I want to see a convenient and user-friendly Nav bar, so that I can easily navigate my way around the app. (Navigation is fine on KSB website so copy and amend format but make more MV branded etc?)

#Tier 6 - Unit Tests
Implement Jest & Testing-Library/React (or appropriate framework) unit tests for components.
Verify components are rendering as expected, dynamic components update accordingly, modifying props changes functionality, etc

#Tier 7 - Accessibility
Using the Lighthouse feature of Chrome-based browsers, verify your Accessibility is in the Green!

Potential barriers: Me and my brain!
