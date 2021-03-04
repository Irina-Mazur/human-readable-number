module.exports = function toReadable(number) {
    let readableNumber = '';

    if (number == undefined || number == null) {
        return null;
    }

    if (number == 0) {
        return 'zero';
    }

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10)
    let units = number - hundreds * 100 - tens * 10;

    if (hundreds > 0) {
        readableNumber += getNumber0_9(hundreds) + ' hundred';
        if (units > 0 || tens > 0) {
            readableNumber += ' ';
        }
    }

    if (tens == 1) {
        readableNumber += getNumber10_19(units);
    }
    else {
        if (tens > 1) {
            readableNumber += getNumber20_90(tens);
            if (units > 0) {
                readableNumber += ' ';
            }
        }
        if (units > 0) {
            readableNumber += getNumber0_9(units);
        }
    }

    return readableNumber;
}



function getNumber0_9(num) {
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function getNumber10_19(num) {
    switch (num) {
        case 0:
            return 'ten';
        case 1:
            return 'eleven';
        case 2:
            return 'twelve';
        case 3:
            return 'thirteen';
        case 4:
            return 'fourteen';
        case 5:
            return 'fifteen';
        case 6:
            return 'sixteen';
        case 7:
            return 'seventeen';
        case 8:
            return 'eighteen';
        case 9:
            return 'nineteen';
    }
}

function getNumber20_90(num) {
    switch (num) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}
