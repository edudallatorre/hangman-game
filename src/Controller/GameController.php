<?php

namespace App\Controller;

use App\Entity\Game;
use App\Service\WordGenerator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    private WordGenerator $wordGenerator;

    public function __construct(WordGenerator $wordGenerator)
    {
        $this->wordGenerator = $wordGenerator;
    }

    /**
     * Creates a new hangman game
     * Supports GET (for simple testing) and POST
     */
    #[Route('/api/game', name: 'new_game', methods: ['GET', 'POST'])]
    public function newGame(EntityManagerInterface $em): JsonResponse
    {
        $game = new Game();

        // Now using array with 'word' and 'hint'
        $wordData = $this->wordGenerator->getRandomWord();
        $game->setWord($wordData['word']);
        $game->setHint($wordData['hint']);

        $game->setAttemptsLeft(6);
        $game->setCorrectGuesses([]);
        $game->setIncorrectGuesses([]);

        $em->persist($game);
        $em->flush();

        return $this->json([
            'game_id' => $game->getId(),
            'word' => $game->getWord(),
            'hint' => $game->getHint()
        ]);
    }

    /**
     * Submits a letter to guess in the game
     */
    #[Route('/api/game/{id}/guess', name: 'guess_letter', methods: ['POST'])]
    public function guessLetter(Request $request, Game $game, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $letter = $data['letter'] ?? null;

        if (!$letter || strlen($letter) !== 1) {
            return $this->json(['error' => 'Invalid letter.'], 400);
        }

        $letter = strtolower($letter); // normalize
        $word = strtolower($game->getWord());
        $correctGuesses = $game->getCorrectGuesses();
        $incorrectGuesses = $game->getIncorrectGuesses();

        if (strpos($word, $letter) !== false) {
            if (!in_array($letter, $correctGuesses)) {
                $correctGuesses[] = $letter;
            }
        } else {
            if (!in_array($letter, $incorrectGuesses)) {
                $incorrectGuesses[] = $letter;
                $game->setAttemptsLeft($game->getAttemptsLeft() - 1);
            }
        }

        $game->setCorrectGuesses($correctGuesses);
        $game->setIncorrectGuesses($incorrectGuesses);

        $em->flush();

        return $this->json([
            'word' => $game->getWord(),
            'attempts_left' => $game->getAttemptsLeft(),
            'correct_guesses' => $correctGuesses,
            'incorrect_guesses' => $incorrectGuesses,
            'hint' => $game->getHint()
        ]);
    }

    /**
     * Returns the current status of the game
     */
    #[Route('/api/game/{id}', name: 'get_game', methods: ['GET'])]
    public function getGameStatus(Game $game): JsonResponse
    {
        return $this->json([
            'word' => $game->getWord(),
            'attempts_left' => $game->getAttemptsLeft(),
            'correct_guesses' => $game->getCorrectGuesses(),
            'incorrect_guesses' => $game->getIncorrectGuesses(),
            'hint' => $game->getHint()
        ]);
    }
}
