function changeColor() {
  setTimeout(function() {
    document.getElementById("firstHeading").style.background = "orange";
    setTimeout(function() {
      document.getElementById("firstHeading").style.color = "white";
      setTimeout(function() {
        document.getElementById("secondHeading").style.color = "green";
        setInterval(function() {
          document.getElementById("secondHeading").style.background = "black";

        }, 2000);
      }, 2000);

    }, 2000);
  }, 2000);

}


