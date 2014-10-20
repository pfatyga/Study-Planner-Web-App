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
	return contains(coursesTaken, this.coursePrefix + this.courseNumber);
}

CourseRequirement.prototype.toString = function() {
	return '\'' + this.coursePrefix + ' ' + this.courseNumber + '\'';
}
