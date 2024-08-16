# Short News Website

A React-based web application that displays short news articles using the Currents API. The website fetches and displays news articles by category and provides pagination controls to navigate through the news.

## Features

- Fetch and display news articles by category and country.
- Pagination controls to navigate between pages.
- Responsive design with Tailwind CSS for modern UI.
- Dark mode support using Material-UI.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/shortNewz-Project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd shortNewz-Project
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Select a News Category:**
   - Use the `NavBar` component to choose from various news categories (e.g., Business, Sports, Technology).

2. **Navigate Through Pages:**
   - Use the pagination controls in the `Newscontent` component to browse through different pages of news articles.

## Project Structure

- **`src/`**: Source files for the application.
  - **`components/`**: Reusable React components.
    - `NavBar.js`: Navigation bar for selecting news categories.
    - `Newscontent.js`: Displays news articles and pagination controls.
    - `Newscard.js`: Displays individual news articles.
  - **`App.js`**: Main application component that fetches news and renders `NavBar` and `Newscontent`.
  - **`index.js`**: Entry point for the React application.

- **`public/`**: Public assets and HTML file.

- **`package.json`**: Project dependencies and scripts.

## API Reference

- **Currents API**: [Currents API Documentation](https://currentsapi.services/)

  - **Endpoint**: `https://api.currentsapi.services/v1/latest-news`
  - **Parameters**:
    - `country`: ISO 3166-1 alpha-2 country code (e.g., `us`, `in`).
    - `category`: News category (e.g., `business`, `technology`).
    - `apiKey`: Your API key.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. 

## Contact

- **Author**: CodeWithDeep0
- **Email**: singsandeep300@gmail.com
- **GitHub**: [CodeWithDeep0](https://github.com/CodeWithDeep0)

---
