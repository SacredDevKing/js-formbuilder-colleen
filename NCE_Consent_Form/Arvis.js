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
        `Are you planning to use the Pump application on your phone as your reader/receiver?: ${val}`,
        `${val}`,
        `Reviewed 90 Day physician visits with patient`,
        `Estimated Cost Statement? : ${val}`,
        `Advised Patient of Next Steps : ${val}`,
        `Patient advised of re-order process : ${val}` /* 136 */,
      ];
      const numbers = [
        { id: "107599818", num: "1" },
        { id: "107599822", num: "2" },
        { id: "107599821", num: "3" },
        { id: "107599864", num: "4" },
        { id: "107599865", num: "5" },
        { id: "107599838", num: "6" },
        { id: "107599860", num: "7" },
        { id: "107599517", num: "8" },
        { id: "107599518", num: "9" },
        { id: "107599519", num: "10" } /* 10 */,
        { id: "107599520", num: "11" },
        { id: "107599455", num: "12" },
        { id: "107599456", num: "13" },
        { id: "107599457", num: "14" },
        { id: "107599459", num: "15" },
        { id: "107599460", num: "16" },
        { id: "107599463", num: "17" },
        { id: "107599464", num: "18" },
        { id: "107599465", num: "19" },
        { id: "107599466", num: "20" } /* 20 */,
        { id: "107599467", num: "21" },
        { id: "107599468", num: "22" },
        { id: "107599469", num: "23" },
        { id: "107599470", num: "24" },
        { id: "107599471", num: "25" },
        { id: "107599472", num: "26" },
        { id: "107599473", num: "27" },
        { id: "107599474", num: "28" },
        { id: "107599477", num: "29" },
        { id: "107599478", num: "30" } /* 30 */,
        { id: "107599479", num: "31" },
        { id: "107599480", num: "32" },
        { id: "107599481", num: "33" },
        { id: "107599483", num: "34" },
        { id: "107599484", num: "35" },
        { id: "107599485", num: "36" },
        { id: "107599486", num: "37" },
        { id: "107599487", num: "39" },
        { id: "107599488", num: "40" },
        { id: "108071625", num: "41" } /* 40 */,
        { id: "107599491", num: "42" },
        { id: "107599492", num: "43" },
        { id: "107599493", num: "44" },
        { id: "107599494", num: "45" },
        { id: "107599495", num: "46" },
        { id: "107599496", num: "47" },
        { id: "107600149", num: "48" },
        { id: "107768478", num: "49" },
        { id: "107600151", num: "50" },
        { id: "107796637", num: "51" } /* 50 */,
        { id: "107820359", num: "52" },
        { id: "107796641", num: "53" },
        { id: "107599498", num: "54" },
        { id: "107599499", num: "55" },
        { id: "107599500", num: "56" },
        { id: "107599501", num: "57" },
        { id: "107600640", num: "58" },
        { id: "107600657", num: "59" },
        { id: "107768395", num: "60" },
        { id: "107600639", num: "61" } /* 60 */,
        { id: "107600279", num: "62" },
        { id: "107599503", num: "63" },
        { id: "107599511", num: "64" },
        { id: "107599512", num: "65" },
        { id: "107599513", num: "66" },
        { id: "107599514", num: "67" },
        { id: "107599515", num: "68" },
        { id: "107599516", num: "69" },
        { id: "107768479", num: "70" },
        { id: "107768480", num: "71" } /* 70 */,
        { id: "107768481", num: "72" },
        { id: "107768482", num: "73" },
        { id: "107768484", num: "74" }, // 73.rd
        { id: "110649962", num: "74" }, // added 2023-12-05
        { id: "110649968", num: "74" }, // added 2023-12-05
        { id: "110649970", num: "74" }, // added 2023-12-05
        { id: "107599504", num: "75" },
        { id: "107599505", num: "76" },
        { id: "107599509", num: "77" },
        { id: "107599510", num: "78" } /* 80 */,
        { id: "107599508", num: "79" },
        { id: "107835587", num: "80" },
        { id: "107600991", num: "81" },
        { id: "107601095", num: "82" },
        { id: "107601379", num: "83" },
        { id: "107601407", num: "84" },
        { id: "107601409", num: "85" },
        { id: "107768809", num: "86" },
        { id: "107796807", num: "87" },
        { id: "108070324", num: "88" } /* 90 */,
        { id: "108070329", num: "89" },
        { id: "108070333", num: "89" },
        { id: "108070334", num: "89" },
        { id: "108070336", num: "90" },
        { id: "107816644", num: "91" },
        { id: "107816645", num: "91" },
        { id: "108040197", num: "91" },
        { id: "108040202", num: "91" },
        { id: "107816646", num: "92" },
        { id: "107816648", num: "93" } /* 100 */,
        { id: "108040547", num: "93" },
        { id: "108040529", num: "93" },
        { id: "108040530", num: "93" },
        { id: "107816650", num: "94" },
        { id: "108039284", num: "95" },
        { id: "108039285", num: "96" },
        { id: "108040586", num: "97" },
        { id: "108040585", num: "98" },
        { id: "108040594", num: "99" },
        { id: "108040602", num: "100" } /* 110 */,
        { id: "108040615", num: "101" },
        { id: "108040604", num: "102" },
        { id: "107817811", num: "103" },
        { id: "107796236", num: "104" },
        { id: "108040997", num: "104" },
        { id: "108040998", num: "104" },
        { id: "108041022", num: "105" },
        { id: "107816806", num: "106" },
        { id: "108041003", num: "106" },
        { id: "108041009", num: "106" } /* 120 */,
        { id: "108041011", num: "106" },
        { id: "108222445", num: "106" },
        { id: "108041024", num: "107" },
        { id: "107816809", num: "108" },
        { id: "108041017", num: "108" },
        { id: "108041018", num: "108" },
        { id: "108041019", num: "108" },
        { id: "108041021", num: "109" },
        { id: "108041025", num: "110" },
        { id: "108041026", num: "111" } /* 130 */,
        { id: "109675149", num: "149" }, // added here as per NCE_Unique_IDs_Updated.xlsx
        { id: "115776321", num: "150" },
        { id: "107819501", num: "112" },
        { id: "107930215", num: "113" },
        { id: "107601667", num: "114" },
        { id: "107601734", num: "115" },
        { id: "107768916", num: "116" } /* 136 */,
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
  
      let callType = getVal(107599818);
      let personSpeaking = getVal(107599821);
      let patientSpeaking = personSpeaking === "Patient";
      let authorizedPersonName = getVal(107599838);
      let patientName = getVal(107599864) + " " + getVal(107599865);
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
      if (getVal(107599517) === "Yes") {
        combinedString.push(
          `Patient added authorized user: ${getVal(107599518) ?? ""} ${
            getVal(107599519) ?? ""
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
        let ind = getVal(107599464, true);
        let emailVal = ind === 1 ? getVal(107599465) : getVal(107599463);
        if (ind === 2) {
          combinedString.push("Patient declines email");
          return;
        }
        emailVal
          ? combinedString.push(`Confirmed email address: ${emailVal}`)
          : null;
      };
      let shipping = () => {
        if (getVal(107599470, true) === 0) {
          let confirmedAddy = [107599466, 107599467, 107599468, 107599469]
            .map((y) => getVal(y))
            .filter(Boolean)
            .join();
          combinedString.push(`Confirmed shipping address as: ${confirmedAddy}`);
        } else {
          combinedString.push(
            `Updated shipping address to: ${getVal(107599471)}`
          );
        }
      };
      let provider = () => {
        let updated = getVal(107599476, true) === 1;
        let name = updated
          ? `${getVal(107599477) ?? ""} ${getVal(107599478) ?? ""}`
          : `${getVal(107599472) ?? ""} ${getVal(107599473) ?? ""}`;
        let start = updated
          ? "Updated treating HCP to:"
          : "Confirmed treating HCP is ";
        let address = updated ? getVal(107599479) : getVal(107599474) ?? "";
        let number = updated ? getVal(107599480) ?? "" : "";
        combinedString.push(`${start} ${name}, ${address} ${number}`);
      };
      let lastVisit = () => {
        let lastVisitDate = getVal(109674818) ?? "";
        combinedString.push(
          `Patients last visit date with treating HCP was: ${lastVisitDate}`
        );
      };
      phoneNumber();
      email();
      shipping();
      provider();
      lastVisit();
      numbers.slice(32).forEach((obj, i) => {
        let int = parseInt(obj.id);
        let num = parseInt(obj.num);
  
        if (num > 88 && num < 112) {
          return;
        }
        let skip = [77, 114];
  
        if (getVal(107599482, true) === 0) {
          skip.push(34, 35, 36, 37, 38, 39, 40);
        } else {
          skip.push(33);
        }
        if (getVal(107599490, true) === 0) {
          skip.push(43, 44, 45, 46, 47);
        }
        if (skip.includes(num)) {
          return;
        }
        let models = [
          [108070329, 108070333, 108070334],
          [107816644, 107816645, 108040197, 108040202],
          [107816648, 108040547, 108040529, 108040530],
          [
            108039285, 108040586, 108040585, 108040594, 108040602, 108040615,
            108040604,
          ],
          [108040997, 108040998],
          [108041003, 108041009, 108041011, 108222445],
          [108041017, 108041018, 108041019],
        ];
        let modelQuants = [
          108070336, 107816646, 107816650, 107817811, 108041022, 108041024,
          108041021,
        ];
        let brandIds = [
          108070324, 108070324, 108070324, 108039284, 107816754, 107816806,
          107816809,
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
          let outOfPocket = getVal(107768857);
          outOfPocket
            ? combinedString.push(
                `Patient has out of pocket expenses and understands their credit card will be charged at the time of shipment: ${outOfPocket}`
              )
            : null;
        }
        if (num === 33) {
          let insuranceName = getVal(107769455);
          insuranceName
            ? combinedString.push(`Insurance name: ${insuranceName}`)
            : null;
        }
        if (num === 149) {
          if (String(getVal(109675149)).startsWith("Yes")) {
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
        .getElementById(107797518)
        .setValue({ value: joinedArr });
    }, 1000);
  }
  
  window.onchange = joinValues;
  