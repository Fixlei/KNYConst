// JavaScript Document
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

 
  var subject = "New Order";
  var body = "Name：" + name + "\nEmail：" + email + "\nMessage：" + message;

 
  var mailtoLink = "mailto:leimingh7@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);


  window.location.href = mailtoLink;
});
