let waterValues = {
    //whole family
    residents : 0,
    averageShowerLength : 0,
    lowFlowShowerHeads : "no",
    baths : 0,
    bathFrequency : 0,
    bathroomFaucetRunTime : 0,
    lowFlowBathroomFaucet : "no",
    toiletFlushFrequency : 0,
    lowFlowToilets : "no",
    kitchenFaucetRunTime : 0,
    lowFlowKitchenFaucet : "no",
    // dishes
    oldSchoolDishwasherLoads : 0,
    oldSchoolDishwasherFrequency : 0,
    efficientDishwasherLoads : 0,
    efficientDishwasherFrequency : 0,
    handWashingLoads : 0,
    handWashingFrequency : 0, 
    trashThemLoads : 0,
    trashThemFrequency : 0,
    // laundry
    oldSchoolWashingMachineFrequency : 0,
    oldSchoolWashingMachineLoads : 0,
    efficientWashingMachineFrequency : 0,
    efficientWashingMachineLoads : 0,
    washingYourselfLoads : 0,
    washingYourselfFrequency : 0,
    outsideLaundryLoads : 0,
    outsideLaundryFrequency : 0,
    
}



function calculateWater(){
    //showers
    let showerUsagePerMin;
    if (waterValues.lowFlowShowerHeads == "yes"){
        showerUsagePerMin = 2.5;
    } else if (waterValues.lowFlowShowerHeads == "no"){
        showerUsagePerMin = 5;
    } else{
        showerUsagePerMin = 3.75;
    }
    let showerUsage = (waterValues.averageShowerLength * showerUsagePerMin);


    //baths
    let bathUsage = (70*waterValues.baths)/waterValues.bathFrequency;

    
    //bathroom faucet
    let bathroomFaucetUsagePerMin;
    if (waterValues.lowFlowBathroomFaucet == "yes"){
        bathroomFaucetUsagePerMin = 1.5;
    }else if (waterValues.lowFlowBathroomFaucet == "no"){
        bathroomFaucetUsagePerMin = 3;
    }else{
        bathroomFaucetUsagePerMin = 2.25;
    }
    let bathroomFaucetUsage = (waterValues.bathroomFaucetRunTime * bathroomFaucetUsagePerMin);


    //toilets
    let toiletUsagePerFlush;
    if (waterValues.lowFlowToilets == "yes"){
        toiletUsagePerFlush = 1.5;
    }else if (waterValues.lowFlowToilets == "no"){
        toiletUsagePerFlush = 5;
    }else{
        toiletUsagePerFlush = 3.5;
    }
    let toiletUsage = (toiletUsagePerFlush * 5);


    //kitchen faucet
    let kitchenFaucetUsagePerMin;
    if (waterValues.lowFlowKitchenFaucet == "yes"){
        kitchenFaucetUsagePerMin = 1.5;
    }else if (waterValues.lowFlowKitchenFaucet == "no"){
        kitchenFaucetUsagePerMin = 5;
    }else{
        kitchenFaucetUsagePerMin = 3.75;
    }
    let kitchenFaucetUsage = (waterValues.kitchenFaucetRunTime * kitchenFaucetUsagePerMin);


    //old dishwasher
    let oldDishwasherUsage = (15 *waterValues.oldSchoolDishwasherLoads)/waterValues.oldSchoolDishwasherFrequency;


    //new dishwasher
    let newDishwasherUsage = (4 *waterValues.efficientDishwasherLoads)/waterValues.efficientDishwasherFrequency;


    //hand dishwashing
    let handWashUsage = (20 *waterValues.handWashingLoads)/waterValues.handWashingFrequency;


    //eating out dishwashing
    let eatingOutUsage = (5.5 *waterValues.trashThemLoads)/waterValues.trashThemFrequency;


    //total dishwasher usage
    let totalDishwasherUsage = oldDishwasherUsage + newDishwasherUsage + handWashUsage + eatingOutUsage;

    //old laundry
    let oldLaundryUsage = (20 *waterValues.oldSchoolWashingMachineLoads)/waterValues.oldSchoolWashingMachineFrequency;


    //new laundry
    let newLaundryUsage = (20 *waterValues.efficientWashingMachineLoads)/waterValues.efficientDishwasherFrequency;


    //hand laundry
    let handLaundryUsage = (20 *waterValues.washingYourselfLoads)/waterValues.washingYourselfFrequency;


    //outside laundry
    let outsideLaundryUsage = (20 *waterValues.outsideLaundryLoads)/waterValues.outsideLaundryFrequency;


    //total laundry usage
    let totalLaundryUsage = oldLaundryUsage + newLaundryUsage + handLaundryUsage + outsideLaundryUsage;

    //total usage
    let totalWaterUsage = ((showerUsage + bathUsage + bathroomFaucetUsage + toiletUsage + kitchenFaucetUsage) * waterValues.residents) + totalDishwasherUsage + totalLaundryUsage;
    console.log(waterValues);
    return totalWaterUsage;
    
}
if (window.location.pathname == "/result.html"){
    let resultHead = document.querySelector("#resHead");

    let functionCall = calculateWater();
    resultHead.innerHTML = "495 gallons";
    console.log(waterValues);
}


