// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff")
    takeOffButton.addEventListener("click", function() {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (input){
            document.getElementById("flightStatus").textContent = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").textContent = "10000";
        }
    })
    let landButton = document.getElementById("landing")
    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        document.getElementById("flightStatus").textContent = "The shuttle has landed."; 
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").textContent = "0";     
      
    })

    let abortButton = document.getElementById("missionAbort")
    abortButton.addEventListener("click", function() {
        window.confirm("Confirm that you want to abort the mission");

        document.getElementById("flightStatus").textContent = "Mission aborted."
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").textContent = "0";
    });
    let launch = 0;
    let top = 0;
    let left = 0;
    let rocket = document.getElementById("rocket");
    let launchInfo =  document.getElementById("spaceShuttleHeight");
    window.addEventListener("keydown",function(event){
        console.log(event.key);
        if (event.key == "ArrowRight") {
            left += 10;
            rocket.style.left = left + "px";
           console.log(rocket); 
        }
        else if (event.key == "ArrowLeft") {
            left -= 10;
            rocket.style.left = left + "px";
           console.log(rocket); 
        }
        else if (event.key == "ArrowDown") {
            launch -= 10000;
            launchInfo.textContent = launch + "";
            top += 10;
            rocket.style.top = top + "px";
           console.log(rocket); 
        } 
        else if (event.key == "ArrowUp") {
            launch += 10000;
            launchInfo.textContent = launch + "";
            top -= 10;
            rocket.style.top = top + "px";
           console.log(rocket); 
        }
    });

    let buttons = document.getElementsByName("buttons")[0];
    buttons.addEventListener("click", function(event){
      console.log(event.target.textContent);  
      if (event.target.textContent == "Right") {
        left += 10;
        rocket.style.left = left + "px";
       console.log(rocket); 
    }
    else if (event.target.textContent == "Left") {
        left -= 10;
        rocket.style.left = left + "px";
       console.log(rocket); 
    }
    else if (event.target.textContent == "Down") {
        launch -= 10000;
            launchInfo.textContent = launch + "";
        top += 10;
        rocket.style.top = top + "px";
       console.log(rocket); 
    } 
    else if (event.target.textContent == "Up") {
        launch += 10000;
            launchInfo.textContent = launch + "";
        top -= 10;
        rocket.style.top = top + "px";
       console.log(rocket); 
    }
    });
})


