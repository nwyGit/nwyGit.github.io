/**
 * WEB222 – Final Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Wai Yan Ng>
 *      Student ID: <149637217>
 *      Date:       <10 Aug 2022>
 */
//Enquiry
const enqAns = document.querySelectorAll(".enquiry");
const hrlyrate = document.querySelector("#hourlyRate");
const reset = document.querySelector("#reset");

enqAns.forEach((ele) => {
	ele.addEventListener("click", () => {
		if (ele.id === "hiring") {
			hrlyrate.classList.remove("hidden");
			console.log(1);
			// if the "hiring" is checked, display the hourlyRate box and print 1 in the console.
		} else {
			hrlyrate.classList.add("hidden");
			console.log(2);
			// if the "hiring" is not checked, hide the hourlyRate box and print 2 in the console.
		}
	});
});

reset.addEventListener("click", () => {
	hrlyrate.classList.add("hidden");
	console.log(3);
	// if the reset button is clicked, hide the hourlyRate box and print 3 in the console.
});

//Validation
//phone
const phone = document.querySelector("#phone");
const phoneErr = phone.nextElementSibling;

phone.addEventListener("input", () => {
	const digits = "0123456789";
	const inputLen = phone.value.length === 10;
	var valid = 0;
	for (var i = 0; i < phone.value.length; i++) {
		for (var j = 0; j < digits.length; j++) {
			if (String(phone.value)[i] === digits[j]) {
				valid += 1;
			}
		}
	}
	if (inputLen && valid === 10) {
		phone.classList.remove("error");
		phoneErr.textContent = "";
	} else {
		phone.classList.add("error");
		phoneErr.textContent = "Must be 10 digits";
	}
});
//postal code
const postalCode = document.querySelector("#postalCode");
const pcErr = postalCode.nextElementSibling;

postalCode.addEventListener("input", () => {
	const provinceInput = document.querySelector("#province");
	const provinceSelected =
		provinceInput.options[provinceInput.selectedIndex].value;
	const pcInput = postalCode.value.toUpperCase().replace(" ", "");
	const inputLen = pcInput.length === 6;
	const pcRegex = /[^DFIOQWUZ][0-9][^DFIOQU][0-9][^DFIOQU][0-9]/;
	const valid = pcRegex.exec(pcInput);
	let matched = false;

	if (provinceSelected === "ON") {
		if (
			pcInput[0] === "K" ||
			pcInput[0] === "L" ||
			pcInput[0] === "M" ||
			pcInput[0] === "N" ||
			pcInput[0] === "P"
		) {
			matched = true;
		}
	} else if (provinceSelected === "QC") {
		if (pcInput[0] === "G" || pcInput[0] === "H" || pcInput[0] === "J") {
			matched = true;
		}
	} else if (provinceSelected === "NS") {
		if (pcInput[0] === "B") {
			matched = true;
		}
	} else if (provinceSelected === "NB") {
		if (pcInput[0] === "E") {
			matched = true;
		}
	} else if (provinceSelected === "MB") {
		if (pcInput[0] === "R") {
			matched = true;
		}
	} else if (provinceSelected === "BC") {
		if (pcInput[0] === "V") {
			matched = true;
		}
	} else if (provinceSelected === "PE") {
		if (pcInput[0] === "C") {
			matched = true;
		}
	} else if (provinceSelected === "SK") {
		if (pcInput[0] === "S") {
			matched = true;
		}
	} else if (provinceSelected === "AB") {
		if (pcInput[0] === "T") {
			matched = true;
		}
	} else if (provinceSelected === "NL") {
		if (pcInput[0] === "A") {
			matched = true;
		}
	} else if (provinceSelected === "NT") {
		if (pcInput[0] === "X") {
			matched = true;
		}
	} else if (provinceSelected === "YT") {
		if (pcInput[0] === "Y") {
			matched = true;
		}
	}

	if (inputLen && valid) {
		if (matched) {
			postalCode.classList.remove("error");
			pcErr.textContent = "";
		} else {
			postalCode.classList.add("error");
			pcErr.textContent = "Province and Postal must be matched";
		}
	} else {
		postalCode.classList.add("error");
		pcErr.textContent = "Invalid input";
	}
});
