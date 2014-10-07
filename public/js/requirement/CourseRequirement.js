// Single course requirement
function CourseRequirement(coursePrefix, courseNumber) {
	Requirement.call(this);

	this.coursePrefix = coursePrefix || '';
	this.courseNumber = courseNumber || '';
}

CourseRequirement.prototype = Object.create(Requirement.prototype);
CourseRequirement.prototype.constructor = CourseRequirement;

CourseRequirement.prototype.type = 'CourseRequirement';

CourseRequirement.prototype.checkPrereqs = function(coursesTaken) {
	// TODO - check if coursesTaken includes course

	// return coursesTaken.contains(this.courseName)
	return false;
}

CourseRequirement.prototype.toString = function() {
	return '\'' + this.coursePrefix + ' ' + this.courseNumber + '\'';
}


// Assumes expression looks like 'CS 115'
CourseRequirement.fromExpression = function(expression) {
	var parts = expression.split(' ');
	return new CourseRequirement(parts[0], parts[1]);
}
