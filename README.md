# dpd-yeoman

[Deployd](http://deployd.com) API generator for yeoman.

## Status

Active Development

## Dependencies

 * [MongoDB](http://mongodb.org)
 * [Node](http://nodejs.org)
 * [Yeoman](http://yeoman.io) (npm install -g yeoman)

## Quick Start

	npm install -g dpd-yeoman
	mkdir myapp
	cd myapp
	yeoman init angular
	yeoman init deployd
	yeoman init deployd:collection title:string description:string
	mongod
	node server
	Open localhost:3501 in your browser to see the app
	Open localhost:3501/dashboard to see the deployd dashboard.
