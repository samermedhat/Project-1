
$(".nav .fa-bars").click(function(){

$(".nav .fa-times").css('display',"block")
$(".nav .fa-bars").css('display',"none")

$(".nav ul").fadeIn()

$(".nav ul").animate({

marginLeft: '65px'

},500);

});

$(".nav .fa-times").click(function(){

$(".nav .fa-bars").css('display',"block")
$(".nav .fa-times").css('display',"none")

$(".nav ul").animate({

marginLeft: '100%'

},500);

$(".nav ul").fadeOut()    

});



setInterval(function(){
    
    if($(".header .slide1").hasClass('active'))
        {
            $(".header .slide1").removeClass('active')
            $(".header .slide2").addClass('active')
        }
        else if($(".header .slide2").hasClass('active'))
        {
            $(".header .slide2").removeClass('active')
            $(".header .slide1").addClass('active')
        }
    
    
},5000);

$(".header .controls .fa-chevron-left").click(function(){
    
        if($(".header .slide1").hasClass('active'))
        {
            $(".header .slide1").removeClass('active')
            $(".header .slide2").addClass('active')
        }
        else if($(".header .slide2").hasClass('active'))
        {
            $(".header .slide2").removeClass('active')
            $(".header .slide1").addClass('active')
        }
    
})
$(".header .controls .fa-chevron-right").click(function(){
    
        if($(".header .slide1").hasClass('active'))
        {
            $(".header .slide1").removeClass('active')
            $(".header .slide2").addClass('active')
        }
        else if($(".header .slide2").hasClass('active'))
        {
            $(".header .slide2").removeClass('active')
            $(".header .slide1").addClass('active')
        }
    
})

$(".header").mouseenter(function(){
   
    $(".header .controls").fadeIn()
    
});
$(".header").mouseleave(function(){
   
    $(".header .controls").fadeOut()
    
});




$(".title1").click(function(){
    
    $(".info1").slideDown()
    
    $(".info2 , .info3").slideUp()
    
});

$(".title2").click(function(){
    
    $(".info2").slideDown()
    
    $(".info1 , .info3").slideUp()
    
});

$(".title3").click(function(){
    
    $(".info3").slideDown()
    
    $(".info2 , .info1").slideUp()
    
});



var projects = document.getElementById('projects');
var clients = document.getElementById('clients');
var staff = document.getElementById('staff');
var drivers = document.getElementById('drivers');
var body = document.getElementById('body');


window.onscroll = function(){
    
    if( body.scrollTop > 1700 )
        {
          
       
setInterval(function(){
    
    if(projects.textContent < 345)
        {
         projects.textContent = parseInt(projects.textContent) + 6   
        }
    if(clients.textContent < 2478)
        {
         clients.textContent = parseInt(clients.textContent) + 66 
        }
       if(staff.textContent < 413)
        {
         staff.textContent = parseInt(staff.textContent) + 8   
        }
         if(drivers.textContent < 4078)
        {
         drivers.textContent = parseInt(drivers.textContent) + 106   
        }
    
    
},100);    
            
        }
    
    
}







