angular.module('MyApp')
	.factory('Degree', [function() {
		return {
			// Test degrees, should be loaded from a database
			degrees: [
				{
					id: 0,
					name: 'Computer Science (CS)',
					startingWith: 'CS 115',
					semester: 'Fall 2015'
				},
				{
					id: 1,
					name: 'Cybersecurity (CyS)',
					startingWith: 'CS 105',
					semester: 'Fall 2015'
				}
			],

			getDegrees: function() {
				return this.degrees;
			},

			getDegree: function(degreeId) {
				// TODO - error checking
				return this.degrees[degreeId];
			},

			addDegree: function(degree) {
				// TODO
			},

			editDegree: function(degree) {
				this.degrees[degree.id] = degree;
			},

			deleteDegree: function(degree) {
				// TODO
			}
		};
	}]);
