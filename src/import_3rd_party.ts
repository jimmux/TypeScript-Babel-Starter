// This works, but makes bundles that are too big when using many entry points.
// Nice that webpack warns us when this happens.
import moment from "moment";

const today = document.getElementById("today");

console.debug(moment().format());

if (today instanceof HTMLElement) {
    today.innerHTML = `Today is ${moment().format('dddd, MMMM Do YYYY')}, and the time is ${moment().format('h:mm A')}.`;
} 
