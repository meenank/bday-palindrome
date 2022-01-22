const date_inp = document.querySelector(".date-input");
const btn = document.querySelector("button");
const res_para = document.querySelector(".result");

const success_text = "yes";

const next_text = "next"

function checkWiring() {

    console.log(date_inp.value);
    console.log("Clicked");
    res_para.innerHTML = date_inp.value;
    // console.log(typeof(date_inp));
}

function rev_date_str(date_str_inp) {

    return date_str_inp.split('').reverse().join('');

}

function is_palindrome(pal_date_str) {

    return pal_date_str === rev_date_str(pal_date_str);
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
    console.log(str_date);
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
    console.log("checking palindrome for next date");
    var lsit_of_date_formats = get_all_date_formats(date_test_obj_inp);
    console.log("got all date formats");
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

function is_leap_year(test_year) {

    if (test_year % 400 === 0) {
        if (test_year % 4 === 0 && test_year % 100 != 0) {
            return true;
        }
    }
    return false;

}

function get_next_date(date_obj_inp_test) {

    var day = date_obj_inp_test.day + 1;
    var month = date_obj_inp_test.month;
    var year = date_obj_inp_test.year;

    var month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // list of no of days in 12 months for non leap year

    if (month === 2) {

        //if month = feb, check for leap or not
        if (is_leap_year(year)) {
            // is a leap year..so in leap feb if date crosses 29..move to next month
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            //not a leap year..so if date crosses 28..move to next month
            if (day > month_list[month - 1] /* basically 28 but wanted to use the list anyway*/ ) {
                day = 1;
                month++;
            }
        }
    } else {
        // increment for rest months, no  need of leap year check..if date exceeds current months days, move to next month..and day = 1
        if (day > month_list[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {

        // after incrementing date...if the month was incremented after 12..move to next year and month = 1
        month = 1;
        year++;
    }

    console.log(day,
        month,
        year)

    return {
        day: day,
        month: month,
        year: year
    }
}



function get_next_palindrome_date(cur_inp_date) {

    var days_count = 0;
    //get next date from above declared function
    var next_date = get_next_date(cur_inp_date);
    // console.log("returned ", next_date);
    //now check for the further dates for a palindrome with an infinite while loop and if found one break
    while (1) {

        days_count++; // increment no of days
        // console.log("called");
        var is_palindrome = check_palindrome(next_date);
        if (is_palindrome) // runs if given next date is a palindrome using check palindrome function
        {
            break;
        } else {
            next_date = get_next_date(next_date);
        }
    }
    console.log("days : ", days_count, "date : ", next_date);
    return [days_count, next_date]
}


function click_handler(date_obj) {

    var date_obj = date_inp.value;
    // console.log(date_obj);

    var date_parts = date_obj.split("-");
    // console.log(date_parts);

    var user_date_input = {
        day: Number(date_parts[2]),
        month: Number(date_parts[1]),
        year: Number(date_parts[0])
    };
    // console.log(user_date_input)

    if (check_palindrome(user_date_input)) {
        console.log("yes")
        res_para.innerHTML = success_text;

    } else {
        console.log("no")
        var next_date_list = get_next_palindrome_date(user_date_input);
        console.log("next date : " + next_date_list);
        res_para.innerHTML = "missed by " + next_date_list[0] + " days, next date : " + next_date_list[1].day + "-" + next_date_list[1].month + "-" + next_date_list[1].year;
    }
}



// var date_test = {
//     day: 1,
//     month: 2,
//     year: 2020
// }; // test date object

// console.log("next date = ");
// get_next_date(date_test);
// console.log("end" + "\n");

// get_next_palindrome_date(date_test);

btn.addEventListener("click", click_handler); // call to check palindrome on entered date after the button is clicked