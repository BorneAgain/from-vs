let stats = document.querySelectorAll(".profile-stats"),
    emojis = document.querySelectorAll(".emoji-icon"),
    stars = document.querySelectorAll(".star-icon"),
    colorArray = ["red", "lightblue", "orange", "lightgreen", "green"];
currentIndex(0);
stats.forEach((stat) => {
    stat.innerText = 0;
    let currentStat = +stat.innerText;

    function counter() {
        const dataCeil = stat.getAttribute("data-ceil");
        increament = Math.ceil(dataCeil / 15);
        currentStat += increament;
        if (currentStat < dataCeil) {
            stat.innerText = currentStat;
            setTimeout(counter, 50);
        } else {
            stat.innerText = dataCeil;
        }
    }
    counter();
});
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        currentIndex(index);
        // console.log(index)
    });
});

function currentIndex(index) {
    stars.forEach((star, indexN) => {
        if (indexN < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
        console.log(indexN);
    });
    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colorArray[index];
    });
}