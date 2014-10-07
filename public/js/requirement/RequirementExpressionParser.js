// Parses an expression that represents a Requirement
function RequirementExpressionParser() {
	this.parser = parser;
}

RequirementExpressionParser.prototype.parse = function(expression) {
	return this.parser.parse(expression);
}

RequirementExpressionParser.test = function() {
	var parser = new RequirementExpressionParser();

	parser.parse('CS 443');
	parser.parse('(CS 443 AND (CS 511 OR CS 600))');
	parser.parse('(CS 443 AND 2 from TechElectives AND (CS 511 OR CS 600))');
	parser.parse('(CS 443 AND All from CSCore AND (CS 511 OR CS 600))');
}
