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

                console.log(report);
            });
        });
    }

    // ! pressing report button
    $("#reportbttn").click(function () {

        report.licenseplate = $.trim($("#licenseplate").val());

        // validation
        if (report.licenseplate != "" && report.description != "") {

            console.log(report);

            $.get("/api/plates/" + report.licenseplate, function (data) {

                if (!data) {

                    alert("Please enter a valid License Plate.");
                }
                else {

                    console.log("get a las placas: ");
                    console.log(data);

                    // comment

                }

            });

        }
        else {

            alert("Please enter a License Plate and select an Infraction from the list.")
        }
    });

});