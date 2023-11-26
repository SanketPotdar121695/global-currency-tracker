# Global Currency Tracker

This individual project is a representation of a currency identification application. Global Currency Tracker serves to identify various countries using a particular currency. A user can search for a specific currency to know the countries using that currency.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Disclaimer](#disclaimer)

## Description

Global Currency Tracker is currency identifying application, that helps people to know the countries using their desired currencies. It has a unique responsive design, which is appealing to the eyes. A user can search any currency and a list of countries using that currency will be shown on the webpage.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite"/> 
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> 
</p>

<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>

## Features

- Search a currency to identify countries that uses the currency
- Navigate through paginations
- User-friendly interface
- Responsive UI, compatible with tables and mobile devices
- Security features; such as, script injection preventions, JSON injection preventions, etc.
- Use of proxy to secure the backend API (Development)

## Installation

1. Clone the repository

```bash
git clone https://github.com/SanketPotdar121695/global-currency-tracker
```

2. Install dependencies

```bash
npm install
```

3. Start the project

```bash
npm run dev
```

4. Access backend routes from the frontend url (Development)

- You can access backend routes from the frontend url using the endpoints starting from '/v3.1'

```javascript
http://frontend_url:port/v3.1
```

### Example:

- To fetch the countries that uses dollar:

```javascript
http://frontend_url:port/v3.1/currency/dollar
```

- Note: If you are using the deployed URL, then you should use 'https' protocol instead of 'http' protocol.

## Usage

1. Search a currency to identify countries that uses the currency
2. Navigate through paginations

## Screenshots

<div align="center">
  <h3>Home Page</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/629a9b94-8a88-4f00-a518-d02339a540a2" alt="homepage_desktop" width="800">
</div>

<div align="center">
  <h3>Search Results</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/e69c415f-bf2e-4349-89dc-219a159157f8" alt="search_results_desktop" width="800">
</div>

<div align="center">
  <h3>Pagination</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/192e4c52-c949-4a41-af9f-40537a4856b0" alt="pagination_desktop" width="800">
</div>

<div align="center">
  <h3>Tablet View</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/eca37e18-e033-486e-8799-3c66c2630567" alt="homepage_tablet_landscape" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/3e4f1a4b-8aba-4c58-910a-c05d62049267" alt="search_results_tablet_landscape" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/407c06cc-e75d-4174-b9a3-fe67fd0ab873" alt="pagination_tablet_landscape" width="800">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/998cdebf-5c7b-47fd-9fcb-766efbb91e69" alt="homepage_tablet_portrait" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/1f007c6e-66fc-47d9-a823-638a874ec605" alt="search_results_tablet_portrait" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/2e0c5db5-9f05-4553-a44f-467a62f106b7" alt="pagination_tablet_portrait" width="700">
</div>

<div align="center">
  <h3>Mobile View</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/f791a9d3-a3d5-41f9-912a-f93d48b3ac48" alt="homepage_mobile" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/c11d8d1f-f29f-480b-b094-2676361ebcce" alt="search_results_mobile" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/17538c68-68d4-41da-a01c-06dc0975a49c" alt="pagination_tablet_mobile" width="700">
</div>

## Demo

Check out the demo <a href="https://global-currency-tracker.netlify.app/" target="_blank">here</a>

## Disclaimer

This project is developed completely with new UI/UX ideas for educational purposes only and is not affiliated with or endorsed by the original website or its owners. The project was created solely for the purpose of learning and practicing web development skills and should not be used for any commercial or unauthorized purposes. All rights reserved.
