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
- Use of proxy to secure the backend API

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

4. Access backend routes from the frontend url

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
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/6e527990-34da-4202-897a-e327d538eabf" alt="homepage_desktop" width="800">
</div>

<div align="center">
  <h3>Search Results</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/8397ce28-020c-4bcd-9598-6e856f575395" alt="search_results_desktop" width="800">
</div>

<div align="center">
  <h3>Pagination</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/5988a974-5714-4ca6-b104-8d19aea077cc" alt="pagination_desktop" width="800">
</div>

<div align="center">
  <h3>Tablet View</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/cf87c3bd-dda5-4da7-91a6-35e57bc66940" alt="homepage_tablet_landscape" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/d8a8dae8-ca52-4308-9f0e-c2bc0d503363" alt="search_results_tablet_landscape" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/e343306f-c9f5-4384-a9bb-dadc3984bb9c" alt="pagination_tablet_landscape" width="800">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/67f39b9a-a604-44b3-9de0-87f386b115a3" alt="homepage_tablet_portrait" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/81c7bf2a-0f38-42d2-afe4-2da092a37e66" alt="search_results_tablet_portrait" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/f445a9a6-f2e0-4744-81b6-43d672dce842" alt="pagination_tablet_portrait" width="700">
</div>

<div align="center">
  <h3>Mobile View</h3>
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/f4e675b4-975c-483a-90fd-e0408eee4089" alt="homepage_mobile" width="400">
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/118d61d6-3bc5-49b3-bbf8-0eaf339101e4" alt="search_results_mobile" width="400">
  
  <img src="https://github.com/SanketPotdar121695/global-currency-tracker/assets/107460815/4e01159e-4036-4a4b-92f0-182153743d13" alt="pagination_tablet_mobile" width="700">
</div>

## Demo

Check out the demo <a href="https://global-currency-tracker.netlify.app/" target="_blank">here</a>

## Disclaimer

This project is developed completely with new UI/UX ideas for educational purposes only and is not affiliated with or endorsed by the original website or its owners. The project was created solely for the purpose of learning and practicing web development skills and should not be used for any commercial or unauthorized purposes. All rights reserved.
