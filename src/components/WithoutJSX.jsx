import React from "react";

const WithoutJSX = () => {

    //Without JSX

    //React.createElement contains 3 parameter
    //1. tag name
    //2. properties, e.g, className, id
    //3. content   

    //   return React.createElement( //to create element
    //     "div",
    //     { id: "dummyID", className: "dummyClass" },
    //     "Hello from without JSX"
    //   );

    //################################

    //to create nested elements 
    
    //   return React.createElement( //to create element
    //     "div",
    //     { id: "dummyID", className: "dummyClass" },
    //     React.createElement('h1', {id: 'h1'}, 'Hello from nested element') //nested element
    //   );

    //#################################

    //using JSX

    return (
        <div>
            <h1>Hello from Jsx</h1>
        </div>
    )

};

export default WithoutJSX;
