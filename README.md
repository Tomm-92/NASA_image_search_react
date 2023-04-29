# Technical Test - NASA Image Search

A react based web app which allows the user to access a NASA API and return images of space relating to their inputted search term.

Access a live version here: https://nasa-api-imagesearch.netlify.app

## Test Requirements

I was asked to build a React web application that allows users to search for images based on a query relating to space. The NASA API endpoint for was provided for the image search.

The following functionalities had to be implemented:

- A Search page which allows users to search for images by keyword
- Images must be returned upon a successful search

## Screenshots

![My Image](/public/Successful_search.png)
![My Image](/public/Unsuccessful_search.png)

## Technologies & Concepts Covered

- React inc. RTL
- Axios
- APIs
- Components
- Props
- Hooks - useState & useEffect
- Conditional rendering
- Multiple component mapping

## Installation

1 - Clone the repository to your local machine

```cli
git clone https://github.com/Tomm-92/techTest.git
```

2 - Navigate to the project directory

```cli
cd techTest
```

3 - Install the project dependencies

```cli
npm install
```

4 - Start the application

```cli
npm start
```

5 - View the application in the browser:

```cli
http://localhost:3000/
```

## Application Dependencies

        "dependencies": {
            "@testing-library/jest-dom": "^5.16.5",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0",
            "axios": "^1.3.4",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
        },

## Future Improvements

To update the image alt text in Search Results with the data returned from the API as opposed to the current generic 'space image' tag being used. The corresponding test will also need to be updated.

## Author

Tom Wilkinson - https://github.com/Tomm-92
