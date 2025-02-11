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
            `Patient ID: ${placeHolder}`,
            `CCS Customer Service Representative Email Address: ${placeHolder}`,
            `Call Type: ${placeHolder}`,
            `${placeHolder}`,
            `Call Reason: ${placeHolder}`,
            `Speaking To: ${placeHolder}`,
            `Authorized Person Name: ${placeHolder}`,
            `Insurance: ${placeHolder}`,
            `Go To: ${placeHolder}`,
            `Patient Last Name: ${placeHolder}`,
            `Patient is interested in Pump: ${placeHolder}`,
            `Preferred Insulin Pump Brand: ${placeHolder}`,
            `Preferred Beta Bionics Model: ${placeHolder}`,
            `Preferred Medtronic Model: ${placeHolder}`,
            `Preferred Tandem Model: ${placeHolder}`,
            `Quantity: ${placeHolder}`,
            `Preferred CGM Product: ${placeHolder}`,
            `Other: ${placeHolder}`,
            `Patient is: ${placeHolder}`,
            `Patient is: ${placeHolder}`,
            `Patient Testing Frequency: ${placeHolder}`,
            `Injection Frequency: ${placeHolder}`,
            `I show you have (Insurance Name) as your Primary Insurance: ${placeHolder}`,
            `Primary Insurance Policy/ID Number: ${placeHolder}`,
            `Is this correct?  (If primary insurance is not displayed, select no and provide the name of your primary insurance).: ${placeHolder}`,
            `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
            `Policy/ID Number: ${placeHolder}`,
            `Group Number: ${placeHolder}`,
            `Relationship to Policyholder: ${placeHolder}`,
            `Policyholder Name: ${placeHolder}`,
            `Policyholder Date of Birth: ${placeHolder}`,
            `I show you have (Insurance Name) as your Secondary Insurance: ${placeHolder}`,
            `Secondary Insurance Policy/ID Number: ${placeHolder}`,
            `Is this correct?: ${placeHolder}`,
            `Secondary Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
            `Secondary Policy/ID Number: ${placeHolder}`,
            `Group Number: ${placeHolder}`,
            `Relationship to Policyholder: ${placeHolder}`,
            `Policyholder Name: ${placeHolder}`,
            `Policyholder Date of Birth: ${placeHolder}`,
            `Advised Benefits/Out-of-pocket (Advised Medicare 13-month rental payment method).: ${placeHolder}`,
            `Is this an exchange plan?: ${placeHolder}`,
            `Advised Benefits/OOP: ${placeHolder}`,
            `Informed Patient: ${placeHolder}`,
            `Is patient covered at 100%?: ${placeHolder}`,
            `Medtronic Trade-In Pump Credit: ${placeHolder}`,
            `Based on insurance and products, the patients Expected patient responsibility is: ${placeHolder}`,
            `Patient has out of pocket expenses and understands their credit card will be charged at the time of shipment: ${placeHolder}`,
            `How many units of insulin do you inject each day?: ${placeHolder}`,
            `How long has the patient been injecting three or more times per day?: ${placeHolder}`,
            `Current Pump Model: ${placeHolder}`,
            `Pump Serial Number: ${placeHolder}`,
            `Insurance that Paid: ${placeHolder}`,
            `Date of Purchase: ${placeHolder}`,
            `Patient has experienced these malfunctions: ${placeHolder}`,
            `Other Malfunctions: ${placeHolder}`,
            `Patient is electing to get a replacement pump: ${placeHolder}`,
            `Patient is currently on a pump and has used it continuously since receiving it on this date: ${placeHolder}`,
            `Patient Site Change Frequency: ${placeHolder}`,
            `Days on Hand: ${placeHolder}`,
            `Advised Patient their pump supplies will ship every: ${placeHolder}`,
            `Are you currently using a Medtronic Insulin Pump?: ${placeHolder}`,
            `What model of Medtronic Isulin Pump are you using?: ${placeHolder}`,
            `Do you want your Medtronic CGM to work with your Medtronic Insulin Pump?: ${placeHolder}`,
            `Do you want your Medtronic CGM to work with your cell phone?: ${placeHolder}`,
            `Are you currently using a Dexcom CGM with your insulin pump or insulin pen?: ${placeHolder}`,
            `Current Brand/Model: ${placeHolder}`,
            `Reader/Receiver Serial Number: ${placeHolder}`,
            `Insurance that paid: ${placeHolder}`,
            `Date of Purchase: ${placeHolder}`,
            `Days on Hand: ${placeHolder}`,
            `What company/pharmacy did you get your last order of supplies from?: ${placeHolder}`,
            `What was the date you received the supplies from your previous supplier?: ${placeHolder}`,
            `Have you cancelled with that company/supplier?: ${placeHolder}`,
            `Are you administering insulin?: ${placeHolder}`,
            `Do you have frequent, recurring hypoglycemic episodes?: ${placeHolder}`,
            `Advised Patient their CGMS supplies will ship every: ${placeHolder}`,
            `Preferred Beta Bionics Reservoir Model: ${placeHolder}`,
            `Preferred Medtronic Reservoir Model: ${placeHolder}`,
            `Preferred Tandem Reservoir Model: ${placeHolder}`,
            `Quantity: ${placeHolder}`,
            `Preferred Infusion Set Brand: ${placeHolder}`,
            `Preferred Beta Bionics Infusion Set Model: ${placeHolder}`,
            `Preferred Medtronic Infusion Set Model: ${placeHolder}`,
            `Preferred Tandem Infusion Set Model: ${placeHolder}`,
            `Quantity: ${placeHolder}`,
            `Other Supplies: Brand: ${placeHolder}`,
            `Other: 3M Model: ${placeHolder}`,
            `Other: Energizer Model: ${placeHolder}`,
            `Other: Ferndale Lab Model: ${placeHolder}`,
            `Other: Medtronic Model: ${placeHolder}`,
            `Other: Smith & Nephew Model: ${placeHolder}`,
            `Other: Smith's Medical: ${placeHolder}`,
            `Other: Torbot Group Inc.: ${placeHolder}`,
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
            `Are you planning to use the CGM application on your phone as your reader/receiver?: ${placeHolder}`,
            `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
            `Authorized Representative Name: ${placeHolder}`,
            `What is your relationship with this person?: ${placeHolder}`,
            `Other (relationship): ${placeHolder}`,
            `Patient Phone Number: ${placeHolder}`,
            `Is this phone number a mobile number or landline phone?: ${placeHolder}`,
            `Is the phone number we have on file the best phone number to reach you?  (If a phone number is not displayed, please select no and provide your phone number).: ${placeHolder}`,
            `Mobile Phone Number: ${placeHolder}`,
            `Landline Phone Number: ${placeHolder}`,
            `The email address I have on file for you is: ${placeHolder}`,
            `Is this correct?: ${placeHolder}`,
            `Email address: ${placeHolder}`,
            `To provide you with better services or other useful information: ${placeHolder}`,
            `I want to confirm we are shipping your supplies to: ${placeHolder}`,
            `City: ${placeHolder}`,
            `State: ${placeHolder}`,
            `Zip: ${placeHolder}`,
            `Is this address correct?: ${placeHolder}`,
            `Please provide us with your updated shipping address.: ${placeHolder}`,
            `What is your preferred language?: ${placeHolder}`,
            `Current Healthcare Provider First Name: ${placeHolder}`,
            `Current Healthcare Provider Last Name: ${placeHolder}`,
            `Current Healthcare Provider Address: ${placeHolder}`,
            `Current Healthcare Provider Phone Number: ${placeHolder}`,
            `Is this correct?  (If a current healthcare provider is not displayed, select no and provide the name of your current healthcare provider).: ${placeHolder}`,
            `New Healthcare Provider First Name: ${placeHolder}`,
            `New Healthcare Provider Last Name: ${placeHolder}`,
            `New Healthcare Provider Address: ${placeHolder}`,
            `New Healthcare Provider Phone number: ${placeHolder}`,
            `What is the date of your last visit with the physician treating your diabetes?: ${placeHolder}`,
            `Expiration Dates: ${placeHolder}`,
            `${placeHolder}`,
            `Advised Patient of Next Steps: ${placeHolder}`,
            `Reorder Process: ${placeHolder}`,
        ];
  
        let ids = [
            111588169, 111588170, 111588173, 111588174, 111588175, 111588176, 
            111588177, 111588178, 111588179, 111588186, 111588187, 111588190, 
            111588191, 111588192, 111588193, 111588195, 111588197, 114572200, 
            111588199, 111588200, 111588201, 111588202, 111588203, 111588204, 
            111588205, 111588206, 111588207, 111588208, 111588209, 111588210, 
            111588211, 111588212, 111588213, 111588214, 111588215, 111588216, 
            111588217, 111588218, 111588219, 111588220, 111588222, 111588224, 
            111588225, 111588226, 111588227, 111588228, 111588229, 111588230, 
            111588231, 111588232, 111588233, 111588234, 111588235, 111588236, 
            111588237, 111588238, 111588239, 111588240, 111588241, 111588242, 
            111588243, 111588244, 111588245, 111588246, 111588247, 111588248, 
            111588250, 111588251, 111588252, 111588253, 111588254, 111588255, 
            111588256, 111588257, 111588258, 111588259, 111588262, 111588265, 
            111588266, 111588267, 111588268, 111588269, 111588270, 111588271, 
            111588272, 111588273, 111588274, 111588275, 111588276, 111588277, 
            111588278, 111588279, 111588280, 111588281, 111588282, 115774166, 
            111588284, 111588285, 111588286, 111588287, 111588288, 111588289, 
            111588290, 111588291, 111588292, 111588293, 111588294, 111588295, 
            111588296, 111588297, 111588298, 111588299, 111588300, 111588301, 
            111588302, 111588303, 111588304, 111588305, 111588306, 111588307, 
            111588308, 111588309, 111588310, 111588311, 111588312, 111588313, 
            111588314, 111588315, 111588316, 111588317, 111588318, 111588319, 
            111588320, 115019761, 111588322, 111588323, 111588324, 111588325, 
            111588326, 111588327, 111588328, 111588329, 111588330, 111588331, 
            111588332, 111588335, 111588336, 111588337, 
        ];
  
        idsToNoteLines(ids, labels);
      };
  
      try {
        convertLine();
      } catch (error) {}
  
      //splitting by row for clarity
  
      let joinedArr = combinedString.join(" ... ");
      console.log(joinedArr);
      loader.engine.document
        .getElementById(116832631)
        .setValue({ value: joinedArr });
    }, 1000);
  }
  
  window.onchange = joinTValues;
  