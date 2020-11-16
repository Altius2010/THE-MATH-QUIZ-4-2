function addUser() {
    if (document.getElementById("player1_name_input").value == "" || document.getElementById("player2_name_input").value == "") {
        document.getElementById("aud").play();
    } else {
        Player1_name = document.getElementById("player1_name_input").value;
        Player2_name = document.getElementById("player2_name_input").value;
        localStorage.setItem("Player1_Name", Player1_name);
        localStorage.setItem("Player2_Name", Player2_name);
        document.getElementById("player1_name_input").value = "";
        document.getElementById("player2_name_input").value = "";
        window.location = "index2.html";
    }
}