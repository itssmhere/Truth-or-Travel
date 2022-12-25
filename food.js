function dare1() {
    var preferedTrail = document.getElementById("htmlTrail").value;
    var zeDare1
    if (preferedTrail == 'hiking') {
        zeDare1 = 'Your Dare Number 1 is to go to Heart Lake Conservation Park and find a heart-shaped rock.'
    }
    else if (preferedTrail == 'footpath') {
        zeDare1 = 'Your Dare Number 1 is to go to invite 2 people to go to the Eldorado Park with you, and take a walk on one of the trails there.'
    }
    else if (preferedTrail == 'naturalTrail') {
        zeDare1 = 'Your Dare Number 1 is go on the Chinguacousy Trail and name at least 3 trees, flowers, plants and bugs that you find on the trail. '
    }
    else {
        zeDare1 = 'Your Dare Number 1 is go to White Spruce Park and improve your photography skills by taking 10 pictures of nature.'
    }
    document.getElementById("dare1").innerHTML = '<h1 class="question" id="dare1" style="top: 100px;"> <br> <br> ' + zeDare1 + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#dare2" style="position:relative; top: 40px; left: 40%;" onclick="dare2()" class="btn-red">Next</a></div>';
}


function dare2() {
    var tryout2 = document.getElementById("comfortLevel").value;
    if (tryout2 == 'yes') {
        dare2random();
    } else {
        dare2specific();
    }
}

function dare2random() {
    var dare2random = ["Your Dare Number 2 is to go to Claireville Conservation Area and take a picture in the Bird Watching area. ", "Your Dare Number 2 is to go to Professor's Lake and pick at least two pieces of litter and throw them out. ", "Your Dare Number 2 is to go to Parr Lake North Park and find 6 shades of green. ", "Your Dare Number 2 is to go to Ester Lake Trial, and take a picture beside the beach. "]
    var randomFoodDare = Math.floor(Math.random() * (dare2random.length));
    document.getElementById("dare2").innerHTML = '<h1 class="question" id="dare1" style="top: 100px;"> <br> <br>' + dare2random[randomFoodDare] + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#dare3" style="position:relative; top: 40px; left: 40%;" onclick="dare3()" class="btn-red">Next</a></div>';
}

function dare2specific() {
    var preferedTrail = document.getElementById("htmlTrail").value;
    var zeDare2
    if (preferedTrail == 'hiking') {
        zeDare2 = 'Your Dare Number 2 is to go to Claireville Conservation Area and take a picture in the Bird Watching area. '
    }
    else if (preferedTrail == 'footpath') {
        zeDare2 = 'Your Dare Number 2 is to go to Professors Lake and pick at least two pieces of litter and throw them out. '
    }
    else if (preferedTrail == 'naturalTrail') {
        zeDare2 = 'Your Dare Number 2 is to go to Parr Lake North Park and find 6 shades of green.'
    }
    else {
        zeDare2 = 'Your Dare Number 2 is to go to Ester Lake Trial, and take a picture beside the beach.'
    }
    document.getElementById("dare2").innerHTML = '<h1 class="question" id="dare2" style="top: 100px;"> <br> <br>' + zeDare2 + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#dare3" style="position:relative; top: 40px; left: 40%;" onclick="dare3()" class="btn-red">Next</a></div>';
}



function dare3() {
    var preferedFood = document.getElementById("htmlFood").value;
    var zeDare3
    if (preferedFood == 'southAsian') {
        zeDare3 = 'Your Dare Number 3 is to go to Madras Restaurant and try the Madras Special Masala Dosa.'
    }
    else if (preferedFood == "asian") {
        zeDare3 = 'Your Dare Number 3 is to go to the Hakka Village Chinese Restaurant and try out the Hakka Chow Mien.'
    }
    else if (preferedFood == "mediterranean") {
        zeDare3 = 'Your Dare Number 3 is to go to Lazeez Shawarma and try out Falafel Sandwich.'
    }
    else if (preferedFood == "european") {
        zeDare3 = 'Your Dare Number 3 is to go to Queen Gypsy and try out Special Karadjordjeva Schnitzel.'
    }
    else if (preferedFood == "northAmerican") {
        zeDare3 = 'Your Dare Number 3 is to go to J Red and Co. and try Crispy Fried Calamari.'
    }
    else if (preferedFood == "caribbean") {
        zeDare3 = 'Your Dare Number 3 is to go to Xaymaca Restaurant and try Rasta Veggie Burger.'
    }
    else if (preferedFood == "vietnamese") {
        zeDare3 = 'Your Dare Number 3 is to go to Pho Dau Bo and try out Vegetarian Fried Rice.'
    }
    else if (preferedFood == "italian") {
        zeDare3 = 'Your Dare Number 3 is to go to That Italian Place Pizzeria & Paninoteca and try out Panino.'
    }
    else {
        zeDare3 = 'Your Dare Number 3 is to go to Toshi Japanese Restaurant and try Aburi Rainbow Roll.'
    }
    document.getElementById("dare3").innerHTML = '<h1 class="question" id="dare3" style="top: 100px;"> <br> <br>' + zeDare3 + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#dare4" style="position:relative; top: 40px; left: 40%;" onclick="dare4()" class="btn-red">Next</a></div>';
}

