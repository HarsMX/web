let body = document.body;
let info = document.getElementById('info'); 
let mode = document.getElementById('mode');
let home = document.getElementById('home');
			
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;
			
function darkMode() {
	if(darkRemainingLeft == 0){
	info.textContent = `JATAH FITUR SUDAH HABIS!!!`
	mode.style.display = 'none';
	home.textContent = `Restar`
	return
	}
	
	darkCounter += 1;
	darkRemainingLeft = darkLimit - darkCounter;
	
	//render ke info element
	info.textContent = `Mode dipakai ${darkCounter}x,tersisa ${darkRemainingLeft}x`
	
	body.classList.toggle('dark');
}
function reRender(){
location.reload();
}