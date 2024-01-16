# Google Maps API Caller

This project is a simple Node.js application that uses the Google Maps API to fetch reviews of a specific place. It uses Express.js to handle HTTP requests and the `@google/maps` package to interact with the Google Maps API.

The application provides an endpoint (`/reviews/{placeid}`) that accepts a place ID as a parameter and returns the reviews for that place. The `{placeid}` in the URL needs to be replaced with the actual ID of the place.

The application is designed to be easy to use and extend. It's a great starting point if you're looking to integrate Google Maps into your own Node.js applications.

## Features

- Fetches reviews for a specific place from Google Maps.
- Handles HTTP requests using Express.js.
- Allows Cross-Origin Resource Sharing (CORS) from any origin.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Step 1: Install the project dependencies by running the following command in your terminal:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

   or

   ```bash
   pnpm install
   ```
2. Step 2: Run the project by executing the following command:

   ```bash
   node index.js
   ```
3. Step 3: Open your web browser and navigate to the following URL:

   ```
   http://localhost:3000/reviews/{placeid}?key={apikey}
   ```

   Replace `{placeid}` with the desired place ID and `{apikey}` with your API key.

## Usage

To call the Google Maps API and get reviews from it for your website

## Contributing

We welcome contributions to improve the project! To contribute, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the code passes all tests.
4. Commit your changes and push them to your forked repository.
5. Submit a pull request to the main repository, explaining the changes you made.

Please note that all contributions are subject to review and approval by the project maintainers. We appreciate your help in making this project better!

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

You can find a copy of the license in the [LICENSE](LICENSE) file.
