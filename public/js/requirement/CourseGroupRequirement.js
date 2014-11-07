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

CourseGroupRequirement.prototype.getRequiredCoursesList = function() {
	var courses = [];

	// TODO

	return [courses];
}

CourseGroupRequirement.prototype.toString = function() {
	return '\'' + this.numCourses + ' from ' + this.courseGroupName + '\'';
}
