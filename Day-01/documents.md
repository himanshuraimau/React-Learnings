Some information around react.


# Difference between a Library and Framework

A library is a collection of tools you use as needed, while a framework is a pre-defined structure where you build your entire project.



# CDN

CDN stands for Content Delivery Network. It is a distributed network of servers strategically located across various geographical locations to deliver web content, such as images, stylesheets, scripts, and other resources, more efficiently to users. The primary purpose of a CDN is to improve the performance, speed, and availability of web content for end-users.

Key features and reasons why CDN is used:

Faster Content Delivery:

CDNs reduce latency by serving content from servers that are physically closer to the user. This results in faster load times for websites and web applications.


Load Balancing:

CDNs distribute incoming traffic across multiple servers, preventing any single server from becoming overwhelmed with requests. This helps maintain consistent performance, especially during traffic spikes.


Caching:

CDNs cache static content (like images and scripts) at various edge locations. When a user requests the content, it can be served directly from the nearest edge server, reducing the load on the origin server and speeding up content delivery.


Global Availability:

CDNs have a distributed network of servers worldwide. This global presence ensures that users from different geographical locations can access content quickly, regardless of the physical location of the origin server.


Improved Scalability:

CDNs can handle large amounts of traffic and distribute it efficiently across their network. This helps websites and applications scale more easily to accommodate increased user demand.
Distributed Security:

CDNs can provide security features such as DDoS (Distributed Denial of Service) protection and web application firewalls, helping to mitigate potential security threats.


Bandwidth Savings:

By offloading the delivery of static resources to the CDN, there is a reduction in the amount of bandwidth consumed by the origin server. This can lead to cost savings and improved efficiency.

Reliability and Redundancy:

CDNs often have multiple servers in different locations, offering redundancy. If one server becomes unavailable, another can seamlessly take over, ensuring continuous availability of content.


# Why is React known as React?

React, the JavaScript library for building user interfaces, was developed by Facebook. The name "React" comes from the way it handles changes in the user interface - by reacting to them. Specifically, React is designed to efficiently update and render components based on changes in the application's state.




# What is crossorigin in script tag?

The crossorigin attribute in the script tag is used to control how browsers handle loading of scripts from different origins (domains) with regards to Cross-Origin Resource Sharing (CORS). CORS is a security feature implemented by web browsers to prevent unauthorized access to resources on a different domain.

When you include an external script in your HTML using the script tag, the browser may enforce the same-origin policy, which restricts scripts from making requests to a different domain than the one that served the original web page. The crossorigin attribute allows you to specify how the browser should handle loading the script when it is served from a different origin.



# What is diference between React and ReactDOM ?

React is the core library for building user interfaces, handling components, state, and rendering. ReactDOM, on the other hand, provides methods to interact with the actual DOM and render React components into it. While React can be used for other platforms (e.g., React Native for mobile development), ReactDOM is specific to web applications.



# What is difference between react.development.js and react.production.js files via CDN?

When you include React via a CDN (Content Delivery Network), you might notice that there are different versions of the React library for development and production environments. The primary differences between react.development.js and react.production.js files are related to performance optimizations, error handling, and file size.

<script src="https://unpkg.com/react@17/umd/react.development.js"></script>

<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>

It's common to use the development version during development for better debugging capabilities and then switch to the production version for deployment to ensure optimal performance.



# Difference between async and defer?


The async and defer attributes are used in HTML script tags to control how the associated JavaScript file is fetched and executed in the browser.

async Attribute:
Usage:

<script async src="example.js"></script>
Behavior:

The async attribute is used to make the script load asynchronously. This means that the script will be fetched in the background while the HTML parsing and rendering continue.
The script will be executed as soon as it is downloaded, without waiting for the HTML parsing to complete.
If there are multiple scripts with the async attribute, they may be executed out of order, depending on which one finishes downloading first.
Use Case:

It is useful when the script doesn't depend on other scripts or the order of execution is not critical.


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async Example</title>
</head>
<body>

  <!-- The script will load asynchronously -->
  <script async src="script1.js"></script>
  
  <!-- Other content of the HTML page -->

  <!-- This script may start executing before the HTML parsing is complete -->
  <script async src="script2.js"></script>

</body>
</html>
In the async example, script1.js and script2.js may execute out of order, depending on which one finishes downloading first.


defer Attribute:
Usage:

<script defer src="example.js"></script>
Behavior:

The defer attribute is used to make the script load deferred. The script will be fetched in the background, but its execution will be deferred until after the HTML parsing is complete.
Scripts with defer will be executed in the order they appear in the HTML.
Use Case:

It is useful when the script depends on the DOM structure and should be executed in order.


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Defer Example</title>
</head>
<body>

  <!-- The script will load deferred -->
  <script defer src="script1.js"></script>
  
  <!-- Other content of the HTML page -->

  <!-- This script will wait for HTML parsing to complete before executing -->
  <script defer src="script2.js"></script>

</body>
</html>

In the defer example, script1.js and script2.js will execute in the order they appear in the HTML, and both will wait for HTML parsing to complete.


# Behaviour of arrow function and a normal function in js


The behavior you've described is related to how the this keyword is handled in JavaScript, particularly in the context of arrow functions and regular functions.

Arrow Functions:
In arrow functions, the value of this is not dynamically scoped. Instead, it retains the value of this from the surrounding lexical scope. If an arrow function is defined within a global scope or a function where this is not explicitly set, it will capture the value of this from the global context, which is the window object in a browser environment.

javascript
Copy code
const arrowFunction = () => {
  console.log(this); // Points to the global object (window in a browser)
};

arrowFunction();
Regular Functions:
In regular functions, the value of this is dynamically scoped. It is determined by how the function is called. When a function is invoked as a method of an object, this refers to the object that the method is called on.

javascript
Copy code
const obj = {
  regularFunction: function() {
    console.log(this); // Points to the current object (obj)
  }
};

obj.regularFunction();
However, if a regular function is not called as a method of an object or if this is explicitly set using methods like bind, call, or apply, it may behave differently.

Example of Explicit Binding:
javascript
Copy code
function regularFunction() {
  console.log(this);
}

const explicitObj = { name: "Explicit Object" };

const boundFunction = regularFunction.bind(explicitObj);
boundFunction(); // Points to the explicitly bound object (explicitObj)
In summary, the behavior of this in arrow functions and regular functions is different. Arrow functions capture this from the surrounding lexical scope, which might lead to the window object if not explicitly set within a specific context. Regular functions dynamically determine this based on how they are invoked, with the possibility of being explicitly set using binding methods.