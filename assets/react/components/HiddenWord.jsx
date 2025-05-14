export default function HiddenWord({ word, correctGuesses }) {
    return (
        <div className="flex justify-center flex-wrap gap-3 mb-8">
            {word.split('').map((letter, idx) => (
                <div key={idx} className={`w-12 h-12 border-b-4 border-blue-500 text-center text-2xl font-bold ${correctGuesses.includes(letter) ? 'text-gray-900' : 'text-transparent'}`}>
                    {letter}
                </div>
            ))}
        </div>
    );
}
