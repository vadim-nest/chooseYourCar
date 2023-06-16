# chooseYourCar

This application allows users to select a car make and colour, input a reference code, and then view a generated text based on their selections.

## Installation

Clone the repository:

bashCopy code

`git clone https://github.com/vadim-nest/chooseYourCar.git`

## Usage

Run the application:
```
cd choose-your-car
npm install
npm start
```

The application is then accessible at [http://localhost:3000](http://localhost:3000/) in your browser.

## Features

- Selection: The user can choose a car make and colour from provided dropdown menus. The choices are navigated through different routes.
- Input: The user can input a reference code.
- Output: The user is directed to a checkout page that displays a sentence based on their previous selections and input.

## Components

- App: The main component, containing routing and state management logic.
- SelectBox: A component for choosing the make and colour of the car.
- InputBox: A component for entering the reference code.
- Checkout: A component that displays a generated text based on user choices and input.

## Tech Stack

- React for frontend
- React Router for routing
- useState and useEffect hooks for state management and side effects
- CSS for styling

## License

This project is licensed under the terms of the MIT license.
