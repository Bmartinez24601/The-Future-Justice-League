$("button").one("click", (function() {
    var numTyped = $(".theYear").val();
    var numOfYears = numTyped-2019;
    $(".p").append("In "+ numOfYears +" years, ");
     var heroName = $(".theHero").val();
    $(".p").append(heroName +" will be killed by ");
    var villainName = $(".theVillain").val();
    $(".p").append(villainName+".");
    $(".surprise").text("or wil he/she???😉 ");
}));










$("button").click(function() {
    var age= $(".age").val();
    var age2= age+3;
    $("p").append(age2);
});








