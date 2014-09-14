# Database Practicum (CS 443) Project: Study Planner Web App

This is the repository for the Database Practicum (CS 443) project.

## Build

Install [nodejs and npm](http://nodejs.org/).

Install bower with npm:

    npm install -g bower

Then:

	npm install
    bower install

## Run

	npm start

Then, go to `http://localhost:3000`

## Directory Layout

	public/
		controllers/  - angular controllers
			admin/        - admin controllers
			student/      - student controllers
			main.js       - main controller
		css/          - stylesheets
		directives/   - angular directives
		fonts/        - fonts
		js/           - non-angular javascript files
		vendor/       - vendor javascript files
		views/        - templates
			admin/        - admin templates
			student/      - student templates
		app.js        -  main application module
		index.html    -  main template
