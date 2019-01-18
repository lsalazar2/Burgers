# Burgers
Burger Maker using Node with MYSQL &amp; ORM
# Eat Da Burger!
A Burger Devouring Application using: Node.js, Express, MySQL, Sequelize, Handlebars & Materialize

## Description

This app demos a simple full stack application with a front end with HTML/CSS and elements from the Materialize framework and the backend with Node.js and Express. HTML template is done with Handlebars. The data is stored in MySQL and manipulated with the [sequelize](https://www.npmjs.com/package/sequelize) package. 

The user may add any burger name to the menu. This adds the new burger entry into the MySQL database. The burger entry is added on the menu on the left side of the screen. The user may devour any burger by entering their name and clicking on the devour button. The *devoured* burger is then moved to the right.

## Demo

The demo of the burger eating application can be found [here](https://.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:lsalazar2/Burgers.git
	
Next, install the application dependencies.

	cd burgers
	npm install

Now run the node server locally.

node server

Now, open the local application on port 3000 at the URL: http://localhost:3306/.

Enjoy and have a burger!
Running Locally
To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

export PORT=3030
After the PORT environment variable has been set, run the Node.js application with the command below.

node server.js
The application will now be running locally on PORT, in this case that is port 3030. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:3030.

**Enjoy and have a awesome burger!**
