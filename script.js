function toggleCheckboxList() {
    var checkboxList = document.querySelector('.checkbox-list');
    checkboxList.style.display = checkboxList.style.display === 'block' ? 'none' : 'block';
}

function add_Tags() {
    var checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');
    var keywordsInput = document.getElementById('keywords');
    var selectedTags = [];

    checkboxes.forEach(function(checkbox) {
        selectedTags.push(checkbox.value);
    });

    keywordsInput.value = selectedTags.join(', ');
    showPopup();
}
function addTags() {
    var checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');
    var keywordsInput = document.getElementById('keywords');
    var selectedTags = [];

    checkboxes.forEach(function(checkbox) {
        selectedTags.push(checkbox.value);
    });

    keywordsInput.value = selectedTags.join(', ');
    hideCheckboxList();
}

function hideCheckboxList() {
    var checkboxList = document.querySelector('.checkbox-list');
    checkboxList.style.display = 'none';
}

document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.input-container').contains(event.target);
    if (!isClickInside) {
        hideCheckboxList();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        hideCheckboxList();
    }
});

function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var mainContent = document.getElementById('main-content');

    popup.style.display = 'block';
    overlay.style.display = 'block';
    mainContent.classList.add('blur');
}

function hidePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var mainContent = document.getElementById('main-content');

    popup.style.display = 'none';
    overlay.style.display = 'none';
    mainContent.classList.remove('blur');
}

    input.addEventListener('blur', function() {
        setTimeout(function() {
            checkboxList.style.display = 'none';
        }, 200);
});

function show_Popup() {
    var popup_ = document.getElementById('popup_');
    var overlay = document.getElementById('overlay');
    var mainContent = document.getElementById('main-content');

    popup_.style.display = 'block';
    overlay.style.display = 'block';
    mainContent.classList.add('blur');
}

function hide_Popup() {
    var popup = document.getElementById('popup_');
    var overlay = document.getElementById('overlay');
    var mainContent = document.getElementById('main-content');

    popup_.style.display = 'none';
    overlay.style.display = 'none';
    mainContent.classList.remove('blur');
}
