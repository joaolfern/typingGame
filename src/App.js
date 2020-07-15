import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faPlay, faStop, faTrophy } from '@fortawesome/free-solid-svg-icons'

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
        highscore
    } = useWordGame(2)
    console.log('render')

    return (
        <div className='app'>
            <p className='title-label'>How fast do you type?</p>
            <div className='wrapper'>
                <textarea
                    ref={textareaRef}
                    onChange={handleChange}
                    value={text}
                    disabled={running ? false : true}
                    style={!running ? { 'background': 'gray' } : { 'background': '#00b800' }}
                />
                <p className='highscore-label'>
                    <FontAwesomeIcon icon={faTrophy} />-{highscore}
                </p>
            </div>


            <p className='timeRemaining-label'>Time remaining: {timeRemaining}</p>

            <button className='stopButton' onClick={() => startGame()}>
                <FontAwesomeIcon icon={!running && timeRemaining === 0 ? faRedo : running ? faStop : faPlay} />
            </button>
            <p className='wordCount-label'>Word count: {wordCount}</p>
        </div>
    )
}

export default App