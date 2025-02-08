# Inshorts-Style News App

This project is a React-based web application that mimics the functionality of the Inshorts news app. It displays news articles in a card format, allowing users to swipe or use arrow keys to navigate between articles.

## Features

- Fetches news data from a local API
- Displays news articles in a card format with image, title, and description
- Supports navigation between articles using swipe gestures and arrow keys
- Responsive design that works on both desktop and mobile devices
- Displays author information, publication date, and time since last update

## Technologies Used

- React
- styled-components for styling
- axios for API requests
- react-swipeable for swipe gestures

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/inshorts-style-news-app.git

2. Navigate to the project directory:
cd inshorts-style-news-app  

3. Install the dependencies:
npm install

4. Start the development server:
npm start

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Setup

This app expects a local API running on `http://localhost:3001/news`. Make sure you have a backend service running that provides news data in the following format:

[
{
"title": "News Title",
"description": "News Description",
"photo": "URL to news image",
"author": "Author Name",
"date": "Publication Date",
"location": "News Location",
"updatedAt": "2023-05-10T12:00:00Z"
},
...
]
## Usage

- Swipe up or press the up arrow key to view the next news article
- Swipe down or press the down arrow key to view the previous news article

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

