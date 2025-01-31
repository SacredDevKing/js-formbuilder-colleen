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
        `Customer Service Representative Email: ${placeHolder}`, 
        `Patient ID: ${placeHolder}`, 
        `Date Complaint/Escalation Made: ${placeHolder}`, 
        `Date Initially Worked: ${placeHolder}`, 
        `Work Type: ${placeHolder}`, 
        `Type of Complaint/Escalation: ${placeHolder}`, 
        `Initiated By: ${placeHolder}`, 
        `Patient Type: ${placeHolder}`, 
        `Reason: ${placeHolder}`, 
        `Reason: ${placeHolder}`, 
        `Reason: ${placeHolder}`, 
        `Is follow up needed?: ${placeHolder}`, 
        `Additional Detail: ${placeHolder}`, 
      ];

      let ids = [
        116699346, 116699347, 116699603, 116699605, 116699348, 116699349, 
        116699350, 116699631, 116699733, 116699892, 116699893, 116699912, 
        116700581, 
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
      .getElementById(116699475)
      .setValue({ value: joinedArr });
  }, 1000);
}

window.onchange = joinTValues;
