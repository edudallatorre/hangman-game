import { useEffect, useState } from 'react';

export function useGame() {
    const [gameId, setGameId] = useState(null);
    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);
    const [attemptsLeft, setAttemptsLeft] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/game', { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                setGameId(data.game_id);
                fetch(`/api/game/${data.game_id}`)
                    .then(res => res.json())
                    .then(game => {
                        setWord(game.word.toUpperCase());
                        setCorrectGuesses(game.correct_guesses.map(c => c.toUpperCase()));
                        setIncorrectGuesses(game.incorrect_guesses.map(c => c.toUpperCase()));
                        setAttemptsLeft(game.attempts_left);
                        setHint(game.hint || '');
                        setLoading(false);
                    });
            });
    }, []);

    const guessLetter = (letter) => {
        if (correctGuesses.includes(letter) || incorrectGuesses.includes(letter)) return;
        fetch(`/api/game/${gameId}/guess`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ letter: letter.toLowerCase() })
        }).then(() => {
            fetch(`/api/game/${gameId}`)
                .then(res => res.json())
                .then(data => {
                    setCorrectGuesses(data.correct_guesses.map(c => c.toUpperCase()));
                    setIncorrectGuesses(data.incorrect_guesses.map(c => c.toUpperCase()));
                    setAttemptsLeft(data.attempts_left);
                });
        });
    };

    const isGameOver = attemptsLeft <= 0;
    const isGameWon = word.split('').every(letter => correctGuesses.includes(letter));

    return {
        word, hint, correctGuesses, incorrectGuesses,
        attemptsLeft, loading, guessLetter,
        isGameOver, isGameWon
    };
}