import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faPlay, faStop, faTrophy, faFillDrip } from '@fortawesome/free-solid-svg-icons'

import useWordGame from './hooks/useWordGame'

function App() {
    const {
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
    } = useWordGame(15)
    console.log('render')

    return (
        <div className={`fillPage ${theme}-theme`}>
            <div className='app'>

                <FontAwesomeIcon icon={faFillDrip} className={`themeButton ${theme}-theme`} onClick={() => toggleTheme()} />


                <p className='title-label'>How fast do you type?</p>
                <div className='wrapper'>
                    <textarea
                        ref={textareaRef}
                        onChange={handleChange}
                        value={text}
                        disabled={running ? false : true}
                        className={running ? `${theme}-component` : 'disabled-component'}
                    />
                    <p className='highscore-label'>
                        <FontAwesomeIcon icon={faTrophy} />-{highscore}
                    </p>
                </div>

                <p className='timeRemaining-label'>Time remaining: {timeRemaining}</p>

                <button className={`stopButton ${theme}-component`} onClick={() => startGame()}>
                    <FontAwesomeIcon icon={!running && timeRemaining === 0 ? faRedo : running ? faStop : faPlay} />
                </button>
                <p className='wordCount-label'>Word count: {wordCount}</p>
            </div>
        </div>
    )
}

export default App