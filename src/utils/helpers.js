export const circleAnimate = ({event, circleSelector, isTouchEvent}) => {
    try {
        const circle = document.querySelector(circleSelector)

        const eventX = isTouchEvent
            ? event.touches[0].pageX
            : event.pageX

        const eventY = isTouchEvent
            ? event.touches[0].pageY
            : event.pageY

        circle.style.left = eventX - event.currentTarget.offsetLeft + 'px'
        circle.style.top = eventY - event.currentTarget.offsetTop + 'px'
    } catch (e) {
        console.warn(e)
    }
}