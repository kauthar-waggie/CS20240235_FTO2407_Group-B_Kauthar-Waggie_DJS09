define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showReviewTotal = showReviewTotal;
    exports.populateUser = populateUser;
    var reviewTotalDisplay = document.querySelector('#reviews');
    var returningUserDisplay = document.querySelector('#returning-user');
    var userNameDisplay = document.querySelector('#user');
    function showReviewTotal(value, reviewer, isLoyalty) {
        var iconDisplay = isLoyalty ? '⭐' : '';
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
    }
    function populateUser(isReturning, userName) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
        userNameDisplay.innerHTML = userName;
    }
});
define("index", ["require", "exports", "utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var propertyContainer = document.querySelector('.properties');
    var footer = document.querySelector('.footer');
    var isOpen;
    // Reviews
    var reviews = [
        {
            name: 'Sheia',
            stars: 5,
            loyaltyUser: true,
            date: '01-04-2021'
        },
        {
            name: 'Andrzej',
            stars: 3,
            loyaltyUser: false,
            date: '28-03-2021'
        },
        {
            name: 'Omar',
            stars: 4,
            loyaltyUser: true,
            date: '27-03-2021'
        },
    ];
    // User
    var you = {
        firstName: 'Bobby',
        lastName: 'Brown',
        isReturning: true,
        age: 35,
        stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
    };
    // Array of Properties
    var properties = [
        {
            image: 'images/colombian-shack.jpeg',
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
            image: 'images/poland-cottage.jpeg',
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
            image: 'images/london-flat.jpeg',
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
    (0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
    (0, utils_1.populateUser)(you.isReturning, you.firstName);
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
    var currentLocation = ['London', '11.03', 17];
    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
});
