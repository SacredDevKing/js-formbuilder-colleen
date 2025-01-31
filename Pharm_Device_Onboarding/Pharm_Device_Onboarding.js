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
      let callType = getVal(112558743) ?? "";
      let personSpeaking = getVal(112558746) ?? "";
      let patientSpeaking = personSpeaking === "Patient";
      let authorizedFirstName = getVal(112558747) ?? "";
      let authorizedLastName = getVal(112558748) ?? "";
      let authorizedPersonName = `${authorizedFirstName} ${authorizedLastName}`;
      let speaker = patientSpeaking ? "" : authorizedPersonName;

      combinedString.push(
        `${callType}, speaking to ${personSpeaking} ${speaker}`
      );
      if (callType === "Outbound") {
        combinedString.push("ADVISED CALLER: Call may be recorded");
      }
    };

    const convertSecondLine = () => {
      let labels = [
        `${placeHolder}`, // HIPAA
        `${placeHolder}`, // Did the patient receive their pump/CGM order?
        `${placeHolder} Shipped`, // Please verify product(s) shipped
        `${placeHolder}`, // Is the patient new to therapy?
        `${placeHolder}`, //  Provide the manufacturers phone number to the patient
        `Reviewed Portal Information: ${placeHolder}`,
        `Reason for not registering: ${placeHolder}`,
        `${placeHolder}`,
        `Appointment with CDCES scheduled?: ${placeHolder}`,
        `Date: ${placeHolder}`,
        `Time: ${placeHolder}`,
        `Scheduled with: ${placeHolder}`,
        `Is patient Eligible for the Living Linked Program?: ${placeHolder}`,
        `Reasons patient declined: ${placeHolder}`,
        `${placeHolder}`, // Other
        `Do you have any questions for me?: ${placeHolder}`,
        `${placeHolder}`,
        `Assisted the patient with the following concerns: ${placeHolder}`,
        `${placeHolder}`, // Other
        `Provided the following: ${placeHolder}`,
        `The follow up email included:: ${placeHolder}`,
        `Call Outcome: ${placeHolder}`,
        `${placeHolder}`, // Action
        `${placeHolder}`, // Other
        `${placeHolder}`, // Other
        `Did Not Reach Patient Outcome: ${placeHolder}`,
        `${placeHolder}`, // Other
      ];

      let ids = [
        112558754, 112558755, 113685441, 113685445, 113731756, 113731778,
        113731784, 113731800, 113731820, 113833637, 113833639, 113833640,
        113833653, 113731821, 113784760, 112558894, 113731823, 112558910,
        112610841, 112558958, 113784806, 112558987, 113833883, 113731824,
        113833886, 112558999, 112559012,
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
      .getElementById(112558767)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
