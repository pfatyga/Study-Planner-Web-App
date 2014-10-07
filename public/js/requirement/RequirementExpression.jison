%lex

%%

\s+						/* skip whitespace */
"All"					return 'All';
"from"					return 'from';
"("						return '(';
")"						return ')';
"AND"					return 'AND';
"OR"					return 'OR';
[a-zA-Z_]+				return 'STRING';
[0-9]+					return 'NUMBER';
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
	: STRING NUMBER
		{ $$ = { type: 'CourseRequirement', course: $1 + ' ' + $2 }; }
	;


CourseGroupExpression
	: NUMBER 'from' STRING
		{ $$ = { type: 'CourseGroupRequirement', numCourses: $1, courseGroup: $3 }; }
	| 'All' 'from' STRING
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
