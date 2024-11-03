function addNewLanField(): void {
    const newNode = document.createElement("input");
    newNode.classList.add("form-control", "laField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb = document.getElementById("la");
    const aqAddButtonOb = document.getElementById("laAddButton");
  
    if (aqOb && aqAddButtonOb) {
      aqOb.insertBefore(newNode, aqAddButtonOb);
    }
  }
  
  function addNewEdField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "edField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb = document.getElementById("ed");
    const aqAddButtonOb = document.getElementById("aqAddButton");
  
    if (aqOb && aqAddButtonOb) {
      aqOb.insertBefore(newNode, aqAddButtonOb);
    }
  }
  
  function addNewTiField(): void {
    const x = document.createElement("input");
    x.classList.add("form-control", "tiField", "mt-2");
    x.setAttribute("placeholder", "Enter title");
  
    const aqOb = document.getElementById("we");
    const aqAddButtonOb = document.getElementById("weAddButton");
  
    if (aqOb && aqAddButtonOb) {
      aqOb.insertBefore(x, aqAddButtonOb);
    }
  }
  
  function addNewWEField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Experience");
  
    const weOb = document.getElementById("we");
    const weAddButtonOb = document.getElementById("weAddButton");
  
    if (weOb && weAddButtonOb) {
      weOb.insertBefore(newNode, weAddButtonOb);
    }
  }
  
  function addNewAQField(): void {
    const newNode = document.createElement("input");
    newNode.classList.add("form-control", "skField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb = document.getElementById("sk");
    const aqAddButtonOb = document.getElementById("skAddButton");
  
    if (aqOb && aqAddButtonOb) {
      aqOb.insertBefore(newNode, aqAddButtonOb);
    }
  }
  
  function generateCV(): void {
    const nameField = document.getElementById("nameField") as HTMLInputElement;
    const jobField = document.getElementById("jobFiled") as HTMLInputElement;
    const contactField = document.getElementById("contactField") as HTMLInputElement;
    const gmailField = document.getElementById("gmailFiled") as HTMLInputElement;
    const fbField = document.getElementById("fbField") as HTMLInputElement;
    const linkedField = document.getElementById("linkedField") as HTMLInputElement;
    const objectiveField = document.getElementById("objectiveField") as HTMLInputElement;
    
    if (nameField) document.getElementById("nName")!.innerHTML = nameField.value;
    if (jobField) document.getElementById("jJob")!.innerHTML = jobField.value;
    if (contactField) document.getElementById("cContact")!.innerHTML = contactField.value;
    if (gmailField) document.getElementById("gGmail")!.innerHTML = gmailField.value;
    if (fbField) document.getElementById("fFacebook")!.innerHTML = fbField.value;
    if (linkedField) document.getElementById("lLinkedin")!.innerHTML = linkedField.value;
    if (objectiveField) document.getElementById("objectiveT")!.innerHTML = objectiveField.value;
  
    // Languages
    const languages = document.getElementsByClassName("laField") as HTMLCollectionOf<HTMLInputElement>;
    let lanF = "";
    for (const language of languages) {
      lanF += `<li><span>${language.value}</span></li>`;
    }
    document.getElementById("lan")!.innerHTML = lanF;
  
    // Education
    const education = document.getElementsByClassName("edField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let resEdu = "";
    for (const educations of education) {
      resEdu += `<li><p>${educations.value}</p></li>`;
    }
    document.getElementById("edu")!.innerHTML = resEdu;
  
    // Work Experience
    const experience = document.getElementsByClassName("weField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let str = "";
    for (const exp of experience) {
      str += `<li class="squar"><h4>${exp.value}</h4></li>`;
    }
    document.getElementById("weT")!.innerHTML = str;
  
    // Skills
    const skill = document.getElementsByClassName("skField") as HTMLCollectionOf<HTMLInputElement>;
    let str1 = "";
    for (const skills of skill) {
      str1 += `<li class="squar"><h4>${skills.value}</h4></li>`;
    }
    if (str1.length) document.getElementById("skills")!.innerHTML = str1;
  
    // Setting Image
    const fileInput = document.getElementById("imgField") as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;
    const reader = new FileReader();
  
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        const imgTemplate = document.getElementById("imgTemplate") as HTMLImageElement;
        imgTemplate.src = reader.result as string;
      };
    }
  }
  
  function printCV(): void {
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    const btnN = document.getElementById("btnN");
  
    if (cvForm) cvForm.style.display = "none";
    if (cvTemplate) cvTemplate.style.display = "block";
    if (btnN) btnN.style.display = "none";
  
    window.print();
  }
  