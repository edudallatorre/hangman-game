<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameRepository::class)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $word = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $hint = null;

    #[ORM\Column(type: 'integer')]
    private ?int $attemptsLeft = null;

    #[ORM\Column(type: 'array')]
    private array $correctGuesses = [];

    #[ORM\Column(type: 'array')]
    private array $incorrectGuesses = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWord(): ?string
    {
        return $this->word;
    }

    public function setWord(string $word): self
    {
        $this->word = $word;

        return $this;
    }

    public function getHint(): ?string
    {
        return $this->hint;
    }

    public function setHint(?string $hint): self
    {
        $this->hint = $hint;

        return $this;
    }

    public function getAttemptsLeft(): ?int
    {
        return $this->attemptsLeft;
    }

    public function setAttemptsLeft(int $attemptsLeft): self
    {
        $this->attemptsLeft = $attemptsLeft;

        return $this;
    }

    public function getCorrectGuesses(): array
    {
        return $this->correctGuesses;
    }

    public function setCorrectGuesses(array $correctGuesses): self
    {
        $this->correctGuesses = $correctGuesses;

        return $this;
    }

    public function getIncorrectGuesses(): array
    {
        return $this->incorrectGuesses;
    }

    public function setIncorrectGuesses(array $incorrectGuesses): self
    {
        $this->incorrectGuesses = $incorrectGuesses;

        return $this;
    }
}
