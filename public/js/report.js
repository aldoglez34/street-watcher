$(document).ready(function () {

    // ! getting the infractions from the db
    function getInfractions() {

        $.get("/api/infractions", function (data) {

            var infractions = [];

            for (var i = 0; i < data.length; i++) {

                infractions.push(data[i]);
            }

            console.log(infractions);
        });
    }

    getInfractions();

});
