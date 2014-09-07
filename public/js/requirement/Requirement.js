// Base class for requirements
function Requirement() {
}

Requirement.prototype.type = 'unknown';

Requirement.prototype.toString = function() {
}



// Single course requirement
function CourseRequirement(courseName) {
	this.courseName = courseName;
}

CourseRequirement.prototype = new Requirement();
CourseRequirement.protoype.constructor = CourseRequirement;

CourseRequirement.prototype.type = 'CourseRequirement';

CourseRequirement.prototype.toString = function() {
	return '\'' + this.courseName + '\'';
}



// Course group requirement
function CourseGroupRequirement(numCourses, courseGroupName) {
	this.numCourses = numCourses;
	this.courseGroupName = courseGroupName;
}

CourseGroupRequirement.prototype.type = 'CourseGroupRequirement';

CourseGroupRequirement.prototype.toString = function() {
	return '\'' + this.numCourses + ' from ' + this.courseGroupName + '\'';
}



// Boolean expression requirement
function AllOrAnyRequirement() {
	this.allOrAny = 'All';
	this.requirements = [];
}

AllOrAnyRequirement.prototype.type = 'AllOrAnyRequirement';

AllOrAnyRequirement.prototype.toString = function() {
	var result = '(';

	for (var i = 0; i < requirements.length; i++) {
		result += requirements[i].toString();
		
		if (i + 1 < requirements.length) {
			if (allOrAny === 'All') {
				result += ' AND ';
			}
			else {
				result += ' OR ';
			}
		}
	}

	result += ')';

	return result;
}
