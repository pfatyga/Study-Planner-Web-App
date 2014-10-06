var parser = require('./RequirementExpressionGrammar').parser;

console.log(parser.parse('(CS 443 AND 2 from techelectives AND (CS 511 OR CS 600))').childRequirements[2]);
