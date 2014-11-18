/*

CS001		none
CS002		none
CS003		none
CS004		none
CS005		((CS001 OR CS002) AND (CS003 OR CS004))
CS006		none
CS007		none
CS008		none
CS009		none
CS010		((CS006 AND CS007) OR (CS008 AND CS009))

*/

var courses = {
				'CS001': '',
				'CS002': '',
				'CS003': '',
				'CS004': '',
				'CS005': '((CS001 OR CS002) AND (CS003 OR CS004))',
				'CS006': '',
				'CS007': '',
				'CS008': '',
				'CS009': '',
				'CS010': '((CS006 AND CS007) OR (CS008 AND CS009))'
				};

var check_PreReqs_print = function(course_name, desired_course_prereqs, coursesTaken)
{
	var preReqTree = RequirementExpressionParser.parse(desired_course_prereqs);
	console.log("Courses Taken:");
	coursesTaken.forEach(function (course) {
		console.log(course);
	});
	preReqTree.checkPrereqs(coursesTaken) ? console.log(course_name + " YES") : console.log(course_name + " NO");
}

/*QUnit.test('Powerset', function(assert) {
	var subsets = powerset(['CS001', 'CS002', 'CS003', 'CS004', 'CS006', 'CS007', 'CS008', 'CS009']);
	console.log(JSON.stringify(subsets));
	assert.ok(subsets.length == 256, JSON.stringify(subsets));
});

QUnit.test('Check Prereqs CS005', function(assert) {
	var subsets = powerset(['CS001', 'CS002', 'CS003', 'CS004', 'CS006', 'CS007', 'CS008', 'CS009']);
	subsets.forEach(function (subset, index) {
		console.log("Test #" + (index+1));
		check_PreReqs_print("CS005", courses["CS005"], subset);
		console.log("");
	});
	assert.ok(true, 'Passed!');
});

QUnit.test('Check Prereqs CS010', function(assert) {
	var subsets = powerset(['CS001', 'CS002', 'CS003', 'CS004', 'CS006', 'CS007', 'CS008', 'CS009']);
	subsets.forEach(function (subset, index) {
		console.log("Test #" + (index+1));		
		check_PreReqs_print("CS010", courses["CS010"], subset);
		console.log("");
	});
	assert.ok(true, 'Passed!');
});*/


var set1Courses = [
	{ number: 'CS11', prereqs: [] },
	{ number: 'CS12', prereqs: [] },
	{ number: 'CS13', prereqs: [] },
	{ number: 'CS14', prereqs: [] },
	{ number: 'CS15', prereqs: [] },
	{ number: 'CS21', prereqs: [] },
	{ number: 'CS22', prereqs: [] },
	{ number: 'CS23', prereqs: [] },
	{ number: 'CS24', prereqs: [] },
	{ number: 'CS25', prereqs: [] },
	{ number: 'CS31', prereqs: [] },
	{ number: 'CS32', prereqs: [] },
	{ number: 'CS33', prereqs: [] },
	{ number: 'CS34', prereqs: [] },
	{ number: 'CS35', prereqs: [] },
	{ number: 'CS41', prereqs: [] },
	{ number: 'CS42', prereqs: [] },
	{ number: 'CS43', prereqs: [] },
	{ number: 'CS44', prereqs: [] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: [] },
	{ number: 'CS52', prereqs: [] },
	{ number: 'CS53', prereqs: [] },
	{ number: 'CS54', prereqs: [] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: [] },
	{ number: 'CS63', prereqs: [] },
	{ number: 'CS64', prereqs: [] },
	{ number: 'CS65', prereqs: [] },
	{ number: 'CS71', prereqs: [] },
	{ number: 'CS72', prereqs: [] },
	{ number: 'CS73', prereqs: [] },
	{ number: 'CS74', prereqs: [] },
	{ number: 'CS75', prereqs: [] },
	{ number: 'CS81', prereqs: [] },
	{ number: 'CS82', prereqs: [] },
	{ number: 'CS83', prereqs: [] },
	{ number: 'CS84', prereqs: [] },
	{ number: 'CS85', prereqs: [] }
];

