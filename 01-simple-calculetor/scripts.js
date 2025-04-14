let display = document.getElementById('display');

// ডিসপ্লেতে সংখ্যা যোগ করা
function appendToDisplay(value) {
    display.value += value;
}

// ডিসপ্লে ক্লিয়ার করা
function clearDisplay() {
    display.value = '';
}

// ক্যালকুলেশন করা
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

let display = getElement
