// Course group requirement
function CourseGroupRequirement(numCourses, courseGroupName) {
	Requirement.call(this);

	this.numCourses = numCourses || 0;
	this.courseGroupName = courseGroupName || '';
}

CourseGroupRequirement.prototype = Object.create(Requirement.prototype);
CourseGroupRequirement.prototype.constructor = CourseGroupRequirement;

CourseGroupRequirement.prototype.type = 'CourseGroupRequirement';

CourseGroupRequirement.prototype.toString = function() {
	return '\'' + this.numCourses + ' from ' + this.courseGroupName + '\'';
}
