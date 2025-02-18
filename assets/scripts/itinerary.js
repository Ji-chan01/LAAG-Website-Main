// all containers
const containers = document.querySelectorAll(".change");

// change containers
const itinerary = document.getElementById("itinerary");
const chooseitinerary = document.getElementById("chooseitinerary");
const getwetnwild = document.getElementById("getwetnwild");
const vnzbycitytour = document.getElementById("vnzbycitytour");
const vnzbyfarmnranchtour = document.getElementById("vnzbyfarmnranchtour");
const vnzbyislandhop = document.getElementById("vnzbyislandhop");
const vnzbymore = document.getElementById("vnzbymore");
const vnzbyinclusions = document.getElementById("vnzbyinclusions");
const tourrate = document.getElementById("tourrate");
const modeofpayment = document.getElementById("modeofpayment");
const paymentdone = document.getElementById("paymentdone");
const choosemunicipality = document.getElementById("choosemunicipality");
const choosespot = document.getElementById("choosespot");
const schedgenerated = document.getElementById("schedgenerated");
const generatedone = document.getElementById("generatedone");

// dom next buttons
const itineraryNxtBtn = document.getElementById("itineraryNxtBtn");
const getwetnwildNxtBtn = document.getElementById("getwetnwildNxtBtn");
const vnzbycitytourNxtBtn = document.getElementById("vnzbycitytourNxtBtn");
const vnzbyfarmnranchtourNxtBtn = document.getElementById("vnzbyfarmnranchtourNxtBtn");
const vnzbyislandhopNxtBtn = document.getElementById("vnzbyislandhopNxtBtn");
const vnzbymoreNxtBtn = document.getElementById("vnzbymoreNxtBtn");
const vnzbyinclusionsNxtBtn = document.getElementById("vnzbyinclusionsNxtBtn");
const tourrateNxtBtn = document.getElementById("tourrateNxtBtn");
const modeofpaymentNxtBtn = document.getElementById("modeofpaymentNxtBtn");
const paymentdoneNxtBtn = document.getElementById("paymentdoneNxtBtn");
const choosemunicipalityNxtBtn = document.getElementById("choosemunicipalityNxtBtn");
const choosespotNxtBtn = document.getElementById("choosespotNxtBtn");
const schedgeneratedNxtBtn = document.getElementById("schedgeneratedNxtBtn");
const generatedoneNxtBtn = document.getElementById("generatedoneNxtBtn");


// dom back buttons
const chooseitineraryBckBtn = document.getElementById("chooseitineraryBckBtn");
const getwetnwildBckBtn = document.getElementById("getwetnwildBckBtn");
const vnzbycitytourBckBtn = document.getElementById("vnzbycitytourBckBtn");
const vnzbyfarmnranchtourBckBtn = document.getElementById("vnzbyfarmnranchtourBckBtn");
const vnzbyislandhopBckBtn = document.getElementById("vnzbyislandhopBckBtn");
const vnzbymoreBckBtn = document.getElementById("vnzbymoreBckBtn");
const vnzbyinclusionsBckBtn = document.getElementById("vnzbyinclusionsBckBtn");
const tourrateBckBtn = document.getElementById("tourrateBckBtn");
const modeofpaymentBckBtn = document.getElementById("modeofpaymentBckBtn");
const paymentdoneBckBtn = document.getElementById("paymentdoneBckBtn");
const choosemunicipalityBckBtn = document.getElementById("choosemunicipalityBckBtn");
const choosespotBckBtn = document.getElementById("choosespotBckBtn");
const schedgeneratedBckBtn = document.getElementById("schedgeneratedBckBtn");
const generatedoneBckBtn = document.getElementById("generatedoneBckBtn");

// choice
const toGetwetnwild = document.getElementById("toGetwetnwild");
const toChoosemunicipality = document.getElementById("toChoosemunicipality");

// remove active classes
function removeActiveClasses() {
    containers.forEach((container) => {
        container.classList.remove("active");
    })
}

// back functions
chooseitineraryBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    itinerary.classList.add("active");
});

getwetnwildBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    chooseitinerary.classList.add("active");
});

vnzbycitytourBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    getwetnwild.classList.add("active");
});

vnzbyfarmnranchtourBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbycitytour.classList.add("active");
});

vnzbyislandhopBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyfarmnranchtour.classList.add("active");
});

vnzbymoreBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyislandhop.classList.add("active");
});

vnzbyinclusionsBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbymore.classList.add("active");
});

tourrateBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyinclusions.classList.add("active");
});

modeofpaymentBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    tourrate.classList.add("active");
});

paymentdoneBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    modeofpayment.classList.add("active");
});

choosemunicipalityBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    chooseitinerary.classList.add("active");
});

choosespotBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    choosemunicipality.classList.add("active");
});

schedgeneratedBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    choosespot.classList.add("active");
})

generatedoneBckBtn.addEventListener("click", () => {
    removeActiveClasses();
    schedgenerated.classList.add('active');
})

// next functions
itineraryNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    chooseitinerary.classList.add("active");
});

toGetwetnwild.addEventListener("click", () => {
    removeActiveClasses();
    getwetnwild.classList.add("active");
    
});

getwetnwildNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbycitytour.classList.add("active");
    
});

vnzbycitytourNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyfarmnranchtour.classList.add("active");
    
});

vnzbyfarmnranchtourNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyislandhop.classList.add("active");
    
});

vnzbyislandhopNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbymore.classList.add("active");
    
});

vnzbymoreNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    vnzbyinclusions.classList.add("active");
    
});

vnzbyinclusionsNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    tourrate.classList.add("active");
    
});

tourrateNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    modeofpayment.classList.add("active");
    
});

modeofpaymentNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    paymentdone.classList.add("active");
    
});

paymentdoneNxtBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

toChoosemunicipality.addEventListener("click", () => {
    removeActiveClasses();
    choosemunicipality.classList.add("active");
    
});

choosemunicipalityNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    choosespot.classList.add("active");
    
});

choosespotNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    schedgenerated.classList.add('active')
    
});

schedgeneratedNxtBtn.addEventListener("click", () => {
    removeActiveClasses();
    generatedone.classList.add('active');
    
})

generatedoneNxtBtn.addEventListener("click", () => {
    window.location.href = "index.html";
})