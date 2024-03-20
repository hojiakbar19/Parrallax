class Parallax {
    constructor(obj) {

        this.clouds = document.querySelectorAll(obj.clouds);
        this.boat = document.querySelector(obj.boat)
        this.background = document.querySelector(obj.background)

        window.addEventListener("scroll", () => {

            this.moveElements()
        })
    }
    moveElements() {
        this.clouds.forEach((items) => {

            let speed = +items.getAttribute("data-speed")

            // console.log(speed);
            items.style.transform = `translateX(${window.scrollY * speed}px)`

        })

        this.boat.style.transform = `translateX(${window.scrollY}px)`
        this.background.style.objectPosition = `0 ${window.scrollY / 10}%`

    }
}

const parallax = new Parallax({
    clouds: ".header__cloud",
    boat: ".header__boat",
    background: ".header__fantasy",
})




// Run Text


class Text {

    constructor() {
        this.text = document.querySelector(".header__title")
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ""
        this.runText()
    }
    runText(i = 0) {

        this.text.innerHTML += this.fullText[i]
        i++
        if (i < this.fullText.length) {
            setTimeout(() => {
                this.runText(i)
            }, 200)
        }

    }

}

const text = new Text();





class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section)

        window.addEventListener("scroll", () => {
            this.fadeRight(this.section)
        })
    }
    fadeRight(section) {
        const fadeItem = section.querySelectorAll(".fade-right");

        fadeItem.forEach((item) => {
            const speed = item.getAttribute("data-speed")

            item.style.transition = speed + "ms"

            if (window.scrollY >= (section.offsetTop - section.offsetHeight * 2)) {
                item.classList.add("active")
            } else {
                item.classList.remove("active")
            }
        })

    }

}


const scroll = new Scroll({
    section: ".about"
})
const scroll2 = new Scroll({
    section: ".scroll"
})


// Ball


class Baloon {
    constructor() {
        this.bubble = document.querySelectorAll(".parallax__ball");


        window.addEventListener("mousemove", (e) => {
            this.bubleShow(e)
        })

    }


    bubleShow(e) {
        // console.log(e);
        // console.log(this.bubble);
        this.bubble.forEach((item) => {
            // console.log(item);

            let speed = item.getAttribute("data-speed")

            const X = (window.innerWidth - e.pageX * speed) / 50;
            const Y = (window.innerWidth - e.pageY * speed) / 100;




            item.style.transform = `translate(${X}px, ${Y}px)`

        })

    }


}

const bubble = new Baloon();



class Timer {
    constructor() {
        this.timerNums = document.querySelectorAll('.timer__num');
        this.timerSection = document.querySelector('.timer');
        this.state = true
        window.addEventListener("scroll", () => {
            this.scrollTimer();
        })
    }
    scrollTimer() {
        if (this.state) {
            if (window.scrollY >= this.timerSection.offsetTop - this.timerSection.offsetHeight * 2) {
                this.timerSet()
                this.state = false
            }
        }
    }
    timerSet() {
        this.timerNums.forEach((item) => {
            const count = item.getAttribute("data-num")
            item.innerHTML = 0;
            function timer(i = 0) {
                item.innerHTML = i
                i++
                if (i <= count) {

                    setTimeout(() => {
                        timer(i)
                    }, 50)
                }
            }
            timer()
        })
    }

}

const timer = new Timer()






class Btn {
    constructor() {
        this.btn = document.querySelectorAll('.timer__btn')
        this.btn.forEach((item) => {
            item.addEventListener("mousemove", (event) => {
                this.btnShow(item, event)
            })
        })

    }
    btnShow(item, event) {

        // console.log(item.offsetTop);
        const X = event.pageX - item.offsetLeft;
        const Y = event.pageY - item.offsetTop;

        let span = item.querySelector("span")
        span.style.left = `${X}px`;
        span.style.top = `${Y}px`;

    }

}


const btn = new Btn();






class Rotate3D {
    constructor() {
        this.card = document.querySelectorAll(".card")
        this.card.forEach((items) => {
            items.addEventListener("mousemove", (event) => {
                this.rotate(event, items)
            })

            items.addEventListener("mouseout", () => {
                this.rotateNone(items)
            })
        })
    }

    rotate(e, item) {
        const cardItem = item.querySelector(".card__item")

        const halfHeight = cardItem.offsetHeight

        cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY) / 10}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`

        // cardItem.style.background = 'red'
    }

    rotateNone(item) {
        const cardItem = item.querySelector(".card__item");
        cardItem.style.transform = `rotate(0)`
        // cardItem.style.background = 'rgb(0, 213, 255)'

    }


}



const rotate3D = new Rotate3D();


