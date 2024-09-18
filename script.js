console.log("hello 22 ");

const rootDiv = document.getElementById("root");

const root = ReactDOM.createRoot(rootDiv);   //virtual dom



const MyReactApp = () =>{

    return(
    <div>
        <hr />
         <h1>Learn Web Development</h1>
         <div>
        <p className ="data_size">
         ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library. It was developed by Facebook and is widely used for creating dynamic and interactive web applications. In this article, we’ll explore the key concepts of React.
         </p>
         </div>

         <div>
         <p className ="data_size">
         ‍What is React ?
         React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the <a href="#"> Virtual DOM </a> (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.
         </p>
         </div>
         <div>
         <p className ="data_size">
         History of React
            React was invented by Facebook developers who found the traditional DOM slow. By implementing a virtual DOM, React addressed this issue and gained popularity rapidly.
            The current stable version of ReactJS is 18.2.0, released on June 14, 2022. The library continues to evolve, introducing new features with each update.
            </p>
         </div>
    </div>
   
)
        
    
    
};

//render function called 
root.render(

    <MyReactApp />
)