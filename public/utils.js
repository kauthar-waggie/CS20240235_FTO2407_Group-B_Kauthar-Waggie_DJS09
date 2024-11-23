"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewTotal = showReviewTotal;
exports.populateUser = populateUser;
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const enums_1 = require("./enums");
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty === enums_1.LoyaltyUser.GOLD_USER ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `review total ${value} | last reviewed by ${reviewer} ${iconDisplay}`;
    }
}
function populateUser(isReturning, userName) {
    if (returningUserDisplay) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}
function add(firstValue, secondValue) {
    let result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition');
    }
}
const combinedReviews = add(5, 1);
const firstNameLastName = add('Ania', 'Kubow');
