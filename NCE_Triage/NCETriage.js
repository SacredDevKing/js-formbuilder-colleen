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
      let noteLinesArr = ids
        .map((n, i) => {
          let temp = getVal(n);
          return temp ? strReplace(labels[i], temp) : null;
        })
        .filter(Boolean);
      combinedString.push(...noteLinesArr);
    };

    const convertFirstLine = () => {
      let callType = getVal(108600806);
      let personSpeaking = getVal(108600809);
      let patientSpeaking = personSpeaking === "Patient";

      let authorizedPersonName = getVal(108600810);
      if (authorizedPersonName) {
        authorizedPersonName = authorizedPersonName.split(",").join(" ");
      }

      let patientName = getVal(108600818) + " " + getVal(108600819);
      let speaker = patientSpeaking ? patientName : authorizedPersonName;

      combinedString.push(
        `${callType} call for patient consent, spoke to ${personSpeaking} ${speaker}`
      );

      // if (!patientSpeaking) {
      combinedString.push(`Patient Name : ${patientName}`);
      // }

      if (patientSpeaking && callType === "Outbound") {
        combinedString.push("ADVISED CALLER: Call may be recorded");
      }

      if (getVal(108600929) === "Yes") {
        // Would you like to add additional authorized parties to speak on your behalf?
        combinedString.push(
          `Patient added authorized user: ${getVal(108600930) ?? ""} ${
            getVal(108600931) ?? ""
          }`
        );
      }
    };

    let cdgAndInsulin = () => {
      let insulinCgmLabels = [
        `Preferred Insulin Pump Brand: ${placeHolder}`, //
        `Model: ${placeHolder}`, //
        `Model: ${placeHolder}`, //
        `Model: ${placeHolder}`, //
      ];
      let ids = [108600822, 108600823, 108600824, 108600825];
      idsToNoteLines(ids, insulinCgmLabels);
    };

    let insurance = () => {
      const primaryLabels = [
        `Preferred CGM Model: ${placeHolder}`, //
        `Primary Insurance: ${placeHolder}`,
        `Primary Policy #: ${placeHolder}`,
      ];
      idsToNoteLines([108600828, 108600834, 108600835], primaryLabels);

      if (getVal(108600836) === "No - patient updated primary insurance to:") {
        // Is this correct?  (If primary insurance is not displayed, select no and provide the name of your primary insurance).
        const primaryLabels2 = [
          `Insurance Company Name: ${placeHolder}`,
          `Policy #: ${placeHolder}`,
          `Group Number: ${placeHolder}`,
          `Relationship to Policyholder: ${placeHolder}`,
          `Policyholder Name: ${placeHolder}`,
          `Policyholder DOB: ${placeHolder}`,
        ];
        idsToNoteLines(
          [108600837, 108600838, 108600839, 108600840, 108600841, 108600842],
          primaryLabels2
        );
      }

      const secondaryLabels = [
        `Secondary Insurance: ${placeHolder}`,
        `Secondary Policy #: ${placeHolder}`,
      ];
      idsToNoteLines([108600843, 108600844], secondaryLabels);

      if (
        getVal(108600845) === "No - patient updated secondary insurance to:"
      ) {
        // Is this correct? (If a Secondary Insurance is not listed, please select 'No' if you would like to add a secondary insurance).
        const secondaryLabels2 = [
          `Secondary Insurance Company Name: ${placeHolder}`,
          `Secondary Policy #: ${placeHolder}`,
          `Secondary Group Number: ${placeHolder}`,
          `Relationship to Policyholder: ${placeHolder}`,
          `Policyholder Name: ${placeHolder}`,
          `Policyholder DOB: ${placeHolder}`,
        ];
        idsToNoteLines(
          [108600846, 108600847, 108600848, 108600849, 108600850, 108600851],
          secondaryLabels2
        );
      }

      if (getVal(113782903) === "Yes") {
        // Is the WF assigned to RX NCE?
        const cardInformation = [
          `Drug Card/Insurance Name: ${placeHolder}`,
          `ID #: ${placeHolder}`,
          `Group #: ${placeHolder}`,
          `Rx BIN: ${placeHolder}`,
          `PCN: ${placeHolder}`,
          `Help Desk Phone #: ${placeHolder}`,
        ];
        idsToNoteLines(
          [113782922, 113783056, 113783057, 113783058, 113783059, 113783060],
          cardInformation
        );

        const allergyInformation = [
          `Allergies to medications: ${placeHolder}`,
          `Allergies to latex: ${placeHolder}`,
          `Allergies to food: ${placeHolder}`,
          `Allergies to environmental: ${placeHolder}`,
          `Allergies Details: ${placeHolder}`,
        ];
        idsToNoteLines(
          [113783153, 113783154, 113783155, 113783171, 113783172],
          allergyInformation
        );

        if (getVal(113783330)) {
          // WF is assigned to RX NCE
          combinedString.push(
            "The patient is requesting CCS to continue processing the referral."
          );
        }

        if (getVal(113783335)) {
          // Place patient on hold and mark future reorder cards no and delete any existing reorder processing orders.
          combinedString.push(
            "The patient has no open reorders cards or future reorders scheduled for this product."
          );
        }
      } else {
        combinedString.push("WF Not assigned to RX NCE");
      }

      if (getVal(108600929) === "Yes") {
        // Would you like to add additional authorized parties to speak on your behalf?
        let representativeName = getVal(108600930);
        representativeName = representativeName.split(",").join(" ");
        const relationShip = getVal(108600931);
        combinedString.push(
          `Authorized Representative added: ${representativeName} (${relationShip})`
        );
      }
    };

    const phoneNumber = () => {
      let array = [108600933, 108600934, 108600935, 108600936, 108600937];
      let inputs = array.map((num) => getVal(num));
      // const confirmNumInd = getVal(108600935);
      if (inputs[0]) {
        let resStr = `Preferred phone number is: ${inputs[0]}${
          inputs[1] ? "-" + inputs[1] : ""
        }`;
        combinedString.push(resStr);
      }
      if (inputs[3]) {
        combinedString.push(`Added mobile number: ${inputs[3]}`);
      }
      if (inputs[4]) {
        combinedString.push(`Added landline number: ${inputs[4]}`);
      }
    };

    let email = () => {
      let ind = getVal(108600939);
      if (ind === "No - patient does not have an email address") {
        combinedString.push("Patient declines email");
        return;
      }
      let emailVal = getVal(108600940) ?? getVal(108600938);
      if (emailVal) {
        combinedString.push(`Confirmed email address: ${emailVal}`);
      }
    };

    let shipping = () => {
      if (
        getVal(108600946) === "Yes - patient confirmed the shipping address"
      ) {
        let confirmedAddy = [108600942, 108600943, 108600944, 108600945]
          .map((y) => getVal(y))
          .filter(Boolean)
          .join();
        combinedString.push(`Confirmed shipping address as: ${confirmedAddy}`);
      } else {
        combinedString.push(
          `Updated shipping address to: ${getVal(108600947)}`
        );
      }
      combinedString.push(
        `What is your preferred language?: ${getVal(115019760)}`
      );
    };

    let provider = () => {
      let updated =
        getVal(108600953) === "No - patient updated healthcare provider to:";
      let idArray = updated
        ? [108600954, 108600955, 108600956]
        : [108600949, 108600950, 108600951];
      let start = updated
        ? "Updated treating HCP to:"
        : "Confirmed treating HCP is ";
      let [firstName, lastName, address] = idArray.map((y) => getVal(y) ?? "");
      let number = getVal(108600957) ?? "";
      combinedString.push(
        `${start} ${firstName} ${lastName}, ${address} ${number}`
      );
    };

    const convertSecondLine = () => {
      const goTo = getVal(108600812);
      if (goTo === "Pump Only" || goTo === "Pump and CGM") {
        try {
          cdgAndInsulin();
        } catch (error) {}
      }
      try {
        insurance();
      } catch (error) {}
      try {
        phoneNumber();
      } catch (error) {}
      try {
        email();
      } catch (error) {}
      try {
        shipping();
      } catch (error) {}
      try {
        provider();
      } catch (error) {}

      try {
        idsToNoteLines(
          [108600941, 108600962, 113783343],
          [
            `${placeHolder}`,
            `Advised Patient of Next Steps : ${placeHolder}`,
            `${placeHolder}`,
          ]
        );
      } catch (error) {}
    };

    try {
      convertFirstLine();
    } catch (error) {}

    convertSecondLine();

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(108600965)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
