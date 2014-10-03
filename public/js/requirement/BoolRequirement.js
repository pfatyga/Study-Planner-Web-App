// Boolean expression requirement
function BoolRequirement() {
	Requirement.call(this);

	this.andOrOr = 'AND';
	this.childRequirements = [];
}

BoolRequirement.prototype = Object.create(Requirement.prototype);
BoolRequirement.prototype.constructor = BoolRequirement;

BoolRequirement.prototype.type = 'BoolRequirement';

BoolRequirement.prototype.checkPrereqs = function(coursesTaken) {
	if (this.andOrOr = 'AND') {
		// Return true if all child requirements have been met
		for (var i = 0; i < childRequirements.length) {
			if (!this.childRequirements[i].checkPrereqs(coursesTaken)) {
				return false;
			}
		}

		return true;
	}
	else {
		// Return true if at least one of child requirements has been met
		for (var i = 0; i < childRequirements.length) {
			if (this.childRequirements[i].checkPrereqs(coursesTaken)) {
				return true;
			}
		}

		return false;
	}
}

BoolRequirement.prototype.toString = function() {
	var result = '(';

	for (var i = 0; i < childRequirements.length; i++) {
		result += childRequirements[i].toString();
		
		if (i + 1 < childRequirements.length) {
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
