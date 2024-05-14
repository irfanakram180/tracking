// script.js
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.76, lng: -73.983 }, // Default center (New York)
        zoom: 15, // Default zoom level
        mapTypeId: "satellite" // Default map type (satellite)
    });

    map.setTilt(45);
}

function trackMobileLocation() {
    var mobileNumber = document.getElementById('mobileNumber').value;
    if (isValidPakistaniMobileNumber(mobileNumber)) {
        var modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = 'Fetching location...';
        var mapModal = document.getElementById('mapModal');
        mapModal.style.display = 'block';
        fetchLocationByMobileNumber(mobileNumber)
            .then(location => {
                displayLocationOnMap(location);
            })
            .catch(error => {
                console.error('Error fetching location:', error);
                modalContent.innerHTML = 'Error fetching location.';
            });
    } else {
        alert('Please enter a valid Pakistani mobile number.');
    }
}

function isValidPakistaniMobileNumber(mobileNumber) {
    return mobileNumber.startsWith('92') && mobileNumber.length === 12;
}

function fetchLocationByMobileNumber(mobileNumber) {
    // Hypothetical API call to fetch location based on mobile number
    // Here, we'll just simulate fetching location data for demonstration
    return new Promise((resolve, reject) => {
        // Simulate fetching location data
        setTimeout(() => {
            var location = { lat: 30.3753, lng: 69.3451 }; // Default location (Pakistan)
            resolve(location);
        }, 2000); // Simulating delay for fetching location
    });
}

function displayLocationOnMap(location) {
    map.setCenter(location);
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function closeModal() {
    var mapModal = document.getElementById('mapModal');
    mapModal.style.display = 'none';
}
// script.js
function trackMobileLocation() {
    var mobileNumber = document.getElementById('mobileNumber').value;
    if (isValidPakistaniMobileNumber(mobileNumber)) {
        var modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = 'Fetching location...';
        var mapModal = document.getElementById('mapModal');
        mapModal.style.display = 'block';
        fetch('/track_location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'mobile_number=' + encodeURIComponent(mobileNumber)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayLocationOnMap(data);
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            modalContent.innerHTML = 'Error fetching location.';
        });
    } else {
        alert('Please enter a valid Pakistani mobile number.');
    }
}

function isValidPakistaniMobileNumber(mobileNumber) {
    return mobileNumber.startsWith('92') && mobileNumber.length === 12;
}

function displayLocationOnMap(location) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: location.latitude, lng: location.longitude }, // Center map based on received location
        zoom: 15 // Set a default zoom level
    });

    var marker = new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude }, // Set marker position based on received location
        map: map
    });
}

function closeModal() {
    var mapModal = document.getElementById('mapModal');
    mapModal.style.display = 'none';
}
