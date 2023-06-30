 $(document).ready(function () {

            $(document).on('click', '#SignIn', function () {
             
                 var Email = $('#Email').val().trim();
                 var Password = $('#Password').val().trim();
				 console.log("Email",Email);
				 console.log("Password",Password);
				 
				var UserEmail= localStorage.getItem(Email);
				var UserPassword=  localStorage.getItem(Password);
				 console.log("UserEmail",UserEmail);
				 console.log("UserPassword",UserPassword);
				 if(UserEmail==Email && UserPassword==Password){
				  location.href = "todolist.html";
				 }else if(UserEmail==Email && UserPassword !=Password){
				     alert("Password invalide");
				  console.log("Password invalide",Password);
				 }else if(UserEmail!=Email && UserPassword ==Password){
				 	  console.log(" Email invalide");
                       alert(" Email invalide");
				 }else{
				 
				  console.log(" user invalide");
                  alert(" user invalide");
				 }
				 
               
            });
       

             
        });
 



            $(document).on('click', '#Register', function () {
                 var  Fullname= $('#Fullname').val().trim();
                 if(Fullname==""){
                  alert("Fullname invalide");
                  return;
                 }
				 localStorage.setItem(Fullname,Fullname);
                 var Email = $('#Email').val().trim();
                 if(Email==""){
                  alert("Email invalide");
                  return;
                 }
				 localStorage.setItem(Email,Email);
                 var Password = $('#Password').val().trim();
                 if(Password==""){
                  alert("Email invalide");
                  return;
                 }
				  localStorage.setItem(Password,Password);
				 console.log("Email",localStorage.getItem(Email));
				 console.log("Password",localStorage.getItem(Password));
                 location.href = "Login.html";
               
            });

       
            // Create a "close" button and append it to each list item
            var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
              var span = document.createElement("SPAN");
              var txt = document.createTextNode("\u00D7");
              span.className = "close";
              span.appendChild(txt);
              myNodelist[i].appendChild(span);
            }
            
            // Click on a close button to hide the current list item
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
              close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
              }
            }
            
            // Add a "checked" symbol when clicking on a list item
            var list = document.querySelector('ul');
            list.addEventListener('click', function(ev) {
              if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
              }
            }, false);
            
            // Create a new list item when clicking on the "Add" button
            function newElement() {
              var li = document.createElement("li");
              var inputValue = document.getElementById("myInput").value;
              var t = document.createTextNode(inputValue);
              li.appendChild(t);
              if (inputValue === '') {
                alert("You must write something!");
              } else {
                document.getElementById("myUL").appendChild(li);
              }
              document.getElementById("myInput").value = "";
            
              var span = document.createElement("SPAN");
              var txt = document.createTextNode("\u00D7");
              span.className = "close";
              span.appendChild(txt);
              li.appendChild(span);
            
              for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.display = "none";
                }
              }
            }
           
        


   



