const Stickman = ({ incorrectGuesses }) => {
    const maxErrors = 6; // Maximum number of incorrect guesses

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Frame */}
                <path
                    d="M 20 180 L 20 20 L 120 20 L 120 50"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                />
                
                {/* Rope */}
                {incorrectGuesses.length > 0 && (
                    <path
                        d="M 120 20 L 120 50"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Head */}
                {incorrectGuesses.length > 0 && (
                    <circle
                        cx="120"
                        cy="70"
                        r="20"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Body */}
                {incorrectGuesses.length > 1 && (
                    <path
                        d="M 120 90 L 120 120"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Right arm */}
                {incorrectGuesses.length > 2 && (
                    <path
                        d="M 120 90 L 140 110"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Left arm */}
                {incorrectGuesses.length > 3 && (
                    <path
                        d="M 120 90 L 100 110"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Right leg */}
                {incorrectGuesses.length > 4 && (
                    <path
                        d="M 120 120 L 130 140"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}

                {/* Left leg */}
                {incorrectGuesses.length > 5 && (
                    <path
                        d="M 120 120 L 110 140"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                    />
                )}
            </svg>
        </div>
    );
};

export default Stickman;
