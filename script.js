//your JS code here. If required.
let line = document.getElementById("line")
let count=0

setInterval(()=>{
	count+=5
	line.style.transform = `translate(-50%, -50%) rotate(${count}deg)`
},50)