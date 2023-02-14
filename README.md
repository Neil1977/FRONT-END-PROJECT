# FRONT-END-PROJECT - DRAFT

PROJECT:
Useful tool for future? – KSB display and search app/evidence tracker etc - FLESH THIS OUT FURTHER, GOOD LOOK AT KSB SITE AND THINK ABOUT WHAT VALUE I WILL BE CREATING HERE AND NEEDS REPRESENTING - FUNCTIONALITY?/END GOAL? - TASK 1
Ability to add notes/links to evidence for each etc?
Link in Portfolio guide somehow? (see link in resources)

AMEND TIERS BELOW TO REFLECT THIS - TASK 2

Meramaid wireframe - Create - TASK 4

Display using REACT - Task 6

Include Testing? - Task 7 - npm install -save-dev @testing-library/react jest

Include WCAG accessability? - (very relevant based on content and usage) - https://www.w3.org/WAI/standards-guidelines/wcag/docs - Task 8

Host & Record - Task 9

Resources:

KSBs - Software developer / Institute for Apprenticeships and Technical Education! https://www.instituteforapprenticeships.org/apprenticeship-standards/software-developer-v1-1

https://docs.google.com/document/d/1i4nl5qcE4Su4cGID3-WcM19D52SKerHjzg5cUQ0MgjU/edit#heading=h.6ectn7wd6qx2 - LINK THIS SOMEHOW ALSO - Portfolio guide - see above

MERMAID –(Markdown Preview Plugin) - INSTALLED! (For wireframe etc)

https://codebeautify.org/blog/how-to-create-json-file/

https://jsonformatter.curiousconcept.com/ - JSON formatter

https://www.youtube.com/watch?v=iiADhChRriM&t=11s - learn Json in 10 mins

https://www.atlassian.com/agile/project-management/user-stories - Guide to creating user stories

https://github.com/Neil1977/FinalProject-ToDoList - Final project repo from bootcamp (for MVP format etc - vanilla only though, link somehow all into this as per stretch goals on todolist?)

https://stirring-puffpuff-36090a.netlify.app/ - Bootcamp end project app (for inspiration - similar theme? - see above)

https://directlinegroup-my.sharepoint.com/:p:/g/personal/lunb_directlinegroup_co_uk/EVBNqqvNXqFGiyloWj0Kon0BRJFeNnhKp0tFzLuDD8GdiQ?e=OZcS9g - Bootcamp end project Powerpoint link (for inspiration/format - recording this time though)

https://www.tutorialfunda.com/reactjs/setup-create-react-app-in-visual-studio-code/ - Create React app tutorial

Auditing with Lighthouse (ACCESABILITY CHROME ONLY!) - https://app.codingrooms.com/app/org/multiverse-k4VMnFm/course/uk-front-end-module-6yz6WrC/b/6.-exercise:-lighthouse-0qazFph

SYSTEM REQUIREMENTS:

Create-react-app - see above links - npm install / npx create-react-app my-app / npm start / npm run dev - should be hosted at http://localhost:3000/

Testing - npm install -save-dev @testing-library/react jest
npm run start
npm run test

NODE.js - https://nodejs.org/en/download/

Hosting - https://www.netlify.com/

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
Need to cover this learning in coding rooms also wk6 (see task 8 above)

Potential barriers: Me and my brain!
