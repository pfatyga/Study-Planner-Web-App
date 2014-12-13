# Study Planner Web App

This is the repository for our Study Planner Web Application

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

## Unit Tests

	node test

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
        services/     - angular services
            auth.js       - authorization (login, logout)
            course-manager.js       - manages courses in system
            course-group-manager.js - manages course groups in system
            degree-manager.js       - manages degrees in system
		test/         - unit tests
		vendor/       - vendor javascript files
		views/        - templates
			admin/        - admin templates
			student/      - student templates
		app.js        -  main application module
		index.html    -  main template
    server.js  - simple node express server
