//Note that there may be obscure bugs in the game that I am yet to find, but after testing I think I have found most of the major bugs.
//Options to improve the game in the future :
//1 - make it to where the css for the buttons act like they do for the demo simon game on freeCodeCamp
//2 - find noise for if an error is made and play it
//3 - If wrong button is clicked, clickoff function is not run. this is actually kind of nice to separate itself from the correct button presses, so may just leave alone. (related to option above)

var clickedCenter = false;
var lightUpButton = [];
var ans = [];
var i = 0; //used in for loop
var j = 0; //used to check if correct order
var lastButton = "no";  //check if it is the last button
var greenBeep = document.getElementById("greenAudio");
var redBeep = document.getElementById("redAudio");
var yellowBeep = document.getElementById("yellowAudio");
var blueBeep = document.getElementById("blueAudio");
var timeBetweenAiClick = 1500; //time between AI clicks, increases as counter increases
var restart1; //the 4 are used if no button is clicked fast enough (they are set equal to setTimeout functions)
var restart2;
var restart3;
var restart4;
var canPressStart = "yes"; //used so start button does not activate when AI is clicking buttons (always set to "yes" except for that specific case)
var addButtonAllowed = "yes"; //prevent bug when turning off and on and then quickly hitting start (always set to "yes" except for that specific case)
var counter = "--";
var canClickColors = "no";
var strictYN = "no";
var onYN = "no";
document.getElementById("countNumber").innerHTML = counter;


function center() {
  clickedCenter = true;
}

function topLeft() { //runs when clicked
  if (onYN == "yes") {
  if (canClickColors == "yes") {

  if (clickedCenter == false) {
    if (ans[j] == "green") {
      clickGreen();
      j++;
      //prevents having to restart if no button is clicked for too long
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      waitTooLong(); //runs if no button is clicked in 5 seconds

      if (j == 20) {
        clearTimeout(restart1);
        clearTimeout(restart2);
        clearTimeout(restart3);
        clearTimeout(restart4);
        counter = ":)";
        document.getElementById("countNumber").innerHTML = counter;
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 250);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 500);
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 750);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 1000);
        return;
      }

      if (j == ans.length) {
        j=0;
        lastButton = "yes"; //used instead of canClickColors in this case, canClickColors changes in onmouseup function
        canPressStart = "no";
        setTimeout(addAButton, 2000);
      }
    } else if (ans[j] != "green") {
      clickGreen();
      j=0;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      canClickColors = "no"; //disable clicking here
      document.getElementById("countNumber").innerHTML = "!!";
      //can have an error beep play here if I find a sound to use
      if (strictYN == "no") {
        setTimeout(start2, timeBetweenAiClick);
      } else if (strictYN == "yes") {
        timeBetweenAiClick = 1500;
        setTimeout(start, timeBetweenAiClick);
      }
    }
  } else if (clickedCenter == true) {
    clickedCenter = false;
  }
  } //end if CanClickColors
  } //end if onYN
}

function topRight() { //runs when clicked
  if (onYN == "yes") {
  if (canClickColors == "yes") {

  if (clickedCenter == false) {
    if (ans[j] == "red") {
      clickRed();
      j++;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      waitTooLong(); //runs if no button is clicked in 5 seconds

      if (j == 20) {
        clearTimeout(restart1);
        clearTimeout(restart2);
        clearTimeout(restart3);
        clearTimeout(restart4);
        counter = ":)";
        document.getElementById("countNumber").innerHTML = counter;
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 250);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 500);
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 750);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 1000);
        return;
      }
      if (j == ans.length) {
        j=0;
        lastButton = "yes"; //used instead of canClickColors in this case, canClickColors changes in onmouseup function
        canPressStart = "no";
        setTimeout(addAButton, 2000);
      }
    } else if (ans[j] != "red") {
      clickRed();
      j=0;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      canClickColors = "no"; //disable clicking here
      document.getElementById("countNumber").innerHTML = "!!";
      //can have an error beep play here if I find a sound to use
      if (strictYN == "no") {
        setTimeout(start2, timeBetweenAiClick);
      } else if (strictYN == "yes") {
        timeBetweenAiClick = 1500;
        setTimeout(start, timeBetweenAiClick);
      }
    }
  } else if (clickedCenter == true) {
    clickedCenter = false;
  }
  } //end if CanClickColors
  } //end if onYN
}

