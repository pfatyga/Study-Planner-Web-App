%lex

%%

\s+						/* skip whitespace */
"from"					return 'from';
"("						return '(';
")"						return ')';
"AND"					return 'AND';
"OR"					return 'OR';
[A-Z]{2}				return 'COURSE_PREFIX';
[0-9]{3}				return 'COURSE_NUMBER';
[0-9]+|"All"			return 'NUM_COURSES';
[a-zA-Z_]+				return 'COURSE_GROUP';
<<EOF>>					return 'EOF';

/lex



%start E

%%

E
	: Expression EOF
		{ console.log($1); return $1; }
	;

Expression
	: CourseExpression
	| CourseGroupExpression
	| BoolExpression
	;


CourseExpression
	: COURSE_PREFIX COURSE_NUMBER
		{ $$ = { type: 'CourseRequirement', course: $1 + ' ' + $2 }; }
	;


CourseGroupExpression
	: NUM_COURSES 'from' COURSE_GROUP
		{ $$ = { type: 'CourseGroupRequirement', numCourses: $1, courseGroup: $3 }; }
	;


BoolExpression
	: '(' ExpressionList ')'
		{ $$ = { type: 'BoolRequirement', operator: $ExpressionList.operator, childRequirements: $ExpressionList.elements }; }
	;

ExpressionList
	: ExpressionList Operator Expression
		{ $$ = $ExpressionList; $$.operator = $Operator, $$.elements.push($Expression); }
	| Expression
		{ $$ = { elements: [$Expression] }; }
	;

Operator
	: 'AND'
	| 'OR'
	;
