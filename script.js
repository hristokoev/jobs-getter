// ==UserScript==
// @name         Fluently
// @namespace    https://fluently.moravia.com/jobs/available
// @version      1.0
// @description  Jobs Getter
// @author       You
// @match        https://fluently.moravia.com/jobs/available
// @icon         https://fluently.moravia.com/public/image/favicon.png
// @grant        none
// ==/UserScript==

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function jobsGetter() {
	'use strict';
	// let target = document.querySelector('.MuiTableBody-root');
	let targets = [document.querySelector('title'), document.querySelector('.MuiTableBody-root')];

	const reloadAfter = randomIntFromInterval(2500, 4000);

	targets.forEach((target) => {
			const observer = new MutationObserver(mutations => {
					let xpathClaim = "//button[text()='Claim']";
					let buttonClaim = document.evaluate(xpathClaim, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
					let xpathSelectAll = "/html/body/div[1]/div/div[2]/div/div[3]/table/thead/tr/th[1]/span/input";
					let buttonSelectAll = document.evaluate(xpathSelectAll, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
					if (!buttonSelectAll) {
							buttonSelectAll = document.querySelector("#jobs-auction-select-all");
					}

					if (targets[0].textContent !== 'Fluently' || targets[1].textContent !== 'No jobs available.') {
							buttonSelectAll.click();
							buttonClaim.click();
							/*
							setTimeout(function(){
									window.location.reload(1);
							}, reloadAfter);
							*/
					}
			});


			observer.observe(target, {
					attributes: true,
					childList: true
			});

	});

	console.log("Started observer.");

};

setTimeout(() => jobsGetter(), 5000);