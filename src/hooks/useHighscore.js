import { useState } from 'react'

function useHighscore() {
    const [highscore, setHighscore] = useState(localStorage.highscore || 0)

    function updateHighscore(newHighscore) {
        localStorage.setItem('highscore', newHighscore)
        setHighscore(newHighscore)
    }

    return [highscore, updateHighscore]
}

export default useHighscore 