function bottomLeft() { //runs when clicked
  if (onYN == "yes") {
  if (canClickColors == "yes") {

  if (clickedCenter == false) {
    if (ans[j] == "yellow") {
      clickYellow();
      j++;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      waitTooLong(); //runs if no button is clicked in 5 seconds

      if (j == 20) {
        clearTimeout(restart1);
        clearTimeout(restart2);
        clearTimeout(restart3);
        clearTimeout(restart4);
        counter = ":)";
        document.getElementById("countNumber").innerHTML = counter;
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 250);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 500);
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 750);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 1000);
        return;
      }
      if (j == ans.length) {
        j=0;
        lastButton = "yes"; //used instead of canClickColors in this case, canClickColors changes in onmouseup function
        canPressStart = "no";
        setTimeout(addAButton, 2000);
      }
    } else if (ans[j] != "yellow") {
      clickYellow();
      j=0;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      canClickColors = "no"; //disable clicking here
      document.getElementById("countNumber").innerHTML = "!!";
      //can have an error beep play here if I find a sound to use
      if (strictYN == "no") {
        setTimeout(start2, timeBetweenAiClick);
      } else if (strictYN == "yes") {
        timeBetweenAiClick = 1500;
        setTimeout(start, timeBetweenAiClick);
      }
    }
  } else if (clickedCenter == true) {
    clickedCenter = false;
  }
  } //end if CanClickColors
  } //end if onYN
}

function bottomRight() { //runs when clicked
  if (onYN == "yes") {
  if (canClickColors == "yes") {

  if (clickedCenter == false) {
    if (ans[j] == "blue") {
      clickBlue();
      j++;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      waitTooLong(); //runs if no button is clicked in 5 seconds

      if (j == 20) {
        clearTimeout(restart1);
        clearTimeout(restart2);
        clearTimeout(restart3);
        clearTimeout(restart4);
        counter = ":)";
        document.getElementById("countNumber").innerHTML = counter;
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 250);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 500);
        setTimeout(function() {$("#countNumber").css("color", "#eee")}, 750);
        setTimeout(function() {$("#countNumber").css("color", "#000")}, 1000);
        return;
      }
      if (j == ans.length) {
        j=0;
        lastButton = "yes"; //used instead of canClickColors in this case, canClickColors changes in onmouseup function
        canPressStart = "no";
        setTimeout(addAButton, 2000);
      }
    } else if (ans[j] != "blue") {
      clickBlue();
      j=0;
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);
      canClickColors = "no"; //disable clicking here
      document.getElementById("countNumber").innerHTML = "!!";
      //can have an error beep play here if I find a sound to use
      if (strictYN == "no") {
        setTimeout(start2, timeBetweenAiClick);
      } else if (strictYN == "yes") {
        timeBetweenAiClick = 1500;
        setTimeout(start, timeBetweenAiClick);
      }
    }
  } else if (clickedCenter == true) {
    clickedCenter = false;
  }
  } //end if CanClickColors
  } //end if onYN
}

function start() {
  if (onYN == "yes") {
  if (canPressStart == "yes") {
    canPressStart = "no";
    addButtonAllowed = "no";
    counter = "--";
    document.getElementById("countNumber").innerHTML = counter;
    setTimeout(function() {$("#countNumber").css("color", "#eee")}, 250);
    setTimeout(function() {$("#countNumber").css("color", "#000")}, 500);
    setTimeout(function() {$("#countNumber").css("color", "#eee")}, 750);
    setTimeout(function() {$("#countNumber").css("color", "#000")}, 1000);

    //most of the indented code below is put here in case of unexpected issues. Several of these lines could be removed in order to make it 'cleaner'
      clickedCenter = false;
      lightUpButton = [];
      ans = [];
      i = 0;
      j = 0;
      lastButton = "no";
      timeBetweenAiClick = 1500;
      canClickColors = "no";
      clearTimeout(restart1);
      clearTimeout(restart2);
      clearTimeout(restart3);
      clearTimeout(restart4);

    counter = 1;
    timeBetweenAiClick = 2000;
    randomNumber = Math.floor(Math.random()*4)+1;
    lightUpButton[counter-1] = randomNumber;
    start2();

  } //end if canPressStart
  }
}

