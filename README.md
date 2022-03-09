# Term Bank

![mern-stack](https://user-images.githubusercontent.com/32976268/157532796-10f456b5-3dfd-4094-b5b5-029115d4a817.png)
(https://www.mindinventory.com/blog/wp-content/uploads/2021/06/mern-stack.png)


TermBank is an application that allows users to store and categorize terms and definitions. Users may easily create and delete
these selections, and the backend data will reflect these operations.

I decided to build this project because I find it helpful to categorize the new vocabulary I learn every day in one place.
Before, I would sloppily define a new word I learned on a notebook page or a book I am reading and would have trouble locating it again.

This project propeled my interest in becoming a full-stack developer who can make robust web applications using flexible technology
such as React.

## Dashboard

When the root component for the project is loaded, an API request is sent to the database and displays all existing entries.

![term-bank-select-all](https://user-images.githubusercontent.com/32976268/157533526-e5c992e5-5287-45e4-bd5e-03611e9ee69c.png)


## Filtering

Users may filter a list of all existing entries by category, to easily retrieve information that is important to them.

![term-bank-sort-category](https://user-images.githubusercontent.com/32976268/157533618-79af0f91-c217-4515-b3e7-ed8baa237404.png)


## Card

This project follows a component-based architecture that allows me to reuse chunks of JSX code and its added functionality throughout
the entire web page. The `Card` component is a container of information sent as a prop from API endpoint requests. The information
is neatly displayed and has added functionality such as a hover effect!

![term-bank-hover](https://user-images.githubusercontent.com/32976268/157534096-b8d84732-7927-479f-bdb1-b55681901368.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
