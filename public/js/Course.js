function Course() {
	this.prefix = '';
	this.number = 0;
	this.name = '';
	this.credits = 0;

	this.courseCoordinator = '';

	this.offeredFallOnCampus = false;
	this.offeredSpringOnCampus = false;
	this.offeredSummerOneOnCampus = false;
	this.offeredSummerTwoOnCampus = false;

	this.offeredFallWebCampus = false;
	this.offeredSpringWebCampus = false;
	this.offeredSummerOneWebCampus = false;
	this.offeredSummerTwoWebCampus = false;
	
	this.prerequisites = null;
	this.corequisites = null;

	// TODO - courses that this can replace/be replaced by
}
