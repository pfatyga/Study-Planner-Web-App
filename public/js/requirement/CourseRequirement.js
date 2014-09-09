// Single course requirement
function CourseRequirement(courseName) {
	Requirement.call(this);

	this.courseName = courseName || '';
}

CourseRequirement.prototype = Object.create(Requirement.prototype);
CourseRequirement.prototype.constructor = CourseRequirement;

CourseRequirement.prototype.type = 'CourseRequirement';

CourseRequirement.prototype.toString = function() {
	return '\'' + this.courseName + '\'';
}