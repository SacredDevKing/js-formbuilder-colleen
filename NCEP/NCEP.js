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
        `Yes…Date…${new Date().toLocaleDateString()}…Patient ID…${placeHolder}`,
        `First Name…${placeHolder}`,
        `Last Name…${placeHolder}`,
        `Date of Birth…${placeHolder}`,
        `Date of Birth…${placeHolder}`,
        `Zip Code…${placeHolder}`,
        `I agree to …${placeHolder}`,
      ];
      let ids = [
        107838101, 107838102, 107838103, 107838104, 107838105, 107838106,
        107838107,
      ];
      idsToNoteLines(ids, labels);
    };

    const convertSecondLine = () => {
      let labels = [
        `I'd like to receive monthly newsletters and educational emails from CCS…${placeHolder}`,
        `Authorized Representative or Caregiver Name…${placeHolder}`,
        `Patient ID Matched…${placeHolder}`,
        `Your information does not match our records…${placeHolder}`,
        `Logo…${placeHolder}`,
        `Your First and Last Name…${placeHolder}`,
        `What is the best phone number to reach you at?…${placeHolder}`,
        `Who is completing this form?…${placeHolder}`,
        `Authorized Representative or Caregiver Name…${placeHolder}…Thank you for verifying the information requested`,
      ];

      let ids = [
        107838108, 107838109, 107838110, 107838111, 107838113, 107838115,
        107838116, 107838117, 107838118,
      ];
      idsToNoteLines(ids, labels);
    };

    const convertThirdLine = () => {
      let labels = [
        `We have a referral for:…${placeHolder}`,
        `Is this the correct referral?…${placeHolder}`,
        `Which brand are you interested in?…${placeHolder}`,
        `We would like to confirm the following information…${placeHolder}`,
        `Your Phone Number…${placeHolder}`,
        `Please confirm what type of phone number:…${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?…${placeHolder}`,
        `Do you want to add any additional phone numbers?…${placeHolder}`,
        `Mobile Phone Number…${placeHolder}`,
        `Landline Phone Number…${placeHolder}`,
        `Do you want to add any additional phone numbers?…${placeHolder}`,
        `Additional Phone Number…${placeHolder}`,
        `Email Address on file:…${placeHolder}`,
        `Is this the correct email address?…${placeHolder}`,
        `Email address…${placeHolder}`,
        `Shipping address on file:…${placeHolder}`,
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
        `Secondary Insurance…${placeHolder}`,
        `Secondary Insurance Policy/ID Number…${placeHolder}`,
        `Is this your secondary insurance?…${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card)…${placeHolder}`,
        `Policy/ID Number…${placeHolder}`,
        `Group Number…${placeHolder}`,
        `Relationship to Policyholder…${placeHolder}`,
        `Policyholder Name…${placeHolder}`,
        `Policyholder Date of Birth…${placeHolder}`,
        `Are you currently using an insulin pump?…${placeHolder}`,
        `Please verify pump information:…${placeHolder}`,
        `Height…${placeHolder}`,
        `Weight…${placeHolder}`,
        `Do you have dexterity issues?…${placeHolder}`,
        `Based on your answers, we will send the appropriate infusion sets…${placeHolder}`,
        `Patient Testing Frequency…${placeHolder}`,
        `Injection Frequency…${placeHolder}`,
        `How long have you been injecting three or more times per day?…${placeHolder}`,
        `How many units of insulin do you inject each day?…${placeHolder}`,
        `Current Pump Model…${placeHolder}`,
        `Pump Serial Number…${placeHolder}`,
        `Insurance that paid for your current pump…${placeHolder}`,
        `Date of Purchase…${placeHolder}`,
        `Please select malfunctions you have experienced:…${placeHolder}`,
        `Other Malfunctions:…${placeHolder}`,
        `Please confirm you would like to receive a replacement pump…${placeHolder}`,
        `If you are currently on a pump and continually using it, please provide the date you received the pump:…${placeHolder}`,
        `How often are you changing the site?…${placeHolder}`,
        `How many days on hand do you have?…${placeHolder}`,
        `Infusion sets do vary by manufacturer. Provide your current cannula size and tubing length below. We will ship the comporable supplies…${placeHolder}`,
        `What is your current cannula size?…${placeHolder}`,
        `Other…${placeHolder}`,
        `What is your current tubing length?…${placeHolder}`,
        `Other…${placeHolder}`,
        `CCS Medical provides services for Continuous Glucose Monitoring Systems.  Would you like to receive CGM supplies from CCS Medical?…${placeHolder}`,
        `We look forward to providing you with your CGM Supplies.  Please select the best to describe you:…${placeHolder}`,
        `Preferred CGM Product…${placeHolder}`,
        `Current Brand…${placeHolder}`,
        `Model Number…${placeHolder}`,
        `Reader/Receiver Serial Number…${placeHolder}`,
        `Date of Purchase…${placeHolder}`,
        `Number of CGM Sensors on Hand…${placeHolder}`,
        `Insurance that Paid…${placeHolder}`,
        `Insulin…${placeHolder}`,
        `CGM90 Day Program Requirements…${placeHolder}`,
        `Are you planning to use the CGM application on your phone as your reader/receiver?…${placeHolder}`,
        `Are you planning to use the Pump application on your phone as your reader/receiver?…${placeHolder}`,
        `Are you willing to respond to monthly alerts so we can set you up on a 90 day order for your CGM supplies?…${placeHolder}`,
        `Are you currently using a Medtronic Insulin Pump?…${placeHolder}`,
        `What brand of Medtronic Isulin Pump are you using?…${placeHolder}`,
        `Do you want your Medtronic CGM to work with your Medtronic Insulin Pump?…${placeHolder}`,
        `Do you want your Medtronic CGM to work with your cell phone?…${placeHolder}`,
        `Are you currently using a Dexcom CGM with your insulin pump or insulin pen?…${placeHolder}`,
        `Dexcom G7 CGM will not pair with your pump/pen.  Do you want to continue with Dexcom G7 Continuous Glucose Monitor?…${placeHolder}`,
        `Would you like to add additional authorized parties to speak on your behalf?…${placeHolder}`,
        `Authorized Representative Name…${placeHolder}`,
        `What is your relationship with the patient?…${placeHolder}`,
        `Other (relationship)…${placeHolder}`,
        `Workflow…${placeHolder}`,
        `Supplies and quantities will be 30 or 90 days as determined by your insurance benefits.  You could receive the following products for a 30 Day Shipment:…${placeHolder}`,
        `Supplies and quantities will be 30 or 90 days as determined by your insurance benefits.  You could receive the following products for a 90 Day Shipment:…${placeHolder}`,
        `If you are covered at 100% and all documents are on file, do you approve CCS to ship your Insulin Pump/Supplies order?…${placeHolder}`,
        `We will contact you from a '727' area code…${placeHolder}`,
        `By submitting this information you are authorizing CCS Medical to move forward with your referral…${placeHolder}`,
        `Patient_Info_1…Yes…Date…${new Date().toLocaleDateString()}…Patient ID…${placeHolder}`,
        `First Name…${placeHolder}`,
        `Last Name…${placeHolder}`,
        `Date of Birth…${placeHolder}`,
        `Date of Birth…${placeHolder}`,
        `Zip Code…${placeHolder}`,
        `I agree to …${placeHolder}`,
      ];

      let ids = [
        107838120, 107838121, 107838122, 107838123, 107838124, 107838125, 
        107838126, 107838127, 107838128, 107838129, 107838130, 107838131, 
        107838132, 107838133, 107838134, 107838135, 107838136, 107838137, 
        107838138, 107838139, 107838140, 115019757, 107838141, 107838142, 
        107838143, 107838144, 107838145, 107838146, 107838147, 107838148, 
        107838149, 109674543, 107838150, 107838151, 107838152, 107838153, 
        107838154, 107838155, 107838156, 107838157, 107838158, 107901181, 
        107838159, 107838160, 107838161, 107838162, 107838163, 107838164, 
        107838165, 107838166, 107838167, 107838342, 107901585, 107901587, 
        107901608, 107901618, 107838346, 107838407, 107838420, 107838419, 
        107838421, 107838422, 107838761, 107838762, 107838763, 107838775, 
        107838776, 107838777, 107838789, 107838809, 108046098, 108046104, 
        108046120, 108046121, 108046157, 107838811, 107838843, 107838858, 
        107838168, 107838169, 107838170, 107838171, 107838172, 107838173, 
        107838177, 107838179, 109674619, 115774748, 107838180, 107838181, 
        107838182, 107838183, 107838184, 107838185, 107838186, 107838187, 
        107838188, 107838189, 107838190, 107838191, 107838192, 107838193, 
        107838194, 107838195, 107838196, 107838101, 107838102, 107838103, 
        107838104, 107838105, 107838106, 107838107, 
      ];
      idsToNoteLines(ids, labels);
    };

    try {
      convertFirstLine();
      convertSecondLine();
      combinedString.push(
        "We would like to ensure we have all the necessary information to process your referral."
      );
      convertThirdLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(114683588)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
