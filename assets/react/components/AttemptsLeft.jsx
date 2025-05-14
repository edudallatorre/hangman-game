export default function AttemptsLeft({ attemptsLeft }) {
    return (
        <div className="absolute top-4 left-4 font-bold text-gray-700">
            <p>
                <strong>Attempts left:</strong>
                <span className="text-blue-500"> {attemptsLeft}</span>
            </p>
        </div>
    );
}
