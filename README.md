# Portfolio Page with Next.js, Sanity Studio, and Tailwind CSS

Welcome to my portfolio repository! This project is a dynamic portfolio website built using Next.js, Sanity Studio, and Tailwind CSS. It allows you to showcase your recent projects and easily add new pages or projects through Sanity CMS.

##  Table of Contents
  - [Features](#features)
  - [Demo](#demo)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Deployment](#deployment)


## Features

- **Dynamic Content:** Easily add and manage your projects and pages using Sanity CMS.
- **Responsive Design:** The website is responsive and looks great on all devices.
- **Customizable:** Tailwind CSS is used for styling, making it easy to customize the look and feel.
- **SEO-friendly:** Optimized for search engines with Next.js's SSR capabilities.
- **Fast Loading:** Utilizes Next.js for server-side rendering and optimal performance.
- **Open Source:** Feel free to fork and modify this project for your own portfolio.

## Demo
[Demo](https://next-personal-website-timur.vercel.app/)

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm or yarn)

To use Sanity CMS you can create a free [Sanity.io Account](https://www.sanity.io/).


### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/timurbuch/next-personal-website.git
   cd next-personal-website

2. Install the dependencies
    ```bash
    npm install
    # or
    yarn install

3. Set up Sanity Studio:

    Create a new Sanity project on the Sanity.io dashboard.

    Update the **sanity.config.ts** and the **client-config.ts** file with your project ID and dataset name.

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev

5. Access the Sanity Studio at http://localhost:3000/admin and  configure your content types and add your portfolio projects.

6. Customize your portfolio page by modifying the pages and layouts in the **(site)** directory.

## Deployment
To deploy your portfolio website, you can use services like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any other hosting platform that supports Next.js. 
The [Demo](#demo) is deployed on Vercel.