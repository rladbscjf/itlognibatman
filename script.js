$(document).ready(function() {
    var select = $('#heroSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#weaponSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#bagSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#necklaceSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#gloveSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#helmetSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#armorSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

$(document).ready(function() {
    var select = $('#bootSelect');
    for (var i = 1; i <= 60; i++) {
        select.append($('<option></option>').attr('value', i).text(i));
    }
});

function validateNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
}

function calculateTotalSum() {
    var selectElements = document.querySelectorAll('select'); // Get all select elements
    var total = 0;

    selectElements.forEach(function(select) {
        total += parseInt(select.value) || 0; // Sum up the values, parsing them as integers
    });

    document.getElementById('totalSum').value = total; // Display the total sum in the input field
}

function validateNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    calculateTotalSum();
}

function calculateTotalSum() {
    var hero = parseInt($('#heroSelect').val()) || 0;
    var weapon = parseInt($('#weaponSelect').val()) || 0;
    var bag = parseInt($('#bagSelect').val()) || 0;
    var necklace = parseInt($('#necklaceSelect').val()) || 0;
    var gloves = parseInt($('#gloveSelect').val()) || 0;
    var helmet = parseInt($('#helmetSelect').val()) || 0;
    var armor = parseInt($('#armorSelect').val()) || 0;
    var boots = parseInt($('#bootSelect').val()) || 0;

    var totalSum = (hero * 5) + (weapon * 4) + (bag * 3) + (necklace * 3) + (gloves * 2) + helmet + armor + (boots * 2);

    $('#totalSum').val(totalSum);

    var requirement = parseInt($('#requirement').val()) || 0;
    var difference = requirement - totalSum;

    if (difference > 0) {
        $('#result').val('You need ' + difference + ' more to meet the requirement.');
    } else if (difference < 0) {
        $('#result').val('You exceed the requirement by ' + Math.abs(difference) + '.');
    } else {
        $('#result').val('You meet the requirement exactly.');
    }
}

$('select').on('change', calculateTotalSum);
$('#requirement').on('input', calculateTotalSum);