var set2Courses = [
	{ number: 'CS11', prereqs: [] },
	{ number: 'CS12', prereqs: [] },
	{ number: 'CS13', prereqs: [] },
	{ number: 'CS14', prereqs: [] },
	{ number: 'CS15', prereqs: [] },
	{ number: 'CS21', prereqs: ['CS11'] },
	{ number: 'CS22', prereqs: ['CS12'] },
	{ number: 'CS23', prereqs: ['CS13'] },
	{ number: 'CS24', prereqs: ['CS14'] },
	{ number: 'CS25', prereqs: ['CS15'] },
	{ number: 'CS31', prereqs: ['CS21'] },
	{ number: 'CS32', prereqs: ['CS22'] },
	{ number: 'CS33', prereqs: ['CS23'] },
	{ number: 'CS34', prereqs: ['CS24'] },
	{ number: 'CS35', prereqs: ['CS25'] },
	{ number: 'CS41', prereqs: ['CS31'] },
	{ number: 'CS42', prereqs: ['CS32'] },
	{ number: 'CS43', prereqs: ['CS33'] },
	{ number: 'CS44', prereqs: ['CS34'] },
	{ number: 'CS45', prereqs: ['CS35'] },
	{ number: 'CS51', prereqs: ['CS41'] },
	{ number: 'CS52', prereqs: ['CS42'] },
	{ number: 'CS53', prereqs: ['CS43'] },
	{ number: 'CS54', prereqs: ['CS44'] },
	{ number: 'CS55', prereqs: ['CS45'] },
	{ number: 'CS61', prereqs: ['CS51'] },
	{ number: 'CS62', prereqs: ['CS52'] },
	{ number: 'CS63', prereqs: ['CS53'] },
	{ number: 'CS64', prereqs: ['CS54'] },
	{ number: 'CS65', prereqs: ['CS55'] },
	{ number: 'CS71', prereqs: ['CS61'] },
	{ number: 'CS72', prereqs: ['CS62'] },
	{ number: 'CS73', prereqs: ['CS63'] },
	{ number: 'CS74', prereqs: ['CS64'] },
	{ number: 'CS75', prereqs: ['CS65'] },
	{ number: 'CS81', prereqs: ['CS71'] },
	{ number: 'CS82', prereqs: ['CS72'] },
	{ number: 'CS83', prereqs: ['CS73'] },
	{ number: 'CS84', prereqs: ['CS74'] },
	{ number: 'CS85', prereqs: ['CS75'] }
];

var set3Courses = [
	{ number: 'CS11', prereqs: [] },
	{ number: 'CS12', prereqs: [] },
	{ number: 'CS13', prereqs: [] },
	{ number: 'CS14', prereqs: [] },
	{ number: 'CS15', prereqs: [] },
	{ number: 'CS21', prereqs: ['CS11'] },
	{ number: 'CS22', prereqs: [] },
	{ number: 'CS23', prereqs: [] },
	{ number: 'CS24', prereqs: [] },
	{ number: 'CS25', prereqs: [] },
	{ number: 'CS31', prereqs: ['CS12'] },
	{ number: 'CS32', prereqs: ['CS21'] },
	{ number: 'CS33', prereqs: ['CS32'] },
	{ number: 'CS34', prereqs: [] },
	{ number: 'CS35', prereqs: [] },
	{ number: 'CS41', prereqs: [] },
	{ number: 'CS42', prereqs: [] },
	{ number: 'CS43', prereqs: ['CS22', 'CS33'] },
	{ number: 'CS44', prereqs: ['CS43'] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: ['CS32'] },
	{ number: 'CS52', prereqs: ['CS53'] },
	{ number: 'CS53', prereqs: ['CS14', 'CS54'] },
	{ number: 'CS54', prereqs: ['CS15', 'CS44'] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: ['CS51'] },
	{ number: 'CS63', prereqs: [] },
	{ number: 'CS64', prereqs: ['CS55'] },
	{ number: 'CS65', prereqs: ['CS54'] },
	{ number: 'CS71', prereqs: [] },
	{ number: 'CS72', prereqs: ['CS73'] },
	{ number: 'CS73', prereqs: ['CS74'] },
	{ number: 'CS74', prereqs: ['CS65'] },
	{ number: 'CS75', prereqs: [] },
	{ number: 'CS81', prereqs: [] },
	{ number: 'CS82', prereqs: ['CS62', 'CS72', 'CS81'] },
	{ number: 'CS83', prereqs: [] },
	{ number: 'CS84', prereqs: ['CS63'] },
	{ number: 'CS85', prereqs: [] }
];

