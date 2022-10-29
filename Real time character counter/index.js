const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-Counter");

textareaEl.addEventListener("keyup", ()=>{
	updateCounter()
});
function updateCounter(){
	totalCounterEl.innerText = textareaEl.Value.length
};