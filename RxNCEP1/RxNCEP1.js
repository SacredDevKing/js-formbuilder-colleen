function joinTValues() {
  setTimeout(function () {
    let placeHolder = "xxyy33zz";
    //eventual result value after a join
    let combinedString = [];

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n) ?? false;

      // if ((n > 115176000 && n < 115176015) || (n > 115176046 && n < 115176050)) {
      //   if (!el || !el.properties) {
      //     return null;
      //   }
      // } else {
      if (!el || !el.properties) {
        return null;
      }
      // }
      
      if (index) {
        return el.properties?.value?.index;
      }

      let resVal;
      let valueObj = el.properties.value;
      let has = el.hasProperty("value.value");
      let hasVals = el.hasProperty("value.values");
      
      if (valueObj.dateString) {
        let str = valueObj.dateString;
        if (str.length === 10 && str[4] === "-" && str[7] === "-") {
          resVal =
            str.slice(5, 7) + "/" + str.slice(-2) + "/" + str.slice(0, 4);
        } else {
          resVal = valueObj.dateString;
        }
      } else if (has) {
        resVal = valueObj.value;
      } else if (hasVals) {
        resVal = valueObj.values.filter(Boolean).join();
      } else {
        resVal = Object.values(valueObj).filter(Boolean).join();
      }
      if (el) {
        return el.properties ? resVal : null;
      }
    };

    //function to replace the placeholders in the string values with form input
    const strReplace = (str, replacement) => {
      return str.replace(placeHolder, replacement);
    };

    let idsToNoteLines = (ids, labels) => {
      let noteLinesArr = ids
        .map((n, i) => {
          let temp = getVal(n);
          return temp ? strReplace(labels[i], temp) : null;
        })
        .filter(Boolean);
      combinedString.push(...noteLinesArr);
    };

    const convertLine = () => {
      let labels = [
        `First Name: ${placeHolder}`, 
        `Last Name: ${placeHolder}`, 
        `Date of Birth: ${placeHolder}`, 
        `Zip Code: ${placeHolder}`, 
        `Patient ID: ${placeHolder}`, 
        `I'd like to receive monthly newsletters and educational emails from CCS.: ${placeHolder}`, 
        `Patient First and Last Name: ${placeHolder}`, 
        `What is the best phone number to reach the patient at?: ${placeHolder}`, 
        `Who is completing this form?: ${placeHolder}`, 
        `Authorized Person Name: ${placeHolder}`, 
        `${placeHolder}`, 
        `Preferred Insulin Pump Brand: ${placeHolder}`, 
        `Preferred Beta Bionics Model: ${placeHolder}`, 
        `Preferred Medtronic Model: ${placeHolder}`, 
        `Preferred Tandem Model: ${placeHolder}`, 
        `Preferred Insulet Model: ${placeHolder}`, 
        `What insulin is the patient using?: ${placeHolder}`, 
        `What insulin is the patient using?: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Are you planning to use the Pump application on your phone as your reader/receiver?: ${placeHolder}`, 
        `Preferred Transmitter Brand: ${placeHolder}`, 
        `Preferred Dexcom Transmitter Model: ${placeHolder}`, 
        `Preferred Medtronic Transmitter Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Receiver (optional) Brand: ${placeHolder}`, 
        `Preferred Abbott Receiver Model: ${placeHolder}`, 
        `Preferred Dexcom Receiver Model: ${placeHolder}`, 
        `Preferred Medtronic Receiver Model: ${placeHolder}`, 
        `Preferred Tandem Receiver Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Sensor Brand: ${placeHolder}`, 
        `Preferred Abbott Sensor Model: ${placeHolder}`, 
        `Preferred Dexcom Sensor Model: ${placeHolder}`, 
        `Preferred Medtronic Sensor Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Medtronic Quickserter: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Patient is: ${placeHolder}`, 
        `Pump Days on Hand: ${placeHolder}`, 
        `Height: ${placeHolder}`, 
        `Weight: ${placeHolder}`, 
        `Do you have dexterity issues?: ${placeHolder}`, 
        `Patient Testing Frequency: ${placeHolder}`, 
        `Injection Frequency: ${placeHolder}`, 
        `How long have you been injecting more than three times a day?: ${placeHolder}`, 
        `How many units of insulin do you inject each day?: ${placeHolder}`, 
        `Current Pump Model: ${placeHolder}`, 
        `Pump Serial Number: ${placeHolder}`, 
        `Insurance that paid for your current pump: ${placeHolder}`, 
        `Date of Purchase: ${placeHolder}`, 
        `Please select malfunctions you have experienced: ${placeHolder}`, 
        `Please confirm you would like to receive a replacement pump: ${placeHolder}`, 
        `If you are currently on a pump and continually using it, please provide the date you received the pump: ${placeHolder}`, 
        `How often are you changing the site?: ${placeHolder}`, 
        `How many days on hand do you have?: ${placeHolder}`, 
        `What is your current cannula size?: ${placeHolder}`, 
        `What is your current tubing length?: ${placeHolder}`, 
        `CCS Medical provides services for Continuous Glucose Monitor Systems.  Would you like to receive CGM supplies from CGM Medical?: ${placeHolder}`, 
        `If you are covered at 100% and all documents are on file, do you approve CCS to ship your Insulin Pump/Supplies order?: ${placeHolder}`, 
        `Patient Phone Number: ${placeHolder}`, 
        `Please confirm what type of phone number: ${placeHolder}`, 
        `Is the phone number we have on file the best phone number to reach you?  (If a phone number is not displayed, please select no and provide your phone number).: ${placeHolder}`, 
        `Do you want to add any additional phone numbers?: ${placeHolder}`, 
        `Mobile Phone Number: ${placeHolder}`, 
        `Landline Phone Number: ${placeHolder}`, 
        `Do you want to add any additional phone numbers?: ${placeHolder}`, 
        `Additional Phone Number: ${placeHolder}`, 
        `Email Address on file: ${placeHolder}`, 
        `Is this the correct email address?: ${placeHolder}`, 
        `Email address: ${placeHolder}`, 
        `Shipping address on file: ${placeHolder}`, 
        `City: ${placeHolder}`, 
        `State: ${placeHolder}`, 
        `Zip: ${placeHolder}`, 
        `Is this correct shipping address?: ${placeHolder}`, 
        `Please provide us with your updated shipping address.: ${placeHolder}`, 
        `What is your preferred language?: ${placeHolder}`, 
        `Current Healthcare Provider First Name: ${placeHolder}`, 
        `Current Healthcare Provider Last Name: ${placeHolder}`, 
        `Current Healthcare Provider Address: ${placeHolder}`, 
        `Current Healthcare Provider Phone Number: ${placeHolder}`, 
        `Is this still your current healthcare provider? (If a current healthcare provider is not displayed, select no and provide the name of your current healthcare provider).: ${placeHolder}`, 
        `New Healthcare Provider First: ${placeHolder}`, 
        `New Healthcare Provider Last: ${placeHolder}`, 
        `New Healthcare Provider Address: ${placeHolder}`, 
        `New Healthcare Provider Phone Number: ${placeHolder}`, 
        `What is the date of your last visit with the physician treating your diabetes?: ${placeHolder}`, 
        `Primary Insurance: ${placeHolder}`, 
        `Primary Insurance Policy/ID Number: ${placeHolder}`, 
        `Our records show this is your primary insurance and policy number.  Is this correct?  (If primary insurance is not displayed, select no and provide the name of your primary insurance).: ${placeHolder}`, 
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`, 
        `Policy/ID Number: ${placeHolder}`, 
        `Group Number: ${placeHolder}`, 
        `Relationship to Policyholder: ${placeHolder}`, 
        `Policyholder Name: ${placeHolder}`, 
        `Policyholder Date of Birth: ${placeHolder}`, 
        `Secondary Insurance: ${placeHolder}`, 
        `Secondary Insurance Policy/ID Number: ${placeHolder}`, 
        `Is this your secondary insurance?  If secondary insurance is not displayed, select no and provide the name of your secondary insurance).: ${placeHolder}`, 
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`, 
        `Policy/ID Number: ${placeHolder}`, 
        `Group Number: ${placeHolder}`, 
        `Relationship to Policyholder: ${placeHolder}`, 
        `Policyholder Name: ${placeHolder}`, 
        `Policyholder Date of Birth: ${placeHolder}`, 
        `Drug Card Holder: ${placeHolder}`, 
        `Drug Card/Insurance Name: ${placeHolder}`, 
        `ID: ${placeHolder}`, 
        `Group Number: ${placeHolder}`, 
        `Rx Bin: ${placeHolder}`, 
        `PCN: ${placeHolder}`, 
        `Help Desk Phone Number: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Medication: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Do you have any allergies?: ${placeHolder}`, 
        `Please check all common environmental allergies that: ${placeHolder}`, 
        `Other: ${placeHolder}`, 
        `Please check all common medication allergies that: ${placeHolder}`, 
        `Other: ${placeHolder}`, 
        `Emergency Contact First / Last name: ${placeHolder}`, 
        `Mobile Phone Number: ${placeHolder}`, 
        `Work Phone Number: ${placeHolder}`, 
        `Email address: ${placeHolder}`, 
        `Would you like us to share relevant medical information with this person in case of a medical emergency: ${placeHolder}`, 
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`, 
        `Authorized Party's First / Last name: ${placeHolder}`, 
        `What is your relationship with the patient?: ${placeHolder}`, 
        `Other: ${placeHolder}`, 
      ];

      let ids = [
        116471044, 116471045, 116471046, 116471047, 116471048, 116471050, 
        116471056, 116471057, 116471058, 116471059, 116471060, 116471064, 
        116471065, 116471066, 116471067, 116471068, 116471069, 116471070, 
        116471071, 116471072, 116471077, 116471078, 116471079, 116471080, 
        116471081, 116471082, 116471083, 116471084, 116471085, 116471086, 
        116471087, 116471088, 116471089, 116471090, 116471091, 116471092, 
        116471093, 116471097, 116471098, 116553809, 116553810, 116553844, 
        116553962, 116553963, 116553966, 116553968, 116554038, 116554040, 
        116554043, 116554045, 116554049, 116554182, 116554229, 116554230, 
        116554233, 116554237, 116554238, 116554240, 116554243, 116471102, 
        116471103, 116471104, 116471105, 116471106, 116471107, 116471108, 
        116471109, 116471110, 116471111, 116471112, 116471113, 116471114, 
        116471115, 116471116, 116471117, 116471118, 116471119, 116471120, 
        116471121, 116471122, 116471123, 116471124, 116471125, 116471126, 
        116471127, 116471128, 116471129, 116471130, 116471131, 116471132, 
        116471133, 116471134, 116471135, 116471136, 116471137, 116471138, 
        116471139, 116471140, 116471141, 116471142, 116471143, 116471144, 
        116471145, 116471146, 116471147, 116471149, 116471150, 116471151, 
        116471152, 116471153, 116471154, 116471155, 116472072, 116472073, 
        116472075, 116472069, 116472070, 116472071, 116472063, 116472064, 
        116472065, 116472042, 116472061, 116472062, 116471893, 116471895, 
        116471912, 116471872, 116471875, 116471876, 116471805, 116471805, 
        116471873, 116471721, 116471786, 116471788, 116471710, 116471712, 
        116471713, 116471707, 116471708, 116471709, 116471699, 116471701, 
        116471702, 116471692, 116471697, 116471698, 116471685, 116471687, 
        116471693, 116471682, 116471683, 116471684, 116471615, 116471616, 
        116471618, 116471611, 116471613, 116471614, 116471607, 116471608, 
        116471610, 116471600, 116471603, 116471605, 116471595, 116471597, 
        116471598, 116471592, 116471593, 116471594, 116471157, 116471158, 
        116471159, 116471160, 116471161, 116471162, 116471163, 116471164, 
        116471165, 116471166, 116471167, 116471168, 116471169, 116471170, 
      ];

      idsToNoteLines(ids, labels);
    };

    try {
      convertLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(116471172)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
