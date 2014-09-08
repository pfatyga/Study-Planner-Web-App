// Boolean expression requirement
function AllOrAnyRequirement() {
	Requirement.call(this);

	this.allOrAny = 'All';
	this.requirements = [];
}

AllOrAnyRequirement.prototype = Object.create(Requirement.prototype);
AllOrAnyRequirement.prototype.constructor = AllOrAnyRequirement;

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