$(".services .grid .ser1").mouseenter(function(){
   
    $(".services .grid .ser1 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser1").mouseleave(function(){
   
    $(".services .grid .ser1 section").animate({
        
        top: "100%"
        
    },600);
    
});

$(".services .grid .ser2").mouseenter(function(){
   
    $(".services .grid .ser2 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser2").mouseleave(function(){
   
    $(".services .grid .ser2 section").animate({
        
        top: "100%"
        
    },600);
    
});

$(".services .grid .ser3").mouseenter(function(){
   
    $(".services .grid .ser3 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser3").mouseleave(function(){
   
    $(".services .grid .ser3 section").animate({
        
        top: "100%"
        
    },600);
    
});

$(".services .grid .ser4").mouseenter(function(){
   
    $(".services .grid .ser4 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser4").mouseleave(function(){
   
    $(".services .grid .ser4 section").animate({
        
        top: "100%"
        
    },600);
    
});

$(".services .grid .ser5").mouseenter(function(){
   
    $(".services .grid .ser5 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser5").mouseleave(function(){
   
    $(".services .grid .ser5 section").animate({
        
        top: "100%"
        
    },600);
    
});

$(".services .grid .ser6").mouseenter(function(){
   
    $(".services .grid .ser6 section").animate({
        
        top: "0%"
        
    },600);
    
});

$(".services .grid .ser6").mouseleave(function(){
   
    $(".services .grid .ser6 section").animate({
        
        top: "100%"
        
    },600);
    
});


















$(".img1").mouseenter(function(){
    
   $(".img1 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img1").mouseleave(function(){
    
   $(".img1 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".img2").mouseenter(function(){
    
   $(".img2 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img2").mouseleave(function(){
    
   $(".img2 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".img3").mouseenter(function(){
    
   $(".img3 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img3").mouseleave(function(){
    
   $(".img3 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".img4").mouseenter(function(){
    
   $(".img4 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img4").mouseleave(function(){
    
   $(".img4 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".img5").mouseenter(function(){
    
   $(".img5 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img5").mouseleave(function(){
    
   $(".img5 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".img6").mouseenter(function(){
    
   $(".img6 section").animate({
       
       top: '0%'
       
   },600);
    
});

$(".img6").mouseleave(function(){
    
   $(".img6 section").animate({
       
       top: '100%'
       
   },600);
    
});

$(".buttons button:nth-of-type(1)").click(function(){
    
$(this).addClass('active3')  

$(this).siblings().removeClass('active3')

$('.projects2').css('opacity','0')

setTimeout(function(){
    
$(".building, .consulting, .interior, .office").removeClass('active2')
$(".all").addClass('active2') 
    
},600);

setTimeout(function(){
    
$('.projects2').css('opacity','1')
    
},700);

});

$(".buttons button:nth-of-type(2)").click(function(){
    
$(this).addClass('active3')  
$(this).siblings().removeClass('active3')    

$('.projects2').css('opacity','0')

setTimeout(function(){
    
$(".all, .consulting, .interior, .office").removeClass('active2') 
$(".building").addClass('active2') 
    
},600);

setTimeout(function(){
    
$('.projects2').css('opacity','1')
    
},700);

});

$(".buttons button:nth-of-type(3)").click(function(){
    
$(this).addClass('active3')  

$(this).siblings().removeClass('active3')    
      
$('.projects2').css('opacity','0')

setTimeout(function(){
    
$(".building, .all, .interior, .office").removeClass('active2') 
$(".consulting").addClass('active2')
    
},600);

setTimeout(function(){
    
$('.projects2').css('opacity','1')
    
},700);

});

$(".buttons button:nth-of-type(4)").click(function(){
    
$(this).addClass('active3')  

$(this).siblings().removeClass('active3')    
    
$('.projects2').css('opacity','0')

setTimeout(function(){
    
$(".all, .consulting, .building, .office").removeClass('active2') 
$(".interior").addClass('active2')
    
},600);

setTimeout(function(){
    
$('.projects2').css('opacity','1')
    
},700);

});

$(".buttons button:nth-of-type(5)").click(function(){
    
$(this).addClass('active3')  

$(this).siblings().removeClass('active3')    
 
$('.projects2').css('opacity','0')

setTimeout(function(){
    
$(".all, .consulting, .interior, .building").removeClass('active2') 
$(".office").addClass('active2')
    
},600);

setTimeout(function(){
    
$('.projects2').css('opacity','1')
    
},700);

});










setInterval(function(){
    
if($(".quote1").hasClass('active5'))
{


$(".quote2").css('left','0%')
$('.quote2').css('z-index','0')
$('.quote1').css('z-index','1')    
    
$('.quote1').removeClass('active5')        

$(".quote1").animate({

left: '100%'

},1000);    

$('.quote2').addClass('active5')         

}

else if($(".quote2").hasClass('active5'))
{


$(".quote3").css('left','0%')
$('.quote3').css('z-index','0')
$('.quote2').css('z-index','1')    
    
$('.quote2').removeClass('active5')      

$(".quote2").animate({

left: '100%'

},1000);    

$('.quote3').addClass('active5')      

}

else if($(".quote3").hasClass('active5'))
{

$(".quote1").css('left','0%')
$('.quote1').css('z-index','0')
$('.quote3').css('z-index','1')
    
$('.quote3').removeClass('active5')      

$(".quote3").animate({

left: '-100%'

},1000);    

$('.quote1').addClass('active5')      

}
    
    
},5000);

$(".next").click(function(){
  
if($(".quote1").hasClass('active5'))
{


$(".quote2").css('left','0%')
$('.quote2').css('z-index','0')
$('.quote1').css('z-index','1')    
    
$('.quote1').removeClass('active5')        

$(".quote1").animate({

left: '100%'

},1000);    

$('.quote2').addClass('active5')         

}

else if($(".quote2").hasClass('active5'))
{


$(".quote3").css('left','0%')
$('.quote3').css('z-index','0')
$('.quote2').css('z-index','1')    
    
$('.quote2').removeClass('active5')      

$(".quote2").animate({

left: '100%'

},1000);    

$('.quote3').addClass('active5')      

}

else if($(".quote3").hasClass('active5'))
{

$(".quote1").css('left','0%')
$('.quote1').css('z-index','0')
$('.quote3').css('z-index','1')
    
$('.quote3').removeClass('active5')      

$(".quote3").animate({

left: '-100%'

},1000);    

$('.quote1').addClass('active5')      

}
    
});

$(".back").click(function(){
  
if($(".quote1").hasClass('active5'))
{


$(".quote3").css('left','0%')
$('.quote3').css('z-index','0')
$('.quote2').css('z-index','-1')
$('.quote1').css('z-index','1')    
    
$('.quote1').removeClass('active5')        

$(".quote1").animate({

left: '-100%'

},1000);    

$('.quote3').addClass('active5')         

}

else if($(".quote2").hasClass('active5'))
{

$(".quote1").css('left','0%')
$('.quote1').css('z-index','0')
$('.quote3').css('z-index','-1')
$('.quote2').css('z-index','1')    
    
$('.quote2').removeClass('active5')      

$(".quote2").animate({

left: '-100%'

},1000);    

$('.quote1').addClass('active5')      

}

else if($(".quote3").hasClass('active5'))
{

$(".quote2").css('left','0%')
$('.quote2').css('z-index','0')
$('.quote1').css('z-index','-1')
$('.quote3').css('z-index','1')
    
$('.quote3').removeClass('active5')      

$(".quote3").animate({

left: '-100%'

},1000);    

$('.quote2').addClass('active5')      

}
    
});

$(".testimonial").mouseenter(function(){
    
$(".testimonial .controls i:nth-of-type(1)").animate({
       
       left: '0%'
       
},700);
    
$(".testimonial .controls i:nth-of-type(2)").animate({
       
       right: '0%'
        
},700);
    
});

$(".testimonial").mouseleave(function(){
    
$(".testimonial .controls i:nth-of-type(1)").animate({
       
       left: '-100%'
       
},700);
    
$(".testimonial .controls i:nth-of-type(2)").animate({
       
       right: '-100%'
        
},700);
    
    
});























