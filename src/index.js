module.exports = function toReadable(number) {
    if (number == -1) {
        return "";
    }
    var remainder; // остаток
    var quotient; // целое
    quotient = Math.floor(number / 100);
    remainder = number % 100;
    if (remainder == 0) {
        remainder = -1;
    }
    if (quotient >= 1) {
        return (toReadable(quotient) + " hundred " + toReadable(remainder)).trim();
    }
    quotient = Math.floor(number / 10);
    remainder = number % 10;
    if (remainder == 0) {
        remainder = -1;
    }
    if (quotient == 1) {
        switch (number) {
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
        }
    }
    switch (quotient) {
        case 2:
            return ("twenty " + toReadable(remainder)).trim();
        case 3:
            return ("thirty " + toReadable(remainder)).trim();
        case 4:
            return ("forty " + toReadable(remainder)).trim();
        case 5:
            return ("fifty " + toReadable(remainder)).trim();
        case 6:
            return ("sixty " + toReadable(remainder)).trim();
        case 7:
            return ("seventy " + toReadable(remainder)).trim();
        case 8:
            return ("eighty " + toReadable(remainder)).trim();
        case 9:
            return ("ninety " + toReadable(remainder)).trim();
    }
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
};
