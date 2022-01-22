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
}

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