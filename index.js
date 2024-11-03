function addNewLanField() {
    var newNode = document.createElement("input");
    newNode.classList.add("form-control", "laField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("la");
    var aqAddButtonOb = document.getElementById("laAddButton");
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
}
function addNewEdField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "edField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("ed");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
}
function addNewTiField() {
    var x = document.createElement("input");
    x.classList.add("form-control", "tiField", "mt-2");
    x.setAttribute("placeholder", "Enter title");
    var aqOb = document.getElementById("we");
    var aqAddButtonOb = document.getElementById("weAddButton");
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(x, aqAddButtonOb);
    }
}
function addNewWEField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Experience");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    if (weOb && weAddButtonOb) {
        weOb.insertBefore(newNode, weAddButtonOb);
    }
}
function addNewAQField() {
    var newNode = document.createElement("input");
    newNode.classList.add("form-control", "skField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("sk");
    var aqAddButtonOb = document.getElementById("skAddButton");
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
}
function generateCV() {
    var nameField = document.getElementById("nameField");
    var jobField = document.getElementById("jobFiled");
    var contactField = document.getElementById("contactField");
    var gmailField = document.getElementById("gmailFiled");
    var fbField = document.getElementById("fbField");
    var linkedField = document.getElementById("linkedField");
    var objectiveField = document.getElementById("objectiveField");
    if (nameField)
        document.getElementById("nName").innerHTML = nameField.value;
    if (jobField)
        document.getElementById("jJob").innerHTML = jobField.value;
    if (contactField)
        document.getElementById("cContact").innerHTML = contactField.value;
    if (gmailField)
        document.getElementById("gGmail").innerHTML = gmailField.value;
    if (fbField)
        document.getElementById("fFacebook").innerHTML = fbField.value;
    if (linkedField)
        document.getElementById("lLinkedin").innerHTML = linkedField.value;
    if (objectiveField)
        document.getElementById("objectiveT").innerHTML = objectiveField.value;
    // Languages
    var languages = document.getElementsByClassName("laField");
    var lanF = "";
    for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
        var language = languages_1[_i];
        lanF += "<li><span>".concat(language.value, "</span></li>");
    }
    document.getElementById("lan").innerHTML = lanF;
    // Education
    var education = document.getElementsByClassName("edField");
    var resEdu = "";
    for (var _a = 0, education_1 = education; _a < education_1.length; _a++) {
        var educations = education_1[_a];
        resEdu += "<li><p>".concat(educations.value, "</p></li>");
    }
    document.getElementById("edu").innerHTML = resEdu;
    // Work Experience
    var experience = document.getElementsByClassName("weField");
    var str = "";
    for (var _b = 0, experience_1 = experience; _b < experience_1.length; _b++) {
        var exp = experience_1[_b];
        str += "<li class=\"squar\"><h4>".concat(exp.value, "</h4></li>");
    }
    document.getElementById("weT").innerHTML = str;
    // Skills
    var skill = document.getElementsByClassName("skField");
    var str1 = "";
    for (var _c = 0, skill_1 = skill; _c < skill_1.length; _c++) {
        var skills = skill_1[_c];
        str1 += "<li class=\"squar\"><h4>".concat(skills.value, "</h4></li>");
    }
    if (str1.length)
        document.getElementById("skills").innerHTML = str1;
    // Setting Image
    var fileInput = document.getElementById("imgField");
    var file = fileInput.files ? fileInput.files[0] : null;
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            var imgTemplate = document.getElementById("imgTemplate");
            imgTemplate.src = reader.result;
        };
    }
}
function printCV() {
    var cvForm = document.getElementById("cv-form");
    var cvTemplate = document.getElementById("cv-template");
    var btnN = document.getElementById("btnN");
    if (cvForm)
        cvForm.style.display = "none";
    if (cvTemplate)
        cvTemplate.style.display = "block";
    if (btnN)
        btnN.style.display = "none";
    window.print();
}
