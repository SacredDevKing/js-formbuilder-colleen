function joinTValues() {
    setTimeout(function () {
        let placeHolder = "xxyy33zz";
        //eventual result value after a join
        let combinedString = [];

        const getVal = (n, index) => {
            n = parseInt(n);
            let el = loader.engine.document.getElementById(n) ?? false;

            // if (!el || !el.visible || !el.properties) {
            //     return null;
            // }
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

        const convertFirstLine = () => {
            let labels = [`Patient ID: ${placeHolder}`];
            let ids = [115529944];
            idsToNoteLines(ids, labels);
        };

        const convertSecondLine = () => {
            let labels = [
                `Your Phone Number: ${placeHolder}`,
                `Please confirm what type of phone number: ${placeHolder}`,
                `Is the phone number we have on file the best phone number to reach you?  (If a phone number is not displayed, please select no and provide your phone number).: ${placeHolder}`,
                `Do you want to add any additional phone numbers?: ${placeHolder}`,
                `Mobile Phone Number: ${placeHolder}`,
                `Landline Phone Number: ${placeHolder}`,
                `Do you want to add any additional phone numbers?: ${placeHolder}`,
                `Additional Phone Number: ${placeHolder}`,
                `Email Address on file: ${placeHolder}`,
                `Is this the correct email address?: ${placeHolder}`,
                `Email address: ${placeHolder}`,
                `Allergies: ${placeHolder}`,
                `Medication Name: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #2: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #3: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #4: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #5: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #6: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #7: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #8: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #9: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
                `Medication Name #10: ${placeHolder}`,
                `Strength: ${placeHolder}`,
                `Directions for Use: ${placeHolder}`,
            ];

            let ids = [
                115529967, 115529968, 115529969, 115529970, 115529971, 115529972,
                115529973, 115529974, 115529975, 115529976, 115529977, 115533434,
                115530033, 115530034, 115533438, 115530035, 115530036, 115533439,
                115530037, 115530038, 115533440, 115530039, 115530040, 115533441,
                115530041, 115530042, 115533442, 115530043, 115530044, 115533443,
                115530045, 115530046, 115533444, 115530047, 115530048, 115533445,
                115530049, 115530050, 115533446, 115530051, 115530052, 115533447,
            ];

            idsToNoteLines(ids, labels);
        };

        try {
            convertFirstLine();
            convertSecondLine();
        } catch (error) {
            console.log(error);
        }

        //splitting by row for clarity

        let joinedArr = combinedString.join("\r\n");
        console.log(joinedArr);
        loader.engine.document
            .getElementById(115530069)
            .setValue({ value: joinedArr });
    }, 1000);
}

window.onchange = joinTValues;
