const slider = document.querySelector('.slider')

const translateImage = (project, direction) => {

    let position = 0    // current position
    let imageWidth = document.querySelector('.project-images').clientWidth
    
    const slider = document.querySelector(`.slider.${project}`)
    const navDots = document.querySelectorAll(`.dot.${project}`)

    slider.style.transform = `translateX(0)`

    const removeActive = () => {
        let activeDot = document.querySelector(`.active.${project}`)
        activeDot.classList.remove('active')
        navDots[position].classList.add('active')
    }

    var isPaused = false;

    setInterval(() => {
        if(!isPaused) automatic()
    }, 3000)


    const changePosition = () => {
        removeActive()
        slider.style.transform = `translateX(calc((${imageWidth}px + 3rem)*${position}*${direction}))`
    }

    // changing through dots

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isPaused = true

            setTimeout(() => {
                isPaused = false
                clearTimeout(deletePause)
            }, 4000)

            position = index
            changePosition()
        })
    })

    // changing through arrows

    const arrows = document.querySelectorAll(`.project.${project} .arrow`)

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            isPaused = true
            if (index === 1) {
                position--
            }
            if (index === 0 ) {
                position++
            }

            setTimeout(() => {
                isPaused = false
                clearTimeout(deletePause)
            }, 4000)

            if (position === -1) position = 2
            if(position === 3) position = 0
            changePosition()
        })
    })

    // swiper

    var startX, 
        endX;

    slider.addEventListener('touchstart', e => {
        isPaused = true
        startX = e.touches[0].clientX;
    })
    slider.addEventListener('touchmove', e => {
        isPaused = true
        endX = e.touches[0].clientX;
    })
    slider.addEventListener('touchend', () => {
        isPaused = true
        if (startX > endX) {
            position++;
        }

        if (endX > startX) {
            position--;
        }

        setTimeout(() => {
            isPaused = false
            clearTimeout(deletePause)
        }, 4000)

        if (position === -1) position = 2
        if (position === 3) position = 0
        changePosition()
    })

    // constant changing

    const automatic = () => {
        position++
        if(position === 3) position = 0
        imageWidth = document.querySelector('.project-images').clientWidth
        changePosition()
    }

    let callback = () => {
        imageWidth = document.querySelector('.project-images').clientWidth
        changePosition()
        window.removeEventListener('resize', callback)
    }

    window.addEventListener('resize', callback)
}



window.addEventListener('load', () => {
    translateImage('a', -1)
    translateImage('b', -1)
    translateImage('c', -1)
    translateImage('d', -1)
})