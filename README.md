# Zero-Trust Score Widget

Widget developed in Vue.js and Vuetify to display a Zero-Trust Score with individual metrics and observable data.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Code Structure](#code-structure)
7. [Future Improvements](#future-improvements)


---

### Project Overview

This widget is designed to visually represent a company's Zero-Trust Score. It displays the overall Zero-Trust Score, individual scores for each metric, and other observable security data. Each metric is displayed with a progress bar and an accompanying description, and a risk category is assigned based on the overall score.

### Features

- **Overall Zero-Trust Score**: Circular progress indicator for the main score.
- **Individual Metrics**: Progress bars for individual scores with descriptions.
- **Risk Category Indicator**: Displays risk level based on score.
- **Observable Data**: Additional security-related data is displayed with icons for boolean values.

### Technologies Used

- **Vue.js 3.x**
- **Vuetify** - Vue UI Library for material design components
- **JavaScript (ES6)**

### Setup and Installation

Since this project was built and tested on the [Vuetify Playground](https://play.vuetifyjs.com/), no local setup is required.

#### Steps to Run on Vuetify Playground:

1. Copy the code from this repository.
2. Open [Vuetify Playground](https://play.vuetifyjs.com/).
3. Paste the code into the editor and press "Run" to see the widget in action.

For a local setup with Vue and Vuetify:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zero-trust-widget.git
   cd zero-trust-widget
2. Install dependencies
    ```bash
    npm install
3. Run the development server:
    ```bash
  npm run serve
4. Open http://localhost:8080 in your browser to see the widget

##  Usage  
this widget can be used in dashboards or applications that require a visual representation of security scores.
* Data Loading: By default, the widget uses static data for demonstration purposes. In a production environment, you can replace the fetchData function with an API call to dynamically load the data.
### Code Structure
#### *App.vue: 
Main component that contains the widget layout and logic.
#### *fetchData():
Function that loads the data for the widget. It is currently set to return static data but can be modified to fetch from an external API.
### Future Improvements
#### *API Integration:
Replace the static fetchData with a real API endpoint.
#### *Dynamic Styling:
Add themes or styling options.
#### *Additional Data Validation:
Add checks to ensure data integrity.

   


