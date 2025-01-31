function joinTValues() {
  setTimeout(function () {
    let placeHolder = "xxyy33zz";
    //eventual result value after a join
    let combinedString = [];

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n) ?? false;
      if (!el || !el.visible || !el.properties) {
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
      let noteLine = ids
        .map((n, i) => {
          let temp = getVal(n);
          return temp ? strReplace(labels[i], temp) : null;
        })
        .filter(Boolean)
        .join("…");
      combinedString.push(noteLine);
    };

    const convertFirstLine = () => {
      let labels = [
        `Date…${new Date().toLocaleDateString()}…Patient ID…${placeHolder}`,
      ];
      let ids = [106944826];
      idsToNoteLines(ids, labels);
    };

    const convertSecondLine = () => {
      let labels = [
        `Authorized Representative or Caregiver Name…${placeHolder}`,
        `Your First and Last Name…${placeHolder}`,
        `What is the best phone number to reach you at?…${placeHolder}`,
        `Who is completing this form?…${placeHolder}`,
        `Authorized Representative or Caregiver Name…${placeHolder}`,
        `Thank you for verifying the information requested.  …${placeHolder}`,
        `Is this the correct referral?…${placeHolder}`,
        `Which brand are you interested in?…${placeHolder}`,
        `Your Phone Number…${placeHolder}`,
        `Please confirm what type of phone number…${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?…${placeHolder}`,
        `Do you want to add any additional phone numbers?…${placeHolder}`,
        `Mobile Phone Number…${placeHolder}`,
        `Landline Phone Number…${placeHolder}`,
        `Do you want to add any additional phone numbers?…${placeHolder}`,
        `Additional Phone Number…${placeHolder}`,
        `Email Address on file…${placeHolder}`,
        `Is this the correct email address?…${placeHolder}`,
        `Email address…${placeHolder}`,
        `Shipping address on file…${placeHolder}`,
        `City…${placeHolder}`,
        `State…${placeHolder}`,
        `Zip…${placeHolder}`,
        `Is this correct shipping address?…${placeHolder}`,
        `Please provide us with your updated shipping address…${placeHolder}`,
        `What is your preferred language?…${placeHolder}`,
        `Current Healthcare Provider First Name…${placeHolder}`,
        `Current Healthcare Provider Last Name…${placeHolder}`,
        `Current Healthcare Provider Address…${placeHolder}`,
        `Current Healthcare Provider Phone Number…${placeHolder}`,
        `Is this still your current healthcare provider?…${placeHolder}`,
        `New Healthcare Provider First Name…${placeHolder}`,
        `New Healthcare Provider Last Name…${placeHolder}`,
        `New Healthcare Provider Address…${placeHolder}`,
        `New Healthcare Provider Phone number…${placeHolder}`,
        `What is the date of your last visit with the physician treating your diabetes?…${placeHolder}`,
        `Primary Insurance…${placeHolder}`,
        `Primary Insurance Policy/ID Number…${placeHolder}`,
        `Our records show this is your primary insurance and policy number. Is this correct?…${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card)…${placeHolder}`,
        `Policy/ID Number…${placeHolder}`,
        `Group Number…${placeHolder}`,
        `Relationship to Policyholder…${placeHolder}`,
        `Policyholder Name…${placeHolder}`,
        `Policyholder Date of Birth…${placeHolder}`,
        `Secondary Insurance Policy/ID Number…${placeHolder}`,
        `Is this your secondary insurance?…${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card)…${placeHolder}`,
        `Policy/ID Number…${placeHolder}`,
        `Group Number…${placeHolder}`,
        `Relationship to Policyholder…${placeHolder}`,
        `Policyholder Name…${placeHolder}`,
        `Policyholder Date of Birth…${placeHolder}`,
        `Are you using a Continuous Glucose Monitor (CGM)?…${placeHolder}`,
        `Brand…${placeHolder}`,
        `Model Number…${placeHolder}`,
        `Reader/Receiver Serial Number…${placeHolder}`,
        `Date of Purchase…${placeHolder}`,
        `Number of Sensors on Hand…${placeHolder}`,
        `Insurance that Paid…${placeHolder}`,
        `Are you administering insulin?…${placeHolder}`,
        `..…${placeHolder}`,
        `Insulin…${placeHolder}`,
        `Would you like your supplies to be shipped every 30 days or every 90 days?…${placeHolder}`,
        `Are you willing to respond to monthly alerts so we can set you up on a 90 day order for your CGM supplies?…${placeHolder}`,
        `Are you planning to use the CGM application on your phone as your reader/receiver?…${placeHolder}`,
        `Are you planning to use the Pump application on your phone as your reader/receiver?…${placeHolder}`,
        `Are you currently using a Medtronic Insulin Pump?…${placeHolder}`,
        `What brand of Medtronic Insulin Pump are you using?…${placeHolder}`,
        `Do you want your Medtronic CGM to work with your Medtronic Insulin Pump?…${placeHolder}`,
        `Do you want your Medtronic CGM to work with your cell phone?…${placeHolder}`,
        `Are you currently using a Dexcom CGM with your insulin pump or insulin pen?…${placeHolder}`,
        `Do you want to continue with Dexcom G7 Continuous Glucose Monitor?…${placeHolder}`,
        `Would you like to add additional authorized parties to speak on your behalf?…${placeHolder}`,
        `Authorized Representative Name…${placeHolder}`,
        `What is your relationship with the patient?…${placeHolder}`,
        `Other (relationship)…${placeHolder}`,
        `Based on the information provided, you are requesting up to a 90-day supply for the following…${placeHolder}`,
        `Based on the information provided, you are requesting supplies for the following…${placeHolder}`,
        `If you are covered at 100% and all documents are on file, do you approve CCS to ship your Continuous Glucose Monitor order?…${placeHolder}`,
        `We will contact you from a '727' area code…${placeHolder}`,
        `By submitting this information you are authorizing CCS Medical to move forward with your referral…${placeHolder}`,
      ];

      let ids = [
        107109613, 106942351, 106942320, 106941797, 106943031, 106983695, 
        107093816, 107093818, 106943097, 107582511, 107343046, 106987795, 
        106944120, 106988211, 106988280, 106988282, 106943201, 106943204, 
        106943344, 106941827, 106941828, 107109001, 106941829, 106941830, 
        106941831, 115019719, 106941823, 107091261, 107091992, 107255034, 
        106941824, 106941825, 106941826, 107092059, 107092061, 109674693, 
        107621877, 106943314, 106941832, 107091993, 107092009, 107092024, 
        107092017, 107092012, 107254185, 106943330, 106943329, 107092575, 
        107092576, 107092577, 107092579, 107092580, 107254201, 106943361, 
        106943364, 106943366, 106943367, 106943374, 106943383, 106943385, 
        106943412, 106943449, 106983725, 106943491, 107109268, 109674701, 
        115774430, 106943504, 107406031, 106943510, 106943530, 106943531, 
        106943541, 106943551, 106943553, 106943737, 106943746, 107644369, 
        107732976, 107092582, 107265118, 107257631,
      ];

      idsToNoteLines(ids, labels);
    };

    try {
      convertFirstLine();
      convertSecondLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(114672407)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
