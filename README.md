# React Coding Challenge

This project is the react coding challenge for DEUS.AI. It is a blog with the following features:  
  
- Users can view posts list sorted by date
- Users can search queries throughout all posts
- Users can change the posts list layout (Grid and List)
- Users can change language between english and portuguese
- Users can view a single post page
- Users can read, create, update and delete comments
- Users can reply to comments and perform the same CRUD operations to the replies


## Installing

To install dependencies run:

```
npm install
```

### Executing program  

To run the project you need to first start the server by running the following command:

```
npm run server
```
Then start the client by running:

```
npm run dev
```
Then open `localhost:5173` in your browser to see the result.

### Commands

- `dev`: runs the application on `localhost:5173`
- `server`: starts the server using json-server
- `build`: creates the production build version
- `test`: runs vitest to test components and pages
- `test:w`: runs vitest on watch mode
- `test:e2e`: runs cypress to perform e2e tests
- `generate`: runs plop to generate a component structure