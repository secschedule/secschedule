window.onload = function () {
    var dates = document.getElementsByClassName("dateformat");
    for (i = 0; i < dates.length; i++) {
        dtString = dates[i].innerHTML;

        dates[i].innerHTML = Page.getFormattedDate(dtString);
    }
}

var Page = {
    teamSelect: function () {
        var e = document.getElementById("teams");
        var selectedSelect = e.options[e.selectedIndex].value;
        window.location = "/" + selectedSelect;
    },

    getFormattedDate: function (dtString) {
        var dt = new Date(dtString);

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var nameOfDay = days[dt.getDay()];
        var month = months[dt.getMonth()];

        var day = dt.getDate();
        var year = dt.getFullYear();

        return nameOfDay + ' ' + month + ' ' + day + ', ' + year;
    }
}