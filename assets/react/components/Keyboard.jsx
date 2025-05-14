const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Keyboard({ onClick, correctGuesses, incorrectGuesses, isGameOver, isGameWon }) {
    return (
        <div className="grid grid-cols-7 gap-2 mb-8">
            {ALPHABET.map(letter => {
                const isCorrect = correctGuesses.includes(letter);
                const isIncorrect = incorrectGuesses.includes(letter);
                const isUsed = isCorrect || isIncorrect;

                return (
                    <button
                        key={letter}
                        onClick={() => onClick(letter)}
                        disabled={isUsed || isGameOver || isGameWon}
                        className={`w-12 h-12 rounded-full border-2 font-bold text-lg cursor-pointer ${isCorrect ? 'border-blue-500 bg-blue-100 text-blue-500' : 
                            isIncorrect ? 'border-red-500 bg-red-100 text-red-500' : 'border-gray-300 bg-white text-gray-800'} ${isUsed ? 'cursor-not-allowed' : ''}`}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
}
