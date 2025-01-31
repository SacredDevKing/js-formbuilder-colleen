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

    const convertFirstLine = () => {
      let labels = [`Patient ID: ${placeHolder}`];
      let ids = [114552514];
      idsToNoteLines(ids, labels);
    };

    const convertSecondLine = () => {
      let labels = [
        `Your First and Last Name: ${placeHolder}`,
        `Best phone number to reach you at?: ${placeHolder}`,
        `Who is completing this form?: ${placeHolder}`,
        `Authorized Representative or Caregiver Name: ${placeHolder}`,
        `Thank you for verifying the information requested: ${placeHolder}`,
        `Is this correct referral?: ${placeHolder}`,
        `Which brand are you interested in?: ${placeHolder}`,
        `What type of insulin are you using with your Omnipod?: ${placeHolder}`,
        `Your Phone Number: ${placeHolder}`,
        `Please confirm what type of phone number: ${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?: ${placeHolder}`,
        `Mobile Phone Number: ${placeHolder}`,
        `Landline Phone Number: ${placeHolder}`,
        `Additional Phone Number: ${placeHolder}`,
        `Email Address on file: ${placeHolder}`,
        `Is this the correct email address?: ${placeHolder}`,
        `Email address: ${placeHolder}`,
        `Shipping address on file: ${placeHolder}`,
        `City: ${placeHolder}`,
        `State: ${placeHolder}`,
        `Zip: ${placeHolder}`,
        `Is this correct shipping address?: ${placeHolder}`,
        `Please provide us with your updated shipping address: ${placeHolder}`,
        `What is your preferred language?: ${placeHolder}`,
        `Current Healthcare Provider First Name: ${placeHolder}`,
        `Current Healthcare Provider Last Name: ${placeHolder}`,
        `Current Healthcare Provider Address: ${placeHolder}`,
        `Current Healthcare Provider Phone Number: ${placeHolder}`,
        `Is this still your current healthcare provider?: ${placeHolder}`,
        `New Healthcare Provider First Name: ${placeHolder}`,
        `New Healthcare Provider Last Name: ${placeHolder}`,
        `New Healthcare Provider Address: ${placeHolder}`,
        `New Healthcare Provider Phone Number: ${placeHolder}`,
        `What is the date of your last visit with the physician treating your diabetes?: ${placeHolder}`,
        `Primary Insurance: ${placeHolder}`,
        `Primary Insurance Policy/ID Number: ${placeHolder}`,
        `Our records show this is your primary insurance and policy number: ${placeHolder}`,
        `Upload Image of the Front of Insurance Card: ${placeHolder}`,
        `Upload Image of the Back of Insurance Card: ${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
        `Secondary Insurance: ${placeHolder}`,
        `Secondary Insurance Policy/ID Number: ${placeHolder}`,
        `Is this your secondary insurance?  If secondary insurance is not displayed, select no and provide the name of your secondary insurance): ${placeHolder}`,
        `Upload Image of the Front of Insurance Card: ${placeHolder}`,
        `Upload Image of the Back of Insurance Card: ${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
        `Drug Card/Insurance Name: ${placeHolder}`,
        `ID #: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Rx Bin: ${placeHolder}`,
        `PCN: ${placeHolder}`,
        `Help Desk Phone Number: ${placeHolder}`,
        `Upload Image of the front of Prescription Card: ${placeHolder}`,
        `Upload Image of the back of Prescription Card: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Medication Name: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Do you have any allergies?: ${placeHolder}`,
        `Please check all common environmental allergies that apply: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Please check all common medication allergies that apply: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Emergency Contact First / Last name: ${placeHolder}`,
        `Emergency Contact Mobile Phone Number: ${placeHolder}`,
        `Emergency Contact Work Phone Number: ${placeHolder}`,
        `Emergency Contact Email address: ${placeHolder}`,
        `Would you like us to share relevant medical information with this person in case of a medical emergency: ${placeHolder}`,
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
        `Authorized Party's First / Last name: ${placeHolder}`,
        `What is your relationship with the patient?: ${placeHolder}`,
        `Other: ${placeHolder}`,
      ];

      let ids = [
        114552528, 114552529, 114552530, 114552531, 114552533, 114552534,
        114552535, 115174773, 114552537, 114552538, 114552539, 114552541, 
        114552542, 114552544, 114552545, 114552546, 114552547, 114552548, 
        114552549, 114552550, 114552551, 114552552, 114552553, 115174778,
        114552554, 114552555, 114552556, 114552557, 114552558, 114552559, 
        114552560, 114552561, 114552562, 114552563, 114552564, 114552565, 
        114552566, 114552760, 114552766, 114552567, 114552568, 114552569, 
        114552570, 114552571, 114552572, 114552573, 114552574, 114552575, 
        114552777, 114552786, 114552576, 114552577, 114552578, 114552579, 
        114552580, 114552581, 114552789, 114552790, 114552806, 114552807, 
        114552810, 114552812, 114552838, 114657952, 115176000, 115176001,
        115176002, 115176003, 115176004, 115176005, 115176006, 115176007,
        115176008, 115176009, 115176010, 115176011, 115176012, 115176013,
        115176014, 115176015, 115176046, 115176048, 115176049, 115176050,
        114569499, 114657236, 114657252, 114657253, 114657922, 115174781,
        115174782, 115174783, 115174786, 115174787, 114552911, 114552912, 
        114552913, 114553042,
      ];

      idsToNoteLines(ids, labels);
    };

    try {
      convertFirstLine();
      convertSecondLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(114670773)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
