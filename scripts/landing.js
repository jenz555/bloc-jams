//This is the correct code
       
   var animatePoints = function animatePoints() {
     
     var points = document.getElementsByClassName("point");
    
     var revealPoint = function revealPoint(index) {
            points[index].style.opacity = 1;
            points[index].style.transform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";                     
            points[index].style.WebkitTransform = "scaleX(1) translateY(0)";  
          };
     
     for (var i = 0; i < points.length; i++){
        revealPoint(i)
     }
     
   };   

//This is  my code - wonky
//var points = document.getElementsByClassName("point");
//  
//       var looping = function looping() {
//          
//          for (var i = 0; i < points.length; i++) {
//          var el = points[i];
//          
//          var revealPoint = function revealPoint() {
//            el.style.opacity = 1;
//            el.style.transform = "scaleX(1) translateY(0)";
//            el.style.msTransform = "scaleX(1) translateY(0)";                     
//            el.style.WebkitTransform = "scaleX(1) translateY(0)";  
//          };
//  
//           revealPoint(); 
//         }
//           
//} 
      

//var animatePoints = function animatePoints() {
// 
//                 var points = document.getElementsByClassName('point');
//
//               
//                 var note = document.getElementsByClassName('ion-music-note');
//                 var waves = document.getElementsByClassName('ion-radio-waves');
//                 var iphone = document.getElementsByClassName('ion-iphone');
// 
//                 var revealFirstPoint = function() {
//                     points[0].style.opacity = 1;
//                     points[0].style.WebkitTransitionDelay = ".3s"; 
//                     points[0].style.msTransitionDelay = ".3s";
//                     points[0].style.transform = "scaleX(1) translateY(0)";
//                     points[0].style.msTransform = "scaleX(1) translateY(0)";                     
//                     points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
//                     
//                 };
// 
//                 var revealSecondPoint = function() {
//                     points[1].style.opacity = 1;
//                     points[1].style.WebkitTransitionDelay = ".6s";
//                     points[1].style.msTransitionDelay = ".6s"; 
//                     points[1].style.transform = "scaleX(1) translateY(0)";
//                     points[1].style.msTransform = "scaleX(1) translateY(0)";
//                     points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
//                 };
// 
//                 var revealThirdPoint = function() {
//                     points[2].style.opacity = 1;
//                     points[2].style.WebkitTransitionDelay = ".9s"; 
//                     points[2].style.msTransitionDelay = ".9s";
//                     points[2].style.transform = "scaleX(1) translateY(0)";
//                     points[2].style.msTransform = "scaleX(1) translateY(0)";
//                     points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
//                 };
//                 
//                 revealFirstPoint();
//                 revealSecondPoint();
//                 revealThirdPoint();
// 
//             };
>>>>>>> assignment-22-DOM-animation
        