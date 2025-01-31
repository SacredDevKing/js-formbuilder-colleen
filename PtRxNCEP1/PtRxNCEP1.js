function joinTValues() {
  setTimeout(function () {
    let placeHolder = "xxyy33zz";
    //eventual result value after a join
    let combinedString = [];

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n) ?? false;

      if (!el || !el.properties) {
        return null;
      }
      
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
        `I agree to: ${placeHolder}`,
        `Patient ID: ${placeHolder}`,
        `Patient ID Matched: ${placeHolder}`,
        `Your information does not match our records.: ${placeHolder}`,
        `Patient First and Last Name: ${placeHolder}`,
        `What is the best phone number to reach the patient at?: ${placeHolder}`,
        `Who is completing this form?: ${placeHolder}`,
        `Authorized Person Name: ${placeHolder}`,
        `To provide you with better services or other useful information, including new products or services, CCS Medical may call, email, or text you by using the contact information you have provided, which may include prerecorded communications and automatic dialing systems.  Your telephone carrier's standard message rates may apply to these communications? Would this be ok?: ${placeHolder}`,
        `Preferred Insulin Pump Brand: ${placeHolder}`,
        `Preferred Beta Bionics Model: ${placeHolder}`,
        `Preferred Medtronic Model: ${placeHolder}`,
        `Preferred Tandem Model: ${placeHolder}`,
        `Preferred Insulet Model: ${placeHolder}`,
        `What insulin is the patient using?: ${placeHolder}`,
        `What insulin is the patient using?: ${placeHolder}`,
        `Quantity: ${placeHolder}`,
        `Are you planning to use the Pump application on your phone as your reader/receiver?: ${placeHolder}`,
        `Preferred CGM Product: ${placeHolder}`,
        `Other: ${placeHolder}`,
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
        `Are you planning to use the CGM application on your phone as your reader/receiver?: ${placeHolder}`,
        `Estimated Cost Statement: ${placeHolder}`,
        `Patient is: ${placeHolder}`,
        `Pump Days on Hand: ${placeHolder}`,
        `Patient is: ${placeHolder}`,
        `CGM Days on Hand: ${placeHolder}`,
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
        `New Healthcare Provider First Name: ${placeHolder}`,
        `New Healthcare Provider Last Name: ${placeHolder}`,
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
        `ID : ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Rx Bin: ${placeHolder}`,
        `PCN: ${placeHolder}`,
        `Help Desk Phone Number: ${placeHolder}`,
        `Do you have any allergies?: ${placeHolder}`,
        `Please check all common environmental allergies that apply: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Please check all common medication allergies that apply: ${placeHolder}`,
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
        116401484, 116401485, 116401486, 116401487, 116401488, 116401489, 
        116401491, 116401492, 116401493, 116401496, 116401497, 116401498, 
        116401499, 116401500, 116401504, 116401505, 116401506, 116401507, 
        116401508, 116401509, 116401510, 116401511, 116401512, 116401514, 
        116401515, 116401517, 116401518, 116401519, 116401520, 116401521, 
        116401522, 116401523, 116401524, 116401525, 116401526, 116401527, 
        116401528, 116401529, 116401530, 116401531, 116401532, 116401533, 
        116401534, 116401535, 116401537, 116401538, 116401539, 116401540, 
        116401542, 116401543, 116401544, 116401545, 116401546, 116401547, 
        116401548, 116401549, 116401550, 116401551, 116401552, 116401553, 
        116401554, 116401555, 116401556, 116401557, 116401558, 116401559, 
        116401560, 116401561, 116401562, 116401563, 116401564, 116401565, 
        116401566, 116401567, 116401568, 116401569, 116401570, 116401571, 
        116401572, 116401573, 116401574, 116401575, 116401576, 116401577, 
        116401578, 116401579, 116401580, 116401581, 116401582, 116401583, 
        116401584, 116401585, 116401586, 116401587, 116401589, 116401590, 
        116401591, 116401592, 116401593, 116401594, 116401595, 116401597, 
        116401598, 116401599, 116401600, 116401601, 116401602, 116401603, 
        116401604, 116401605, 116401606, 116401607, 116401608, 116401609, 
        116401610, 
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
      .getElementById(116401612)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
