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

    const convertInitLine = () => {
      let callType = getVal(112558743) ?? "";
      let speakingTo = getVal(112558746) ?? "";
      let patientSpeaking = speakingTo === "Patient";
      let spokeWith = getVal(114802688) ?? "";
      let authorizedFirstName = getVal(112558747) ?? "";
      let authorizedLastName = getVal(112558748) ?? "";
      let authorizedPersonName = `${authorizedFirstName} ${authorizedLastName}`;
      let speaker = patientSpeaking ? "" : authorizedPersonName;

      if (spokeWith !== "") {
        spokeWith = `Call Result ${spokeWith}`;
      }

      if (speakingTo === "Authorized Person") {
        combinedString.push(
          `${callType} ${speakingTo} (${authorizedPersonName}). ${spokeWith}`
        );
      } else {
        combinedString.push(
          `${callType} ${speakingTo}. ${spokeWith}`
        );
      }

      combinedString.push(``);

      // if (spokeWith === "Left Message") {
      //   combinedString.push(
      //     `Welcome Call (DBU Only) Did not reach the patient. Call Result Left Message - If pt. calls back and has any questions or problems with their new system, please send email to CGM.Welcome.Call@ccsmed.com with best call back time and phone number. We are available from 9am to 6:30 pm EST Monday through Friday.`
      //   );
      // } else {
      //   combinedString.push(
      //     `${callType}, speaking to ${speakingTo} ${speaker}`
      //   );
      //   if (callType === "Outbound") {
      //     combinedString.push("ADVISED CALLER: Call may be recorded");
      //   }
      // }
    };

    const convertFirstLine = () => {
      let labels = [
        `Call Attempt: ${placeHolder}`,
        `${placeHolder}`, // HIPAA
      ];

      let ids = [
        115569198, 112558754
      ];

      idsToNoteLines(ids, labels);
    }

    const convertSecondLine = () => {
      let pumpCGM = getVal(112558755) ?? "";
      let pumpCGMOther = getVal(115788101) ?? "";
      let plzVerifyShipped = getVal(113685441) ?? "";
      let whatCGMSystem = getVal(113833593) ?? "";

      if (pumpCGM === "Other") {
        combinedString.push(
          `${pumpCGM}: ${pumpCGMOther}${whatCGMSystem}`
        );
      } else {
        combinedString.push(
          `${pumpCGM}: ${whatCGMSystem}`
        );
      }

      if (pumpCGM === "Patient received order") {
        combinedString.push(
          `Product(s) shipped: ${plzVerifyShipped}`
        );
      }
    }

    const convertThirdLine = () => {
      let labels = [
        // `Call Attempt: ${placeHolder}`,
        // `${placeHolder}`, // HIPAA
        // `${placeHolder}`, // Did the patient receive their pump/CGM order?
        // `Product(s) shipped: ${placeHolder}`, // Please verify product(s) shipped
        // `CGM System/Pump system patient received: ${placeHolder}`, // What CGM System/Pump System did the patient receive? (Select all that apply)
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
        `Reasons patient declined (select all that apply): ${placeHolder}`,
        `${placeHolder}`, // Other
        `Do you have any questions for me?: ${placeHolder}`,
        `${placeHolder}`,
        `Assisted the patient with the following concerns: ${placeHolder}`,
        `${placeHolder}`, // Other
        `Provided the following: ${placeHolder}`,
        `The follow up email included: (select all that apply): ${placeHolder}`,
      ];

      let ids = [
        // 115569198, 112558754, 112558755, 113685441, 113833593, 113685445, 
        113685445, 113731756, 113731778, 113731784, 113731800, 113731820, 
        113833637, 113833639, 113833640, 113833653, 113731821, 113784760, 
        112558894, 113731823, 112558910, 112610841, 112558958, 113784806, 
      ];

      idsToNoteLines(ids, labels);
      
      combinedString.push(``);
    };

    const convertCloseLine = () => {
      let labels = [
        `Call Outcome: ${placeHolder}`,
        `${placeHolder}`, // Action
        `${placeHolder}`, // Other
        `${placeHolder}`, // Other
        `Did Not Reach Patient Outcome: ${placeHolder}`,
        `${placeHolder}`, // Other
      ];

      let ids = [
        112558987, 113833883, 113731824, 113833886, 112558999, 112559012,
      ];

      idsToNoteLines(ids, labels);

      combinedString.push(
        `If patient calls back and has any questions or problems with their new system, please send email to CGM.Welcome.Call@ccsmed.com with the best call back time and phone number. We are available from 9am to 6:30pm EST Monday through Friday.`
      );
    }

    try {
      // convertThirdLine();
      convertInitLine();
      convertFirstLine();
      convertSecondLine();
      convertThirdLine();
      convertCloseLine();
    } catch (error) { }

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(112558767)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;