//Wait to attach our handlers until the DOM is fully loaded.
function isEmpty(str){
    return !str.replace(/^\s+/g, '').length; 
}
$(function() {

  $(".create-form").on("submit", function(event) {
    var burger_name =  $("[name=burger_name]").val().trim();
    console.log(burger_name);
    if(isEmpty(burger_name)){
        $('.warning').show();
        $('.is-danger').show();
    }else{
        $('.warning').hide();
        $('.is-danger').hide();
        var newBurguer = {
            burger_name: burger_name
        };
    }

    event.preventDefault();

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurguer
    }).then(
      function() {
        console.log("created new Burger");

        location.reload(); 
      }
    );
  });

  $(".devourit").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devourit");

      event.preventDefault();

      var devouredState = {
          devoured: devoured
      };

      
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(
          function() {
              console.log("Burger devoured", devoured);
              location.reload();
          }
      );
    });
});