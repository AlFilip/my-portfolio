import {useEffect, useState} from 'react';

export const getCircleSpanStyle = (event) => {
    try {
        const eventX = event.touches
            ? event.touches[0].pageX
            : event.pageX

        const eventY = event.touches
            ? event.touches[0].pageY
            : event.pageY

        return {
            left: eventX - event.currentTarget.offsetLeft + 'px',
            top: eventY - event.currentTarget.offsetTop + 'px',
        }
    } catch (e) {
        console.warn(e)
    }
}

export const useOpacityAnimate = (ref, transition) => {
    const [isShowed, setIsShowed] = useState(false)
    useEffect(() => {
        const scrollHandle = () => {
            if (ref.current && !isShowed) {
                const cardTop = ref.current.offsetTop
                const pageBottom = window.pageYOffset + window.innerHeight
                if (cardTop < pageBottom) {
                    setIsShowed(true)
                }
            }
        }
        window.addEventListener('scroll', scrollHandle)
        scrollHandle()
        return () => {
            window.removeEventListener('scroll', scrollHandle)
        }
    }, [isShowed, ref])

    return {
        transition: transition || '1000ms ease 200ms',
        opacity: isShowed ? 1 : 0,
    }
}