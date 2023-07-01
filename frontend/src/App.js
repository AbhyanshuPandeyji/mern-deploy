import './App.css';
import {useState , useEffect} from "react"

function App() {

  const [message ,  setMessage] = useState("");


  // fetching message from backend
  useEffect(()=>{
    // usually we use the redux and axios method for single and cleaner file 
    // fetch("http://localhost:4000") // our backend port number  // this will be before the render url or the hosting url
    fetch("https://mern-deploy-34e4.onrender.com") // this will be after the backend deploy - the url for taking data will now be from the render to backend database
    .then((res)=> res.json()) // taking in the response message send by the backend 
    .then((data)=> setMessage(data.message)) // taking that message and setting it up as the message in the app
  })

  return (
    // utilizing the message from the backend 
    <div className='App'>
      <h1>{message}</h1>
    </div>
  );
}

// delete the boiler plate files and code 
// delete the git folder inside the client - helps to prevent the conflicts during deployment
// setup root folder for deployment - npm init -y
// now add git ignore file
// now setup some scripts in the package.json of your root file - remember the different app with different things using can have different scripts for the deployment - 
// this is just a starter template for deploy - if you use the redux and different middleware it will require the devtools stop , cors for selecting the right url for running , different deployment and running server commands 
// different scripts and some more packages to install for deploy of the app - but that for the future this is an app at base level to see how apps are deployed - you can learn more from  dave gary or jhon smilga
// create a readme file for better reading
// now continue the app  
/* scripts in the package.json file of root folder - remember the keys are the access point and the values are the applied ones , you can change the name of the keys , but the values should match your actual app names and files to be designated and to be targeted
    "install-server": "cd backend && npm install",
    "start-server": "cd backend && node app.js",
    "install-client": "cd client && npm install",
    "build-client": "cd client && npm run build",
    "start-client": "cd client && npm run start",

    These scripts allow us to install our server and client dependencies, start our server and client separately, and build our client for deployment.


*/


// now creating the github repository - add and commit by using the commands metioned on the site
/*
Creating GitHub Repository
After adding the necessary scripts to your package.json file, the next important step is to host your code on a version control platform like GitHub.
So, create a new repository on github.com and then follow this steps on your terminal:

Add all the files to the staging area using the command git add .
Commit the changes using the command git commit -m "initial commit"
Add your GitHub repository as a remote using the command git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git. Make sure to replace "YOUR_USERNAME" and "YOUR_REPOSITORY_NAME" with your actual GitHub username and repository name.
Rename master branch to main branch using git branch -M main
Push your code to the repository using the command git push -u origin main.
*/


// deploy on render
/*
  web service
  Name: YOUR_DESIRED_NAME
  Runtime: Node
  Build Command: npm run install-server
  Start Command: npm run start-server 
*/
// add environment variables 
// create the web service 


// frontend deploy to live process

/* then copy the backend render url of it to frontend url holder/ for this app just one place -fetch  - this is important b/c in bigger apps you are not going to add the backend url of hosting site
every where so first you will have the create an environment variable and use it all over the app - or you could define one place from where the frontend
will hit the url like the proxy - so if you add the backend url to the proxy the app will run on the port of the backend connected url and it will be able to take the data 
for bigger apps we will add the url in the frontend proxy 
in bigger app we will have to use the cors , the index selecting from the build , the selecting the url with if , and soo more things
*/

// after it commit the changes 
// then go to render again 

// deploy the frontend with the required fields
/*
not web services but a static site -  frontend  ( can be bit confusing )
Name: YOUR_DESIRED_NAME
Runtime: Node // is not present in the static site - pre build node version
Build Command: npm run install-client && npm run build-client // two build commands 
Publish directory: ./client/build // to know where the file is
*/











// now you also need to add the frontend url to the backend for its working

export default App;
