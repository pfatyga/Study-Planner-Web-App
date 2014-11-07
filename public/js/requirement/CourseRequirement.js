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

CourseRequirement.prototype.getRequiredCoursesList = function() {
	// TODO - get course from server
	var course = new Course();
	
	// Test data, TODO - remove
	course.prefix = this.coursePrefix;
	course.courseNumber = this.courseNumber;
	course.credits = 3.0;
	course.offeredFallOnCampus = true;
	course.offeredSpringOnCampus = true;

	var courses = [course];

	// TODO - Add prequisites

	// TODO - add corequisites
	
	return [courses];
}

CourseRequirement.prototype.toString = function() {
	return '\'' + this.coursePrefix + ' ' + this.courseNumber + '\'';
}
