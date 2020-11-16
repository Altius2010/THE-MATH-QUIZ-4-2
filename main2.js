player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;
document.getElementById("player_quest").innerHTML = "question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;

function send() {
    if (document.getElementById("number1").value == "" || document.getElementById("number2").value == "") {
        document.getElementById("aud").play();
    } else {
        number1 = document.getElementById("number1").value;
        console.log("number1 = " + number1);
        number2 = document.getElementById("number2").value;
        console.log("number2 = " + number2);
        sign = Math.floor(Math.random() * 5);
        if (sign == 1) {
            correct_answer = parseInt(number1) + parseInt(number2);
            sign = "+";
        }
        if (sign == 2 && number1 > number2) {
            correct_answer = parseInt(number1) - parseInt(number2);
            sign = "-";
        }
        if (sign == 2 && number1 < number2) {
            send();
        }
        if (sign == 3) {
            correct_answer = parseInt(number1) * parseInt(number2);
            sign = "X";
        }
        if (sign == 5 && number1 > number2) {
            rough = number1 / number2;
            rough = rough * number2;
            if (rough == number1) {
                correct_answer = parseInt(number1) / parseInt(number2);
                sign = "÷";
            }
        }
        if (sign == 0 || sign == 4) {
            send();
        }
        quest_number = "<h4 id='number1_display'> Q. " + number1 + sign + number2 + "</h4>";
        input_box = "<br>Answer : <input type='number' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        document.getElementById("output").innerHTML = quest_number + input_box + check_button;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
}
answer_turn = "player2";
quest_turn = "player1";

function check() {
    if (document.getElementById("input_check_box").value == "") {
        document.getElementById("aud").play();
    } else {
        answer = document.getElementById("input_check_box").value;
        console.log("your answer =" + answer);
        if (answer == correct_answer) {
            if (answer_turn == "player1") {
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = player1_score;
            } else {
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
        } else {
            document.getElementById("aud").play();
        }
        if (quest_turn == "player1") {
            quest_turn = "player2";
            document.getElementById("player_quest").innerHTML = "question Turn - " + player2_name;
        } else {
            quest_turn = "player1";
            document.getElementById("player_quest").innerHTML = "question Turn - " + player1_name;
        }
        if (answer_turn == "player1") {
            answer_turn = "player2";
            document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;
        } else {
            answer_turn = "player1";
            document.getElementById("player_ans").innerHTML = "Answer Turn - " + player1_name;
        }
        document.getElementById("output").innerHTML = "";
    }
}