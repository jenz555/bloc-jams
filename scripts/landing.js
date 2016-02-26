var pointsArray = document.getElementsByClassName('point'); 

var revealPoint = function(point){  
         point.style.opacity = 1;
         point.style.transform = "scaleX(1) translateY(0)";
         point.style.msTransform = "scaleX(1) translateY(0)";
         point.style.WebkitTransform = "scaleX(1) translateY(0)";
         
    }

var animatePoints = function(points) {  
    forEach(points, revealPoint)    
}
//I don't see where points is referenced...I know it's an array but where are we defining it - I only see pointsArray? Shouldn't pointsArray be passed in as an argument in the forEach within animatePoints - not points? 

window.onload = function (){
  
  if (window.innerHeight > 950 ) {
    animatePoints(pointsArray);
  }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event){
   
    if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);  
      
    }
    
  });
}