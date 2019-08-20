function handleImageUpload()
    {

    var image = document.getElementById("upload").files[0];

        var reader = new FileReader();

        reader.onload = function(e) {
          document.getElementById("display-image").src = e.target.result;
        }

        reader.readAsDataURL(image);

    }


function myFunction() {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
