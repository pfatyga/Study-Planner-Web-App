// Boolean expression requirement
function BoolRequirement(operator, childRequirements) {
	Requirement.call(this);

	this.operator = operator || 'AND';
	this.childRequirements = childRequirements || [];
}

BoolRequirement.prototype = Object.create(Requirement.prototype);
BoolRequirement.prototype.constructor = BoolRequirement;

BoolRequirement.prototype.type = 'BoolRequirement';

BoolRequirement.prototype.checkPrereqs = function(coursesTaken) {
	if (this.operator === 'AND') {
		// Return true if all child requirements have been met
		for (var i = 0; i < this.childRequirements.length; ++i) {
			if (!this.childRequirements[i].checkPrereqs(coursesTaken)) {
				return false;
			}
		}

		return true;
	}
	else {  //this.operator === 'OR'
		// Return true if at least one of child requirements has been met
		for (var i = 0; i < this.childRequirements.length; ++i) {
			if (this.childRequirements[i].checkPrereqs(coursesTaken)) {
				return true;
			}
		}

		return false;
	}
}

BoolRequirement.prototype.toString = function() {
	var result = '(';

	for (var i = 0; i < this.childRequirements.length; ++i) {
		result += this.childRequirements[i].toString();
		
		if (i + 1 < this.childRequirements.length) {
			if (this.operator === 'AND') {
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
