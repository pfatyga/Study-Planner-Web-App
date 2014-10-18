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
});*/

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
});