var set4Courses = [
	{ number: 'CS11', prereqs: [] },
	{ number: 'CS12', prereqs: [] },
	{ number: 'CS13', prereqs: [] },
	{ number: 'CS14', prereqs: [] },
	{ number: 'CS15', prereqs: [] },
	{ number: 'CS21', prereqs: [] },
	{ number: 'CS22', prereqs: [] },
	{ number: 'CS23', prereqs: [] },
	{ number: 'CS24', prereqs: [] },
	{ number: 'CS25', prereqs: [] },
	{ number: 'CS31', prereqs: [] },
	{ number: 'CS32', prereqs: [] },
	{ number: 'CS33', prereqs: [] },
	{ number: 'CS34', prereqs: [] },
	{ number: 'CS35', prereqs: [] },
	{ number: 'CS41', prereqs: [] },
	{ number: 'CS42', prereqs: [] },
	{ number: 'CS43', prereqs: [] },
	{ number: 'CS44', prereqs: [] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: [] },
	{ number: 'CS52', prereqs: [] },
	{ number: 'CS53', prereqs: [] },
	{ number: 'CS54', prereqs: [] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: [] },
	{ number: 'CS63', prereqs: [] },
	{ number: 'CS64', prereqs: [] },
	{ number: 'CS65', prereqs: [] },
	{ number: 'CS71', prereqs: [] },
	{ number: 'CS72', prereqs: [] },
	{ number: 'CS73', prereqs: [] },
	{ number: 'CS74', prereqs: [] },
	{ number: 'CS75', prereqs: [] },
	{ number: 'CS81', prereqs: [] },
	{ number: 'CS82', prereqs: [] },
	{ number: 'CS83', prereqs: [] },
	{ number: 'CS84', prereqs: [] },
	{ number: 'CS85', prereqs: [] }
];

var set5Courses = [
	{ number: 'CS11', prereqs: [] },
	{ number: 'CS12', prereqs: [] },
	{ number: 'CS13', prereqs: [] },
	{ number: 'CS14', prereqs: [] },
	{ number: 'CS15', prereqs: [] },
	{ number: 'CS21', prereqs: [] },
	{ number: 'CS22', prereqs: [] },
	{ number: 'CS23', prereqs: [] },
	{ number: 'CS24', prereqs: [] },
	{ number: 'CS25', prereqs: [] },
	{ number: 'CS31', prereqs: [] },
	{ number: 'CS32', prereqs: [] },
	{ number: 'CS33', prereqs: [] },
	{ number: 'CS34', prereqs: [] },
	{ number: 'CS35', prereqs: [] },
	{ number: 'CS41', prereqs: [] },
	{ number: 'CS42', prereqs: [] },
	{ number: 'CS43', prereqs: [] },
	{ number: 'CS44', prereqs: [] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: [] },
	{ number: 'CS52', prereqs: [] },
	{ number: 'CS53', prereqs: [] },
	{ number: 'CS54', prereqs: [] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: [] },
	{ number: 'CS63', prereqs: [] },
	{ number: 'CS64', prereqs: [] },
	{ number: 'CS65', prereqs: [] },
	{ number: 'CS71', prereqs: [] },
	{ number: 'CS72', prereqs: [] },
	{ number: 'CS73', prereqs: [] },
	{ number: 'CS74', prereqs: [] },
	{ number: 'CS75', prereqs: [] },
	{ number: 'CS81', prereqs: [] },
	{ number: 'CS82', prereqs: [] },
	{ number: 'CS83', prereqs: [] },
	{ number: 'CS84', prereqs: [] },
	{ number: 'CS85', prereqs: [] }
];

var printCourses = function(courses) {
	for (var i = 0; i < courses.length; ++i) {
		if (courses[i].prereqs.length == 0) {
			console.log(courses[i].number);
		}
		else {
			var prereqs = '';
			for (var j = 0; j < courses[i].prereqs.length; ++j) {
				prereqs += courses[i].prereqs[j] + ' ';
			}
			console.log(courses[i].number + ', prereqs: ' + prereqs);
		}
	}
}

var numberToIndex = function(a, b) {
	var aa = a - 1;
	var bb = b - 1;

	return (aa * 5) + bb;
}

QUnit.test('StudyPlan Set 1', function(assert) {
	var courses = set1Courses;

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});

QUnit.test('StudyPlan Set 2', function(assert) {
	var courses = set2Courses;

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});

QUnit.test('StudyPlan Set 3', function(assert) {
	var courses = set3Courses;

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});


