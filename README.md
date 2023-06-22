<br/>
<p align="center">
  <a href="https://github.com/Daniel-Xie-Dev/Resume_Parser">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HR Automation Tool</h3>

  <p align="center">
    A full-stack application that allows employers to automate resumes.
    <br/>
    <br/>
    <a href="https://github.com/Daniel-Xie-Dev/Resume_Parser"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/Daniel-Xie-Dev/Resume_Parser">View Demo</a>
    .
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/Daniel-Xie-Dev/Resume_Parser/total) ![Contributors](https://img.shields.io/github/contributors/Daniel-Xie-Dev/Resume_Parser?color=dark-green) ![Issues](https://img.shields.io/github/issues/Daniel-Xie-Dev/Resume_Parser) ![License](https://img.shields.io/github/license/Daniel-Xie-Dev/Resume_Parser) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

In today's fast-paced world, where companies receive an overwhelming number of applicants, ranging from thousands to even millions in a year, it has become crucial to find a more efficient way of reviewing each candidate.

This project aims to simplify the applicant review process by using advanced technology to parse resumes and extract key information. This includes details like names, locations, contact information, and skills—everything that helps paint a clear picture of each applicant.

To make things even easier, the project includes a user-friendly frontend where applicants can submit their resumes in PDF format hassle-free.

By utilizing the parsed information, hiring managers can quickly sort through applicants based on important criteria and determine if they are a good fit for the company. They can then dive deeper into the resumes of selected candidates and make well-informed decisions.

With this project , the applicant review process becomes more streamlined and efficient, allowing companies to navigate the sea of applicants with ease while identifying the most promising talents.

This project encompasses a range of features, including:
+ Uploading resume : Allow applicants to easily upload their resumes in PDF format through a user-friendly interface
+ View submitted resumes: Enable hiring managers to access and view the resumes that have been submitted by applicants.
+ Sort applicants : Empower hiring managers to efficiently organize and categorize applicants based on key information.
+ Search applicants : Facilitate a quick and targeted search functionality for hiring managers to find specific applicants.

## Built With

+ ReactJS
+ NodeJS
+ Express
+ MongoDB


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

```sh
npm install npm@latest -g
```

* Creating a free MongoDB cluster
```sh
1. Log in to your MongoDB Atlas account at https://cloud.mongodb.com.
2. Click on the “Create” button.
3. Choose your cluster type (dedicated, serverless, shared).
4. Choose your cloud provider and region.
5. Click on “Create cluster.”
```


### Installation

1. Clone the repo

```sh
git clone https://github.com/Daniel-Xie-Dev/Resume_Parser.git
```

3. Install NPM packages in front end and backend

```sh
Switch to "./public" directory and in a terminal type npm install
Switch to "./back-end" directory and in a terminal type npm install
```

4. Go to the "./back-end" directory and create a file called .env
5. In the .env file, insert MONGOURI=
6. Replace with a connection to your database. Follow the instruction below.

```sh
https://www.mongodb.com/docs/atlas/driver-connection/
```

7.Running the application
```sh
Switch to "./public" directory and in a terminal type npm start
Switch to "./back-end" directory and in a terminal type node index.js
```


## Contributing



### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Daniel-Xie-Dev/Resume_Parser/blob/main/LICENSE.md) for more information.

## Authors

* Daniel Xie - *Software Engineer* - [Daniel Xie](https://github.com/Daniel-Xie-Dev) - *Designed, built, and tested project.*

## Acknowledgements

* [Daniel Xie](https://github.com/Daniel-Xie-Dev)

