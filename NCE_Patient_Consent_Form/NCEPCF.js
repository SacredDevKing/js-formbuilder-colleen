function joinValues() {
  //mocking
  console.log("mock");
  setTimeout(function () {
    let val = "xxyyzz";
    let val12 = "xxyyzz";
    let val13 = "xxyyzz";
    let labels = [
      `Call Type : ${val}`,
      `Call Reason : ${val}`,
      `Speaking To : ${val}`,
      `Patient First Name : ${val}`,
      `Patient Last Name : ${val}`,
      `Authorized Person Name : ${val}`,
      `Advised Caller: : ${val}`,
      `Patient added authorized user : ${val}`,
      `Authorized Representative Name : ${val}`,
      `What is your relationship with this person? : ${val}` /* 10 */,
      `Other (relationship) : ${val}`,
      `Preferred phone number is: ${val12}  ${val13}`,
      "Is this phone number a mobile number or landline phone? : null",
      "Is the phone number we have on file the best phone number to reach you : null",
      `Added addtl number ${val} Mobile`,
      `Added addtl number ${val} Landline`,
      `Verify/Obtain Correct Email address (if not email address - don't confirm ask for email) : ${val}`,
      `Confirmed email address: ${val}`,
      `Email address : ${val}`,
      `I want to confirm we are shipping your supplies to: : ${val}` /* 20 */,
      `City : ${val}`,
      `State : ${val}`,
      `Zip : ${val}`,
      `Is this address correct? : ${val}`,
      `Please provide us with your updated shipping address. : ${val}`,
      `Preferred Language : ${val}`,
      `Current Healthcare Provider First Name : ${val}`,
      `Current Healthcare Provider Last Name : ${val}`,
      `Current Healthcare Provider Address : ${val}`,
      `New Healthcare Provider First\xa0Name : ${val}`,
      `New Healthcare Provider Last Name : ${val}` /* 30 */,
      `New Healthcare Provider Address : ${val}`,
      `New Healthcare Provider Phone number : ${val}`,
      `Primary Insurance Policy/ID Number : ${val}`,
      `Insurance Company Name (as listed on your insurance card) : ${val}`,
      `Policy/ID Number : ${val}`,
      `Group Number : ${val}`,
      `Relationship to Policyholder : ${val}`,
      `Policyholder Name : ${val}`,
      `Policyholder Date of Birth : ${val}`,
      `Secondary Insurance Policy/ID Number : ${val}` /* 40 */,
      `Secondary Insurance Company Name (as listed on your insurance card) : ${val}`,
      `Secondary Policy/ID Number : ${val}`,
      `Group Number : ${val}`,
      `Relationship to Policyholder : ${val}`,
      `Policyholder Name : ${val}`,
      `Policyholder Date of Birth : ${val}`,
      `Patient is: ${val}`,
      `Patient is: ${val}`,
      `and testing frequency is ${val}; `,
      `injection frequency is  ${val}; ` /* 50 */,
      `Injecting  ${val} units of insulin each day;`,
      `injecting 3+ times per day since  ${val}`,
      `Current Pump Model:  ${val}`,
      `Serial #:  ${val}`,
      `Insurance that paid: ${val}`,
      `Date of Purchase: ${val}`,
      `Experienced Malfunctions: ${val}`,
      `Other Malfunctions:  ${val}`,
      "Patient is electing to get a replacement pump",
      `Patient is currently on a pump and has used it continuously since receiving it on this date: ${val}` /* 60 */,
      `Site Change Frequency: ${val}`,
      `Days on Hand:  ${val}`,
      `currently using a Medtronic Insulin Pump? : ${val}`,
      `What brand of Medtronic Isulin Pump are you using? : ${val}`,
      `Do you want your Medtronic CGM to work with your Medtronic Insulin Pump? : ${val}`,
      `Do you want your Medtronic CGM to work with your cell phone? : ${val}`,
      `currently using a Dexcom CGM with your insulin pump or insulin pen? : ${val}`,
      `Dexcom G7 CGM will not pair with your pump/pen.\xa0 Do you want to continue with Dexcom G6 CGM at this time, you can do software upgrade when G7 integration is available. : ${val}`,
      `Current Brand/Model : ${val}`,
      `Serial Number (Reader/Reciever) : ${val}` /* 70 */,
      `Insurance that paid : ${val}`,
      `Date of Purchase : ${val}`,
      `Days on Hand : ${val}`, // 73.rd
      `What company/pharmacy did you get your last order of supplies from? : ${val}`, // added 2023-12-05
      `What was the date you received the supplies from your previous supplier? : ${val}`, // added 2023-12-05
      `Have you cancelled with that company/supplier? : ${val}`, // added 2023-12-05
      `Are you administering insulin? : ${val}`,
      `Do you have frequent, recurring hypoglycemic episodes? : ${val}`,
      `CGM90 Day Program Requirements : ${val}`,
      `Patient Opted in to CGM90 : ${val}` /* 80 */,
      `Advised Patient their pump supplies will ship every: : ${val}`,
      `Advised Patient their CGMS supplies will ship every: : ${val}`,
      `Advised Benefits/Out-of-pocket (Advised Medicare 13-month rental payment method). : ${val}`,
      `Is this an exchange plan? : ${val}`,
      `Advised Benefits/OOP : ${val}`,
      `Informed Patient: : ${val}`,
      `Is patient covered at 100%? : ${val}`,
      `Medtronic Trade-In Pump Credit : ${val}`,
      `Based on insurance and products, the patients Expected patient responsibility is: : ${val}`,
      `Preferred Insulin Pump Brand : ${val}` /* 90 */,
      `Preferred Beta Bionics Model : ${val}`,
      `Preferred Medtronic Model : ${val}`,
      `Preferred Tandem Model : ${val}`,
      `Quantity : ${val}`,
      `Preferred Reservoir Brand : ${val}`,
      `Preferred Beta Bionics Reservoir Model : ${val}`,
      `Preferred Medtronic Reservoir Model : ${val}`,
      `Preferred Tandem Reservoir Model : ${val}`,
      `Quantity : ${val}`,
      `Preferred Infusion Set Brand : ${val}` /* 100 */,
      `Preferred Beta Bionics Infusion Set Model : ${val}`,
      `Preferred Medtronic Infusion Set\xa0Model : ${val}`,
      `Preferred Tandem Infusion Set\xa0Model : ${val}`,
      `Quantity : ${val}`,
      `Other Supplies: Brand : ${val}`,
      `Other: 3M Model : ${val}`,
      `Other: Energizer Model : ${val}`,
      `Other: Ferndale Lab Model : ${val}`,
      `Other: Medtronic Model : ${val}`,
      `Other: Smith & Nephew Model : ${val}` /* 110 */,
      `Other: Smith's Medical : ${val}`,
      `Other: Torbot Group Inc. : ${val}`,
      `Quantity : ${val}`,
      `Are you planning to use the Pump application on your phone as your reader/receiver? : ${val}`,
      `Preferred CGM Product : ${val}`,
      `Preferred Dexcom Transmitter Model : ${val}`,
      `Preferred Medtronic Transmitter Model : ${val}`,
      `Quantity : ${val}`,
      `Preferred Reciever (optional) Brand : ${val}`,
      `Preferred Abbott Reciever Model : ${val}`,
      `Preferred Dexcom Reciever Model : ${val}` /* 120 */,
      `Preferred Medtronic Reciever Model : ${val}`,
      `Preferred Tandem Reciever Model : ${val}`,
      `Quantity : ${val}`,
      `Preferred Sensor Brand : ${val}`,
      `Preferred Abbott Sensor Model : ${val}`,
      `Preferred Dexcom Sensor Model : ${val}`,
      `Preferred Medtronic Sensor Model : ${val}`,
      `Quantity : ${val}`,
      `Medtronic Quickserter : ${val}`,
      `Quantity : ${val}` /* 130 */,
      `${val}`,
      `${val}`,
      `Reviewed 90 Day physician visits with patient`,
      `Estimated Cost Statement? : ${val}`,
      `Advised Patient of Next Steps : ${val}`,
      `Patient advised of re-order process : ${val}` /* 136 */,
    ];
    const numbers = [
      { id: "111588173", num: "1" },
      { id: "111588175", num: "2" },
      { id: "111588176", num: "3" },
      { id: "111588185", num: "4" },
      { id: "111588186", num: "5" },
      { id: "111588177", num: "6" },
      { id: "111588174", num: "7" },
      { id: "111588302", num: "8" },
      { id: "111588303", num: "9" },
      { id: "111588304", num: "10" } /* 10 */,
      { id: "111588305", num: "11" },
      { id: "111588306", num: "12" },
      { id: "111588307", num: "13" },
      { id: "111588308", num: "14" },
      { id: "111588309", num: "15" },
      { id: "111588310", num: "16" },
      { id: "111588311", num: "17" },
      { id: "111588312", num: "18" },
      { id: "111588313", num: "19" },
      { id: "111588315", num: "20" } /* 20 */,
      { id: "111588316", num: "21" },
      { id: "111588317", num: "22" },
      { id: "111588318", num: "23" },
      { id: "111588319", num: "24" },
      { id: "111588320", num: "25" },
      { id: "115019761", num: "25.5" },
      { id: "111588322", num: "26" },
      { id: "111588323", num: "27" },
      { id: "111588324", num: "28" },
      { id: "111588327", num: "29" },
      { id: "111588328", num: "30" } /* 30 */,
      { id: "111588329", num: "31" },
      { id: "111588330", num: "32" },
      { id: "111588204", num: "33" },
      { id: "111588206", num: "34" },
      { id: "111588207", num: "35" },
      { id: "111588208", num: "36" },
      { id: "111588209", num: "37" },
      { id: "111588210", num: "39" },
      { id: "111588211", num: "40" },
      { id: "111588213", num: "41" } /* 40 */,
      { id: "111588215", num: "42" },
      { id: "111588216", num: "43" },
      { id: "111588217", num: "44" },
      { id: "111588218", num: "45" },
      { id: "111588219", num: "46" },
      { id: "111588220", num: "47" },
      { id: "111588199", num: "48" },
      { id: "111588200", num: "49" },
      { id: "111588201", num: "50" },
      { id: "111588202", num: "51" } /* 50 */,
      { id: "111588231", num: "52" },
      { id: "111588232", num: "53" },
      { id: "111588233", num: "54" },
      { id: "111588234", num: "55" },
      { id: "111588235", num: "56" },
      { id: "111588236", num: "57" },
      { id: "111588237", num: "58" },
      { id: "111588238", num: "59" },
      { id: "111588239", num: "60" },
      { id: "111588240", num: "61" } /* 60 */,
      { id: "111588241", num: "62" },
      { id: "111588242", num: "63" },
      { id: "111588244", num: "64" },
      { id: "111588245", num: "65" },
      { id: "111588246", num: "66" },
      { id: "111588247", num: "67" },
      { id: "111588248", num: "68" },
      { id: "111588249", num: "69" },
      { id: "111588250", num: "70" },
      { id: "111588251", num: "71" } /* 70 */,
      { id: "111588252", num: "72" },
      { id: "111588253", num: "73" },
      { id: "111588254", num: "74" }, // 73.rd
      { id: "110649962", num: "74" }, // added 2023-12-05
      { id: "110649968", num: "74" }, // added 2023-12-05
      { id: "110649970", num: "74" }, // added 2023-12-05
      { id: "111588258", num: "75" },
      { id: "111588259", num: "76" },
      { id: "111588260", num: "77" },
      { id: "111588261", num: "78" } /* 80 */,
      { id: "111588243", num: "79" },
      { id: "111588262", num: "80" },
      { id: "111588222", num: "81" },
      { id: "111588224", num: "82" },
      { id: "111588225", num: "83" },
      { id: "111588226", num: "84" },
      { id: "111588227", num: "85" },
      { id: "111588228", num: "86" },
      { id: "111588229", num: "87" },
      { id: "111588190", num: "88" } /* 90 */,
      { id: "111588191", num: "89" },
      { id: "111588192", num: "89" },
      { id: "111588193", num: "89" },
      { id: "111588195", num: "90" },
      { id: "111588264", num: "91" },
      { id: "111588265", num: "91" },
      { id: "111588266", num: "91" },
      { id: "111588267", num: "91" },
      { id: "111588268", num: "92" },
      { id: "111588269", num: "93" } /* 100 */,
      { id: "111588270", num: "93" },
      { id: "111588271", num: "93" },
      { id: "111588272", num: "93" },
      { id: "111588273", num: "94" },
      { id: "111588274", num: "95" },
      { id: "111588275", num: "96" },
      { id: "111588276", num: "97" },
      { id: "111588277", num: "98" },
      { id: "111588278", num: "99" },
      { id: "111588279", num: "100" } /* 110 */,
      { id: "111588280", num: "101" },
      { id: "111588281", num: "102" },
      { id: "111588282", num: "103" },
      { id: "115774166", num: "103.5" },
      { id: "111588197", num: "104" },
      { id: "111588285", num: "104" },
      { id: "111588286", num: "104" },
      { id: "111588287", num: "105" },
      { id: "111588288", num: "106" },
      { id: "111588289", num: "106" },
      { id: "111588290", num: "106" } /* 120 */,
      { id: "111588291", num: "106" },
      { id: "111588292", num: "106" },
      { id: "111588293", num: "107" },
      { id: "111588294", num: "108" },
      { id: "111588295", num: "108" },
      { id: "111588296", num: "108" },
      { id: "111588297", num: "108" },
      { id: "111588298", num: "109" },
      { id: "111588299", num: "110" },
      { id: "111588300", num: "111" } /* 130 */,
      { id: "111588301", num: "149" }, // added here as per NCE_Unique_IDs_Updated.xlsx
      { id: "111588314", num: "112" },
      { id: "111588335", num: "113" },
      { id: "111588334", num: "114" },
      { id: "111588334", num: "115" },
      { id: "111588337", num: "116" } /* 136 */,
    ];

    //eventual result value after a join
    let combinedString = [];
    //returns value of value property, not value attribute

    const getVal = (n, index) => {
      n = parseInt(n);
      let el = loader.engine.document.getElementById(n);
      if (!el.visible) {
        return null;
      }
      if (index) {
        return el.properties.value.index;
      }
      let resVal;
      let valueObj = el.properties ? Object.assign(el.properties.value) : null;
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

    let callType = getVal(111588173);
    let personSpeaking = getVal(111588176);
    let patientSpeaking = personSpeaking === "Patient";
    let authorizedPersonName = getVal(107599838);
    let patientName = getVal(111588185) + " " + getVal(111588186);
    let speaker = patientSpeaking ? patientName : authorizedPersonName;
    combinedString.push(
      `${callType} call for patient consent, spoke to ${personSpeaking} ${speaker}`
    );
    if (!patientSpeaking) {
      combinedString.push(`Patient Name : ${patientName}`);
    }
    if (patientSpeaking && callType === "Outbound") {
      combinedString.push("ADVISED CALLER: Call may be recorded");
    }
    if (getVal(111588302) === "Yes") {
      combinedString.push(
        `Patient added authorized user: ${getVal(111588303) ?? ""} ${
          getVal(111588304) ?? ""
        }`
      );
    }

    //function to replace the 'xxyyzz' placeholders in the string values with form input
    const func = (str, replacement) => {
      return str.replace("xxyyzz", replacement);
    };

    const phoneNumber = (num) => {
      let array = numbers.slice(11, 16);
      let inputs = array.map((obj) => getVal(parseInt(obj.id)));
      if (inputs[0]) {
        let resStr = `Preferred phone number is: ${inputs[0]}`;
        inputs[1] ? (resStr = `${resStr}-${inputs[1]}`) : null;
        combinedString.push(resStr);
      }
      inputs[3]
        ? combinedString.push(`added mobile number: ${inputs[3]}`)
        : null;
      inputs[4]
        ? combinedString.push(`added landline number: ${inputs[4]}`)
        : null;
    };
    let email = () => {
      let ind = getVal(111588312, true);
      let emailVal = ind === 1 ? getVal(111588313) : getVal(111588311);
      if (ind === 2) {
        combinedString.push("Patient declines email");
        return;
      }
      emailVal
        ? combinedString.push(`Confirmed email address: ${emailVal}`)
        : null;
    };
    let shipping = () => {
      if (getVal(111588319, true) === 0) {
        let confirmedAddy = [111588315, 111588316, 111588317, 111588318]
          .map((y) => getVal(y))
          .filter(Boolean)
          .join();
        combinedString.push(`Confirmed shipping address as: ${confirmedAddy}`);
      } else {
        combinedString.push(
          `Updated shipping address to: ${getVal(111588320)}`
        );
      }
    };
    let provider = () => {
      let updated = getVal(111588326, true) === 1;
      let name = updated
        ? `${getVal(111588327) ?? ""} ${getVal(111588328) ?? ""}`
        : `${getVal(111588322) ?? ""} ${getVal(111588323) ?? ""}`;
      let start = updated
        ? "Updated treating HCP to:"
        : "Confirmed treating HCP is ";
      let address = updated ? getVal(111588329) : getVal(111588324) ?? "";
      let number = updated ? getVal(111588330) ?? "" : "";
      combinedString.push(`${start} ${name}, ${address} ${number}`);
    };
    let lastVisit = () => {
      let lastVisitDate = getVal(111588331) ?? "";
      combinedString.push(
        `Patients last visit date with treating HCP was: ${lastVisitDate}`
      );
    };
    phoneNumber();
    email();
    shipping();

    combinedString.push(`Preferred language: ${getVal(115019761)}`);

    provider();
    lastVisit();
    numbers.slice(32).forEach((obj, i) => {
      let int = parseInt(obj.id);
      let num = parseInt(obj.num);

      if (num > 88 && num < 112) {
        return;
      }
      let skip = [77, 114];

      if (getVal(111588205, true) === 0) {
        skip.push(34, 35, 36, 37, 38, 39, 40);
      } else {
        skip.push(33);
      }
      if (getVal(111588214, true) === 0) {
        skip.push(43, 44, 45, 46, 47);
      }
      if (skip.includes(num)) {
        return;
      }
      let models = [
        [111588191, 111588192, 111588193],
        [111588264, 111588265, 111588266, 111588267],
        [111588269, 111588270, 111588271, 111588272],
        [
          111588275, 111588276, 111588277, 111588278, 111588279, 111588280,
          111588281,
        ],
        [111588285, 111588286],
        [111588289, 111588290, 111588291, 111588292],
        [111588295, 111588296, 111588297],
      ];
      let modelQuants = [
        111588195, 111588268, 111588273, 111588282, 111588287, 111588293,
        111588298,
      ];
      let brandIds = [
        111588190, 111588190, 111588190, 111588274, 111588284, 111588288,
        111588294,
      ];
      if (num === 88) {
        let first = true;
        modelQuants.forEach((q, i) => {
          let modelEl = loader.engine.document.getElementById(q);
          let brandEl = loader.engine.document.getElementById(brandIds[i]);
          if (!modelEl.visible) {
            return;
          } else {
            let currentModels = models[i];
            currentModels.forEach((m) => {
              let currEl = loader.engine.document.getElementById(m);
              if (currEl.visible) {
                let valueModel = currEl.getProperty("value.value");
                let valueQuant = modelEl.getProperty("value.value");
                let valueBrand = brandEl.getProperty("value.value");
                if (
                  valueModel !== null &&
                  valueBrand !== null &&
                  valueQuant !== null
                ) {
                  if (first) {
                    combinedString.push("Patient request we ship these items:");
                    first = false;
                  }
                  combinedString.push(
                    `${valueBrand},  ${valueModel}, ${valueQuant}`
                  );
                }
              }
            });
          }
        });
        return;
      }
      if (num === 50) {
        let outOfPocket = getVal(111588230);
        outOfPocket
          ? combinedString.push(
              `Patient has out of pocket expenses and understands their credit card will be charged at the time of shipment: ${outOfPocket}`
            )
          : null;
      }
      if (num === 33) {
        let insuranceName = getVal(111588203);
        insuranceName
          ? combinedString.push(`Insurance name: ${insuranceName}`)
          : null;
      }
      if (num === 149) {
        if (String(getVal(111588301)).startsWith("Yes")) {
          combinedString.push(
            "I am using my cell phone and will confirm that it will be compatible my device."
          );
        } else {
          combinedString.push(
            "I am not using my cell phone and will need a reader/receiver for my device."
          );
        }
        return;
      }
      let val = getVal(int);
      if (val) {
        let output = func(labels[i + 32], val);
        combinedString.push(output);
      }
    });

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(111588339)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinValues;
