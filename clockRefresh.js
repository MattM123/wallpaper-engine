var clearOverlay = function() {
     var canvas = document.getElementById("canvas");
     canvas.style.width = sessionStorage.getItem('time-panel-width');
     canvas.style.height = sessionStorage.getItem('time-panel-height') - 10;
     var ctx = canvas.getContext("2d");
     ctx.clearRect(0, 0, canvas.style.width, canvas.style.height);
}

var overlay = function() {
     
     var canvas = document.getElementById("canvas");
     canvas.style.width = sessionStorage.getItem('time-panel-width');
     canvas.style.height = sessionStorage.getItem('time-panel-height') - 10;
     var ctx = canvas.getContext("2d");

     var secondsColor = sessionStorage.getItem('seconds-color');
     var minutesColor = sessionStorage.getItem('minutes-color');
     var hoursColor = sessionStorage.getItem('hours-color');
     var radius = 12;

     var secondSecondX = (document.getElementById("sec").getBoundingClientRect().width / 6) * (13.3);
     var firstSecondX = (document.getElementById("sec").getBoundingClientRect().width / 6) * (11);
     var secondMinuteX = (document.getElementById("min").getBoundingClientRect().width / 6) * (8.7);
     var firstMinuteX = (document.getElementById("min").getBoundingClientRect().width / 6) * (6.4);
     var secondHourX = (document.getElementById("hour").getBoundingClientRect().width / 6) * (3.8);
     var firstHourX = (document.getElementById("hour").getBoundingClientRect().width / 6) * (1.4);

     /*==================================================
     00:00:0X
     ===================================================*/
     if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();

          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();      
          ctx.closePath();    

          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(secondSecondX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
          
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(secondSecondX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
          
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     00:00:X0
     ===================================================*/
     if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
              
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(firstSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();     
          ctx.closePath();     
     
          ctx.clearRect(firstSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(firstSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(firstSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(firstSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
          }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(firstSecondX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(0, 1)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(firstSecondX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(firstSecondX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
               
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(firstSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstSecondX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     00:00:0X
     ===================================================*/
     if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();

          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();      
          ctx.closePath();    

          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;
          ctx.arc(secondSecondX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondSecondX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
          
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(secondSecondX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
          
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('seconds').slice(1, 2)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = secondsColor;  
          ctx.arc(secondSecondX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(secondSecondX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
          
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(secondSecondX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondSecondX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     00:0X:00
     ===================================================*/
     if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
              
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(secondMinuteX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();     
          ctx.closePath();     
     
          ctx.clearRect(secondMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(secondMinuteX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondMinuteX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(secondMinuteX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondMinuteX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(secondMinuteX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;  
          ctx.arc(secondMinuteX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(1, 2)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;  
          ctx.arc(secondMinuteX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(secondMinuteX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
               
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(secondMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondMinuteX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     00:X0:00
     ===================================================*/
     if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
              
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(firstMinuteX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();     
          ctx.closePath();     
     
          ctx.clearRect(firstMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(firstMinuteX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstMinuteX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;
          ctx.arc(firstMinuteX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstMinuteX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(firstMinuteX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;  
          ctx.arc(firstMinuteX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('minutes').slice(0, 1)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = minutesColor;  
          ctx.arc(firstMinuteX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(firstMinuteX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
               
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(firstMinuteX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstMinuteX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     0X:00:00
     ===================================================*/
     if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
              
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(secondHourX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();     
          ctx.closePath();     
     
          ctx.clearRect(secondHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(secondHourX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondHourX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(secondHourX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(secondHourX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(secondHourX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;  
          ctx.arc(secondHourX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(1, 2)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;  
          ctx.arc(secondHourX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(secondHourX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
               
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(secondHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(secondHourX - 13, 15 - radius, 28, 28);
     }

     /*==================================================
     X0:00:00
     ===================================================*/
     if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 1) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 135, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
              
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 2) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 3) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 135, 12, 0, 2 * Math.PI);    
          ctx.arc(firstHourX, 95, 12, 0, 2 * Math.PI); 
          ctx.fill();    
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 4) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 55, 12, 0, 2 * Math.PI);    
          ctx.fill();     
          ctx.closePath();     
     
          ctx.clearRect(firstHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 5) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 55, 12, 0, 2 * Math.PI);   
          ctx.arc(firstHourX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 6) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstHourX, 55, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 7) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;
          ctx.arc(firstHourX, 95, 12, 0, 2 * Math.PI);   
          ctx.arc(firstHourX, 55, 12, 0, 2 * Math.PI);  
          ctx.arc(firstHourX, 135, 12, 0, 2 * Math.PI);  
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 8) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;  
          ctx.arc(firstHourX, 15, 12, 0, 2 * Math.PI);   
          ctx.fill();   
          ctx.closePath();
               
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 135 - radius, 28, 28);
     }
     else if (parseInt(sessionStorage.getItem('hours').slice(0, 1)) == 9) {
          ctx.beginPath();
          ctx.fillStyle = hoursColor;  
          ctx.arc(firstHourX, 15, 12, 0, 2 * Math.PI);  
          ctx.arc(firstHourX, 135, 12, 0, 2 * Math.PI);   
          ctx.fill();  
          ctx.closePath(); 
               
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
     }
     else {
          ctx.clearRect(firstHourX - 13, 135 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 95 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 55 - radius, 28, 28);
          ctx.clearRect(firstHourX - 13, 15 - radius, 28, 28);
     }
     
}

function refreshTime() {
     //Stores time for use in binary clock
     var date = new Date();
     const result = date.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
     })
     const timeArr = result.split(":");
     var h = timeArr[0];
     var m = timeArr[1];
     var s = timeArr[2].slice(0,2);

     var refresh = 1000;
     time = setTimeout('clock()', refresh);
     time = setTimeout('overlay()', refresh);
     
     sessionStorage.setItem('seconds', s);
     sessionStorage.setItem('minutes', m);
     sessionStorage.setItem('hours', h);
}
function clock() {
     //Used to update clock
     var date = new Date();
     const result = date.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
     const timeArr = result.split(":");
     var h = timeArr[0];
     var m = timeArr[1];
     var s = timeArr[2].slice(0,2);

     //12 hour format
     if (sessionStorage.getItem("clockFormat") == 12) { 
          if (date.getHours() % 12 == 0) {
               h = 12;
          }
          else {
               h = date.getHours() % 12;    
               if (h < 10) {
                    h = ("0" + h).slice (-2);
               }
          }
     }
     //24 hour format 
     else {
          if (date.getHours() == 0) {
               h = 12;
             }
             else {
               h = date.getHours();
               if (h < 10) {
                 h = ("0" + h).slice (-2);
               }
             }
     }
   
     document.getElementById("hour").innerText = h;
     document.getElementById("min").innerText = m;
     document.getElementById("sec").innerText = s;
     refreshTime();
   }

