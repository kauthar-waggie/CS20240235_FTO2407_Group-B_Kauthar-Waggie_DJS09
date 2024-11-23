System.register("utils", [], function (exports_1, context_1) {
    "use strict";
    var reviewTotalDisplay, returningUserDisplay, userNameDisplay;
    var __moduleName = context_1 && context_1.id;
    function showReviewTotal(value, reviewer, isLoyalty) {
        var iconDisplay = isLoyalty ? '⭐' : '';
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
    }
    exports_1("showReviewTotal", showReviewTotal);
    function populateUser(isReturning, userName) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
        userNameDisplay.innerHTML = userName;
    }
    exports_1("populateUser", populateUser);
    return {
        setters: [],
        execute: function () {
            reviewTotalDisplay = document.querySelector('#reviews');
            returningUserDisplay = document.querySelector('#returning-user');
            userNameDisplay = document.querySelector('#user');
        }
    };
});
// Enum Types
System.register("index", ["utils", "./enums"], function (exports_2, context_2) {
    "use strict";
    var utils_1, enums_1, propertyContainer, footer, isOpen, reviews, you, properties, currentLocation;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }
        ],
        execute: function () {// Enum Types
            propertyContainer = document.querySelector('.properties');
            footer = document.querySelector('.footer');
            // Reviews
            reviews = [
                {
                    name: 'Sheia',
                    stars: 5,
                    loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
                    date: '01-04-2021'
                },
                {
                    name: 'Andrzej',
                    stars: 3,
                    loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
                    date: '28-03-2021'
                },
                {
                    name: 'Omar',
                    stars: 4,
                    loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
                    date: '27-03-2021'
                },
            ];
            you = {
                firstName: 'Bobby',
                lastName: 'Brown',
                permissions: enums_1.Permissions.ADMIN,
                isReturning: true,
                age: 35,
                stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
            };
            // Array of Properties
            properties = [
                {
                    image: 'images/colombia-property.jpg',
                    title: 'Colombian Shack',
                    price: 45,
                    location: {
                        firstLine: 'shack 37',
                        city: 'Bogota',
                        code: 45632,
                        country: 'Colombia'
                    },
                    contact: [+112343823978921, 'marywinkle@gmail.com'],
                    isAvailable: true
                },
                {
                    image: 'images/poland-property.jpg',
                    title: 'Polish Cottage',
                    price: 34,
                    location: {
                        firstLine: 'no 23',
                        city: 'Gdansk',
                        code: 343903,
                        country: 'Poland'
                    },
                    contact: [+1298239028490830, 'garydavis@hotmail.com'],
                    isAvailable: false
                },
                {
                    image: 'images/london-property.jpg',
                    title: 'London Flat',
                    price: 23,
                    location: {
                        firstLine: 'flat 15',
                        city: 'London',
                        code: 35433,
                        country: 'United Kingdom',
                    },
                    contact: [+34829374892553, 'andyluger@aol.com'],
                    isAvailable: true
                }
            ];
            // Functions
            utils_1.showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
            utils_1.populateUser(you.isReturning, you.firstName);
            // Add the properties
            for (var i = 0; i < properties.length; i++) {
                var card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = properties[i].title;
                var image = document.createElement('img');
                image.setAttribute('src', properties[i].image);
                card.appendChild(image);
                propertyContainer.appendChild(card);
            }
            currentLocation = ['London', '11.03', 17];
            footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
        }
    };
});
