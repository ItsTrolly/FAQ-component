let expand = document.getElementById("expand");
let test = document.getElementsByClassName("click")
let container = document.getElementsByClassName("Faq-QA")

for (var i = 0; i < test.length; i++){
    test[i].addEventListener("click", function textExpand(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
