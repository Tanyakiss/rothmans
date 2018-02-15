$(document).ready(function(){

    $(".btn").click(function () {
        $(".animate").css({'top':' -580px'});
    });

    $(".btn-change").click(function () {
        $(".stick").css({'top':' -7570px'});
    });
    
    $(".open").click(function () {
        $(".blue-silver-animate").css({'margin-top':' -5020px'});
        $(".silver-blue-animate").css({'margin-top':' -5000px'});
    });
    
     $( "#slider" ).slider({
          value : 0,//Значение, которое будет выставлено слайдеру при загрузке
          min : 0,//Минимально возможное значение на ползунке
          max : 1,//Максимально возможное значение на ползунке
          step : 1,//Шаг, с которым будет двигаться ползунок
          sliderVal : 0,
          create: function( event, ui ) {
           val = $( "#slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
           sliderVal = val;
          $( "#contentSlider" ).html( val );//Заполняем этим значением элемент с id contentSlider
         },
         slide: function( event, ui ) {
          $( "#contentSlider" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
             sliderVal =  ui.value ;
             
             if ( sliderVal == 1){
                 $(".silver-blue").css({'display':'block'});
                     $(".blue-silver").css({'display':'none'});
                    } else if (sliderVal ==0){
                         $(".blue-silver").css({'display':'block'});
                            $(".silver-blue").css({'display':'none'});
                    }
                            },
         
        });
     
});

 