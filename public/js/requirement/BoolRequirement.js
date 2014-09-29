// Boolean expression requirement
function BoolRequirement() {
	Requirement.call(this);

	this.andOrOr = 'AND';
	this.requirements = [];
}

BoolRequirement.prototype = Object.create(Requirement.prototype);
BoolRequirement.prototype.constructor = BoolRequirement;

BoolRequirement.prototype.type = 'BoolRequirement';

BoolRequirement.prototype.checkPreqs = function(course, coursesTaken) {
	// TODO - do boolean check on requirements

	return false;
}

BoolRequirement.prototype.toString = function() {
	var result = '(';

	for (var i = 0; i < requirements.length; i++) {
		result += requirements[i].toString();
		
		if (i + 1 < requirements.length) {
			if (andOrOr === 'AND') {
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
