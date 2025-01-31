function joinTValues() {
  setTimeout(function () {
    let placeHolder = "xxyy33zz";
    //eventual result value after a join
    let combinedString = [];

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n) ?? false;

      // if (!el || !el.visible || !el.properties) {
      //   return null
      // }

      if (!el || !el.properties) {
        return null
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

    const convertFirstLine = () => {
      combinedString.push(`***PLEASE COPY AND PASTE NOTE INTO PIMS BEFORE CLICKING ON THE 'SUBMIT BUTTON'***`);
      combinedString.push(``);

      let labels = [`Patient ID: ${placeHolder}`];
      let ids = [115208670];
      idsToNoteLines(ids, labels);
    };

    const convertSecondLine = () => {
      let labels = [
        `Call Type: ${placeHolder}`,
        `Call Reason: ${placeHolder}`,
        `Speaking To: ${placeHolder}`,
        `Your First and Last Name: ${placeHolder}`,
        `What is the best phone number to reach the patient at?: ${placeHolder}`,
        `Who is completing this form?: ${placeHolder}`,
        `Authorized Person Name: ${placeHolder}`,
        `Thank you for verifying the information requested.: ${placeHolder}`,
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
        `Patient is: ${placeHolder}`,
        `Patient is: ${placeHolder}`,
        `Pump Days on Hand: ${placeHolder}`,
        `CGM Days on Hand: ${placeHolder}`,
        `Patient Phone Number: ${placeHolder}`,
        `Please confirm what type of phone number: ${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?  (If a phone number is not displayed, please select no and provide your phone number).: ${placeHolder}`,
        `Do you want to add any additional phone numbers?: ${placeHolder}`,
        `Mobile Phone Number: ${placeHolder}`,
        `Landline Phone Number: ${placeHolder}`,
        `Do you want to add any additional phone numbers?: ${placeHolder}`,
        `Additional Phone Number: ${placeHolder}`,
        `Email Address on file:: ${placeHolder}`,
        `Is this the correct email address?: ${placeHolder}`,
        `Email address: ${placeHolder}`,
        `Shipping address on file:: ${placeHolder}`,
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
        `Primary Insurance Policy/ID Numbe: ${placeHolder}`,
        `Our records show this is your primary insurance and policy number.  Is this correct?  (If primary insurance is not displayed, select no and provide the name of your primary insurance).: ${placeHolder}`,
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
        `Is this your secondary insurance?  If secondary insurance is not displayed, select no and provide the name of your secondary insurance).: ${placeHolder}`,
        `Upload Image of the Front of Insurance Card: ${placeHolder}`,
        `Upload Image of the Back of Insurance Card: ${placeHolder}`,
        `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
        `Drug Card Holder:: ${placeHolder}`,
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
        `Mobile Phone Number: ${placeHolder}`,
        `Work Phone Number: ${placeHolder}`,
        `Email address: ${placeHolder}`,
        `Would you like us to share relevant medical information with this person in case of a medical emergency: ${placeHolder}`,
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
        `Authorized Party's First / Last name: ${placeHolder}`,
        `What is your relationship with the patient?: ${placeHolder}`,
        `Other: ${placeHolder}`,
        `Advised Patient of Next Steps: ${placeHolder}`,
        `Advised the patient their order will ship: ${placeHolder}`,
      ];

      let ids = [
        116138312, 116138313, 116138315, 115193505, 115193506, 115193507, 
        115193508, 115193510, 115554614, 115554645, 115554648, 115554649, 
        115737771, 115737845, 115737879, 115554660, 115773699, 115554697, 
        115554732, 115554930, 115554995, 115554997, 115554999, 115555000, 
        115555002, 115555006, 115555007, 115555008, 115555073, 115555074, 
        115555091, 115555092, 115555095, 115555096, 115555098, 115555100, 
        115738002, 115738006, 115738039, 115738055, 115193515, 115193516, 
        115193517, 115193518, 115193519, 115193520, 115193521, 115193522, 
        115193523, 115193524, 115193525, 115193526, 115193527, 115193528, 
        115193529, 115193530, 115193531, 115193532, 115193533, 115193534, 
        115193535, 115193536, 115193537, 115193538, 115193539, 115193540, 
        115193541, 115193542, 115193543, 115193544, 115193545, 115193548, 
        115193549, 115193550, 115193551, 115193552, 115193553, 115193554, 
        115193555, 115193556, 115193557, 115193558, 115193561, 115193562, 
        115193563, 115193564, 115193565, 115193566, 115193567, 115193568, 
        115193570, 115193571, 115193572, 115193573, 115193574, 115193575, 
        115193576, 115193579, 115193580, 115193581, 115193582, 115193583, 
        115193584, 115193585, 115193586, 115193587, 115193588, 115193589, 
        115193590, 115193591, 115193592, 115193593, 115193594, 115193595, 
        115193596, 115193597, 115193598, 115193599, 115193600, 115193602, 
        115193603, 115193604, 115193605, 115193606, 115193607, 115193608, 
        115193609, 115193610, 115193611, 115193612, 115193613, 115193614, 
        115193615, 115621581, 115686113, 
      ];

      idsToNoteLines(ids, labels);
    };

    const highlightSubNote = (noteId) => {
      const prevTextAreaDiv = document.getElementById(noteId + "div");
      if (prevTextAreaDiv)
        prevTextAreaDiv.remove();

      const newTextAreaDiv = document.createElement("div");
      newTextAreaDiv.id = noteId + "div";
      newTextAreaDiv.style.border = "1px solid #a0aec0";
      newTextAreaDiv.style.padding = "8px";
      newTextAreaDiv.style.overflowY = "auto";
      newTextAreaDiv.style.borderRadius = "3px";
      newTextAreaDiv.style.color = "#2a2a2a";
      newTextAreaDiv.style.height = "1361.13px";
      newTextAreaDiv.style.marginTop = "-37.2px";
      newTextAreaDiv.addEventListener("mouseover", function () {
        this.style.background = "#edf2f7";
        this.style.border = "1px solid #a0aec0";
      });
      newTextAreaDiv.addEventListener("mouseout", function () {
        this.style.background = "transparent";
        this.style.border = "1px solid #a0aec0";
      });

      let joinedBrArr = "";
      for (let i = 0; i < combinedString.length; i++) {
        if (i == 0) {
          joinedBrArr = "<div><span style='font-weight: bold; font-size: 1.2em;'>***PLEASE COPY AND PASTE NOTE INTO PIMS BEFORE <br>CLICKING ON THE 'SUBMIT BUTTON' ***</span></div>";
          joinedBrArr = joinedBrArr + "<br>";
        } else {
          joinedBrArr = joinedBrArr + `<div style="width: 100%; word-wrap: break-word; overflow-wrap: break-word; box-sizing: border-box;">${combinedString[i].replace(new RegExp(`(.{1,78})(\\s|$)`, 'g'), "$1<br>")}</div>`;
        }
      }
      newTextAreaDiv.innerHTML = joinedBrArr;
      newTextAreaDiv.contentEditable = true;
      // debugger;
      // const elements = newTextAreaDiv.querySelectorAll("div");
      // debugger;
      // for (let i = 0; i < elements.length; i ++) {
      //  const element = elements[i];
      //  elements[i].innerHTML = element.innerHTML.replace("&nbsp;", " ");
      // }

      const pimsNote = document.getElementById(noteId);
      pimsNote.style.display = "none";
      pimsNote.parentNode.insertBefore(newTextAreaDiv, pimsNote);

      const parentDiv = newTextAreaDiv.parentElement;
      parentDiv.removeAttribute("data-cloned-value");
    }

    try {
      convertFirstLine();
      convertSecondLine();
    } catch (error) {
      console.log("error", error);
    }

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(115193617)
      .setValue({ value: joinedArr });

    try {
      highlightSubNote("textarea-00000cce");
    } catch (error) {
      console.log("error", error);
    }
  }, 1000);
}

window.onchange = joinTValues;
