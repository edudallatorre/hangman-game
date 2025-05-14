export default function GameStatus({ isGameWon, isGameOver, word, onRestart }) {
    if (!isGameOver && !isGameWon) return null;

    return (
        <div className="text-center">
            {isGameWon && <p className="text-green-600 font-bold">🎉 You won!</p>}
            {isGameOver && <p className="text-red-600 font-bold">💀 Game Over! The word was: {word}</p>}
            <button
                onClick={onRestart}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-bold text-lg"
            >
                {isGameWon ? 'Next Game' : 'Play Again'}
            </button>
        </div>
    );
}
