<html>
<head>
	<title>Marvel Studios</title>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<script src="source/js/carousel.js"></script>
	<script src="source/js/moviecard.js"></script>

	<link href='https://fonts.googleapis.com/css?family=Song Myung' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Amethysta' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Headland One' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Peddana' rel='stylesheet'>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
	<link rel="stylesheet" href="source/css/caro.css">
	<link rel="stylesheet" href="source/css/moviecards.css">
</head>
<body>
	<div class="navbar"><img src="source/images/marvelstudios.png"></div>
	<div class="carousel">
		<div class="slidebutton" id="leftslide"><i class="fas fa-angle-left" onclick="caroslideopp()"></i></div>
		<div class="slidebutton" id="rightslide"><i class="fas fa-angle-right" onclick="caroslidere()"></i></div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>THE FALCON AND THE WINTER SOLDIER</h3>
				<h4>Action, Fiction</h4>
				<h5>Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities and their patience in Marvel Studios’ “The Falcon and The Winter Soldier.”</h5>
			</div>
		</div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>WANDAVISION</h3>
				<h4>Sitcom</h4>
				<h5>Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.</h5>
			</div>
		</div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>AVENGERS : END GAME</h3>
				<h4>Action, Sci-fi</h4>
				<h5>After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.</h5>
			</div>
		</div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>DOCTOR STRANGE</h3>
				<h4>Action, adventure</h4>
				<h5>In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.</h5>
			</div>
		</div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>SPIDER-MAN : FAR FROM HOME</h3>
				<h4>Action, Adventure</h4>
				<h5>Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.</h5>
			</div>
		</div>
		<div class="caroslide">
			<div class="slidedetails">
				<h3>ANT-MAN AND THE WASP</h3>
				<h4>Action, Adventure</h4>
				<h5>Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.</h5>
			</div>
		</div>
	</div>
	<div class="recommended">
		<h3 class="titles">Recommended For You</h3>
		<div class="cardbuttonle" id="leftcard"><i class="fas fa-angle-left" onclick="cardsliderel()"></i></div>
		<div class="cardbutton" id="rightcard"><i class="fas fa-angle-right" onclick="cardslidere()"></i></div>
		<div class="movieline">
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		</div>
	</div>
	<div class="latest">
		<h3 class="titles">Latest Movies & Web Series</h3>
		<div class="cardbuttonle" id="leftcard"><i class="fas fa-angle-left" onclick="cardslidelal()"></i></div>
		<div class="cardbutton" id="rightcard"><i class="fas fa-angle-right" onclick="cardslidela()"></i></div>
		<div class="movieline">
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		</div>
	</div>
	<div class="trending">
		<h3 class="titles">Trending Now</h3>
		<div class="cardbuttonle" id="leftcard"><i class="fas fa-angle-left" onclick="cardslidetel()"></i></div>
		<div class="cardbutton" id="rightcard"><i class="fas fa-angle-right" onclick="cardslidete()"></i></div>
		<div class="movieline">
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		<div class="moviecard" onmouseover="mouseovercard(this)" onmouseout="mouseoutcard(this)"></div>
		</div>
	</div>
	<div class="footer"><h3>Designed and Implemented By: Arth @ AaRe</h3></div>
</body>
</html>