$(document).ready(function () {

    $("#searchcontainer").hide();

    // ! pressing report button
    $("#searchbttn").click(function () {

        plate = $.trim($("#licenseplate").val());

        // first validation: checking if the field isn't empty
        if (plate != "") {

            // second validation: checking if the given plate actually exists in the database
            $.get("/api/plates/" + plate, function (data) {

                // if exists, then continue
                if (data) {

                    $("#searchcontainer").show(500);

                    console.log(data);

                    if (data.points >= 80) {
                        $("#points").removeClass("text-success");
                        $("#points").removeClass("text-danger");
                        $("#points").removeClass("text-warning");
                        $("#points").addClass("text-success");
                    }
                    else if (data.points <= 79 && data.points >= 50) {
                        $("#points").removeClass("text-success");
                        $("#points").removeClass("text-danger");
                        $("#points").removeClass("text-warning");
                        $("#points").addClass("text-warning");
                    }
                    else if (data.points < 49) {
                        $("#points").removeClass("text-success");
                        $("#points").removeClass("text-danger");
                        $("#points").removeClass("text-warning");
                        $("#points").addClass("text-danger");
                    }

                    $("#owner").text(data.owner);
                    $("#plate").text(data.plate);
                    $("#points").text(data.points);

                }
                else {
                    // if it doesn't exist, notificate the user
                    alert("Please enter a valid License Plate.");
                }
            });
        }
        else {
            // means the text box is
            alert("Please enter a License Plate.")
        }
    });

});