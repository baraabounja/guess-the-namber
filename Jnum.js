
$(function () { 
    console.log("helloooo");

    let x = Math.floor((Math.random() * 100) + 1);
    console.log(x)
    $(".pScore").val(10)
    $(".btnOne").click(function () {
        let scoreVal = $(".pScore").val() ;

        $(".answer").empty();
        let bilgi =$("#in").val() ;
         $(".answer").append(bilgi) ;

       //  console.log(y)
       $("#in").val("");

        if ( x == $(".answer").text()) {
            //$(".pScore").val() =10
        //   var y =  $(".pScore").val();
        //   y = 10;
        scoreVal = +scoreVal +5;

        $(".pScore").val(scoreVal) ; //**************/
            


        }else{
            let scoreVal = $(".pScore").val() ;
            scoreVal = +scoreVal -5;
            $(".pScore").val(scoreVal) ;
        }
        if ($(".answer").text() > x) { //burada neden text() neden val() değil ??? 
            $(".karakter").val("girdiğiniz numara tahmini numaradan büyük")
           }else if ($(".answer").text() < x) {
            $(".karakter").val("girdiğiniz numara tahmini numaradan küçük")

           }
           else{
            $(".karakter").val("Tebrikler tahmini numarayı yakaladınız!!").css("color","#bf2727")

       }
       if (scoreVal > 20) {
        $(".lablR").text("Result :")
        $(".pResult").val("kazandınnn") 
    }else if (scoreVal < -10) {
        $(".lablR").text("Result :")
        $(".pResult").val("kaybettin") 

    }   
    })
    $(".btnhead").click(function () {
        $(".answer").text("") //neden val olmadıkiiii
        $("#in").val("")
        $(".pScore").val("")
        $(".pResult").val("")
        $(".lablR").text("")
        $(".karakter").val("")

    })
});

// let Result = $(".pResult").val() ;
// Result = +Result -5;
// $(".pResult").val(Result) ;