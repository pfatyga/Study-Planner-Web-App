// Base class for requirements
function Requirement() {
}

Requirement.prototype.type = 'unknown';

Requirement.prototype.checkPreqs = function(course, coursesTaken) {
	return true;
}

Requirement.prototype.toString = function() {
	return '';
}
