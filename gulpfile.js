var fs = require("fs");
var gulp = require('gulp');
var jison = require('jison');

gulp.task('jison', function() {
	// Create Requirement Expression Parser using jison
	var grammar = fs.readFileSync('public/js/requirement/RequirementExpressionGrammar.jison', { encoding: 'utf8' });
	var parser = new jison.Parser(grammar);
	var parserSource = parser.generate({ moduleName: 'RequirementExpressionParser' });
	fs.writeFileSync('public/js/requirement/RequirementExpressionParser.js', parserSource);
});

gulp.task('test', function() {
})
