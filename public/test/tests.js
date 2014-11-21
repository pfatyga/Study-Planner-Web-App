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
	{ number: 'CS21', prereqs: ['CS11', 'CS12'] },
	{ number: 'CS22', prereqs: ['CS12'] },
	{ number: 'CS23', prereqs: ['CS13', 'CS14'] },
	{ number: 'CS24', prereqs: ['CS14'] },
	{ number: 'CS25', prereqs: ['CS14'] },
	{ number: 'CS31', prereqs: ['CS12'] },
	{ number: 'CS32', prereqs: ['CS22', 'CS24'] },
	{ number: 'CS33', prereqs: ['CS23'] },
	{ number: 'CS34', prereqs: ['CS23', 'CS25'] },
	{ number: 'CS35', prereqs: [] },
	{ number: 'CS41', prereqs: [] },
	{ number: 'CS42', prereqs: [] },
	{ number: 'CS43', prereqs: [] },
	{ number: 'CS44', prereqs: [] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: [] },
	{ number: 'CS52', prereqs: ['CS41', 'CS43'] },
	{ number: 'CS53', prereqs: ['CS42'] },
	{ number: 'CS54', prereqs: ['CS35'] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: [] },
	{ number: 'CS63', prereqs: ['CS34'] },
	{ number: 'CS64', prereqs: [] },
	{ number: 'CS65', prereqs: ['CS24'] },
	{ number: 'CS71', prereqs: ['CS61', 'CS62'] },
	{ number: 'CS72', prereqs: ['CS62'] },
	{ number: 'CS73', prereqs: ['CS63', 'CS64'] },
	{ number: 'CS74', prereqs: ['CS43', 'CS64', 'CS45'] },
	{ number: 'CS75', prereqs: ['CS64', 'CS44'] },
	{ number: 'CS81', prereqs: ['CS62'] },
	{ number: 'CS82', prereqs: ['CS72', 'CS74'] },
	{ number: 'CS83', prereqs: ['CS73'] },
	{ number: 'CS84', prereqs: ['CS73', 'CS75'] },
	{ number: 'CS85', prereqs: [] }
];

