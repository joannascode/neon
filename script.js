document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');
    button.addEventListener('click', function () {
        if (this.textContent == "WŁĄCZ") {
            this.textContent = "WYŁĄCZ";
        } else {
            this.textContent = "WŁĄCZ";
        }

        const letters = document.querySelectorAll('li');
        for (var i = 0; letters.length > 1; i++) {
            letters[i].classList.toggle('off');
        }
    })
});


