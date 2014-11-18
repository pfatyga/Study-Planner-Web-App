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

var setPrereqs = function(courses, a, b, prereqs) {
	courses[numberToIndex(a, b)].prereqs = prereqs;
}

var numberToIndex = function(a, b) {
	var aa = a - 1;
	var bb = b - 1;

	return (aa * 5) + bb;
}

var getSet1Courses = function() {
	var allCourses = [];

	var i;
	var j;

	for (i = 1; i <= 8; ++i) {
		for (j = 1; j <= 5; ++j) {
			allCourses[numberToIndex(i, j)] = { number: 'CS' + i + j, prereqs: [] };
		}
	}

	return allCourses;
}

var getSet2Courses = function() {
	var allCourses = [];

	var i;
	var j;

	for (i = 1; i <= 8; ++i) {
		for (j = 1; j <= 5; ++j) {
			allCourses[numberToIndex(i, j)] = { number: 'CS' + i + j, prereqs: [] };
			if (i > 1) {
				var prereq = 'CS' + (i - 1) + j;
				allCourses[numberToIndex(i, j)].prereqs.push(prereq);
			}
		}
	}

	return allCourses;
}

var getSet3Courses = function() {
	var allCourses = getSet1Courses();

	setPrereqs(allCourses, 2, 1, ['CS11']);
	setPrereqs(allCourses, 3, 1, ['CS12']);
	setPrereqs(allCourses, 3, 2, ['CS21']);
	// TODO - rest of prereqs

	return allCourses;
}

var getSet4Courses = function() {
	var allCourses = getSet1Courses();

	// TODO - prereqs

	return allCourses;
}

var getSet5Courses = function() {
	var allCourses = getSet1Courses();

	// TODO - prereqs

	return allCourses;
}

QUnit.test('StudyPlan Set 1', function(assert) {
	var courses = getSet1Courses();

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});

QUnit.test('StudyPlan Set 2', function(assert) {
	var courses = getSet2Courses();

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});

QUnit.test('StudyPlan Set 3', function(assert) {
	var courses = getSet3Courses();

	printCourses(courses);

	var start = new Date();

	// TODO - test

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');

	assert.ok(true, 'Passed!');
});


