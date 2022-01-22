const date_inp = document.querySelector(".date-input");
const btn = document.querySelector("button");
const res_para = document.querySelector(".result");

function checkWiring() {

    console.log(date_inp.value);
    console.log("Clicked");
    res_para.innerHTML = date_inp.value;
    // console.log(typeof(date_inp));
}

function is_palindrome(pal_date_str) {

    return pal_date_str === rev_date_str(pal_date_str);
}

function rev_date_str(date_str_inp) {

    return date_str_inp.split('').reverse().join('');

}

function date_to_str(date_str) {

    var new_str_date = {
        day: '',
        month: '',
        year: ''
    }

    if (date_str.day < 10) {
        new_str_date.day = '0' + date_str.day;
    } else {
        new_str_date.day = date_str.day.toString();
    }

    if (date_str.month < 10) {
        new_str_date.month = '0' + date_str.month;
    } else {
        new_str_date.month = date_str.month.toString();
    }

    new_str_date.year = date_str.year.toString();

    console.log(new_str_date);
    return new_str_date;

}

function get_all_date_formats(date_obj_inp) {
    var str_date = date_to_str(date_obj_inp);

    var ddmmyyyy = str_date.day + str_date.month + str_date.year;
    var mmddyyyy = str_date.month + str_date.day + str_date.year;
    var yyyymmdd = str_date.year + str_date.month + str_date.day;
    var ddmmyy = str_date.day + str_date.month + str_date.year.slice(-2);
    var mmddyy = str_date.month + str_date.day + str_date.year.slice(-2);
    var yymmdd = str_date.year.slice(-2) + str_date.month + str_date.day;

    console.log(ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd);
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function is_leap_year(test_year) {

    if (test_year % 400 === 0) {
        if (test_year % 4 === 0 && test_year % 100 != 0) {
            return true;
        }
    }
    return false;

}

function get_next_date(date_obj_inp_test) {

    var next_day = date_obj_inp_test.day + 1;
    var next_month = date_obj_inp_test.month;
    var next_year = date_obj_inp_test.year;

    var month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // list of no of days in 12 months for non leap year

    if (next_month === 2) {

        //if month = feb, check for leap or not
        if (is_leap_year(next_year)) {
            // is a leap year..so in leap feb if date crosses 29..move to next month
            if (next_day > 29) {
                day = 1;
                month++;
            }
        } else {
            //not a leap year..so if date crosses 28..move to next month
            if (next_day > month_list[next_month - 1] /* basically 28 but wanted to use the list anyway*/ ) {
                day = 1;
                next_month++;
            }
        }
    } else {
        // increment for rest months, no  need of leap year check..if date exceeds current months days, move to next month..and day = 1
        if (next_day > month_list[next_month - 1]) {
            next_day = 1;
            next_month++;
        }
    }

    if (next_month > 12) {

        // after incrementing date...if the month was incremented after 12..move to next year and month = 1
        next_month = 1;
        year++;
    }

    console.log(next_day,
        next_month,
        next_year)

    return {
        next_day: next_day,
        next_month: next_month,
        next_year: next_year
    }
}


function check_palindrome(date_test_obj_inp) {

    var lsit_of_date_formats = get_all_date_formats(date_test_obj_inp);

    var bool_palindrome_check = false;
    for (let i = 0; i < lsit_of_date_formats.length; i++) {
        if (is_palindrome(lsit_of_date_formats[i])) {
            bool_palindrome_check = true;
            break;
        }
    }

    console.log(bool_palindrome_check);
    return bool_palindrome_check;

}



var date_test = {
    day: 2,
    month: 2,
    year: 2020
};
console.log("next date = ");
get_next_date(date_test);
console.log("end" + "\n");
btn.addEventListener("click", () => check_palindrome(date_test));

// function reverse_string(str) {

//     // console.log(str.split('').reverse().join(''))

//     return str.split('').reverse().join('');


// }

// function string_date(test_date) {

//     var str_date = {
//         day: '',
//         month: '',
//         year: ''
//     }

//     if (test_date.day < 10) {
//         str_date.day = '0' + test_date.day;
//     } else {
//         str_date.day = test_date.day.toString();
//     }

//     if (test_date.month < 10) {
//         str_date.month = '0' + test_date.month;
//     } else {
//         str_date.month = test_date.month.toString();
//     }

//     str_date.year = test_date.year.toString();
//     console.log(str_date)
//     return str_date;
// }

// function is_palindrome(test_date_1) {

//     var rev_date = string_date(test_date_1);

//     return rev_date === str_date_test;
//     console.log(rev_date)
// }


// function date_formatting(test_date_3) {
//     var str_date = string_date(test_date_3);

//     var ddmmyyyy = str_date.day + str_date.month + str_date.year;
//     var mmddyyyy = str_date.month + str_date.day + str_date.year;
//     var yyyyddmm = str_date.year + str_date.day + str_date.month;
//     var ddmmyy = str_date.day + str_date.month + str_date.year.slice(-2);
//     var mmddyy = str_date.month + str_date.day + str_date.year.slice(-2);
//     var yyddmm = str_date.year.slice(-2) + str_date.day + str_date.month;

//     // console.log(ddmmyyyy, mmddyyyy, yyyyddmm, ddmmyy, mmddyy, yyddmm);

//     return [ddmmyyyy, mmddyyyy, yyyyddmm, ddmmyy, mmddyy, yyddmm];
// }

// function check_all_formats(test_date_4) {

//     var date_list = date_formatting(test_date_4);
//     var bool_palindrome = false;

//     for (let i = 0; i < date_list.length; i++) {
//         if (is_palindrome(test_date_4[i])) {
//             bool_palindrome = true;
//             break;
//         }
//     }

//     return bool_palindrome;
// }