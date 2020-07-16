import { useState, useEffect, useRef, useContext } from 'react'

import { ThemeContext } from '../context/themeContext'

import useHighscore from './useHighscore'

function useWordGame(startingTime) {

    const textareaRef = useRef(null)

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [running, setRunning] = useState(false)
    const [wordCount, setWordCount] = useState('?')
    const [highscore, updateHighscore] = useHighscore()


    let timer

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.split(' ')
        const score = wordsArr.filter(word => word !== ' ').length

        if (score > highscore)
            updateHighscore(score)

        return score
    }

    function reduceTimer() {
        timer = setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    }

    useEffect(() => {
        if (running)
            if (timeRemaining > 0) {
                reduceTimer()
            }
            else {
                endGame()
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining, running])

    async function startGame() {
        if (running) {
            await setRunning(false)
        }
        else {
            await setRunning(true)
            textareaRef.current.focus()
        }
        clearTimeout(timer)

        setTimeRemaining(startingTime)
        setWordCount('?')
        setText('')
    }

    function endGame() {
        const score = calculateWordCount(text)
        console.log('here')
        setWordCount(score)
        setRunning(false)
    }

    return {
        textareaRef,
        handleChange,
        text,
        running,
        timeRemaining,
        startGame,
        wordCount,
        highscore,
        theme,
        toggleTheme
    }
}

export default useWordGame