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
      // Regular expression to match parentheses and the text inside them
      const regex = /\s*\([^)]*\)/g;
      // Replace the matched text with an empty string
      return str.replace(regex, "").replace(placeHolder, replacement);
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
      combinedString.push(
        `***PLEASE COPY AND PASTE NOTE INTO PIMS BEFORE CLICKING ON THE 'SUBMIT BUTTON'***`
      );
      combinedString.push(``);
    };

    const convertLine = () => {
      let labels = [
        `Customer Service Representative Email: ${placeHolder}`,
        `Patient ID: ${placeHolder}`,
        `Call Type: ${placeHolder}`,
        `Call Reason: ${placeHolder}`,
        `Speaking To: ${placeHolder}`,
        `Patient First and Last Name: ${placeHolder}`,
        `What is the best phone number to reach the patient at?: ${placeHolder}`,
        `Who is completing this form?: ${placeHolder}`,
        `Authorized Person Name: ${placeHolder}`,
        `Prescribed Insulin Pump Brand: ${placeHolder}`,
        `Prescribed Beta Bionics Model: ${placeHolder}`,
        `Prescribed Medtronic Model: ${placeHolder}`,
        `Prescribed Tandem Model: ${placeHolder}`,
        `Prescribed Insulet Model: ${placeHolder}`,
        `What insulin is the patient using?: ${placeHolder}`,
        `What insulin is the patient using?: ${placeHolder}`,
        `Maximum Number of Units Patient is Using Daily/Insulin Directions for Use: ${placeHolder}`,
        `Quantity Patient is Requesting: ${placeHolder}`,
        `Quantity Patient Has On Hand: ${placeHolder}`,
        `Are you planning to use the Pump application on your phone as your reader/receiver?: ${placeHolder}`,
        `Prescribed CGM Product: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Prescribed Transmitter Brand: ${placeHolder}`,
        `Quantity of Transmitters Patient is Requesting: ${placeHolder}`,
        `Quantity of Transmitters Patient Has On Hand: ${placeHolder}`,
        `Prescribed Dexcom Transmitter Model: ${placeHolder}`,
        `Prescribed Medtronic Transmitter Model: ${placeHolder}`,
        `Quantity Patient is Requesting: ${placeHolder}`,
        `Prescribed Receiver (optional) Brand: ${placeHolder}`,
        `Prescribed Abbott Receiver Model: ${placeHolder}`,
        `Prescribed Dexcom Receiver Model: ${placeHolder}`,
        `Prescribed Medtronic Receiver Model: ${placeHolder}`,
        `Prescribed Tandem Receiver Model: ${placeHolder}`,
        `Prescribed Sensor Brand: ${placeHolder}`,
        `Prescribed Abbott Sensor Model: ${placeHolder}`,
        `Prescribed Dexcom Sensor Model: ${placeHolder}`,
        `Prescribed Medtronic Sensor Model: ${placeHolder}`,
        `Quantity of Sensors Patient is Requesting:: ${placeHolder}`,
        `Quantity of Sensors Patient Has On Hand: ${placeHolder}`,
        `Medtronic Quickserter: ${placeHolder}`,
        `Quantity: ${placeHolder}`,
        `Are you planning to use the CGM application on your phone as your reader/receiver?: ${placeHolder}`,
        `Patient is: ${placeHolder}`,
        `Medication #1: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #2: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #3: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #4: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #5: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #6: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #7: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #8: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #9: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #10: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #11: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #12: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #13: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #14: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #15: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #16: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #17: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #18: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #19: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #20: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #21: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #22: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #23: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #24: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Medication #25: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Days On Hand: ${placeHolder}`,
        `Date of Service: ${placeHolder}`,
        `Quantity Shipped: ${placeHolder}`,
        `Pump Days on Hand: ${placeHolder}`,
        `Patient is: ${placeHolder}`,
        `CGM Days on Hand: ${placeHolder}`,
        `Patient Phone Number: ${placeHolder}`,
        `Please confirm what type of phone number: ${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?Ã‚  (If a phone number is not displayed, please select no and provide your phone number).: ${placeHolder}`,
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
        `New Healthcare Provider First Name: ${placeHolder}`,
        `New Healthcare Provider Last Name: ${placeHolder}`,
        `New Healthcare Provider Address: ${placeHolder}`,
        `New Healthcare Provider Phone Number: ${placeHolder}`,
        `Primary Insurance: ${placeHolder}`,
        `Primary Insurance Policy/ID Number: ${placeHolder}`,
        `Our records show this is your primary insurance and policy number.Ã‚  Is this correct?Ã‚  (If primary insurance is not displayed, select no and provide the name of your primary insurance).: ${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
        `Secondary Insurance: ${placeHolder}`,
        `Secondary Insurance Policy/ID Number: ${placeHolder}`,
        `Is this your secondary insurance? (If secondary insurance is not displayed, select no and provide the name of your secondary insurance).: ${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
        `Drug Card Holder: ${placeHolder}`,
        `Drug Card/Insurance Name: ${placeHolder}`,
        `ID#: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Rx Bin: ${placeHolder}`,
        `PCN: ${placeHolder}`,
        `Help Desk Phone Number: ${placeHolder}`,
        `Do you have any allergies?: ${placeHolder}`,
        `Please list all food allergies below: ${placeHolder}`,
        `Please list all latex allergies below: ${placeHolder}`,
        `Please list all environmental allergies: ${placeHolder}`,
        `Please list all drug allergies: ${placeHolder}`,
        `Medical Conditions: ${placeHolder}`,
        `Medication #1: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #2: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #3: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #4: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #5: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #6: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #7: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #8: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #9: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #10: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #11: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #12: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #13: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #14: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #15: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #16: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #17: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #18: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #19: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Medication #20: ${placeHolder}`,
        `Strength: ${placeHolder}`,
        `Directions for Use: ${placeHolder}`,
        `Emergency Contact First / Last name: ${placeHolder}`,
        `Mobile Phone Number: ${placeHolder}`,
        `Work Phone Number: ${placeHolder}`,
        `Email address: ${placeHolder}`,
        `Would you like us to share relevant medical information with this person in case of a medical emergency: ${placeHolder}`,
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
        `Authorized Party's First / Last name: ${placeHolder}`,
        `What is your relationship with the patient?: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Based on insurance and products, the patients Expected patient responsibility is: ${placeHolder}`,
        `Patient has out of pocket expenses and understands their credit card will be charged at the time of shipment: ${placeHolder}`,
        `${placeHolder}`,
        `Patient authorizes CCS Medical to bill their credit card on file up to: ${placeHolder}`,
        `Advised Patient of Next Steps: ${placeHolder}`,
        `Advised the patient their order will ship: ${placeHolder}`,
        `Advised patient: ${placeHolder}`,
      ];

      let ids = [
        115911186, 115911187, 116286671, 116286675, 116286682, 116286684, 
        115911193, 115911194, 115911195, 115911200, 115911201, 115911202, 
        115911203, 115911204, 115911205, 115911206, 116882431, 115911207, 
        116882168, 115911208, 115911210, 115911211, 115911213, 115911216, 
        116882189, 115911214, 115911215, 115911222, 115911217, 115911218, 
        115911219, 115911220, 115911221, 115911223, 115911224, 115911225, 
        115911226, 115911227, 116882397, 115911228, 115911229, 115911230, 
        115911233, 115926088, 115926090, 115926097, 116288301, 116685252, 
        115926099, 115926100, 115926101, 116288305, 116685293, 115926104, 
        115926106, 115926107, 116288306, 116685830, 115926111, 115926112, 
        115926113, 116288309, 116685831, 115926114, 115926115, 115926116, 
        116288312, 116685833, 115926117, 115926118, 115926119, 116288314, 
        116685835, 115926120, 115926121, 115926122, 116288317, 116685838, 
        115926123, 115926124, 115926125, 116288318, 116685839, 115926130, 
        115926162, 115926163, 116288322, 116685842, 115926164, 115926165, 
        115926166, 116288324, 116685844, 116286748, 116286751, 116286760, 
        116288327, 116685846, 116286752, 116286755, 116286765, 116288328, 
        116685848, 116286757, 116286758, 116286769, 116288331, 116685849, 
        116286770, 116286771, 116286772, 116288333, 116685850, 116286774, 
        116286775, 116286776, 116288335, 116685852, 116286790, 116286791, 
        116286792, 116288338, 116685854, 116286793, 116286794, 116286795, 
        116288340, 116685855, 116286796, 116286797, 116286799, 116288372, 
        116685857, 116286812, 116286813, 116286817, 116288374, 116685858, 
        116286818, 116286819, 116286821, 116288377, 116685861, 116286822, 
        116286823, 116286824, 116288378, 116685862, 116286847, 116286848, 
        116286849, 116288380, 116685864, 116286850, 116286851, 116286853, 
        116288384, 116685865, 116286854, 116286855, 116286858, 116288385, 
        116685867, 116286859, 116286860, 116286861, 116288386, 116685868, 
        115911234, 115911235, 115911236, 115911238, 115911239, 115911240, 
        115911241, 115911242, 115911243, 115911244, 115911245, 115911246, 
        115911247, 115911248, 115911249, 115911250, 115911251, 115911252, 
        115911253, 115911254, 115911255, 115911256, 115911257, 115911258, 
        115911259, 115911260, 115911261, 115911262, 115911263, 115911264, 
        115911266, 115911267, 115911268, 115911269, 115911270, 115911271, 
        115911272, 115911273, 115911274, 115911275, 115911276, 115911277, 
        115911278, 115911279, 115911280, 115911281, 115911282, 115911283, 
        115911285, 115911286, 115911287, 115911288, 115911289, 115911290, 
        115911291, 115911293, 116061104, 116061106, 116061107, 116061108, 
        115926078, 116295479, 116295480, 116295482, 116295490, 116295492, 
        116295495, 116295496, 116295497, 116295499, 116295501, 116295503, 
        116295505, 116295507, 116295509, 116295511, 116295517, 116295518, 
        116295520, 116295521, 116295523, 116295526, 116295528, 116295530, 
        116295532, 116295533, 116295536, 116295537, 116295540, 116295541, 
        116295544, 116295545, 116295546, 116295548, 116295550, 116295552, 
        116295553, 116295554, 116295556, 116295557, 116295558, 116295560, 
        116295561, 116295579, 116295580, 116295581, 116295584, 116295585, 
        116295586, 116295587, 116295589, 116295590, 116295591, 116295592, 
        116295593, 116295595, 116295596, 116295597, 116295599, 116295600, 
        116295602, 115911298, 115911299, 115911300, 115911301, 115911302, 
        115911303, 115911304, 115911305, 115911306, 115946628, 115946639, 
        116836403, 116836413, 115911307, 115911308, 115917749, 
      ];

      idsToNoteLines(ids, labels);
    };

    try {
      convertFirstLine();
      convertLine();
    } catch (error) {}

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(115911310)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;