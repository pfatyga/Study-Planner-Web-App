// Course group requirement
function CourseGroupRequirement(numCourses, courseGroupName) {
	Requirement.call(this);

	this.numCourses = numCourses || 0;
	this.courseGroupName = courseGroupName || '';
}

CourseGroupRequirement.prototype = Object.create(Requirement.prototype);
CourseGroupRequirement.prototype.constructor = CourseGroupRequirement;

CourseGroupRequirement.prototype.type = 'CourseGroupRequirement';

CourseGroupRequirement.prototype.checkPrereqs = function(coursesTaken) {
	// TODO - check if number of courses from group is in coursesTaken

	return false;
}

CourseGroupRequirement.prototype.toString = function() {
	return '\'' + this.numCourses + ' from ' + this.courseGroupName + '\'';
}

// Assumes expression looks like '2 from Tech Electives'
CourseGroupRequirement.fromExpression = function(expression) {
	var parts = expression.split(' ');

	var numCourses = parts[0];

	var courseGroupName = '';
	for (var i = 2; i < parts.length; ++i) {
		courseGroupName += parts[i];
	}

	return new CourseGroupRequirement(numCourses, courseGroupName);
}
