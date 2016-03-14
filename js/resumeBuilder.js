var bio = {
    "name": "Nyarlathotep",
    "role": "Web Developer",
    "contacts": {
        "mobile": "867-5309",
        "email": "NyarCat@aol.com",
        "twitter": "@Nyarlathotep",
        "github": "NyarCatSeesYou",
        "location": "Fresno, CA",
        "blog": "Hlaghlaghlag",
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
};

bio.appendName();
bio.appendRole();

$("#header").append("<ul id=\"topContacts\" class=\"flex-box\"></ul>");


for (var key in bio.contacts) {
    var value = bio.contacts[key];
    var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);

}


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

var work = {
    "jobs": [{
        "employer": "The universe",
        "title": "Motivational Speaker",
        "dates": "1922-1999",
        "description": "Helping professionals realize their true potential (with ketchup.)",
        "location": "Boston, MA"
    },
    {
        "employer": "Safeway",
        "title": "Deli Clerk",
        "dates": "2000-2016",
        "description": "Making sandwiches, keeping area tidy and clean, exemplary customer service.",
        "location": "Fresno, CA"
    }]

};

function displayWork() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);


        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
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
    "schools": [{
        "name": "UC Davis",
        "degree": "Bachelor of Fine Arts",
        "year": "2008",
        "major": "English",
        "location": "Davis, CA"
    }, {
        "name": "DVC",
        "degree": "AA",
        "year": "2004",
        "major": "Undeclared",
        "location": "Pleasant Hill, CA"
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
    }
}

displayEducation();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});