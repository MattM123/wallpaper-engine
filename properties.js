
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
        document.getElementById("time-panel").style.height = (document.body.clientWidth / 5) - ((document.body.clientWidth / 5 / 5) * 1.6) + "px";
    
        document.getElementById("hour").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
        document.getElementById("min").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
        document.getElementById("sec").style.fontSize = document.getElementById("time-panel").clientWidth / 7.5 + "px";
  
        sessionStorage.setItem('time-panel-width', document.getElementById("time-panel").style.width);
        sessionStorage.setItem('time-panel-height', document.getElementById("time-panel").style.height);
  
       // document.getElementById("hour").style.wordSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
       // document.getElementById("min").style.wordSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
      //  document.getElementById("sec").style.wordSpacing = document.getElementById("time-panel").clientWidth / 15 + "px";
    
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
            h = "0" + h;
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
            h = "0" + h;
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

    //====================================
    //Audio Visualizer Visibility
    //====================================
    if (properties.audiovisualizervisibility) {
      var checkVal = properties.audiovisualizervisibility.value;
      if (checkVal == true) {
        document.getElementById("audioCanvas").style.visibility = "visible";
      }
      else {
        document.getElementById("audioCanvas").style.visibility = "hidden";
      }
    }

    //====================================
    //Audio X Location
    //====================================
    if (properties.audioxlocation) {
      var xloc = properties.audioxlocation.value;
      document.getElementById("audioCanvas").style.left = xloc + "px";
    }

    //====================================
    //Audio Y Location
    //====================================
    if (properties.audioylocation) {
      var yloc = properties.audioylocation.value;
      document.getElementById("audioCanvas").style.top = yloc + "px";
    }

    //====================================
    //Audio Height
    //====================================
    if (properties.audioheight) {
      var yloc = properties.audioheight.value;
      document.getElementById("audioCanvas").style.height = yloc + "px";
      sessionStorage.setItem("audio-height", yloc);
    }

    //====================================
    //Audio Width
    //====================================
    if (properties.audiowidth) {
      var xloc = properties.audiowidth.value;
      document.getElementById("audioCanvas").style.width = xloc + "px";
      sessionStorage.setItem("audio-width", xloc);
    }

    //====================================
    //Audio Orientation
    //====================================
    if (properties.audioorientation) {
      var o = properties.audioorientation.value;
      sessionStorage.setItem('audio-orientation', o);
    }

    //====================================
    //Match Height
    //====================================
    if (properties.matchheight) {
      if (properties.matchheight.value == true) {
        document.getElementById("audioCanvas").style.height = document.getElementById("time-panel").getBoundingClientRect().height + "px";
      }
      else {
        document.getElementById("audioCanvas").style.height = sessionStorage.getItem("audio-height") + "px";
      }
    }

    //====================================
    //Match Width
    //====================================
    if (properties.matchwidth) {
      if (properties.matchwidth.value == true) {
        document.getElementById("audioCanvas").style.width = document.getElementById("time-panel").getBoundingClientRect().width + "px";
      }
      else {
        document.getElementById("audioCanvas").style.width = sessionStorage.getItem("audio-width") + "px";
      }
    }

    //====================================
    //Bar Height
    //====================================
    if (properties.barheight) {
      sessionStorage.setItem("bar-height", properties.barheight.value);
    }

    //====================================
    //Bar Amount
    //====================================
    if (properties.baramount) {
      sessionStorage.setItem("bar-amount", properties.baramount.value);
    }
    
    //====================================
    //Bar Distortion
    //====================================
    if (properties.bardistortion) {
      sessionStorage.setItem("bar-distortion", properties.bardistortion.value);
    }
  },
};