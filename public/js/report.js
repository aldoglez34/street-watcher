$(document).ready(function () {

    var report = {
        description: "",
        licenseplate: "",
        value: ""
    };

    getInfractions();

    // ! getting the infractions from the db
    function getInfractions() {

        $.get("/api/infractions", function (data) {

            var infractions = [];

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

        report.licenseplate = $.trim($("#licenseplate").val());

        // validation
        if (report.licenseplate != "" && report.description != "") {

            // getting the plate info from the plates table
            $.get("/api/plates/" + report.licenseplate, function (data) {

                if (data) {

                    console.log(report);

                    // updating points
                    $.ajax("/api/points/" + report.licenseplate, {

                        data: {
                            puntosarestar: report.value,
                            puntosactuales: data.points
                        },
                        method: "PUT",
                        dataType: "json"

                    }).done(function (res) {

                        console.log(res);
                        alert("Your report was successfully posted.");
                    });
                }
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