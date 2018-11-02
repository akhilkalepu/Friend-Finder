$(document).ready(function() {
        $("#submitBtn").on("click", function (event) {
            event.preventDefault();
            
            var newUser = {
                name: $("#inputName").val().trim(),
                photo: $("#inputPhoto").val().trim(),
                scores: [
                    $("#answer1").val(),
                    $("#answer2").val(),
                    $("#answer3").val(),
                    $("#answer4").val(),
                    $("#answer5").val(),
                    $("#answer6").val(),
                    $("#answer7").val(),
                    $("#answer8").val(),
                    $("#answer9").val(),
                    $("#answer10").val()
                ]
            };
            var currentURL = window.location.origin;

            $.post(currentURL + "/api/friends", newUser, function (data) {
                $("#bestFriendName").text(data.name);
                $("#bestFriendImg").attr("src", data.photo);
                $("#bestFriendModal").modal("toggle");
            });
                
        });
    });