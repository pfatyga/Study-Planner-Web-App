// Base class for requirements
function Requirement() {
}

Requirement.prototype.type = 'unknown';

Requirement.prototype.checkPrereqs = function(coursesTaken) {
	return true;
}

Requirement.prototype.getRequiredCoursesList = function() {
	return [];
}

Requirement.prototype.toString = function() {
	return '';
}