let household = 0;
function residentFunction(element){
    household += parseInt(element.value);
    let residentsHeader = document.getElementById("residents");
    residentsHeader.innerHTML = household;
    waterValues.residents += parseInt(element.value);
}

function showerFunction(element){
    waterValues.averageShowerLength = parseInt(element.value); 
    console.log(waterValues.averageShowerLength); 
}

function showerFunction2(element){
    waterValues.lowFlowShowerHeads = (element.value);
    console.log(waterValues.lowFlowShowerHeads);
}

let bathsValue = 0;
function bathtubFunction(element){
    bathsValue += parseInt(element.value);
    let bathsHeader = document.getElementById("bathNumber");
    bathNumber.innerHTML = bathsValue;
    waterValues.baths += parseInt(element.value);
}

let bathsValue2 = 0;
function bathtub2Function(element){
    bathsValue2 += parseInt(element.value);
    let bathsHeader2 = document.getElementById("bathNumber2");
    bathNumber2.innerHTML = bathsValue2;
    waterValues.bathFrequency += parseInt(element.value);
}

function bathroomSinkFunction(element){
    waterValues.bathroomFaucetRunTime = parseInt(element.value);
    console.log(waterValues.bathroomFaucetRunTime);
}

function bathroomSinkFunction2(element){
    waterValues.lowFlowBathroomFaucet = (element.value);
    console.log(waterValues.lowFlowBathroomFaucet);
}

function toiletFunction(element){
    waterValues.toiletFlushFrequency = parseInt(element.value);
    console.log(waterValues.toiletFlushFrequency);
}

function toilet2Function(element){
    waterValues.lowFlowToilets = (element.value);
    console.log(waterValues.lowFlowToilets);
}

function kitchenSinkFunction(element){
    waterValues.kitchenFaucetRunTime = parseInt(element.value);
    console.log(waterValues.kitchenFaucetRunTime);
}

function kitchenSink2Function(element){
    waterValues.lowFlowKitchenFaucet = (element.value);
    console.log(waterValues.lowFlowKitchenFaucet);
}

let oldSchoolLoads = 0;
function oldDishwasherFunction(element){
    oldSchoolLoads += parseInt(element.value);
    let oldSchoolHeader = document.getElementById("oldSchoolNumber");
    oldSchoolHeader.innerHTML = oldSchoolLoads;
    waterValues.oldSchoolDishwasherLoads += parseInt(element.value);
}

let oldSchoolLoads2 = 0;
function oldDishwasher2Function(element){
    oldSchoolLoads2 += parseInt(element.value);
    let oldSchoolHeader2 = document.getElementById("oldSchoolNumber2");
    oldSchoolHeader2.innerHTML = oldSchoolLoads2;
    waterValues.oldSchoolDishwasherFrequency += parseInt(element.value);
}

let newSchoolLoads = 0;
function newDishwasherFunction(element){
    newSchoolLoads += parseInt(element.value);
    let newSchoolHeader = document.getElementById("newSchoolNumber");
    newSchoolHeader.innerHTML = newSchoolLoads;
    waterValues.efficientDishwasherLoads += parseInt(element.value);
}

let newSchoolLoads2 = 0;
function newDishwasher2Function(element){
    newSchoolLoads2 += parseInt(element.value);
    let newSchoolHeader2 = document.getElementById("newSchoolNumber2");
    newSchoolHeader2.innerHTML = newSchoolLoads2;
    waterValues.efficientDishwasherFrequency += parseInt(element.value);
}

