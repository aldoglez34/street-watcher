$(document).ready(function () {

    var report = {
        plate: "",
        owner: "",
        description: "",
        value: ""
    };

    getInfractions();

    // ! getting the infractions from the db
    function getInfractions() {

        $.get("/api/infractions", function (data) {

            var infractions = [];

            console.log(data);

            for (var i = 0; i < data.length; i++) {

                infractions.push(data[i]);
                $("#infractions-tab").append("<div class='list-group-item list-group-item-action infractionItem' data-toggle='list' value='" + data[i].value + "' description='" + data[i].description + "'>" + data[i].description + "</div>");
            }

            // whenever an infraction is clicked
            $(".infractionItem").click(function () {

                report.description = $(this).attr("description");
                report.value = $(this).attr("value");

            });
        });
    }

    // ! pressing report button
    $("#reportbttn").click(function () {

        report.plate = $.trim($("#licenseplate").val());

        // first validation: checking if the fields aren't empty
        if (report.plate != "" && report.description != "") {

            // second validation: checking if the given plate actually exists in the database
            $.get("/api/plates/" + report.plate, function (data) {

                // if exists, then continue adding the new report
                if (data) {

                    // first, add the owner name on the report object
                    report.owner = data.owner;

                    // now that the report object is complete, make a post call to add it to the reports table
                    $.post("/api/newreport", report, function () {

                        // then update points on the plates table
                        $.ajax("/api/points/" + report.plate, {

                            data: {
                                puntosarestar: report.value,
                                puntosactuales: data.points
                            },
                            method: "PUT",
                            dataType: "json"

                        }).done(function (res) {
                            // console.log(res);
                            alert("Your report was successfully posted.");
                            // finally go to main page
                            window.location.href = "/";
                        });

                    });

                }
                // if it doesn't exist, notificate the user
                else {
                    alert("Please enter a valid License Plate.");
                }
            });
        }
        else {

            alert("Please enter a License Plate and select an Infraction from the list.")
        }
    });

});