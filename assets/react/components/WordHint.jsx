export default function WordHint({ hint }) {
    if (!hint) return null;
    return (
        <div className="mb-6 text-center">
            <p className="font-bold mb-1">Hint</p>
            <div className="bg-teal-500 inline-block px-4 py-1 rounded-full text-white font-bold">
                {hint}
            </div>
        </div>
    );
}
