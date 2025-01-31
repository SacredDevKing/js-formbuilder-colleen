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
          `Please provide us with your updated shipping address.: ${placeHolder}`, 
          `Primary Insurance: ${placeHolder}`, 
          `Has your insurance changed since your last reorder?: ${placeHolder}`, 
          `Please provide your new insurance name and policy number.: ${placeHolder}`, 
          `Medicare requires a visit to your prescribing doctor with the last 3 months.  Please enter the date of your last doctor visit.: ${placeHolder}`, 
          `Medicare requires a visit to your prescribing doctor with the last 6 months.  Please enter the date of your last doctor visit.: ${placeHolder}`, 
          `To process your reorder, Medicare requires you to have less than 10 days of supplies remaining on hand.  Please enter the number of days on hand you have.: ${placeHolder}`, 
          `Please enter the number of days you wait, before changing your pump site.: ${placeHolder}`, 
        ];
  
        let ids = [
          116596309, 116596310, 116596311, 116596312, 116596313, 116596314, 
          116596315, 116596324, 116596325, 116596326, 116596327, 116596328, 
          116596329, 116596330, 116596331, 116596332, 116596333, 116596334, 
          116596335, 116596336, 116596337, 116596338, 116596339, 116596340, 
          116596341, 116596342, 116596343, 116596344, 116596345, 116596346, 
          116596347, 116596348, 116596349, 116596350, 116596351, 116596352, 
          116596353, 116596354, 116596356, 116596357, 116596358, 116596359, 
          116596360, 116596361, 116596362, 116596363, 116596364, 116596365, 
          116596366, 116596367, 116596368, 116596369, 116596370, 116596371, 
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
        .getElementById(116596372)
        .setValue({ value: joinedArr });
    }, 1000);
  }
  
  window.onchange = joinTValues;
  