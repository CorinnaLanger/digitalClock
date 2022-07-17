let wochenTag = [
    (sunDay ={
        germFullName: "Sonntag",
        englShortName: "Sun"
    }),
    (monDay ={
        germFullName: "Montag",
        englShortName: "Mon"
    }),
    (tuesDay ={
        germFullName: "Dienstag",
        englShortName: "Tue"
    }),
    (wednesDay ={
        germFullName: "Mittwoch",
        englShortName: "Wed"
    }),
    (thursDay ={
        germFullName: "Donnerstag",
        englShortName: "Thu"
    }),
    (fridDay ={
        germFullName: "Freitag",
        englShortName: "Fri"
    }),
    (saturDay ={
        germFullName: "Samstag",
        englShortName: "Sat"
    }),
];

let date = new Date();

let weekDay = document.querySelector('#weekday');
let Hour = document.querySelector('#hour');
let Minute = document.querySelector('#minute');
let Seconds = document.querySelector('#second');
let Period = document.querySelector('#period');

weekDay.innerText = wochenTag[date.getDay()].englShortName;

if(date.getHours() < 10) {
    Hour.innerText = `0${date.getHours()}`;
}else {
    Hour.innerText = date.getHours();
}

if(date.getMinutes() < 10) {
    Minute.innerText = `0${date.getMinutes()}`;
}else {
    Minute.innerText = date.getMinutes();
}

if(date.getSeconds() < 10){
    Seconds.innerText = `0${date.getSeconds()}`;
}else {
Seconds.innerText = date.getSeconds();
}

if(date.getHours() >=12) {
    Period.innerText = 'PM';
}else {
    Period.innerText = 'AM';
}