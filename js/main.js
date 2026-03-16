window.onload=function(){

confetti({

particleCount:200,

spread:120,

origin:{y:0.6}

})

}

function goMemories(){

window.location.href="memories.html"

}

function showFriend(name){

let content={

rahul:`

<h2>Rahul Memories</h2>

<img src="images/school/rahul1.jpg" width="300">

<br><br>

<video controls width="400">

<source src="videos/rahul.mp4">

</video>

`,

arjun:`

<h2>Arjun Memories</h2>

<img src="images/school/arjun1.jpg" width="300">

<video controls width="400">

<source src="videos/arjun.mp4">

</video>

`,

kiran:`

<h2>Kiran Memories</h2>

<img src="images/school/kiran1.jpg" width="300">

<video controls width="400">

<source src="videos/kiran.mp4">

</video>

`

}

document.getElementById("memory").innerHTML=content[name]

}

function showCollege(name){

let content={

ajay:`

<h2>Ajay Memories</h2>

<img src="images/college/ajay1.jpg" width="300">

<video controls width="400">

<source src="videos/ajay.mp4">

</video>

`,

rishi:`

<h2>Rishi Memories</h2>

<img src="images/college/rishi1.jpg" width="300">

<video controls width="400">

<source src="videos/rishi.mp4">

</video>

`,

teja:`

<h2>Teja Memories</h2>

<img src="images/college/teja1.jpg" width="300">

<video controls width="400">

<source src="videos/teja.mp4">

</video>

`

}

document.getElementById("memory").innerHTML=content[name]

}