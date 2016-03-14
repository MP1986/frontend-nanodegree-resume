


var bio = {
	"name" : "Nyarlathotep",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "867-5309",
		"email": "NyarCat@aol.com",
		"twitter": "@Nyarlathotep",
		"github": "NyarCatSeesYou",
		"location":  "Fresno, CA",
		"blog":  "Hlaghlaghlag",
	},
	"welcomeMessage": "I see you.",
	"skills": [
		"AWESOMENESS", "devouring mortals", "manipulation and deceit", "heralding the strange aeons"
	],
	"bioPic": "http://vignette2.wikia.nocookie.net/lovecraft/images/e/e4/Nyarlathotep_by_erkanerturk-d4h5bgg.jpg/revision/latest/top-crop/width/320/height/320?cb=20151003113912",
	"appendName": function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);

		$("#header").append(formattedName);		
	},
	"appendRole": function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);

		$("#header").append(formattedRole);
	}

//Must un-bork skills formatting.
};

//Remove this's and convert back to normal layout?

//Clarify what shit needs to be done on GitHub

//Almost finished I think?

//      <ul id="topContacts" class='flex-box'></ul>

//Why do JS testers tell me this is invalid JS?

//How do I un-bork the header?

//var name = "Nyarlathotep";

bio.appendName();
bio.appendRole();

//$("#header").append("<ul id=\"topContacts\" class=\"flex-box\">");

// Why does bio.contacts appear all wonky?

// https://www.udacity.com/course/viewer#!/c-ud804-nd/l-2239648539/e-1941808583/m-2263878592


//var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
$("#header").append("<ul id=\"topContacts\" class=\"flex-box\"></ul>");


for (var key in bio.contacts) {
	var value = bio.contacts[key];
	var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);

}

/*for (contact in bio.contacts) {
	formattedContact = HTMLcontactGeneric.replace("%data%", contact.value).replace("%contact%", contact.key);
	$("#header").append(formattedContact);
};*/

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$("#header").append(HTMLskillsStart);
for (var key in bio.skills) {
	var skill = bio.skills[key];
	var formattedSkill = HTMLskills.replace("%data%", skill);
	$("#skills").append(formattedSkill);

}





//$("#header").append("</ul>");

/*
var workExperience = {};
	workExperience.position = "Eldritch abomination and motivational speaker",
	workExperience.employer = "The universe",
	workExperience.yearsWorked = "Meh.  A few.",
	workExperience.city = "I broke it =/.";
*/


var work = {
	"jobs":  [{
		"employer" : "The universe",
		"title" : "Motivational Speaker",
		"dates": "1922-2016",
		"description": "Helping professionals realize their true potential (with ketchup.)",
		"location":  "Boston, MA"
	}] 
};

function displayWork() {

	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//		$("#workExperience").append(formattedEmployer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle; 
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);


		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);


		/*
		var formattedDates = HTMLworkDates.replace("%data%", work.yearsWorked);
		$("#workExperience").append(formattedEmployer);
		*/
	}
}

displayWork();

var projects = [{
	"title": "Sample Project 1",
	"dates": "2016",
	"description": "Text!  Pictures!  On a screen!  A COMPUTER screen.",
	"image": "/C:/Users/Fangus/desktop/Udacity/frontend-nanodegree-resume-master/images/framework-preview2.png"

}];


function displayProjects() {

	for (index in projects) {	
		var project = projects[index]

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedProjectDate);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", project.image);
		$(".project-entry:last").append(formattedProjectImage);

	}
}

displayProjects();


var education = {
	"schools":  [{
		"name" : "UC Davis",
		"degree" : "Bachelor of Fine Arts",
		"year" : "2008",
		"major": "English",
		"location":  "Davis, CA"
	}, {
		"name" : "DVC",
		"year" : "2004",
		"major": "Undeclared",
		"location":  "Pleasant Hill, CA"
	}]
};

function displayEducation() {

	for (index in education.schools) {	
		var school = education.schools[index];

		var formattedSchool = HTMLschoolName.replace("%data%", school.name);
		$("#education").append(formattedSchool);

		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$("#education").append(formattedDegree);

		var formattedYear = HTMLschoolDates.replace("%data%", school.year);
		$("#education").append(formattedYear);

		var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
		$("#education").append(formattedMajor);

		var formattedCity = HTMLschoolLocation.replace("%data%", school.location);
		$("#education").append(formattedCity);



/*
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
*/

	}
}

displayEducation();

$("#mapDiv").append(googleMap);

//It WORKS!!!  AAAAAAHHHH!!

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});


/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);




$("#main").append(bio.name),
$("#main").append(bio.role),
$("#main").append(bio.contacts),
$("#main").append(bio.welcomeMessage),
$("#main").append(bio.skills),
$("#main").append(bio.bioPic);

$("#main").append(education.name);
$("#main").append(work["position"]);



if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data", bio.skills[3]);
	$("#skills").append(formattedSkill);
};
*/