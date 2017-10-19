(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");
  let userGreeting = document.getElementById("user-greeting");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	myHeader.innerHTML = userGreeting.value + " " + userName.value;
    event.preventDefault();
    return false;
  }

    getName.addEventListener("submit", PerformGreeting);
   
}());
