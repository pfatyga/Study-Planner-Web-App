%lex

%%

\s+						/* skip whitespace */
"from"					return 'from';
"("						return '(';
")"						return ')';
"AND"					return 'AND';
"OR"					return 'OR';
[0-9]					return 'DIGIT';
[A-Z]					return 'UPPERCASE_LETTER';
[a-z_]+					return 'WORD';
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
	: CoursePrefix CourseNumber
		{ $$ = { type: 'CourseRequirement', course: $CoursePrefix + ' ' + $CourseNumber }; }
	;

CoursePrefix
	: UPPERCASE_LETTER UPPERCASE_LETTER
		{ $$ = $1 + $2; }
	;

CourseNumber
	: DIGIT DIGIT DIGIT
		{ $$ = '' + $1 + $2 + $3; }
	;


CourseGroupExpression
	: DIGIT 'from' WORD
		{ $$ = { type: 'CourseGroupRequirement', numCourses: $1, courseGroup: $3 }; }
	;

CourseGroupName
	: DIGIT
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