var set5Courses = [
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
	{ number: 'CS43', prereqs: ['CS22','CS33'] },
	{ number: 'CS44', prereqs: ['CS43'] },
	{ number: 'CS45', prereqs: [] },
	{ number: 'CS51', prereqs: ['CS52'] },
	{ number: 'CS52', prereqs: ['CS53'] },
	{ number: 'CS53', prereqs: ['CS14','CS54'] },
	{ number: 'CS54', prereqs: ['CS15'] },
	{ number: 'CS55', prereqs: [] },
	{ number: 'CS61', prereqs: [] },
	{ number: 'CS62', prereqs: ['CS51'] },
	{ number: 'CS63', prereqs: [] },
	{ number: 'CS64', prereqs: ['CS53'] },
	{ number: 'CS65', prereqs: ['CS54'] },
	{ number: 'CS71', prereqs: [] },
	{ number: 'CS72', prereqs: ['CS62','CS73'] },
	{ number: 'CS73', prereqs: ['CS74'] },
	{ number: 'CS74', prereqs: ['CS65'] },
	{ number: 'CS75', prereqs: [] },
	{ number: 'CS81', prereqs: [] },
	{ number: 'CS82', prereqs: ['CS61','CS81'] },
	{ number: 'CS83', prereqs: [] },
	{ number: 'CS84', prereqs: ['CS63'] },
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

var printSemesters = function(semesters) {
    if(semesters != null)
        semesters.forEach(function (semester, index) {
            var semesterText = "Semester " + (index+1) + ": ";
            semester.forEach(function (course, index) {
                if(index == 0)
                    semesterText += course;
                else
                    semesterText += (", " + course);
            });
            console.log(semesterText);
        });
}

var numberToIndex = function(a, b) {
	var aa = a - 1;
	var bb = b - 1;

	return (aa * 5) + bb;
}

var courseToIndex = function(courseName) {
	return numberToIndex(courseName.charAt(2), courseName.charAt(3));
}

var isCourseInSemesters = function (semesters, course) {
	for(var i = 0; i < semesters.length; i++) {
		if(contains(semesters[i], course))		
		{
			//console.log(course + ":\n" + JSON.stringify(semester));
			return true;		
		}
	}	
	return false;
}

var checkPrereqs = function checkPrereqs(semesters, course) {
	for(var i = 0; i < course.prereqs.length; i++) {
		if(!isCourseInSemesters(semesters, course.prereqs[i])) {
			//console.log("checkPrereqs returning false for " + course.number);
			return false;
		}
	}
	return true;
};

var getChainLength = function getChainLength(preReq, orderedCourses, currentLength) {
	//console.log(JSON.stringify(preReq));
	if(currentLength > preReq.maxPostRequisitesChain)
		preReq.maxPostRequisitesChain = currentLength;
	preReq.prereqs.forEach(function (prereq) {
		getChainLength(orderedCourses[courseToIndex(prereq)], orderedCourses, currentLength+1);
	});
}

var sortCoursesByLengthOfPostRequisitesChain = function sortCoursesByLengthOfPostRequisitesChain(courses) {
	var orderedCourses = courses.map(function (course) {
		course.maxPostRequisitesChain = 0;
		return course;
	});

	orderedCourses.forEach(function (orderedCourse) {
		orderedCourse.prereqs.forEach(function (preReq, index) {			
			var chainLength = 1 + orderedCourse.maxPostRequisitesChain;
			getChainLength(orderedCourses[courseToIndex(preReq)], orderedCourses, chainLength);
		});
	}); 

	orderedCourses.sort(function (a, b) {
		return b.maxPostRequisitesChain - a.maxPostRequisitesChain;
	});

	return orderedCourses;
};

var generateSchedule = function(courses) {
	var semesters = [];
	var orderedCourses = sortCoursesByLengthOfPostRequisitesChain(courses);
	//console.log(JSON.stringify(orderedCourses));
	for(var i = 0; i < 8; i++) {
		semesters[i] = [];
		var currentSemester = [];
		var index = 0;
		while(currentSemester.length < 5 && index < orderedCourses.length) {			
			if (checkPrereqs(semesters, orderedCourses[index])) {
				//console.log("adding course " + orderedCourses[index].number);
				currentSemester.push(orderedCourses.splice(index, 1)[0].number);
			}
			else {
				//console.log("prereqs not meant for course " + orderedCourses[index]);
				index++;
			}
		}
		semesters[i] = currentSemester;
		if(semesters[i].length < 5) {
			console.log("Impossible to schedule courses.\n" + JSON.stringify(semesters));
			return null;
		}
	}
	return semesters;
};

QUnit.test('StudyPlan Set 1', function(assert) {
	var courses = set1Courses;

	printCourses(courses);

	var start = new Date();

	var output = generateSchedule(courses);

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');
	//console.log(JSON.stringify(output));
    printSemesters(output);
    
	assert.ok(output != null, 'Valid Schedule');
});

QUnit.test('StudyPlan Set 2', function(assert) {
	var courses = set2Courses;

	printCourses(courses);

	var start = new Date();

	var output = generateSchedule(courses);

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');
	//console.log(JSON.stringify(output));
    printSemesters(output);

	assert.ok(output != null, 'Valid Schedule');
});

QUnit.test('StudyPlan Set 3', function(assert) {
	var courses = set3Courses;

	printCourses(courses);

	var start = new Date();

	var output = generateSchedule(courses);

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');
	//console.log(JSON.stringify(output));
    printSemesters(output);

	assert.ok(output == null, 'Impossible Schedule');
});

QUnit.test('StudyPlan Set 4', function(assert) {
	var courses = set4Courses;

	printCourses(courses);

	var start = new Date();

	var output = generateSchedule(courses);

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');
	//console.log(JSON.stringify(output));
    printSemesters(output);

	assert.ok(output != null, 'Valid Schedule');
});

QUnit.test('StudyPlan Set 5', function(assert) {
	var courses = set5Courses;

	printCourses(courses);

	var start = new Date();

	var output = generateSchedule(courses);

	var end = new Date();
	
	var diff = end.getTime() - start.getTime();
	console.log('Time to build study plan: ' + diff + ' ms\n');
	//console.log(JSON.stringify(output));
    printSemesters(output);

	assert.ok(output != null, 'Valid Schedule');
});
