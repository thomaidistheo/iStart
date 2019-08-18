// This is used to change the text at the top in order to greet the user in the morning.

var day = new Date();
var hr = day.getHours();
if (hr >= 6 && hr < 12) {
    document.write("Good Morning");
} else {
    document.write("Hello");
}
