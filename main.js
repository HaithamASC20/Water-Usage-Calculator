let waterValues = {
    //whole family
    residents : 0,
    averageShowerLength : 0,
    lowFlowShowerHeads : "no",
    baths : 0,
    bathFrequency : 1,
    bathroomFaucetRunTime : 0,
    lowFlowBathroomFaucet : "no",
    toiletFlushFrequency : 0,
    lowFlowToilets : "no",
    kitchenFaucetRunTime : 0,
    lowFlowKitchenFaucet : "no",
    // dishes
    oldSchoolDishwasherLoads : 0,
    oldSchoolDishwasherFrequency : 1,
    efficientDishwasherLoads : 0,
    efficientDishwasherFrequency : 1,
    handWashingLoads : 0,
    handWashingFrequency : 1, 
    trashThemLoads : 0,
    trashThemFrequency : 1,
    // laundry
    oldSchoolWashingMachineFrequency : 1,
    oldSchoolWashingMachineLoads : 0,
    efficientWashingMachineFrequency : 1,
    efficientWashingMachineLoads : 0,
    washingYourselfLoads : 0,
    washingYourselfFrequency : 1,
    outsideLaundryLoads : 0,
    outsideLaundryFrequency : 1,
    
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
    console.log(showerUsage);

    //baths
    let bathUsage = (70*waterValues.baths)/waterValues.bathFrequency;
    console.log(bathUsage);
    
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
    console.log(bathroomFaucetUsage);

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
    console.log(toiletUsage);

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
    console.log(kitchenFaucetUsage);

    //old dishwasher
    let oldDishwasherUsage = (15 *waterValues.oldSchoolDishwasherLoads)/waterValues.oldSchoolDishwasherFrequency;
    console.log(oldDishwasherUsage);

    //new dishwasher
    let newDishwasherUsage = (4 *waterValues.efficientDishwasherLoads)/waterValues.efficientDishwasherFrequency;
    console.log(newDishwasherUsage);

    //hand dishwashing
    let handWashUsage = (20 *waterValues.handWashingLoads)/waterValues.handWashingFrequency;
    console.log(handWashUsage);

    //eating out dishwashing
    let eatingOutUsage = (5.5 *waterValues.trashThemLoads)/waterValues.trashThemFrequency;
    console.log(eatingOutUsage);

    //total dishwasher usage
    let totalDishwasherUsage = oldDishwasherUsage + newDishwasherUsage + handWashUsage + eatingOutUsage;
    console.log(totalDishwasherUsage);
    //old laundry
    let oldLaundryUsage = (20 *waterValues.oldSchoolWashingMachineLoads)/waterValues.oldSchoolWashingMachineFrequency;
    console.log(oldLaundryUsage)

    //new laundry
    let newLaundryUsage = (20 *waterValues.efficientWashingMachineLoads)/waterValues.efficientDishwasherFrequency;
    console.log(newLaundryUsage);

    //hand laundry
    let handLaundryUsage = (20 *waterValues.washingYourselfLoads)/waterValues.washingYourselfFrequency;
    console.log(handLaundryUsage);

    //outside laundry
    let outsideLaundryUsage = (20 *waterValues.outsideLaundryLoads)/waterValues.outsideLaundryFrequency;
    console.log(outsideLaundryUsage);

    //total laundry usage
    let totalLaundryUsage = oldLaundryUsage + newLaundryUsage + handLaundryUsage + outsideLaundryUsage;
    console.log(totalLaundryUsage);
    //total usage
    let totalWaterUsage = ((showerUsage + bathUsage + bathroomFaucetUsage + toiletUsage + kitchenFaucetUsage) * waterValues.residents) + totalDishwasherUsage + totalLaundryUsage;
    let totalWaterUsagePerPerson = totalWaterUsage/waterValues.residents;

    return [totalWaterUsage,totalWaterUsagePerPerson];
    
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
    nextFunction();
    console.log(waterValues.averageShowerLength); 
}

function showerFunction2(element){
    waterValues.lowFlowShowerHeads = (element.value);
    nextFunction();
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
    nextFunction();
    console.log(waterValues.bathroomFaucetRunTime);
}

function bathroomSinkFunction2(element){
    waterValues.lowFlowBathroomFaucet = (element.value);
    nextFunction();
    console.log(waterValues.lowFlowBathroomFaucet);
}

function toiletFunction(element){
    waterValues.toiletFlushFrequency = (element.value);
    nextFunction();
    console.log(waterValues.toiletFlushFrequency);
}

function toilet2Function(element){
    waterValues.lowFlowToilets = (element.value);
    nextFunction();
    console.log(waterValues.lowFlowToilets);
}

function kitchenSinkFunction(element){
    waterValues.kitchenFaucetRunTime = parseInt(element.value);
    nextFunction();
    console.log(waterValues.kitchenFaucetRunTime);
}

function kitchenSink2Function(element){
    waterValues.lowFlowKitchenFaucet = (element.value);
    nextFunction();
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

let pageNumber = 0;

function nextFunction(){
    if(pageNumber == 13){
        pageNumber = 0
    }else{
        pageNumber += 1;
    }
    if(pageNumber == 0){
        document.getElementById("start").style.display = "block";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
    }else if (pageNumber == 1){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "block";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 2){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 3){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 4){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "block";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 5){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "block";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        console.log("hello")
        
    }else if (pageNumber == 6){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "block";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 7){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "block";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 8){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "block";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 9){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "block";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 10){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "block";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 11){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "block";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 12){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "block";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 13){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "block";
        console.log(waterValues);
        let totalUsage = calculateWater();
        document.getElementById("resHead").innerHTML = Math.round(totalUsage[0]);
        document.getElementById("resHead2").innerHTML = Math.round(totalUsage[1]);
        
    }

    
console.log(pageNumber);
}
function backFunction(){
    pageNumber -=1;
    if(pageNumber == 0){
        document.getElementById("start").style.display = "block";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
    }else if (pageNumber == 1){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "block";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 2){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 3){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 4){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "block";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 5){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "block";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        console.log("hello")
        
    }else if (pageNumber == 6){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "block";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 7){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "block";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 8){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "block";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 9){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "block";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 10){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "block";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 11){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "block";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 12){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "block";
        document.getElementById("result").style.display = "none";
        
    }else if (pageNumber == 13){
        document.getElementById("start").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "none";
        document.getElementById("result").style.display = "block";
        
    }

    
console.log(pageNumber);
}