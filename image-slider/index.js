const nextEl = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container");


let CurrentImg = 1;



nextEl.addEventListener("click", ()=>{
	CurrentImg++;
	updateImg();

});


function updateImg() {
	imageContainerEl.style.
	transform = 'translateX(-${(CurrentImg - 1) * 500}px)';

};