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
        `First Name: ${placeHolder}`, 
        `Last Name: ${placeHolder}`, 
        `Phone Number: ${placeHolder}`, 
        `Date of Birth: ${placeHolder}`, 
        `Zip Code: ${placeHolder}`, 
        `I confirm that: ${placeHolder}`, 
        `Authorized Representative or Caregiver First and Last Name: ${placeHolder}`, 
        `You are eligible to reorder the following products: ${placeHolder}`, 
        `Do you agree to have the product and quantity above shipped for this reorder?: ${placeHolder}`, 
        `Please enter the correct quantity needed. (Note: Quantity can only be less than what is listed above).: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Product Description: ${placeHolder}`, 
        `Quantity: ${placeHolder}`, 
        `Do you agree to have CCS bill your credit card on file for any applicable co-pays or deductibles?: ${placeHolder}`, 
        `Current Prescribing Doctor: ${placeHolder}`, 
        `Has your prescribing doctor changed since your last reorder?: ${placeHolder}`, 
        `New Prescribing Doctor First Name: ${placeHolder}`, 
        `New Prescribing Doctor Last Name: ${placeHolder}`, 
        `Current Address: ${placeHolder}`, 
        `City: ${placeHolder}`, 
        `Zip: ${placeHolder}`, 
        `Has your shipping address changed since your last order?: ${placeHolder}`, 
        `Please provide us with your updated shipping address: ${placeHolder}`, 
        `Primary Insurance: ${placeHolder}`, 
        `Has your insurance changed since your last reorder?: ${placeHolder}`, 
        `Please provide your new insurance name and policy number.: ${placeHolder}`, 
        `Medicare requires a visit to your prescribing doctor with the last 3 months.  Please enter the date of your last doctor visit.: ${placeHolder}`, 
        `Medicare requires a visit to your prescribing doctor with the last 6 months.  Please enter the date of your last doctor visit.: ${placeHolder}`, 
        `To process your reorder, Medicare requires you to have less than 10 days of supplies remaining on hand.  Please enter the number of days on hand you have.: ${placeHolder}`, 
        `Please enter the number of days you wait, before changing your pump site.: ${placeHolder}`, 
      ];

      let ids = [
        107071586, 
        107071587, 
        107071588, 
        107840413, 
        107071590, 
        107071591, 
        107071592, 
        107071598, 
        107071600, 
        107071601, 
        107071602, 
        107071603, 
        107071604, 
        107071605, 
        107071606, 
        107071607, 
        107071608, 
        107071609, 
        107071610, 
        107071611, 
        107071612, 
        107071613, 
        107071614, 
        107071615, 
        107071616, 
        107071617, 
        107071618, 
        107071619, 
        107071620, 
        107071621, 
        107071622, 
        107071623, 
        107071624, 
        107071625, 
        107071626, 
        107071627, 
        107071628, 
        107071629, 
        107071630, 
        107071632, 
        107071633, 
        107071634, 
        107071635, 
        107071636, 
        107071637, 
        107071638, 
        107071639, 
        107071640, 
        107071641, 
        107071642, 
        107071643, 
        107071644, 
        110839323, 
        107071645, 
        107071646, 
      ];

      idsToNoteLines(ids, labels);
    };

    try {
      convertLine();
    } catch (error) {}

    //splitting by row for clarity

    let joinedArr = combinedString.join("\r\n");
    console.log(joinedArr);
    loader.engine.document
      .getElementById(114671366)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
