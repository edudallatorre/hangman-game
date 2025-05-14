import { useGame } from '../hooks/useGame';
import Stickman from '../components/Stickman';
import AttemptsLeft from '../components/AttemptsLeft';
import WordHint from '../components/WordHint';
import HiddenWord from '../components/HiddenWord';
import Keyboard from '../components/Keyboard';
import GameStatus from '../components/GameStatus';
import Loading from '../components/Loading';

export default function App() {
    const {
        word, hint, correctGuesses, incorrectGuesses,
        attemptsLeft, loading, guessLetter,
        isGameOver, isGameWon
    } = useGame();

    const handlePlayAgain = () => window.location.reload();

    if (loading) return <Loading />;

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 font-sans">
            <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg relative">
                <AttemptsLeft attemptsLeft={attemptsLeft} />
                <h1 className="text-center my-6 text-2xl font-semibold">Hangman Game</h1>
                <div className="flex justify-center mb-6">
                    <Stickman incorrectGuesses={incorrectGuesses} />
                </div>
                <WordHint hint={hint} />
                <HiddenWord word={word} correctGuesses={correctGuesses} />
                <Keyboard
                    onClick={guessLetter}
                    correctGuesses={correctGuesses}
                    incorrectGuesses={incorrectGuesses}
                    isGameOver={isGameOver}
                    isGameWon={isGameWon}
                />
                <GameStatus
                    isGameOver={isGameOver}
                    isGameWon={isGameWon}
                    word={word}
                    onRestart={handlePlayAgain}
                />
            </div>
        </div>
    );
}
