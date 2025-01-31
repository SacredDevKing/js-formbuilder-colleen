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
        `I agree to: ${placeHolder}`,
        `I'd like to receive monthly newsletters and educational emails from CCS.: ${placeHolder}`,
        `Who is completing this form?: ${placeHolder}`,
        `Authorized Person Name: ${placeHolder}`,
        `${placeHolder}`, // Contact Question
        `Preferred Insulin Pump Brand: ${placeHolder}`,
        `Preferred Beta Bionics Model: ${placeHolder}`,
        `Preferred Medtronic Model: ${placeHolder}`,
        `Preferred Tandem Model: ${placeHolder}`,
        `Preferred Insulet Model: ${placeHolder}`,
        `What insulin is the patient using?: ${placeHolder}`,
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
        `New Healthcare Provide First Name: ${placeHolder}`,
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
        `ID #: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Rx Bin: ${placeHolder}`,
        `PCN: ${placeHolder}`,
        `Help Desk Phone Number: ${placeHolder}`,
        `Do you have any allergies?: ${placeHolder}`,
        `Please check all common environmental allergies that : ${placeHolder}`,
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
        115917886, 115918017, 115918019, 115918036, 115918038, 115918072, 
        115917894, 115917895, 115917896, 115917900, 115917901, 115917902, 
        115917903, 115917904, 115917906, 115917908, 115917910, 115917911, 
        115917913, 115917914, 115917915, 115917916, 115917917, 115917918, 
        115917919, 115917920, 115917921, 115917922, 115917923, 115917924, 
        115917925, 115917926, 115917927, 115917928, 115917929, 115917930, 
        115917931, 115917933, 115917934, 115917935, 115917936, 115917938, 
        115917939, 115917940, 115917941, 115917942, 115917943, 115917944, 
        115917945, 115917946, 115917947, 115917948, 115917949, 115917950, 
        115917951, 115917952, 115917953, 115917954, 115917955, 115917956, 
        115917957, 115917958, 115917959, 115917960, 115917961, 115917962, 
        115917963, 115917964, 115917965, 115917966, 115917967, 115917968, 
        115917969, 115917970, 115917971, 115917972, 115917973, 115917974, 
        115917975, 115917976, 115917977, 115917978, 115917979, 115917980, 
        115917981, 115917982, 115917983, 115917985, 115917986, 115917987, 
        115917988, 115917989, 115917990, 115917991, 115917993, 115917994, 
        115917995, 115917996, 115917997, 115917998, 115917999, 115918000, 
        115918001, 115918002, 115918003, 115918004, 115918005, 115918006, 
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
      .getElementById(115918010)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