function addAButton() {
  if (onYN == "yes") {
  if (addButtonAllowed == "yes") {
  canClickColors = "no";
  lastButton = "no";
  if (counter != "--") { //need conditional here to prevent bug when turning on/off quickly
    counter += 1;
  }
  if (counter == 5) {
      timeBetweenAiClick = 1250;
  }
  if (counter == 9) {
      timeBetweenAiClick = 1000;
  }
  if (counter == 13) {
      timeBetweenAiClick = 750;
  }
  if (counter == 17) {
      timeBetweenAiClick = 500;
  }
  document.getElementById("countNumber").innerHTML = counter;
  randomNumber = Math.floor(Math.random()*4)+1;
  lightUpButton[counter-1] = randomNumber;
  start2();
  } //end if addButtonAllowed
  }
}

function start2() {
  if (onYN == "yes") {
  canPressStart = "no";  //this line causes problems when quickly turining on and off
  if (counter == "--") {
    canPressStart = "yes"; //this may fix a bug by overriding it if the game is turned on and then off, but it just might cause more bugs...
  }
  i=0;
  start3();
  }
}

function start3() {
  if (onYN == "yes") {
  setTimeout(function () {
  document.getElementById("countNumber").innerHTML = counter;
  if (lightUpButton[i] == 1) {
    clickGreen();
    ans[i] = "green";
  } else if (lightUpButton[i] == 2) {
    clickRed();
    ans[i] = "red";
  } else if (lightUpButton[i] == 3) {
    clickYellow();
    ans[i] = "yellow";
  } else if (lightUpButton[i] == 4) {
    clickBlue();
    ans[i] = "blue";
  }
  i += 1;
  if (i <= (counter-1)) {
    clearTimeout(restart1);
    clearTimeout(restart2);
    clearTimeout(restart3)
    clearTimeout(restart4);
    start3();
  } else if (i>(counter-1)) {
    setTimeout(function() { canClickColors = "yes"; }, (timeBetweenAiClick/2));
    clickedCenter = false;
    canPressStart = "yes";
    addButtonAllowed = "yes"; //here to prevent a bug when turning on/off quickly
    waitTooLong();
  }
  }, timeBetweenAiClick)
  }
}

function strictBtn() {
  if (onYN == "yes") {
  if (strictYN == "no") {
    strictYN = "yes";
    $("#strictButtonLight").css("background-color", "#f00")
  } else if (strictYN == "yes") {
    strictYN = "no";
    $("#strictButtonLight").css("background-color", "#000")
  }
  }
}

function waitTooLong() {
  if (strictYN == "no") {
    restart1 = setTimeout(start2, 5000);
    restart2 = setTimeout(function(){document.getElementById("countNumber").innerHTML = "!!";}, 5000);
    restart3 = setTimeout(function(){j=0;}, 5000);
    restart4 = setTimeout(function(){canClickColors = "no";}, 5000);
    //can have an error beep play here if I find a sound to use
  } else if (strictYN == "yes") {
    restart1 = setTimeout(start, 5000);
    restart2 = setTimeout(function(){document.getElementById("countNumber").innerHTML = "!!";}, 5000);
    restart3 = setTimeout(function(){j=0;}, 5000);
    restart4 = setTimeout(function(){canClickColors = "no";}, 5000);
    //can have an error beep play here if I find a sound to use
  }
}