let handLoads = 0;
function handFunction(element){
    handLoads += parseInt(element.value);
    let handHeader = document.getElementById("handNumber");
    handHeader.innerHTML = handLoads;
    waterValues.handWashingLoads += parseInt(element.value);
}

let handLoads2 = 0;
function hand2Function(element){
    handLoads2 += parseInt(element.value);
    let handHeader2 = document.getElementById("handNumber2");
    handHeader2.innerHTML = handLoads2;
    waterValues.handWashingFrequency += parseInt(element.value);
}

let eatOutLoads = 0;
function eatOutFunction(element){
    eatOutLoads += parseInt(element.value);
    let eatOutHeader = document.getElementById("eatOutNumber");
    eatOutHeader.innerHTML = eatOutLoads;
    waterValues.trashThemLoads += parseInt(element.value);
}

let eatOutLoads2 = 0;
function eatOut2Function(element){
    eatOutLoads2 += parseInt(element.value);
    let eatOutHeader2 = document.getElementById("eatOutNumber2");
    eatOutHeader2.innerHTML = eatOutLoads2;
    waterValues.trashThemFrequency += parseInt(element.value);
}

let oldSchoolLaundryLoads = 0;
function oldLaundryFunction(element){
    oldSchoolLaundryLoads += parseInt(element.value);
    let oldSchoolLaundryHeader = document.getElementById("oldSchoolLaundryNumber");
    oldSchoolLaundryHeader.innerHTML = oldSchoolLaundryLoads;
    waterValues.oldSchoolWashingMachineLoads += parseInt(element.value);
    console.log(waterValues.oldSchoolWashingMachineLoads);
}


let oldSchoolLaundryLoads2 = 0;
function oldLaundry2Function(element){
    oldSchoolLaundryLoads2 += parseInt(element.value);
    let oldSchoolLaundryHeader2 = document.getElementById("oldSchoolLaundryNumber2");
    oldSchoolLaundryHeader2.innerHTML = oldSchoolLaundryLoads2;
    waterValues.oldSchoolWashingMachineFrequency += parseInt(element.value);
    console.log(waterValues.oldSchoolWashingMachineFrequency);
}

let newSchoolLaundryLoads = 0;
function newLaundryFunction(element){
    newSchoolLaundryLoads += parseInt(element.value);
    let newSchoolLaundryHeader = document.getElementById("newSchoolLaundryNumber");
    newSchoolLaundryHeader.innerHTML = newSchoolLaundryLoads;
    waterValues.efficientWashingMachineLoads += parseInt(element.value);
}

let newSchoolLaundryLoads2 = 0;
function newLaundry2Function(element){
    newSchoolLaundryLoads2 += parseInt(element.value);
    let newSchoolLaundryHeader2 = document.getElementById("newSchoolLaundryNumber2");
    newSchoolLaundryHeader2.innerHTML = newSchoolLaundryLoads2;
    waterValues.efficientWashingMachineFrequency += parseInt(element.value);
}

let handLaundryLoads = 0;
function handLaundryFunction(element){
    handLaundryLoads += parseInt(element.value);
    let handLaundryHeader = document.getElementById("handLaundryNumber");
    handLaundryHeader.innerHTML = handLaundryLoads;
    waterValues.washingYourselfLoads += parseInt(element.value);
}

let handLaundryLoads2 = 0;
function handLaundry2Function(element){
    handLaundryLoads2 += parseInt(element.value);
    let handLaundryHeader2 = document.getElementById("handLaundryNumber2");
    handLaundryHeader2.innerHTML = handLaundryLoads2;
    waterValues.washingYourselfFrequency += parseInt(element.value);
}

let outsideLaundryLoads = 0;
function outsideLaundryFunction(element){
    outsideLaundryLoads += parseInt(element.value);
    let outsideLaundryHeader = document.getElementById("outsideLaundryNumber");
    outsideLaundryHeader.innerHTML = outsideLaundryLoads;
    waterValues.washingYourselfLoads += parseInt(element.value);
}

let outsideLaundryLoads2 = 0;
function outsideLaundry2Function(element){
    outsideLaundryLoads2 += parseInt(element.value);
    let outsideLaundryHeader2 = document.getElementById("outsideLaundryNumber2");
    outsideLaundryHeader2.innerHTML = outsideLaundryLoads2;
    waterValues.washingYourselfFrequency += parseInt(element.value);
}