function dare4() {
    var tryout4 = document.getElementById("comfortLevel").value;
    if (tryout4 == 'yes')
        dare4random();
    else
        dare4specific();
}

function dare4random() {
    var dare4random = ["Your Dare Number 4 is to go to Brar Restaurant and try Delhi Kulcha Chana.", "Your Dare Number 4 is to go to Wok of Flame Restaurant and try Teppanyaki.", "Your Dare Number 4 is to go to Sabroso Pita Express and try out Spanakopita.", "Your Dare Number 4 is to go to Vesuvio Ristorante and try Gnocchi", "Your Dare Number 4 is to go to Aria Bistro & Lounge and try Mushroom Risotto", "Your Dare Number 4 is to go to SunRise Caribbean Restaurant and try Jamaica House Jerk Carrot Juice.", "Your Dare Number 4 is to go to Saigon House Restaurant and try Vermicelli Noodles", "Your Dare Number 4 is to go to Pomodoro Italian Kitchen and try Pomodoro's Famous Tomato Sauce Pasta.", "Your Dare Number 4 is to go to En Sushi and try Vegetable Box."]
    var randomFoodDare = Math.floor(Math.random() * (dare4random.length));
    document.getElementById("dare4").innerHTML = '<h1 class="question" id="dare4" style="top: 100px;"> <br> <br>' + dare4random[randomFoodDare] + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#thankyou" style="position:relative; top: 40px; left: 40%;" onclick="thankyou()" class="btn-red">Next</a></div>';
}

function dare4specific() {
    var preferedFood = document.getElementById("htmlFood").value;
    var zeDare4
    if (preferedFood == 'southAsian') {
        zeDare4 = 'Your Dare Number 4 is to go to Brar Restaurant and try Delhi Kulcha Chana.'
    }
    else if (preferedFood == "asian") {
        zeDare4 = 'Your Dare Number 4 is to go to Wok of Flame Restaurant and try Teppanyaki.'
    }
    else if (preferedFood == "mediterranean") {
        zeDare4 = 'Your Dare Number 4 is to go to Sabroso Pita Express and try out Spanakopita. '
    }
    else if (preferedFood == "european") {
        zeDare4 = 'Your Dare Number 4 is to go to Vesuvio Ristorante and try Gnocchi'
    }
    else if (preferedFood == "northAmerican") {
        zeDare4 = 'Your Dare Number 4 is to go to Aria Bistro & Lounge and try Mushroom Risotto.'
    }
    else if (preferedFood == "caribbean") {
        zeDare4 = 'Your Dare Number 4 is to go to SunRise Caribbean Restaurant and try Jamaica House Jerk Carrot Juice. '
    }
    else if (preferedFood == "vietnamese") {
        zeDare4 = 'Your Dare Number 4 is to go to Saigon House Restaurant and try Vermicelli Noodles. '
    }
    else if (preferedFood == "italian") {
        zeDare4 = 'Your Dare Number 4 is to go to Pomodoro Italian Kitchen and try Pomodoros Famous Tomato Sauce Pasta.'
    }
    else {
        zeDare4 = 'Your Dare Number 4 is to go to En Sushi and try Vegetable Box.'
    }
    document.getElementById("dare4").innerHTML = '<h1 class="question" id="dare4" style="top: 100px;"> <br> <br>' + zeDare4 + '</h1><br><br><br> <br><div style="position: relative; top: 50px; height: 1000px; align-items: center;"><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><a href="#thankyou" style="position:relative; top: 40px; left: 40%;" onclick="thankyou()" class="btn-red">Next</a></div>';
}

function thankyou() {
    document.getElementById("thankyou").innerHTML = '<h1 class="question" id="thankyou" style="top: 100px;"> Thank you for playing :) <br> You will get your results shortly </h1> <br><br><br><br>'
}
