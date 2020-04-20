
$(function(){
    // Devoured Button Function
    $(".eat-burger").on("click", function (event){
        event.preventDefault();

        let burgerId = $(this).data("id");
        let ifDevoured = $(this).data("ifdevoured");

        let ifEaten = {
            devoured: ifDevoured
        };
        $.ajax("/api/burgers/" + burgerId, {
            type: "PUT",
            data: ifEaten
        }).then(function(){
            location.reload();
            console.log("More Please")
        })
    });
    //Delete a Burger
    $(".remove-burger").on("click", function(event){
        event.preventDefault();
        let burgerId = $(this).data("id");
        $.ajax("/api/burgers/" + burgerId, {
            type: "DELETE"
        }).then(function(){
            location.reload();
            console.log("Bye Bye Burger")
        })
    });

    //Create a Burger
    $(".burger-form").on("submit", function(event){
        event.preventDefault();
        let createdBurger = {
            burger_name: $("#daNewBurger").val().trim(),
            devoured: 0
        }
        console.log(createdBurger)
        $.ajax("/api/burgers/", {
            type: "POST", 
            data: createdBurger
        }).then(function(){
            location.reload();
            console.log("Ya got a new buger to eat")

        })
    });


});