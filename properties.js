
window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {

    //====================================
    //User Defined Background Image
    //====================================
    if (properties.backgroundimage) {
      //if an image file is uploaded
      var imagePath = "file:///" + properties.backgroundimage.value;

      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = "url('" + imagePath + "')";

      //if image path is empty
      if (imagePath == "file:///") {
        document.body.style.backgroundImage = "url('default.jpg')";
      }  
    }

    //====================================
    //Clock Visibility
    //====================================
    if (properties.clockvisibility) {
      var checkVal = properties.clockvisibility.value;
      if (checkVal == true) {
        document.getElementById("time-panel").style.visibility = "visible";
        document.getElementById("time-panel").style.width = (document.body.clientWidth / 5) + "px";
        document.getElementById("time-panel").style.height = (document.body.clientWidth / 5) - (document.body.clientWidth / 5 / 5) + "px";
      
        document.getElementById("hour").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
        document.getElementById("min").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
        document.getElementById("sec").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
  
        sessionStorage.setItem('time-panel-width', document.getElementById("time-panel").style.width);
        sessionStorage.setItem('time-panel-height', document.getElementById("time-panel").style.height);
  
        document.getElementById("hour").style.letterSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
        document.getElementById("min").style.letterSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
        document.getElementById("sec").style.letterSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
    
        //setting up canvas
        document.getElementById("canvas").style.width = document.getElementById("time-panel").style.width;
      }
      else {
        document.getElementById("time-panel").style.visibility = "hidden";
      }
    }

    //====================================
    //Clock Format
    //====================================
    if (properties.clockformat) {
      var val = properties.clockformat.value;
      sessionStorage.setItem("clockFormat", val);
      
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
      if (val == 12) {
        if (date.getHours() % 12 == 0) {
          h = 12;
        }
        else {
          h = date.getHours() % 12;
          if (h < 10) {
            h = ("0" + h).slice (-2);
          }
        }
           
        document.getElementById("hour").innerText =  h;
        document.getElementById("min").innerText = m; 
        document.getElementById("sec").innerText = s;
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
        
      document.getElementById("hour").innerText =  h;
      document.getElementById("min").innerText = m; 
      document.getElementById("sec").innerText = s;

    }

    //====================================
    //Clock Seconds Color
    //====================================
    if (properties.secondscolor) {
      clearOverlay();

      // Convert the custom color to 0 - 255 range for CSS usage
      var customColor = properties.secondscolor.value.split(' ');
      customColor = customColor.map(function(c) {
        return Math.ceil(c * 255);
      });
      var color = 'rgb(' + customColor + ')'; 
      sessionStorage.setItem('seconds-color', color);
      
      document.getElementById("sec").style.color = color;
    }

    //====================================
    //Clock Minutes Color
    //====================================
    if (properties.minutescolor) {
      clearOverlay();

      // Convert the custom color to 0 - 255 range for CSS usage
      var customColor = properties.minutescolor.value.split(' ');
      customColor = customColor.map(function(c) {
        return Math.ceil(c * 255);
      });
      var color = 'rgb(' + customColor + ')'; 
      sessionStorage.setItem('minutes-color', color);
      
      document.getElementById("min").style.color = color;
    }

    //====================================
    //Clock Hours Color
    //====================================
    if (properties.hourscolor) {
      clearOverlay();

      // Convert the custom color to 0 - 255 range for CSS usage
      var customColor = properties.hourscolor.value.split(' ');
      customColor = customColor.map(function(c) {
        return Math.ceil(c * 255);
      });
      var color = 'rgb(' + customColor + ')'; 
      sessionStorage.setItem('hours-color', color);
      
      document.getElementById("hour").style.color = color;
    }

    //====================================
    //Clock X Location
    //====================================
    if (properties.clockxlocation) {
      var xloc = properties.clockxlocation.value;
      document.getElementById("time-panel").style.left = xloc + "px";
    }

    //====================================
    //Clock Y Location
    //====================================
    if (properties.clockylocation) {
      var yloc = properties.clockylocation.value;
      document.getElementById("time-panel").style.top = yloc + "px";
    }
  },
};