document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    var country = document.getElementById("country").value;
    var dob = document.getElementById("dob").value;
  
    var output = document.getElementById("output");
    output.innerHTML = "<h3>Registration Details:</h3>";
    output.innerHTML += "<p><strong>Name:</strong> " + name + "</p>";
    output.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
    output.innerHTML += "<p><strong>Phone:</strong> " + phone + "</p>";
    output.innerHTML += "<p><strong>Address:</strong> " + address + "</p>";
    output.innerHTML += "<p><strong>City:</strong> " + city + "</p>";
    output.innerHTML += "<p><strong>State:</strong> " + state + "</p>";
    output.innerHTML += "<p><strong>Zip Code:</strong> " + zipcode + "</p>";
    output.innerHTML += "<p><strong>Country:</strong> " + country + "</p>";
    output.innerHTML += "<p><strong>Date of Birth:</strong> " + dob + "</p>";
    
    document.getElementById("registrationForm").reset();
  });
  