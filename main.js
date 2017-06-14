// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch("https://randomuser.me/api/?results=12")
  .then(function (response) {
        if (response.headers.get("content-type").indexOf("application/json") !== -1) {// checking response header
          //.json() parses the response.
          return response.json();
        } else {
            throw new TypeError('Response from "' + url + '" has unexpected "content-type"');
        }
    })

    .then(function(data)
    {

      for (let i=0;i<13;i++)
      {
        var div_profiles = document.getElementById("profiles");
        var obj_img = document.createElement("img");

        var obj_first = document.createTextNode(data.results[i].name.first);
        var obj_last = document.createTextNode(data.results[i].name.last);
        var obj_email = document.createTextNode(data.results[i].email);
        var obj_street = document.createTextNode(data.results[i].location.street);
        var obj_city =document.createTextNode(data.results[i].location.city);
        var obj_state= document.createTextNode(data.results[i].location.state);
        var obj_postcode = document.createTextNode(data.results[i].location.postcode);
        var phone = document.createTextNode(data.results[i].phone);

        obj_img.src = data.results[i].picture.large;
        obj_img.alt = "profile_pic";
        div_profiles.appendChild(obj_img);
        div_profiles.appendChild(obj_first);
        div_profiles.appendChild(obj_last);
        div_profiles.appendChild(obj_email);
        div_profiles.appendChild(obj_street);
        div_profiles.appendChild(obj_city);
        div_profiles.appendChild(obj_state);
        div_profiles.appendChild(obj_postcode);
        div_profiles.appendChild(phone);
      }
}
  )


})();
