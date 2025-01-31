function joinTValues() {
  setTimeout(function () {
    let placeHolder = "xxyy33zz";
    //eventual result value after a join
    let combinedString = [];

    let isValidPWO = false;
    let isValidClinicalNote = false;
    let isValidF2F = false;
    let isValidTestLogs = false;
    let isValidLabs = false;
    let isValidNarrativeLetter = false;
    let isValidABN = false;
    let isValidAttestationForm = false;
    let isValidAddendum = false;
    let isValidOtherDoc = false;

    let insurance = "";
    let goTo = "";

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n) ?? false;
      if (!el || el.visible === false || !el.properties) {
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

    const getValue = (id) => {
      let fieldValue = getVal(id);

      if (fieldValue !== null && fieldValue !== "") {
        return fieldValue;
      }
      return "";
    };

    const getDate30DaysLater = (inputDate) => {
      var dateParts = inputDate.split("/");
      var date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
      date.setDate(date.getDate() + 30);

      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();

      return month + "/" + day + "/" + year;
    };

    const isValidDateFormat = (dateString) => {
      var datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
      return datePattern.test(dateString);
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

    const changeConsentDateExpire = () => {
      let consentDateTaken = getValue(113992101); // Consent Date Taken
      let consentDateExpires = getValue(113992102); // Consent Date Expires

      if (consentDateTaken === "" && !isValidDateFormat(consentDateTaken))
        return;

      let date30DaysLater = getDate30DaysLater(consentDateTaken);
      loader.engine.document.getElementById(113992102).setValue({
        value: date30DaysLater,
      });
    };

    // 2nd line

    const convertConsentLine = () => {
      let isValidConsent = getValue(113992100); // Is there valid consent?
      let consentDateTaken = getValue(113992101); // Consent Date Taken
      let consentDateExpires = getValue(113992102); // Consent Date Expires

      combinedString.push(" ");
      if (isValidConsent === "Need consent") {
        combinedString.push("   1. Need consent");
      } else {
        combinedString.push(
          `   1. Have Consent – date taken ${consentDateTaken} and expires ${consentDateExpires}`
        );
      }
    };

    const convertInsuranceLines = () => {
      let havePwo = getValue(113992090); // PWO
      let haveCN = getValue(113992091); // Clinical Notes
      let haveF2F = getValue(113992092); // Face to Face
      let haveTestLog = getValue(113992093); // Test Logs
      let haveLabs = getValue(113992094); // Labs
      let haveNarrativeLetter = getValue(113992095); // Narrative Letter
      let haveABN = getValue(113992096); // ABN
      let haveAttestationForm = getValue(113992097); // Attestation Form
      let haveAddendum = getValue(113992098); // Addendum
      let haveOtherDoc = getValue(113992099); // Other Documentation

      let isPWOValid = getValue(113992126); // Is the PWO valid?
      let isCNValid = getValue(113992158); // Are the Clinical Notes Valid?
      let isF2FValid = getValue(113992182); // Is Face to Face valid?
      let isTestValid = getValue(113992189); // Are the test logs valid?
      let isLabValid = getValue(113992231); // Are the labs valid?
      let isNarrativeLetterValid = getValue(113992237); // Is the Narrative Letter Valid?
      let isABNValid = getValue(113992242); // Is the ABN Valid?

      let whatCorrectNeedPWO = getValue(113992127); // What corrections are needed? - PWO
      let whatCorrectNeedCN = getValue(113992159); // What corrections are needed? - CN
      let whatCorrectNeedF2F = getValue(113992183); // What corrections are needed? - F2F
      let whatCorrectNeedTest = getValue(113992190); // What corrections are needed? - Test Logs
      let whatCorrectNeedLabs = getValue(113992232); // What corrections are needed? - Labs

      let insurances = getValue(113992088); // What documentation does the insurance checklist show is required for this order?  (Select all that apply)
      let insuranceItems = insurances.split(",");
      let insuranceCnt = insuranceItems.length;
      let isPacketApproval = getValue(113992247); // Is this order ready for packet approval?

      for (let i = 0; i < insuranceCnt; i++) {
        combinedString.push(" ");

        if (insuranceItems[i] === "PWO") {
          if (whatCorrectNeedPWO !== "")
            whatCorrectNeedPWO = `- ` + whatCorrectNeedPWO;

          if (isPWOValid === "Need Corrected PWO") {
            combinedString.push(
              `   ${i + 2}. Need Corrected PWO ${whatCorrectNeedPWO}`
            );
          } else {
            if (isPWOValid !== "") {
              combinedString.push(
                `   ${i + 2}. ${isPWOValid} ${whatCorrectNeedPWO}`
              );
            } else {
              combinedString.push(
                `   ${i + 2}. ${havePwo} ${whatCorrectNeedPWO}`
              );
            }
          }

          if (
            havePwo === "Have PWO - Validated" ||
            havePwo === "Have PWO - Needs Review"
          ) {
            isValidPWO = true;
          }
        } else if (insuranceItems[i] === "Clinical Notes") {
          if (whatCorrectNeedCN !== "")
            whatCorrectNeedCN = `- ` + whatCorrectNeedCN;

          if (isCNValid === "Need Corrected Clinical Notes") {
            combinedString.push(
              `   ${i + 2}. Need Corrected Clinical Notes ${whatCorrectNeedCN}`
            );
          } else {
            if (isCNValid !== "") {
              combinedString.push(
                `   ${i + 2}. ${isCNValid} ${whatCorrectNeedCN}`
              );
            } else {
              combinedString.push(
                `   ${i + 2}. ${haveCN} ${whatCorrectNeedCN}`
              );
            }
          }

          // if (
          //   haveCN === "Have Clinical Notes - Validated" ||
          //   haveCN === "Have Clinical Notes - Needs Review"
          // ) {
          isValidClinicalNote = true;
          // }
        } else if (insuranceItems[i] === "Face to Face") {
          if (whatCorrectNeedF2F !== "")
            whatCorrectNeedF2F = `- ` + whatCorrectNeedF2F;

          if (isF2FValid === "Need Corrected Face to Face") {
            combinedString.push(
              `   ${i + 2}. Need Corrected Face to Face ${whatCorrectNeedF2F}`
            );
          } else {
            if (isF2FValid !== "") {
              combinedString.push(
                `   ${i + 2}. ${isF2FValid} ${whatCorrectNeedF2F}`
              );
            } else {
              combinedString.push(
                `   ${i + 2}. ${haveF2F} ${whatCorrectNeedF2F}`
              );
            }
          }

          if (
            haveF2F === "Have Face to Face - Validated" ||
            haveF2F === "Have Face to Face - Needs Review"
          ) {
            isValidF2F = true;
          }
        } else if (insuranceItems[i] === "Test Logs") {
          if (whatCorrectNeedTest !== "") {
            whatCorrectNeedTest = `- ` + whatCorrectNeedTest;
          }
          if (isTestValid === "Need corrected Test Logs") {
            combinedString.push(
              `   ${i + 2}. Need Corrected Test Logs ${whatCorrectNeedTest}`
            );
          } else {
            if (isTestValid !== "") {
              combinedString.push(
                `   ${i + 2}. ${isTestValid} ${whatCorrectNeedTest}`
              );
            } else {
              combinedString.push(
                `   ${i + 2}. ${haveTestLog} ${whatCorrectNeedTest}`
              );
            }
          }

          if (
            haveTestLog === "Have Test Logs - Validated" ||
            haveTestLog === "Have Test Logs - Need Review"
          ) {
            isValidTestLogs = true;
          }
        } else if (insuranceItems[i] === "Labs") {
          if (whatCorrectNeedLabs !== "")
            whatCorrectNeedLabs = `- ` + whatCorrectNeedLabs;

          if (isLabValid === "Need Corrected Labs") {
            combinedString.push(
              `   ${i + 2}. Need Corrected Labs ${whatCorrectNeedLabs}`
            );
          } else {
            if (isLabValid !== "") {
              combinedString.push(
                `   ${i + 2}. ${isLabValid} ${whatCorrectNeedLabs}`
              );
            } else {
              combinedString.push(
                `   ${i + 2}. ${haveLabs} ${whatCorrectNeedLabs}`
              );
            }
          }

          if (
            haveLabs === "Have Labs - Validated" ||
            haveLabs === "Have Labs - Needs Review"
          ) {
            isValidLabs = true;
          }
        } else if (insuranceItems[i] === "Narrative Letter") {
          if (isNarrativeLetterValid === "Need Corrected Narrative Letter") {
            combinedString.push(`   ${i + 2}. Need Corrected Narrative Letter`);
          } else {
            if (isNarrativeLetterValid !== "") {
              combinedString.push(`   ${i + 2}. ${isNarrativeLetterValid}`);
            } else {
              combinedString.push(`   ${i + 2}. ${haveNarrativeLetter}`);
            }
          }

          if (
            haveNarrativeLetter === "Have Narrative Letter - Validated" ||
            haveNarrativeLetter === "Have Narrative Letter - Needs Review"
          ) {
            isValidNarrativeLetter = true;
          }
        } else if (insuranceItems[i] === "ABN") {
          if (isABNValid === "Need corrected ABN") {
            combinedString.push(`   ${i + 2}. Need corrected ABN`);
          } else {
            if (isABNValid !== "") {
              combinedString.push(`   ${i + 2}. ${isABNValid}`);
            } else {
              combinedString.push(`   ${i + 2}. ${haveABN}`);
            }
          }

          if (
            haveABN === "ABN - Validated" ||
            haveABN === "ABN - Needs Review"
          ) {
            isValidABN = true;
          }
        } else if (insuranceItems[i] === "Attestation Form") {
          combinedString.push(`   ${i + 2}. ${haveAttestationForm}`);

          if (
            haveAttestationForm === "Attestation Form - Validated" ||
            haveAttestationForm === "Attestation Form - Needs Review"
          ) {
            isValidAttestationForm = true;
          }
        } else if (insuranceItems[i] === "Addendum") {
          combinedString.push(`   ${i + 2}. ${haveAddendum}`);

          if (
            haveAddendum === "Addendum - Validated" ||
            haveAddendum === "Addendum - Needs Review"
          ) {
            isValidAddendum = true;
          }
        } else if (
          insuranceItems[i] === "Other Insurance Specific Documentation"
        ) {
          combinedString.push(`   ${i + 2}. ${haveOtherDoc}`);

          if (
            haveOtherDoc === "Have Other Documentation - Validated" ||
            haveOtherDoc === "Have Other Documentation - Need Review"
          ) {
            isValidOtherDoc = true;
          }
        } else if (insuranceItems[i] === "Pre-Authorization") {
          combinedString.push(`   ${i + 2}. Need Pre-Authorization`);
        } else combinedString.push(`   ${i + 2}. Have ${insuranceItems[i]}`);
      }

      // if (isPacketApproval === "Yes") {
      combinedString.push(" ");
      combinedString.push(`   ${insuranceCnt + 2}. Need Packet approval`);
      // }
    };

    // 3rd line

    const convertPWOProcessingNote = () => {
      let havePwo = getValue(113992090); // PWO
      let copyProcessingNote = getValue(113992108); // Copy PWO processing notes here:
      let didPWOUsingInsulin = getValue(113992109); // Did the HCP use the Enhanced PWO?
      let doesPwoStateUsingInsulin = getValue(113992110); // Does the PWO state the patient is using insulin?
      let doesPatientHipyEvents = getValue(113992111); // Does the patient have hypoglycemic events?

      let pwoScannedDate = getValue(113992114); // What date was the PWO scanned into PIMS?
      let where_Pump_PWO_Scanned = getValue(113992113); // Where is PUMP PWO Scanned?
      let _Pump_PWO_WhatBrand = getValue(113992116); // The Pump PWO is for what Brand?
      let where_CGM_PWO_Scanned = getValue(113992112); // Where is CGM PWO Scanned?
      let _CGM_PWO_WhatBrand = getValue(113992115); // The CGM PWO is for what Brand?

      let pwoStartDate = getValue(113992117); // What is the start date of the PWO?
      let isDiagnosisCode = getValue(113992118); // What is the diagnosis code?
      let diagnosisCode1 = getValue(113992119); // Diagnosis Code

      let siteChangeInstruction = getValue(113992120); // What are the pump site change instructions? Pump site change every ___ day(s)
      let other = getValue(113992121); // Other
      let siteChange = getValue(113992122); // Are site change instructions per manufacturer’s directions”?
      let treatingDoctorSignedPwo = getValue(113992123); // Who is the treating Doctor that signed the PWO?
      let pwoSigned = getValue(113992124);
      let datePwoSigned = getValue(113992125); // What is the date the PWO was signed?

      combinedString.push(" ");
      combinedString.push(`     PWO Processing Note:`);
      if (havePwo === "Have PWO - Validated") {
        if (copyProcessingNote !== "") {
          combinedString.push(`     ${copyProcessingNote}`);
        }
      } else {
        if (pwoScannedDate !== "") {
          pwoScannedDate = `(${pwoScannedDate})`;
        }
        if (siteChangeInstruction === "Other" && other !== "") {
          siteChangeInstruction = `Other (${other})`;
        }
        if (pwoSigned !== "") {
          pwoSigned = `PWO ${pwoSigned}`;
        }

        let note = "     ";

        if (goTo === "CGM Only") {
          note += `CGM PWO scanned (${where_CGM_PWO_Scanned}). ${pwoScannedDate} - PWO for (${_CGM_PWO_WhatBrand})`;
        } else if (goTo === "Pump Only") {
          note += `Pump PWO scanned (${where_Pump_PWO_Scanned}). ${pwoScannedDate} - PWO for (${_Pump_PWO_WhatBrand})`;
        } else {
          note += `${goTo} PWO scanned (${where_Pump_PWO_Scanned}) under ${where_CGM_PWO_Scanned}. ${pwoScannedDate} - CGM PWO for (${_CGM_PWO_WhatBrand}) - Pump PWO for (${_Pump_PWO_WhatBrand})`;
        }

        note += ` supplies: Start (${pwoStartDate}), ${isDiagnosisCode}, ${diagnosisCode1}, Site change instruction: ${siteChangeInstruction}, site change: ${siteChange} (${treatingDoctorSignedPwo}), ${pwoSigned}, signed (${datePwoSigned})`;

        if (didPWOUsingInsulin !== "") {
          note =
            note + ` - Did the HCP use the Enhanced PWO? ${didPWOUsingInsulin}`;
        }

        if (doesPwoStateUsingInsulin !== "") {
          note =
            note +
            ` - Does the PWO state the patient is using insulin? ${doesPwoStateUsingInsulin}`;
        }

        if (doesPatientHipyEvents !== "") {
          note =
            note +
            ` - Does the patient have hypoglycemic events? ${doesPatientHipyEvents}`;
        }

        combinedString.push(note);
      }
    };

    const convertClinicalNote = () => {
      let haveCN = getValue(113992091); // Clinical Notes
      let newClinicalNoteScanned = getValue(113992128); // Are there new Clinical Notes Scanned for this order?
      let hasClinicalValidated = getValue(113992129); // Has the Clinical Notes been validated and processing notes are in PIMS?
      let haveClinicalNotes = getValue(113992130); // Have Clinical Notes
      let copyProcessingNotes = getValue(113992131); // Copy processing notes here:
      let whereClinicalNotesScanned = getValue(113992132); // Where are the clinical notes scanned?
      let datePIMS = getValue(113992133); // What date was is scanned into PIMS?
      let visitDate = getValue(113992134); // What is the visit date on the clinical notes?
      let isDiagnosisCode = getValue(113992135); // What is the diagnosis code?
      let diagnosisCode = getValue(113992136); // Diagnosis Code
      let usingInsulin = getValue(113992137); // Do the Clinical Notes state the patient is using insulin?
      let onPage = getValue(113992138); // On page:
      let hypoglycemicEvent = getValue(113992139); // Does the patient have hypoglycemic events?
      let onPage0 = getValue(113992140); // On page:
      let testFreq2Mth = getValue(113992141); // Patient Testing Frequency for the past 2 months
      let testFreq2MthPage = getValue(113992142); // On page:
      let injectFreq6Mth = getValue(113992143); // Patient Injection Frequency for the past 6 months
      let injectFreq6MthPage = getValue(113992144); // On Page:
      let testingFrequency = getValue(113992145); // Patient Testing Frequency
      let onPageTF = getValue(113992146); // On Page:
      let injectionFrequency = getValue(113992147); // Patient Injection Frequency
      let onPageIF = getValue(113992148); // On Page:

      // IF [(Page 1) Insurance - Medicare Advantage] & [Clinical Notes - Hav...Notes - Needs Review]
      let clinicalNotesAre_MA = getValue(113992152);
      let signedBy = getValue(113992153);
      let onPage_SignedBy = getValue(113992154); // On page:

      // IF [(Page 1) Insurance - One of Rest] & [Clinical Notes - One of rest 2 cases]
      let clinicalNotesAre = getValue(113992149); // Clinical Notes are:
      let signedByElectronically = getValue(113992150); // Electronically signed by:
      let onPage_SignedByElectronically = getValue(113992151); // On page:

      let isAttestation = getValue(113992155); // Is there an attestation?
      let attestationScanned = getValue(113992156); // Attestation Scanned
      let onPage2 = getValue(113992157); // On Page:
      let isComma = false;

      let note = `     `;

      combinedString.push(" ");
      combinedString.push(`     Clinical Processing Notes:`);

      if (haveCN === "Have Clinical Notes - Validated") {
        if (copyProcessingNotes) {
          note = note + `${isComma ? `, ` : ``}${copyProcessingNotes}`;
          isComma = true;
        }
      } else if (haveCN === "Have Clinical Notes - Needs Review") {
        // if (newClinicalNoteScanned !== "Yes")
        //     return;

        if (newClinicalNoteScanned) {
          note =
            note +
            `New Clinical Notes Scanned for this order? ${newClinicalNoteScanned}`;
          isComma = true;
        }
        if (hasClinicalValidated) {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Has the Clinical Notes been validated and processing notes are in PIMS? ${hasClinicalValidated}`;
          isComma = true;
        }
        if (haveClinicalNotes) {
          note = note + `${isComma ? `, ` : ``}${haveClinicalNotes}`;
          isComma = true;
        }

        if (whereClinicalNotesScanned !== "") {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Clinical notes scanned? ${whereClinicalNotesScanned}`;
          isComma = true;
        }

        if (datePIMS !== "") {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Office notes scanned under Clinical Notes (${datePIMS})`;
          isComma = true;
        }

        if (visitDate !== "") {
          note = note + ` for (${visitDate}) visit:`;
        }

        if (isDiagnosisCode !== "" || diagnosisCode !== "") {
          note = note + ` show (${isDiagnosisCode} ${diagnosisCode})`;
        }

        if (testFreq2Mth !== "" && injectFreq6Mth !== "") {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Testing (${testFreq2Mth}) for at least 2 months on page (${testFreq2MthPage}) and (${injectFreq6Mth}) for 6 months on page (${injectFreq6MthPage}).`;
          isComma = true;
        }

        if (testingFrequency !== "" && injectionFrequency !== "") {
          note =
            note +
            `${
              isComma ? ", " : ""
            }Testing (${testingFrequency}) on page (${onPageTF}) and (${injectionFrequency}) on page (${onPageIF})`;
        }

        if (usingInsulin !== "") {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Do the Clinical Notes state the patient is using insulin? ${usingInsulin}`;
          isComma = true;
        }

        if (onPage !== "") {
          note = note + `${isComma ? `, ` : ``}On page: ${onPage}`;
          isComma = true;
        }

        if (hypoglycemicEvent !== "") {
          note =
            note +
            `${
              isComma ? `, ` : ``
            }Does the patient have hypoglycemic events? ${hypoglycemicEvent}`;
          isComma = true;
        }

        if (onPage0 !== "") {
          note = note + `${isComma ? `, ` : ``}On page: ${onPage0}`;
          isComma = true;
        }

        if (clinicalNotesAre_MA !== "") {
          if (clinicalNotesAre_MA === "Signed") {
            note = note + ` Signature (${signedBy}/${onPage_SignedBy}).`;
          } else {
            note = note + ` Not signed`;
          }
        }

        if (isAttestation === "Yes") {
          note =
            note + ` OR Attestation Scanned (${attestationScanned}/${onPage2})`;
        }
      }

      if (clinicalNotesAre !== "") {
        if (clinicalNotesAre === "Electronically signed") {
          note = note + ` Electronic signature (${signedByElectronically}).`;
        } else {
          note = note + ` Not signed`;
        }
      }

      combinedString.push(note);
    };

    const convertF2FLine = () => {
      let haveF2F = getValue(113992092); // Face to Face
      let validF2F = getValue(113992160); // Do you have valid Face to Face Records?
      let hasF2FScannedIn = getValue(113992161); // Has new/corrected Face to Face been scanned in?
      let hasF2FValidated = getValue(113992162); // Has the Face to Face been validated and processing notes are in PIMS?
      let haveF2FNotes = getValue(113992163); // Have Face to Face
      let copyProcessingNote = getValue(113992164); // Copy processing notes here:
      let face2faceDocument = getValue(113992165); // Are you reviewing clinical notes or face to face document?
      let scannedF2F = getValue(113992166); // Where is the Face to Face scanned?
      let datePIMS = getValue(113992167); // What date was is scanned into PIMS?
      let visitDateF2F = getValue(113992168); // What is the visit date on the Face to Face?
      let diagnosisCode = getValue(113992169); // What is the diagnosis code?
      let diagnosisCodeNum = getValue(113992170); // Diagnosis Code Code Number
      let usePatientInsulin = getValue(113992171); // Does the Face to Face state the patient is using insulin?
      let onPage1 = getValue(113992172); // On page:
      let hypoglycemic = getValue(113992173); // Does the patient have hypoglycemic events?
      let onPage2 = getValue(113992174); // On page:
      let patientTest2Mth = getValue(113992175); // Patient Testing Frequency for the past 2 months
      let onPage3 = getValue(113992176); // On Page
      let patientInj6th = getValue(113992177); // Patient Injection Frequency for the past 6 months
      let onPage4 = getValue(113992178); // On Page
      let isFace2Face = getValue(113992179); // Face to Face is:
      let signedByFace2Face = getValue(113992180); // Face to Face Signed by:
      let signedOnFace2Face = getValue(113992181); // Face to Face Signed on Page:
      let whatCorrtNeeded = getValue(113992183); // What corrections are needed?

      let isComma = false;
      let note = "";

      combinedString.push(`     `);
      combinedString.push(`     Face to Face Processing Notes`);

      if (haveF2F === "Have Face to Face - Validated") {
        if (copyProcessingNote) {
          note = note + `${isComma ? `, ` : ``}${copyProcessingNote}`;
          isComma = true;
        }
      } else {
        note = `F2F Note: Office notes scanned under Clinical Notes ${
          visitDateF2F !== "" ? `(${visitDateF2F})` : ``
        }`;

        if (haveF2FNotes) {
          note = note + `, ${haveF2FNotes}`;
        }

        if (copyProcessingNote) {
          note = note + `, ${copyProcessingNote}`;
        }

        if (validF2F !== "") {
          // note = note + `, ${validF2F}`;
        }

        if (scannedF2F !== "") {
          // note = note + `, Face2Face scanned on ${scannedF2F}`;
        }

        if (datePIMS !== "") {
          note = note + `, PIMS scanned Date: ${datePIMS}`;
        }

        if (diagnosisCode !== "" || diagnosisCodeNum !== "") {
          note =
            note + `, Diagnosis Code: ${diagnosisCode} ${diagnosisCodeNum}`;
        }

        if (usePatientInsulin !== "") {
          note = note + `, ${usePatientInsulin}`;
        }

        if (onPage1 !== "") {
          note = note + `, On page: ${onPage1}`;
        }

        if (hypoglycemic !== "") {
          note =
            note +
            `, Does the patient have hypoglycemic events? ${hypoglycemic}`;
        }

        if (onPage2 !== "") {
          note = note + `, On page: ${onPage2}`;
        }

        if (patientTest2Mth !== "") {
          note =
            note +
            `, Patient Testing Frequency for the past 2 months: ${patientTest2Mth}`;
        }

        if (onPage3 !== "") {
          note = note + `, On page: ${onPage3}`;
        }

        if (patientInj6th !== "") {
          note =
            note +
            `, Patient Injection Frequency for the past 6 months: ${patientInj6th}`;
        }

        // if (isFace2Face !== "") {
        //     note = note + `, Face2Face is Electronically Signed`;
        // }

        if (signedByFace2Face !== "") {
          note = note + `, Signed by: ${signedByFace2Face}`;
        }

        if (signedOnFace2Face !== "") {
          note = note + `, Signed on Page: ${signedOnFace2Face}`;
        }

        // if (isF2FValid !== "") {
        //     note = note + `, Is Face to Face valid? ${isF2FValid}`;
        // }

        // if (whatCorrtNeeded !== "") {
        //     note = note + `, What corrections are needed? ${whatCorrtNeeded}`;
        // }

        // if (scanAttestation !== "")
        //     combinedString.push(`     Attestation Scanned on ${scanAttestation}`);
      }

      combinedString.push(`     ${note}`);
    };

    const convertTestLogs = () => {
      let haveTestLog = getValue(113992093); // Test Logs
      let testCopyProcessingNote = getValue(113992184);
      let testWhereScanned = getValue(113992185);
      let testScannedDate = getValue(113992186);
      let testLogsDateTo = getValue(113992187);
      let testLogsDateFrom = getValue(113992188);
      // let testLogsValid = getValue(113434412);
      // let whatCorrectionsNeeded = getValue(113434433);

      combinedString.push(`     `);
      combinedString.push(`     Test Logs Processing Note:`);
      if (haveTestLog === "Have Test Logs - Validated") {
        if (testCopyProcessingNote !== "") {
          combinedString.push(`     ${testCopyProcessingNote}`);
        }
      } else {
        let note = `     Test Logs scanned (${testWhereScanned}).`;

        if (testScannedDate !== "") {
          testScannedDate = ` (${testScannedDate}) for`;
          note += testScannedDate;
        }

        if (testLogsDateTo !== "" && testLogsDateFrom !== "") {
          note += ` dates (${testLogsDateTo}) to (${testLogsDateFrom})`;
        }
        combinedString.push(note);
      }
    };

    const convertLabLine = () => {
      if (insurance === "Medicare Advantage" && goTo === "Pump Only") {
        return;
      }

      if (insurance === "Medicare Advantage" && goTo === "CGM Only") {
        return;
      }

      let requireLab = getValue(113992191); // Does this order require labs?
      let scanneddLab = getValue(113992192); // Have new/corrected labs been scanned in?
      let processingNote = getValue(113992193); // Have they been validated and a processing note is in PIMS?
      let haveLabs = getValue(113992094); // Have labs

      let cpeptideResult = getValue(113992195); // Are the labs scanned under C-Peptide results?
      let labScanned = getValue(113992196); // Where are the labs scanned?
      let labScannedDate = getValue(113992197); // What date were the labs scanned?
      let labDrawnDate = getValue(113992198); // What dates were the labs drawn?
      let onPage = getValue(113992199); // On page
      let isPatientFasting = getValue(113992200); // Is the patient fasting?
      let whatisFastingBlood = getValue(113992201); // What is the patient's fasting blood glucose reading?
      let whatPageisFasting = getValue(113992202); // What page is the fasting blood glucose rading on?
      let isResultLess225 = getValue(113992203); // Is the result less than or equal 225?
      let isTheResultLess110 = getValue(112761221); // Is the result less than or equal to 110% of the lower range?

      let cpeptideGlucoseDawn = getValue(113992204); // Were the c-peptide and glucose drawn concurrently?

      let betaCellTestResult = getValue(113992227); // Are you including Beta Cell Test Results?
      let betaCellName = getValue(113992228); // Name of Beta Cell Test:
      let betaCellResult = getValue(113992229); // Result of Beta Cell Test:
      let betaCellRange = getValue(113992230); // Range of Beta Cell Test:

      let incCreatinine = getValue(113992221); // Are you also including Creatinine Clearance/GFR?
      let dateGFR = getValue(113992222); // What is the date the GFR was collected?
      let testGFR = getValue(113992223); // What is the GFR test result?
      let clinicalNotestate = getValue(113992224); // Do the clinical notes state the patient has renal insufficiency?
      let pageRenalInsuff = getValue(113992225); // What page is renal insufficiency mentioned on?
      let resultMention = getValue(113992226); // You cannot use this result without mention of renal insufficiency in the clinical notes.

      let note = `     `;
      let isNoteAdded = false;
      let isComma = false;

      if (requireLab !== "") {
        note = note + `Does this order require labs?  ${requireLab}`;
        isNoteAdded = true;
        isComma = true;
      }

      if (scanneddLab !== "") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Have new/corrected labs been scanned in?  ${scanneddLab}`;
        isNoteAdded = true;
        isComma = true;
      }

      if (processingNote !== "") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Have they been validated and a processing note is in PIMS?  ${processingNote}`;
        isNoteAdded = true;
        isComma = true;
      }

      if (haveLabs !== "") {
        note = note + `${isComma ? ", " : ""}Have labs  ${haveLabs}`;
        isNoteAdded = true;
        isComma = true;
      }

      // -----------------

      if (cpeptideResult === "Yes") {
        note =
          note +
          `${isComma ? ", " : ""}Labs scanned under C-Peptide test Results`;
        isComma = true;

        if (labScanned !== "") {
        }

        if (labScannedDate !== "") {
          note = note + ` on ${labScannedDate}`;
        }

        if (labDrawnDate !== "") {
          note = note + ` labs drawn on ${labDrawnDate}`;
        }

        if (onPage !== "") {
          note = note + ` on page ${onPage}`;
        }

        if (isPatientFasting !== "") {
          note = note + `, Fasting: (${isPatientFasting})`;
        }

        if (whatisFastingBlood !== "") {
          note = note + `, Glucose: ${whatisFastingBlood}`;
        }

        if (whatPageisFasting !== "") {
          note = note + ` on page (${whatPageisFasting})`;
        }

        if (isResultLess225 !== "" && isTheResultLess110 !== "") {
          let result225 =
            isResultLess225 ===
            "Yes – FBG is valid.  Review to see if Labs where drawn fasting and concurrent"
              ? "Yes"
              : "No";
          note =
            note +
            `, C-Pep RESULT (RANGE) - ${isTheResultLess110} to 110% and ${result225} for Glucose for 225.`;
        }

        isNoteAdded = true;
      }

      if (cpeptideGlucoseDawn !== "") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Were the c-peptide and glucose drawn concurrently? ${cpeptideGlucoseDawn}`;
        isNoteAdded = true;
        isComma = true;
      }

      if (betaCellTestResult === "Yes") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Beta Cell Test Name: (${betaCellName}) Result: (${betaCellResult}) Range: (${betaCellRange}) - Beta Cell Questions`;
        isNoteAdded = true;
        isComma = true;
      }

      if (incCreatinine === "Yes") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Creatinine Clearance/GFR collected ${dateGFR}, (${testGFR})`;
        isComma = true;

        if (clinicalNotestate !== "") {
          if (clinicalNotestate === "Yes") {
            note =
              note +
              ` Clinicals notes scanned ${dateGFR} mention renal insufficiency on page (${pageRenalInsuff})`;
          } else {
            note = note + ` ${resultMention}`;
          }
        }
        isNoteAdded = true;
      }

      if (isNoteAdded) {
        combinedString.push(`    `);
        combinedString.push(`    Lab Processing Notes`);
        combinedString.push(note);
      }
    };

    const convertNarrativeLetterLine = () => {
      let haveNarrativeLetter = getValue(113992095); // Narrative Letter
      let copyNarrativeLetterHere = getValue(113992238); // Copy Narrative Letter here:
      let whereNarrativeLetterScannedInPIMs = getValue(113992233); // Where is the Narrative Letter scanned in PIMS?
      let whatDateScanned = getValue(113992234); // What date was is scanned?
      let narrativeLetter = getValue(113992235);
      let HCPCompletedNarrativeLetter = getValue(113992236);

      combinedString.push(`     `);
      combinedString.push(`     Narrative Letter:`);
      if (haveNarrativeLetter === "Have Narrative Letter - Validated") {
        if (copyNarrativeLetterHere !== "") {
          combinedString.push(`     ${copyNarrativeLetterHere}`);
        }
      } else {
        if (whatDateScanned !== "") {
          whatDateScanned = `(${whatDateScanned})`;
        }

        let note = `     Narrative Letter scanned (${whereNarrativeLetterScannedInPIMs}). ${whatDateScanned} - ${narrativeLetter}, HCP - ${HCPCompletedNarrativeLetter}`;
        combinedString.push(note);
      }
    };

    const convertABNLine = () => {
      let haveABN = getValue(113992096); // ABN
      let copyABNHere = getValue(113992243); // Copy ABN here:
      let whatDateListed = getValue(113992239); // What date/time was the ABN listed in the notes?
      let representativeInitials = getValue(113992240); // What are the representative's initials that added the note?
      let optionsSelected = getValue(113992241); // What options did the patient choose?

      combinedString.push(`     `);
      combinedString.push(`     ABN:`);
      if (haveABN === "ABN - Validated") {
        if (copyABNHere !== "") {
          combinedString.push(`     ${copyABNHere}`);
        }
      } else {
        if (whatDateListed !== "") {
          whatDateListed = `(${whatDateListed})`;
        }

        let note = `     ABN listed ${whatDateListed}, Representative Initials: ${representativeInitials}, Option chosen: ${optionsSelected}`;
        combinedString.push(note);
      }
    };

    const convertAttestationFormLine = () => {
      let haveAttestationForm = getValue(113992097); // Attestation Form
      let copyAttestationFormHere = getValue(113992244); // Copy Attestation Form here:

      combinedString.push(`     `);
      combinedString.push(`     Attestation Form:`);
      if (haveAttestationForm === "Attestation Form - Validated") {
        if (copyAttestationFormHere !== "") {
          combinedString.push(`     ${copyAttestationFormHere}`);
        }
      }
    };

    const convertAddendumLine = () => {
      let haveAddendum = getValue(113992098); // Addendum
      let copyAddendumHere = getValue(113992245); // Copy Addendum Form here:

      combinedString.push(`     `);
      combinedString.push(`     Addendum:`);
      if (haveAddendum === "Addendum - Validated") {
        if (copyAddendumHere !== "") {
          combinedString.push(`     ${copyAddendumHere}`);
        }
      }
    };

    const convertNCEOPLine = () => {
      const labels_primary = [
        // `You have (Insurance Name) as your Primary Insurance: ${placeHolder}`,
        // `Primary Insurance Policy/ID Number: ${placeHolder}`,
        // `Is Primary Insurance displayed correct?: ${placeHolder}`,
        // `Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Primary Insurance: ${placeHolder}`,
        `Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
      ];
      if (getValue(114443247) === "Yes") {
        idsToNoteLines([114443243, 114443245], labels_primary);
      } else {
        idsToNoteLines(
          [114443376, 114443377, 114443379, 114443380, 114443382, 114443383],
          labels_primary
        );
      }

      const labels_secondary = [
        // `You have (Insurance Name) as your Secondary Insurance: ${placeHolder}`,
        // `Secondary Insurance Policy/ID Number: ${placeHolder}`,
        // `Is Secondary Insurance displayed correct?: ${placeHolder}`,
        // `Secondary Insurance Company Name (as listed on your insurance card): ${placeHolder}`,
        `Secondary Insurance: ${placeHolder}`,
        `Secondary Policy/ID Number: ${placeHolder}`,
        `Group Number: ${placeHolder}`,
        `Relationship to Policyholder: ${placeHolder}`,
        `Policyholder Name: ${placeHolder}`,
        `Policyholder Date of Birth: ${placeHolder}`,
      ];
      if (
        getValue(114443392) === "No - patient updated secondary insurance to:"
      ) {
        idsToNoteLines(
          [114443397, 114443400, 114443465, 114443468, 114443472, 114443474],
          labels_secondary
        );
      } else {
        idsToNoteLines([114443387, 114443389], labels_secondary);
      }

      const labels = [
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
        `Authorized Representative Name: ${placeHolder}`,
        `What is your relationship with this person?: ${placeHolder}`,
        `Other (relationship): ${placeHolder}`,
        `Patient Phone Number: ${placeHolder}`,
        `Is this phone number a mobile number or landline phone?: ${placeHolder}`,
        `Is the phone number we have on file the best phone number to reach you?: ${placeHolder}`,
        `Mobile Phone Number: ${placeHolder}`,
        `Landline: ${placeHolder}`,
        `The email address I have on file for you is: ${placeHolder}`,
        `Is this correct?: ${placeHolder}`,
        `Email address: ${placeHolder}`,
        // `Patient requests CCS ship the following items when we are ready: ${placeHolder}`,
        // `Check Insurance Coverage: If insurance pays for pump as a rental, choose the rental pump. If insurance pays for the pump as a purchase, choose the correct purchase pump.: ${placeHolder}`,
        `Preferred Insulin Pump Brand: ${placeHolder}`,
        `Preferred Beta Bionics Model: ${placeHolder}`,
        `Preferred Medtronic Model: ${placeHolder}`,
        `Preferred Tandem Model: ${placeHolder}`,
        // `Manager Approval is Needed to Ship This Product: ${placeHolder}`,
        `Quantity: ${placeHolder}`,
        `Preferred Reservoir Brand: ${placeHolder}`,
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
        `Other: Torbot Group Inc: ${placeHolder}`,
        `Quantity: ${placeHolder}`,
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
        `Based on insurance and products, the patients Expected patient responsibility is: ${placeHolder}`,
        `Patient has out of pocket expenses and understands their credit card will be charged at the time of shipment: ${placeHolder}`,
        `Estimated Cost Statement: ${placeHolder}`,
        `Advised Patient of Next Steps: ${placeHolder}`,
      ];

      const ids = [
        114443480, 114443484, 114443584, 114443600, 114443605, 114443613,
        114443615, 114443638, 114443647, 114443657, 114443662, 114443680,
        // 114443769, 114443771,
        114443773, 114443791, 114443793, 114443795,
        // 114443798,
        114443800, 114443817, 114443873, 114443877, 114443881, 114443882,
        114443884, 114443913, 114443922, 114444054, 114444396, 114444460,
        114444529, 114444657, 114444676, 114444678, 114444807, 114444875,
        114445003, 114445004, 114445009, 114445021, 114445028, 114445092,
        114445171, 114445173, 114445530, 114445536, 114445549, 114445550,
        114445574, 114445578, 114445588, 114445605, 114445622, 114445623,
        114445624, 114445625, 114445626, 114445626, 114445751, 114445815,
      ];

      idsToNoteLines(ids, labels);
      combinedString.push(" ");
    };

    const convertExtraLine = () => {
      let cPeptideResult = getValue(113992209); // What is the C-Peptide result?
      let cPeptideRange = getValue(112431219); // What is the C-Peptide Range?
      let cPeptideRangeLow = getValue(113992210); // C-Peptide Range (Low)
      let cPeptideRangeHigh = getValue(113992211); // C-Peptide Range (High)
      let calcCPeptideResult = getValue(113992212); // C-Peptide result
      let doLabpatientWas = getValue(113992219); // Do the labs state that the patient was fasting?
      let fastingNoteonPage = getValue(113992220); // What page is the fasting note on?
      let fastingBlood = getValue(113992201); // What is the patient's fasting blood glucose reading?
      let fastingBlookPage = getValue(113992202); // What page is the fasting blood glucose reading on?
      let betaCellTestResult = getValue(113992227); // Are you including Beta Cell Test Results?
      let betaCellName = getValue(113992228); // Name of Beta Cell Test:
      let betaCellResult = getValue(113992229); // Result of Beta Cell Test:
      let betaCellRange = getValue(113992230); // Range of Beta Cell Test:
      let incCreatinine = getValue(113992221); // Are you also including Creatinine Clearance/GFR?
      let dateGFR = getValue(113992222); // What is the date the GFR was collected?
      let testGFR = getValue(113992223); // What is the GFR test result?
      let clinicalNotestate = getValue(113992224); // Do the clinical notes state the patient has renal insufficiency?
      let pageRenalInsuff = getValue(113992225); // What page is renal insufficiency mentioned on?
      let resultMention = getValue(113992226); // You cannot use this result without mention of renal insufficiency in the clinical notes.
      let whatCorrtNeeded = getValue(113992159); // What corrections are needed?

      let isResultLessEq225 = getValue(113992203); // Is the result less than or equal 225?
      let wereTheLabsDrawn = getValue(113992204); // Were the labs drawn concurrent?
      let isThereFastingNo = getValue(113992205); // Is there a fasting notation on the Labs?
      let labsMeetAllMedi = getValue(113992206); // Labs meet all Medicare Guidelines
      let testNameResult = getValue(113992207); // Test Name and Result
      let action = getValue(113992208); // Action:
      let isResultLess110 = getValue(113992213); // Is the result less than or equal to 110% of the lower range?
      let isResultLess200 = getValue(113992214); // Is the result less than or equal to 200% of the lower range?
      let nocpeptide = getValue(113992216); // No- cpeptide would not qualify. Contact HCP to request eGFR if available.
      let isThereEGFR = getValue(113992217); // Is there a eGFR result
      let areClinicalNote = getValue(113992218); // Are there clinical notes on file that indicate renal insufficiency?

      let isComma = false;

      combinedString.push(`     `);

      let note = `     `;
      if (cPeptideResult !== "") {
        note = note + `C-Peptide result? ${cPeptideResult}`;
        isComma = true;
      }

      if (cPeptideRange !== "") {
        note = note + `${isComma ? ", " : ""}C-Peptide Range? ${cPeptideRange}`;
        isComma = true;
      }

      if (cPeptideRangeLow !== "") {
        note = note + `${isComma ? ", " : ""}(Low): ${cPeptideRangeLow}`;
        isComma = true;
      }

      if (cPeptideRangeHigh !== "") {
        note = note + `${isComma ? ", " : ""}(High): ${cPeptideRangeHigh}`;
        isComma = true;
      }

      if (cPeptideResult !== "" && cPeptideRangeLow !== "") {
        let cPeptideRangeLowHash =
          loader.engine.document.getElementById(113992213).hash;
        let cPeptideRangeHighHash =
          loader.engine.document.getElementById(113992214).hash;
        let cPeptideResultVal = parseFloat(cPeptideResult);
        let cPeptideRangeLowVal = parseFloat(cPeptideRangeLow);
        let calcCPeptideResultVal = (
          (cPeptideResultVal / cPeptideRangeLowVal) *
          100
        ).toFixed(2);
        let calcCPeptideResultValPercent = calcCPeptideResultVal + "%";

        loader.engine.document.getElementById(113992212).setValue({
          value: calcCPeptideResultValPercent,
        });

        if (calcCPeptideResultValPercent !== "") {
          note =
            note +
            `${isComma ? ", " : ""}Result: ${calcCPeptideResultValPercent}`;
          isComma = true;
        }

        if (calcCPeptideResultVal <= 110) {
          // document.getElementById(cPeptideRangeLowHash + "_0").checked = true;
          // document.getElementById(cPeptideRangeLowHash + "_0").nextSibling.setAttribute("aria-checked", true);
          // document.getElementById(cPeptideRangeLowHash + "_0").parentElement.parentElement.setAttribute("data-is-checked", "1");
          // document.getElementById(cPeptideRangeLowHash + "_1").checked = false;
          // document.getElementById(cPeptideRangeLowHash + "_1").nextSibling.setAttribute("aria-checked", false);
          // document.getElementById(cPeptideRangeLowHash + "_1").parentElement.parentElement.setAttribute("data-is-checked", "0");
          // isResultLess110 = "Yes";

          document
            .getElementById("radio-" + cPeptideRangeLowHash + "0")
            .click();
        } else {
          // document.getElementById(cPeptideRangeLowHash + "_0").checked = false;
          // document.getElementById(cPeptideRangeLowHash + "_0").nextSibling.setAttribute("aria-checked", false);
          // document.getElementById(cPeptideRangeLowHash + "_0").parentElement.parentElement.setAttribute("data-is-checked", "0");
          // document.getElementById(cPeptideRangeLowHash + "_1").checked = true;
          // document.getElementById(cPeptideRangeLowHash + "_1").nextSibling.setAttribute("aria-checked", true);
          // document.getElementById(cPeptideRangeLowHash + "_1").parentElement.parentElement.setAttribute("data-is-checked", "1");
          // isResultLess110 = "No";

          document
            .getElementById("radio-" + cPeptideRangeLowHash + "1")
            .click();
        }

        if (calcCPeptideResultVal <= 200) {
          // document.getElementById(cPeptideRangeHighHash + "_0").checked = true;
          // document.getElementById(cPeptideRangeHighHash + "_0").nextSibling.setAttribute("aria-checked", true);
          // document.getElementById(cPeptideRangeHighHash + "_0").parentElement.parentElement.setAttribute("data-is-checked", "1");
          // document.getElementById(cPeptideRangeHighHash + "_1").checked = false;
          // document.getElementById(cPeptideRangeHighHash + "_1").nextSibling.setAttribute("aria-checked", false);
          // document.getElementById(cPeptideRangeHighHash + "_1").parentElement.parentElement.setAttribute("data-is-checked", "0");
          // isResultLess200 = "Yes";

          document
            .getElementById("radio-" + cPeptideRangeHighHash + "0")
            .click();
        } else {
          // document.getElementById(cPeptideRangeHighHash + "_0").checked = false;
          // document.getElementById(cPeptideRangeHighHash + "_0").nextSibling.setAttribute("aria-checked", false);
          // document.getElementById(cPeptideRangeHighHash + "_0").parentElement.parentElement.setAttribute("data-is-checked", "0");
          // document.getElementById(cPeptideRangeHighHash + "_1").checked = true;
          // document.getElementById(cPeptideRangeHighHash + "_1").nextSibling.setAttribute("aria-checked", true);
          // document.getElementById(cPeptideRangeHighHash + "_1").parentElement.parentElement.setAttribute("data-is-checked", "1");
          // isResultLess200 = "No";

          document
            .getElementById("radio-" + cPeptideRangeHighHash + "1")
            .click();
        }
      }

      if (doLabpatientWas !== "") {
        note = note + `${isComma ? ", " : ""}${doLabpatientWas}`;
        isComma = true;
      }

      if (doLabpatientWas === "Patient was fasting") {
        if (fastingNoteonPage !== "") {
          note = note + `${isComma ? ", " : ""}${fastingNoteonPage}`;
          isComma = true;
        }

        if (fastingBlood !== "") {
          note =
            note +
            `${
              isComma ? ", " : ""
            }Fasting blood glucose reading? ${fastingBlood}`;
          isComma = true;
        }

        // if (fastingBlookPage !== "") {
        //     note = note + `${isComma ? ', ' : ''}What page is the fasting blood glucose reading on? ${fastingBlookPage}`;
        //     isComma = true;
        // }
      }

      if (isResultLessEq225 !== "") {
        note = note + `${isComma ? ", " : ""}${isResultLessEq225}`;
        isComma = true;
      }

      if (wereTheLabsDrawn !== "") {
        note = note + `${isComma ? ", " : ""}${wereTheLabsDrawn}`;
        isComma = true;
      }

      if (isThereFastingNo !== "") {
        note = note + `${isComma ? ", " : ""}${isThereFastingNo}`;
        isComma = true;
      }

      if (labsMeetAllMedi !== "") {
        note = note + `${isComma ? ", " : ""}${labsMeetAllMedi}`;
        isComma = true;
      }

      if (testNameResult !== "") {
        note = note + `${isComma ? ", " : ""}${testNameResult}`;
        isComma = true;
      }

      if (action !== "") {
        note = note + `${isComma ? ", " : ""}${action}`;
        isComma = true;
      }

      if (isResultLess110 !== "") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Result less than or equal to 110% of the lower range? ${isResultLess110}`;
        isComma = true;
      }

      if (isResultLess200 !== "") {
        note =
          note +
          `${
            isComma ? ", " : ""
          }Result less than or equal to 200% of the lower range? ${isResultLess200}`;
        isComma = true;
      }

      if (nocpeptide !== "") {
        note = note + `${isComma ? ", " : ""}${nocpeptide}`;
        isComma = true;
      }

      if (isThereEGFR !== "") {
        note = note + `${isComma ? ", " : ""}${isThereEGFR}`;
        isComma = true;
      }

      if (areClinicalNote !== "") {
        note = note + `${isComma ? ", " : ""}${areClinicalNote}`;
        isComma = true;
      }

      // if (betaCellTestResult !== "") {
      //     note = note + `${isComma ? ', ' : ''}Are you including Beta Cell Test Results? ${betaCellTestResult}`;
      //     isComma = true;
      // }

      // if (betaCellTestResult === "Yes") {
      //     if (betaCellName !== "") {
      //         note = note + `${isComma ? ', ' : ''}Name of Beta Cell Test: ${betaCellName}`;
      //         isComma = true;
      //     }

      //     if (betaCellResult !== "") {
      //         note = note + `${isComma ? ', ' : ''}Result of Beta Cell Test: ${betaCellResult}`;
      //         isComma = true;
      //     }

      //     if (betaCellRange !== "") {
      //         note = note + `${isComma ? ', ' : ''}Range of Beta Cell Test: ${betaCellRange}`;
      //         isComma = true;
      //     }
      // }

      // if (incCreatinine !== "") {
      //     note = note + `${isComma ? ', ' : ''}Are you also including Creatinine Clearance/GFR? ${incCreatinine}`;
      //     isComma = true;
      // }

      // if (incCreatinine === "Yes") {
      //     if (dateGFR !== "") {
      //         note = note + `${isComma ? ', ' : ''}What is the date the GFR was collected? ${dateGFR}`;
      //         isComma = true;
      //     }

      //     if (testGFR !== "") {
      //         note = note + `${isComma ? ', ' : ''}What is the GFR test result? ${testGFR}`;
      //         isComma = true;
      //     }
      // }

      // if (clinicalNotestate === "Yes") {
      //     if (pageRenalInsuff !== "") {
      //         note = note + `${isComma ? ', ' : ''}What page is renal insufficiency mentioned on? ${pageRenalInsuff}`;
      //         isComma = true;
      //     }
      // } else {
      //     if (resultMention !== "") {
      //         note = note + `${isComma ? ', ' : ''}You cannot use this result without mention of renal insufficiency in the clinical notes. ${resultMention}`;
      //         isComma = true;
      //     }
      // }

      // if (clinicalNoteValid !== "") {
      //     note = note + `${isComma ? ', ' : ''}Are the Clinical Notes Valid? ${clinicalNoteValid}`;
      //     isComma = true;
      // }

      // if (whatCorrtNeeded !== "") {
      //     note = note + `${isComma ? ', ' : ''}What corrections are needed? ${whatCorrtNeeded}`;
      //     isComma = true;
      // }

      combinedString.push(note);
    };

    // Wrap up

    const convertFirstLine = () => {
      insurance = getValue(113992067); // Insurance
      goTo = getValue(113992068); // Go To:

      const labels = [
        `Call Type: ${placeHolder}`,
        `Call Type: ${placeHolder}`,
        `Insurance: ${placeHolder}`,
        `Go To: ${placeHolder}`,
      ];
      const ids = [113992063, 113992065, 113992067, 113992068];
      idsToNoteLines(ids, labels);

      combinedString.push(" ");
    };

    const convertSecondLine = () => {
      const labels_1 = [
        `Patient's primary insurance: ${placeHolder}`,
        `Patient's secondary insurance: ${placeHolder}`,
        `Product requested: ${placeHolder}`,
        `Product request correct?: ${placeHolder}`,

        `Product requested: ${placeHolder}`,

        `Requested CGM product: ${placeHolder}`,
        `Requested Pump Product: ${placeHolder}`,
        `Product requested: ${placeHolder}`,
        `Full system or supplied only?: ${placeHolder}`,
      ];
      const ids_1 = [
        113992072, 113992075, 113992078, 113992079, 114004713, 113992080,
        113992081, 113992082, 113992083,
      ];
      idsToNoteLines(ids_1, labels_1);

      combinedString.push(" ");

      const stepsLabels = [
        `WF task in process: ${placeHolder}`,
        //
        `Would you like to add additional authorized parties to speak on your behalf?: ${placeHolder}`,
        `Authorized Party First / Last name: ${placeHolder}`,
        `Patient Phone Number: ${placeHolder}`,
        `Is this phone number a mobile number or landline phone?: ${placeHolder}`,
        `Is the phone number we have on file the best number to reach you?: ${placeHolder}`,
        `Mobile Number: ${placeHolder}`,
        `Landline Phone Number: ${placeHolder}`,
        `The email I have on file for you is: ${placeHolder}`,
        `Is this correct?: ${placeHolder}`,
        `Updated Email Address: ${placeHolder}`,
        `Your telephone carrier's standard message rates may apply to these communications?  Would this be ok?: ${placeHolder}`,
        `I want to confirm we are shipping your supplies to: ${placeHolder}`,
        `City: ${placeHolder}`,
        `State: ${placeHolder}`,
        `Zip: ${placeHolder}`,
        `Is this address correct?: ${placeHolder}`,
        `Updated shipping address: ${placeHolder}`,
        `Current Healthcare Provider First Name: ${placeHolder}`,
        `Current Healthcare Provider Last Name: ${placeHolder}`,
        `Current Healthcare Provider Address: ${placeHolder}`,
        `Current Healthcare Provider Phone Number: ${placeHolder}`,
        `Is this correct?: ${placeHolder}`,
        `New Healthcare Provider First Name: ${placeHolder}`,
        `New Healthcare Provider Last Name: ${placeHolder}`,
        `New Healthcare Provider Address: ${placeHolder}`,
        `New Healthcare Provider Phone Number: ${placeHolder}`,
        //
        `Steps to complete the Triage tasks: ${placeHolder}`,
        `WF assigned to RX NCE?: ${placeHolder}`,
        `Drug Card/Insurance Name: ${placeHolder}`,
        `ID#: ${placeHolder}`,
        `Group#: ${placeHolder}`,
        `Rx BIN: ${placeHolder}`,
        `PCN: ${placeHolder}`,
        `Help Desk Phone #: ${placeHolder}`,
        `PBM, Optum RX?: ${placeHolder}`,
        `Patient live in one of the states mentioned: ${placeHolder}`,
        `${placeHolder}`,
        `Allergies to medications: ${placeHolder}`,
        `Allergies to latex: ${placeHolder}`,
        `Allergies to food: ${placeHolder}`,
        `Allergies to environmental: ${placeHolder}`,
        `Allergies Details: ${placeHolder}`,
        `Advise the patient of the next steps in the process: ${placeHolder}`,
        //
        `Steps to complete the Insurance Verification Task: ${placeHolder}`,
        `Steps to complete Patient Contact-Review Benefits Task: ${placeHolder}`,
        `What documentation does the insurance checklist show is required for this order?: ${placeHolder}`,
        //
        `Steps to complete the Pre-Authorization tasks: ${placeHolder}`,
        `Steps to complete the Packet Approval tasks: ${placeHolder}`,
        `Steps to complete the Order Processing tasks: ${placeHolder}`,
        `Preferred Language: ${placeHolder}`,
        `Update Workflow Tab: ${placeHolder}`,
        `Is the order on the digital platform updated correctly?: ${placeHolder}`,
        `Parachute Review: ${placeHolder}`,
        `Tomorrow's Health: ${placeHolder}`,
        //
        `Other documentation: ${placeHolder}`,
        `Steps to complete Patient Contact-Review Benefits Task: ${placeHolder}`,
      ];
      const stepIds = [
        114003916,
        //
        114140175, 114140844, 114140179, 114140180, 114140198, 114140224,
        114140225, 114140226, 114140235, 114140874, 114140240, 114140244,
        114140245, 114140246, 114140247, 114140251, 114140294 /* 114140289,*/,
        114140296, 114140300, 114140301, 114140302, 114140316, 114140328,
        114140329, 114140338, 114140345,
        //
        114004051, 114004796, 114004859, 114004860, 114004862, 114004863,
        114004864, 114004865, 114004881, 114004883, 114004887, 114004888,
        114004889, 114004893, 114004896, 114004899, 114004907,
        //
        114004058, 114004124, 113992088,
        //
        114094285, 114094294, 114094316, 115020093, 114094340, 114094382,
        114094384, 114094422,
        //
        113992089, 114004062,
      ];
      idsToNoteLines(stepIds, stepsLabels);

      combinedString.push(" ");

      convertConsentLine();
      convertInsuranceLines();

      combinedString.push(" ");
    };

    const convertThirdLine = () => {
      if (isValidPWO) {
        convertPWOProcessingNote();
      }

      if (isValidClinicalNote) {
        convertClinicalNote();
      }

      if (isValidF2F) {
        convertF2FLine();
      }

      if (isValidTestLogs) {
        convertTestLogs();
      }

      if (isValidLabs) {
        convertLabLine();
      }

      if (isValidNarrativeLetter) {
        convertNarrativeLetterLine();
      }

      if (isValidABN) {
        convertABNLine();
      }

      if (isValidAttestationForm) {
        convertAttestationFormLine();
      }

      if (isValidAddendum) {
        convertAddendumLine();
      }

      convertNCEOPLine();
    };

    const convertPacketApprovalLine = () => {
      let isPacketApproval = getValue(113992247); // Is this order ready for packet approval?
      let hasNewOrder = getValue(113992249); // Has the New Order Processing shipment been created?
      let checkShipmentMatch = getValue(113992251); // Check to ensure the Standard Shipment matches the shipment created
      let a1cRequestListed = getValue(113992253); // A1c  Request - Review the PWO/Clinical Notes/Face to Face Summary.  Is the patient's A1c listed?
      let a1cResult = getValue(113992254); // Add A1c result here:
      let checkDocumentTab = getValue(113992256); // Check the Documentation Tab in PIMS for Special Handling Instructions. Are there any Special Handling instructions listed?
      let specialHandling = getValue(113992257); // What are the special handling instructions?
      let patientUpdatePast5Days = getValue(113992258); // Has the patient been provided with a status update in the past 5 days?
      // let isOrderCreated = getValue(112342089);
      // let isSsCorrectOrder = getValue(112342091);
      // let docTab = getValue(112342171);
      // let preAuth = getValue(112342176);
      let otherActionTaken = getValue(113992267); // Other Action Taken:
      let spokeTo1 = getValue(113992268); // Spoke to:
      let outcome1 = getValue(113992269); // Outcome
      let spokeTo2 = getValue(113992270); // Spoke to:
      let outcome2 = getValue(113992271); // Outcome
      let percentCoverage = getValue(113992259); // What is the percentage of coverage?
      let patientResponsibility = getValue(113992260); // What is the expected patient responsibility?

      combinedString.push(`     `);

      let actionsTakenNote = "";
      let comma = "";

      try {
        const isVerificationNote = getValue(112481721); // Is the verification note less than 30 days old?
        const actionTaken = getValue(112342184); // Action Taken: (Select all that apply)

        if (isVerificationNote !== "") {
          actionsTakenNote += isVerificationNote;
          comma = ",";
        }

        if (actionTaken !== "") {
          actionsTakenNote += comma + actionTaken;
          comma = ",";
        }
      } catch (error) {
        console.error(error);
      }

      if (isPacketApproval === "Yes - Need packet approval") {
        if (hasNewOrder !== "") {
          actionsTakenNote += comma + hasNewOrder;
          comma = ",";
        }

        if (checkShipmentMatch !== "") {
          actionsTakenNote += comma + checkShipmentMatch;
          comma = ",";
        }

        if (a1cRequestListed !== "") {
          actionsTakenNote +=
            comma + a1cRequestListed === "No"
              ? "Patient's A1c not listed"
              : `Patient's A1c listed: ${a1cResult}`;
          comma = ",";
        }

        if (checkDocumentTab !== "") {
          actionsTakenNote += comma + checkDocumentTab;
          comma = ",";
        }

        if (specialHandling !== "") {
          actionsTakenNote += comma + specialHandling;
          comma = ",";
        }

        if (patientUpdatePast5Days !== "") {
          actionsTakenNote += comma + patientUpdatePast5Days;
          comma = ",";
        }
      }

      if (otherActionTaken !== "") {
        actionsTakenNote += comma + `Other Action Taken: ${otherActionTaken}`;
        comma = ",";
      }

      if (spokeTo1 !== "") {
        actionsTakenNote += comma + `Spoke to: ${spokeTo1}`;
        comma = ",";
      }

      if (outcome1 !== "") {
        actionsTakenNote += comma + `Outcome: ${outcome1}`;
        comma = ",";
      }

      if (spokeTo2 !== "") {
        actionsTakenNote += comma + `Spoke to: ${spokeTo2}`;
        comma = ",";
      }

      if (outcome2 !== "") {
        actionsTakenNote += comma + `Outcome: ${outcome2}`;
        comma = ",";
      }

      if (percentCoverage !== "") {
        actionsTakenNote +=
          comma + `Percentage of coverage: ${percentCoverage}`;
        comma = ",";
      }

      if (patientResponsibility !== "") {
        actionsTakenNote +=
          comma + `Expected patient responsibility: ${patientResponsibility}`;
        comma = ",";
      }

      if (actionsTakenNote !== "") {
        combinedString.push(`     Actions Taken: ${actionsTakenNote}`);
      }
    };

    try {
      changeConsentDateExpire();

      convertFirstLine();
      convertSecondLine();

      convertPacketApprovalLine();

      convertThirdLine();

      convertExtraLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(113992273)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
