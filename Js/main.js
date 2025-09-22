
// update activity
let names = ["moustafa", "ahmed", "taha", "mona", "aya", "nada"]
let company = ['The Social Network', "The Tourist", "The Meta", "nothing", "facebook", "google"]
let years = [2012, 2014, 2018, 2023, 2025, 2007]
let months = ["January", "February", "March", "April", "May", "June"];
let imgs = ["002-man.png", "004-man-1.png", "006-man-2.png", "001-girl.png", "010-woman.png", "009-boy-2.png"]
let secActivity = document.querySelector(".last-activity")
let updateBtn = document.querySelector(".update")
updateBtn.addEventListener("click", () => {
    //remove frist element to update
    let articles = secActivity.querySelectorAll("article")
    if (articles.length >= 4) {
        secActivity.removeChild(articles[0])
    }
    //random index
    let random = Math.floor(Math.random() * 6)
    let article = document.createElement("article")
    article.innerHTML = `<img src="avatar/${imgs[random]}">
                    <div class="user-activity">
                        <div class="header">
                            <span class="username">${names[random]}</span>
                            posted an update in the group <span class="network">${company[random]}</span>
                        </div>
                        <span class="activity-time">
                            <span class="year">${years[random]}</span>,
                            <span class="month">${months[random]}</span>
                        </span>
                        <p class="actions">
                            "Efficiently e-enable distinctive alignments through scalable web-readiness.
                            Phosphorescently mature resource-leveling
                            growth strategies for multifunctional best practices"
                        </p>
                    </div>`
    article.classList.add("activity-box")
    secActivity.append(article)

})

