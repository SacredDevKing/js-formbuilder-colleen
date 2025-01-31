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
        `Preferred CGM Product: ${placeHolder}`, 
        `Other: ${placeHolder}`, 
        `Preferred Transmitter Brand: ${placeHolder}`, 
        `Preferred Dexcom Transmitter Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Medtronic Transmitter Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Receiver (optional) Brand: ${placeHolder}`, 
        `Preferred Abbott Receiver Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Dexcom Receiver Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Medtronic Receiver Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Tandem Receiver Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Sensor Brand: ${placeHolder}`, 
        `Preferred Abbott Sensor Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Dexcom Sensor Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Preferred Medtronic Sensor Model: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Medtronic Quickserter: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Are you planning to use the CGM application on your phone as your reader/receiver?: ${placeHolder}`, 
        `Patient is: ${placeHolder}`, 
        `CGM Days on Hand: ${placeHolder}`, 
        `Are you currently using a Continuous Glucose Monitor (CGM)?: ${placeHolder}`, 
        `Brand: ${placeHolder}`, 
        `Model Number: ${placeHolder}`, 
        `Reader/Receiver Serial Number: ${placeHolder}`, 
        `Date of Purchase: ${placeHolder}`, 
        `Number of Sensors on Hand: ${placeHolder}`, 
        `Insurance that Paid: ${placeHolder}`, 
        `Are you administering insulin?: ${placeHolder}`, 
        `Do you have frequent, recurring hypoglycemic episodes?: ${placeHolder}`, 
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
        `New Healthcare Provider First : ${placeHolder}`, 
        `New Healthcare Provider Last : ${placeHolder}`, 
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
        `Medication #1: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #2: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #3: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #4: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #5: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #6: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #7: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #8: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #9: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #10: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #11: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #12: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #13: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #14: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #15: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #16: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #17: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #18: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #19: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
        `Medication #20: ${placeHolder}`, 
        `Strength: ${placeHolder}`, 
        `Directions for Use: ${placeHolder}`, 
        `Qty Shipped: ${placeHolder}`, 
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
        116489571, 116489572, 116489573, 116489574, 116489575, 116489577, 
        116489583, 116489584, 116489585, 116489586, 116489587, 116489601, 
        116489602, 116489604, 116489605, 116727156, 116489606, 116489607, 
        116489608, 116489609, 116727159, 116489610, 116727162, 116489611, 
        116727164, 116489612, 116489613, 116489614, 116489615, 116727167, 
        116489616, 116727168, 116489617, 116489618, 116489619, 116489620, 
        116489621, 116489626, 116489627, 116593769, 116593773, 116593779, 
        116593797, 116593799, 116593801, 116593803, 116593807, 116593827, 
        116489629, 116489630, 116489631, 116489632, 116489633, 116489634, 
        116489635, 116489636, 116489637, 116489638, 116489639, 116489640, 
        116489641, 116489642, 116489643, 116489644, 116489645, 116489646, 
        116489647, 116489648, 116489649, 116489650, 116489651, 116489652, 
        116489653, 116489654, 116489655, 116489656, 116489657, 116489658, 
        116489659, 116489660, 116489661, 116489662, 116489663, 116489664, 
        116489665, 116489666, 116489667, 116489668, 116489669, 116489670, 
        116489671, 116489672, 116489673, 116489674, 116489676, 116489677, 
        116489678, 116489679, 116489680, 116489681, 116489682, 116491228, 
        116491229, 116491232, 116704297, 116491222, 116491224, 116491226, 
        116704298, 116491217, 116491218, 116491220, 116704302, 116491212, 
        116491213, 116491216, 116704304, 116491206, 116491208, 116491210, 
        116704307, 116491201, 116491203, 116491205, 116704310, 116491196, 
        116491197, 116491199, 116704313, 116491186, 116491188, 116491195, 
        116704317, 116491182, 116491183, 116491185, 116704319, 116491000, 
        116491075, 116491077, 116704320, 116489889, 116489890, 116489891, 
        116704323, 116489884, 116489886, 116489888, 116704325, 116489880, 
        116489881, 116489882, 116704327, 116489875, 116489877, 116489879, 
        116704329, 116489856, 116489857, 116489873, 116704331, 116489853, 
        116489854, 116489855, 116704333, 116489849, 116489850, 116489852, 
        116704334, 116489845, 116489846, 116489848, 116704586, 116489841, 
        116489842, 116489843, 116704339, 116489837, 116489838, 116489840, 
        116704341, 116489684, 116489685, 116489686, 116489687, 116489688, 
        116489689, 116489690, 116489691, 116489692, 116489693, 116489694, 
        116489695, 116489696, 116489697, 
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
      .getElementById(116489699)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