function onOffBtn() {
  if (onYN == "no") { //turns on
    onYN = "yes";

    //below code resets everything back to original state (some of the code can be deleted to make it 'cleaner', but I kept it just in case)
    clickedCenter = false;
    lightUpButton = [];
    ans = [];
    i = 0;
    j = 0;
    addButtonAllowed = "yes";
    counter = "--";
    strictYN = "no";
    canClickColors = "no";
    document.getElementById("countNumber").innerHTML = counter;

    canPressStart = "yes";
    $("#countNumber").css("color", "#000") //makes text inside 'count' black

    $("#onOffButtonLight").css("background-color", "#f00")
  } else if (onYN == "yes") {  //turns off
    onYN = "no";

    //below code resets everything back to original state (most info is copied from the very top of the page where all the variables are defined so that they can be set back to their original value)
    clickedCenter = false;
    lightUpButton = [];
    ans = [];
    i = 0;
    j = 0;
    lastButton = "no";
    counter = "--";
    timeBetweenAiClick = 1500;
    canPressStart = "yes";
    canClickColors = "no";
    addButtonAllowed = "yes";
    strictYN = "no";
    $("#strictButtonLight").css("background-color", "#000")
    clearTimeout(restart1);
    clearTimeout(restart2);
    clearTimeout(restart3);
    clearTimeout(restart4);
    document.getElementById("countNumber").innerHTML = counter;

    //resets green color and sound
    greenBeep.pause();
    greenBeep.load();
    $("#topLeftButton").css("background-color", "#006600");

    //resets red color and sound
    redBeep.pause();
    redBeep.load();
    $("#topRightButton").css("background-color", "#cc0000");

    //resets yellow color and sound
    yellowBeep.pause();
    yellowBeep.load();
    $("#bottomLeftButton").css("background-color", "#cccc00");

    //resets blue color and sound
    blueBeep.pause();
    blueBeep.load();
    $("#bottomRightButton").css("background-color", "#0000b3");
    $("#countNumber").css("color", "#eee") //count number text becomes same color as background to make it seem like it disappears
    $("#onOffButtonLight").css("background-color", "#000") //on/off button becomes black
    return;
  }
}

function clickGreen() { //runs automatically, despite the function name
  if (onYN == "yes") {
  greenBeep.play();
  $("#topLeftButton").css("background-color", "#00ff00");
  setTimeout(function() {$("#topLeftButton").css("background-color", "#006600")},  (timeBetweenAiClick/2));
  }
}

function clickRed() { //runs automatically, despite the function name
  if (onYN == "yes") {
  redBeep.play();
  $("#topRightButton").css("background-color", "#ff6666")
  setTimeout(function() {$("#topRightButton").css("background-color", "#cc0000")},  (timeBetweenAiClick/2));
  }
}

function clickYellow() { //runs automatically, despite the function name
  if (onYN == "yes") {
  yellowBeep.play();
  $("#bottomLeftButton").css("background-color", "#ffff66")
  setTimeout(function() {$("#bottomLeftButton").css("background-color", "#cccc00")},  (timeBetweenAiClick/2));
  }
}

function clickBlue() { //runs automatically, despite the function name
  if (onYN == "yes") {
  blueBeep.play();
  $("#bottomRightButton").css("background-color", "#4d4dff")
  setTimeout(function() {$("#bottomRightButton").css("background-color", "#0000b3")}, (timeBetweenAiClick/2));
  }
}

function revertGreen() {
  if (onYN == "yes") {
  if (canClickColors == "yes") {
  setTimeout(function() {
    greenBeep.pause();
    greenBeep.load();
  }, 200);
  $("#topLeftButton").css("background-color", "#006600");
  if (lastButton == "yes") {
    canClickColors = "no"; //disable clicking here
  }
  }
  }
}

function revertRed() {
  if (onYN == "yes") {
  if (canClickColors == "yes") {
  setTimeout(function() {
    redBeep.pause();
    redBeep.load();
  }, 200);
  $("#topRightButton").css("background-color", "#cc0000");
  if (lastButton == "yes") {
    canClickColors = "no"; //disable clicking here
  }
  }
  }
}

function revertYellow() {
  if (onYN == "yes") {
  if (canClickColors == "yes") {
  setTimeout(function() {
    yellowBeep.pause();
    yellowBeep.load();
  }, 200);
  $("#bottomLeftButton").css("background-color", "#cccc00");
  if (lastButton == "yes") {
    canClickColors = "no"; //disable clicking here
  }
  }
  }
}

function revertBlue() {
  if (onYN == "yes") {
  if (canClickColors == "yes") {
  setTimeout(function() {
    blueBeep.pause();
    blueBeep.load();
  }, 200);
  $("#bottomRightButton").css("background-color", "#0000b3");
  if (lastButton == "yes") {
    canClickColors = "no"; //disable clicking here
  }
  }
  }
}
