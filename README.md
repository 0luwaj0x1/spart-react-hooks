# Spartez coding solution - Josiah Ilesanmi

Technology use:  React

Below are the details of the code architecture, Decisions.

## How to install 
Run `yarn install` to pull all dependencies.

## How to run

Run `yarn start` start the server at http://localhost:3000

This project requires to have the downloaded project running as server at http://localhost:9000

## Solution
1. The UI is broken down into smaller components, below is the components structure overview.
          * App component
              * SearchBar component
              * Product component
                  *Customer component

  index.js and its sytle main.css provides entry into the app.

2. State management: i have the options of using local state & props or a state managemant tool like redux. 
As much as i was tempted to use redux, i thought redux would be an overkill for a small application like this.
so i decided to use local state and props and a concept called Context in react.

The App component is the overall parent component contains two sibling component, the SearchBar and Product
  when the Product components mounts its fires a request to the server to fetch the products saved locally, loops the products 
  and renders the Customer component passing the product-id to the Customer component as prop.

Each Customer component uses the product-id to fetch its customers saved locally an renders them. Where it gets interesting is 
searching the Customer component from the SearchBar which is 2 levels deeps. To solve this i used a concept called called `Context`
in react. Becasue it can be pretty challenging passing props to components that are deeply nested, Context allows you to pass data 
froma a provider component, and a consumer component will have access to this data no matter how deeply nested without passing through props.

I defined a Search Context used the Provider in the App component to pass data to any of the children of Product component.

The SearchBar component its self is stateless, on change of the search input, it calls a function that calls a callback in the parent component. which is 
how react passes data from child to parent. The data passed from SearchBar to App is the value that is sent through to from the context provider which is made
available in the Customer component using the Context Consumer and this value is used to filter the customers.

There are other way to acheive the same thing. This method looks pretty neat and concise to tackle this particular problem.

3. I refactored the class `.products & .product` to used CSS grid which is great for responsive layout and also wrote a small media query to make it look perfect small devices.


Thank you (Dziękuję Ci😀).
Josiah Ilesanmi# spartez-react-classic
