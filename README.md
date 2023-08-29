# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# E-Commerce React Application

Welcome to the E-Commerce React Application! This project is built using React and Vite, with TailwindCSS for styling. It utilizes the `react-router-dom` library for routing, and various React hooks including `useState`, `useEffect`, and `useContext` for managing the application's state. The project makes use of icons from [Heroicons](https://heroicons.com/), and fetches product data from the [FakeStore API](https://fakestoreapi.com/).

## Features

### Product Categories and Routes

The application offers separate routes for different product categories, achieved using `react-router-dom`. Each category displays products fetched from the FakeStore API.

### Side Menu for Product Details

The project includes a side menu to showcase detailed information about each product. This enhances user experience by providing more information about a product without navigating away from the current page.

### Global State Management with useContext

The application utilizes the `useContext` hook for efficient global state management. The global context includes:
- Counter for products in the cart.
- Side menu with details of a specific product.
- Shopping cart management, including adding, deleting, and preventing duplicate products.
- Calculation of the total price of products in the cart.

### Shopping Cart and Checkout

The shopping cart functionality allows users to:
- Add products to the cart.
- View the cart through a side menu.
- Avoid adding duplicate products to the cart.
- Remove products from the cart.
- Calculate and display the total price of products in the cart.

The checkout process enables users to finalize their purchase orders. Orders are listed for reference, and each order can be viewed on a dedicated page.

### Search and Filtering

A search bar is implemented to facilitate easy filtering of products based on their title and category.

## Getting Started

### Prerequisites

- Node.js and npm are required to run this application.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/romerolae/ecommerce-2023.git
   ```
2. Navigate to the project directory:

    ```sh
        cd your-repo
    ```
3. ```sh
  npm install
   
   ```
4. Running the application
    ```sh
    npm run dev
    
    ```
### Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in CONTRIBUTING.md.

### Contact
For any inquiries or feedback, feel free to reach out to romerolae@gmail.com or connect with me on LinkedIn.

