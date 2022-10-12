import React from "react";
import Sidebar from "./Sidebar";


const Main = () => {
    return (

  <div>
  <div className="article">
    <p className="mycontainer">
    <h1> EXPLORE AND LEARN JSX</h1>
    <h2>
      WHAT IS JSX?
    </h2>
    <ul align = "left">
      <li>JSX stands for JavaScript XML</li>
      <li>JSX allows us to write HTML in React.</li>
      <li>JSX makes it easier to write and add HTML in React.</li>
    </ul>
    <h2 align= "left">WHY JSX?</h2>
    <p align = "left">React embraces the fact that rendering logic is inherently coupled with other UI logic:
       how events are handled, how the state changes over time, and how the data is prepared for display.
       Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
       React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>
    <h2 align="left">WHAT IS A JSX TEMPLATE</h2>
    <p>JavaScript XML is abbreviated as JSX. It's just a JavaScript syntax extension.
       It allows us to write HTML directly in React (within JavaScript code). 
       It is straightforward to generate a template in React using JSX, but it is not a simple
       template language; instead, it contains all of JavaScript's capability.
    </p>
    <h2>HOW TO ADD TEMPLATE?</h2>
    <ul>
      <li>Create a reactjs application.</li>
      <li>Add all of the css and js files to the project.</li>
      <li>For the admin template, create a header component.</li>
      <li>Create a component for the sidebar.</li>
      <li>Create one piece of content.</li>
    </ul>
    <h2>HOW TO CREATE A TEMPLATE</h2>
    <p>Create React App is a convienient way to start building a new single-page application in React. 
      Your app only needs one build dependency <span>react-scripts.</span>
       Under the hood it uses webpack, Babel, ESLint, and other amazing projects to power your app.</p>
       <h2>TESTING A TEMPLATE</h2>
       <p>To test a template locally, pass the file path to the directory of your template 
        source using the file: prefix.</p>
        <p id = "spann">npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]</p>
      <h2>THE <span> Template</span> Folder</h2>
      <p>This folder is copied to the user's app directory as Create React App installs. During this process, the file gitignore
         is renamed to <span>.gitignore.</span>
         You can add whatever files you want in here, 
         but you must have at least the files specified above.</p>
         <h2>The <span>template.json</span></h2>
         <p>This is the configuration file for your template. As this is a new feature, more options will 
          be added over time. For now, only a <span>package</span> key is supported.The<span> package</span> key lets 
          you provide any keys/values that you want added to the new project's <span>package.json</span>, 
          such as dependencies and any custom scripts that your template relies on.
          <h3>Below is an example "template.json" file:</h3></p>
          <img src = {require("../pic.png")} alt = "pic"/>
          <p>Any values you add for <span>"dependencies"</span> and<span>"scripts"</span>  will be merged with the Create
             React App defaults. Values for any other keys will be used as-is,
              replacing any matching Create React App defaults.
              For convenience, we always replace npm run with yarn in your custom <span>"scripts"</span>, 
              as well as in your README when projects are initialized with yarn.</p>
    </p>
    
    
  </div>

    <Sidebar />
    </div>
    )
};

export default Main;
