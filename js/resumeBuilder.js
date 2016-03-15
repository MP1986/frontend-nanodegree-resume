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
    "biopic": "http://vignette2.wikia.nocookie.net/lovecraft/images/e/e4/Nyarlathotep_by_erkanerturk-d4h5bgg.jpg/revision/latest/top-crop/width/320/height/320?cb=20151003113912",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);

        $("#header").append(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").append(formattedRole);
        $("#header").append("<ul id=\"topContacts\" class=\"flex-box\"></ul>");

        for (var key in bio.contacts) {
            if (bio.contacts.hasOwnProperty(key)) {
                var value = bio.contacts[key];
                var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
                $("#topContacts").append(formattedContact);
                $("#footerContacts").append(formattedContact);
            }
        }
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

        $("#header").append(HTMLskillsStart);
        for (key in bio.skills) {
            if (bio.skills.hasOwnProperty(key)) {

                var skill = bio.skills[key];
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            }
        }

    }
};

bio.display();




var work = {
    "jobs": [{
        "employer": "The universe",
        "title": "Motivational Speaker",
        "dates": "1922-1999",
        "description": "Helping professionals realize their true potential (with ketchup.)",
        "location": "Boston, MA"
    }, {
        "employer": "Safeway",
        "title": "Deli Clerk",
        "dates": "2000-2016",
        "description": "Making sandwiches, keeping area tidy and clean, exemplary customer service.",
        "location": "Fresno, CA"
    }],
    "display": function() {

    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
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
}
};

work.display();

var projects = {
    "list": [{
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "Text!  Pictures!  On a screen!  A COMPUTER screen.",
        "images": "/C:/Users/Fangus/desktop/Udacity/frontend-nanodegree-resume-master/images/framework-preview2.png"
/*
    "contacts": {
        "mobile": "867-5309",
        "email": "NyarCat@aol.com",
        "twitter": "@Nyarlathotep",
        "github": "NyarCatSeesYou",
        "location": "Fresno, CA",
        "blog": "Hlaghlaghlag",
    },

*/
}],


    "display": function() {

    for (var index in projects.list) {
        if (projects.list.hasOwnProperty(index)) {
            var project = projects.list[index];

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
}
};

projects.display();


var education = {
    "schools": [{
        "name": "UC Davis",
        "degree": "Bachelor of Fine Arts",
        "dates": "2006-2008",
        "majors": "English",
        "location": "Davis, CA"
    }, {
        "name": "DVC",
        "degree": "AA",
        "dates": "2004-2006",
        "majors": "Undeclared",
        "location": "Pleasant Hill, CA"
    }],
    "display": function() {

    for (var index in education.schools) {
        if (education.schools.hasOwnProperty(index)) {
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
}
};

education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});