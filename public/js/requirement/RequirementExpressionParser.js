// Parses an expression that represents a Requirement
function RequirementExpressionParser() {
	this.parser = parser;
}

RequirementExpressionParser.prototype.parse = function(expression) {
	//requirementExpressionParser.parse(expression);
	return this.parser.parse(expression);
}

RequirementExpressionParser.test = function() {
	var parser = new RequirementExpressionParser();

	parser.parse('(CS 443 AND 2 from tech_electives AND (CS 511 OR CS 600))');
}
