const screenWidth = window.document.documentElement.clientWidth

const titleLines = gsap.utils.toArray('.main-titles h1 span')
const subtitle = document.querySelector('.main-titles h2')

let titleDelay = 0.8;

function titleAnimation() {
    titleLines.forEach((title, index) => {
        if (index === 2) {
            gsap.from(title, {
                x: '-10%',
                duration: 0.6,
                ease: Power1.easeOut,
                opacity: 0,
                delay: titleDelay + 0.05
            })
            return
        }
        gsap.from(title, {
            x: '-20%',
            duration: 0.6,
            ease: Power1.easeOut,
            opacity: 0,
            delay: titleDelay
        })
        titleDelay = titleDelay + 0.4
    })
}
    
titleAnimation()

const timeline = gsap.timeline({ defaults: {
    duration: 1,
    ease: Power1.easeInOut
}})

timeline
    .from(subtitle, {
        duration: 1,
        delay: 2.5,
        opacity: 0
    })

gsap.to(':root', {
    '--custom-width': '100%',
    duration: .8,
    ease: Power1.easeOut,
    scrollTrigger: {
        trigger: '.description.a p',
        start: 'top 80%'
    } 
})

gsap.to(':root', {
    '--custom-width2': '100%',
    duration: .8,
    ease: Power1.easeOut,
    scrollTrigger: {
        trigger: '.description.b p',
        start: 'top 80%'
    } 
})



console.log( dzialanieTitles)

const projectParagraphs = document.querySelectorAll('.types-text')

const projectAnimation = () => {
    projectParagraphs.forEach(paragraph => {
        gsap.from(paragraph, {
            duration: 1,
            opacity: 0,
            ease: Power1.easeOut,
            scrollTrigger: {
                trigger: paragraph,
                start: 'top 65%'
            }
        })
    })
}

if (screenWidth >= 900) {
    projectAnimation()
}


    