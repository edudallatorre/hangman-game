<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class GameControllerTest extends WebTestCase
{
    public function testCreateNewGame(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/game');

        $this->assertResponseIsSuccessful();

        $response = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('game_id', $response);
        $this->assertArrayHasKey('word', $response);
        $this->assertArrayHasKey('hint', $response);
    }

    public function testGuessLetter(): void
    {
        $client = static::createClient();

        // First, create the game
        $client->request('POST', '/api/game');
        $response = json_decode($client->getResponse()->getContent(), true);
        $gameId = $response['game_id'];

        // Now make a guess with a valid letter
        $client->request('POST', "/api/game/{$gameId}/guess", [], [], [
            'CONTENT_TYPE' => 'application/json',
        ], json_encode(['letter' => 'a']));

        $this->assertResponseIsSuccessful();

        $guessResponse = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('word', $guessResponse);
        $this->assertArrayHasKey('attempts_left', $guessResponse);
        $this->assertArrayHasKey('correct_guesses', $guessResponse);
        $this->assertArrayHasKey('incorrect_guesses', $guessResponse);
    }

    public function testGetGameStatus(): void
    {
        $client = static::createClient();

        // First, create the game
        $client->request('POST', '/api/game');
        $response = json_decode($client->getResponse()->getContent(), true);
        $gameId = $response['game_id'];

        // Retrieve the current game status
        $client->request('GET', "/api/game/{$gameId}");

        $this->assertResponseIsSuccessful();

        $status = json_decode($client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('word', $status);
        $this->assertArrayHasKey('hint', $status);
        $this->assertArrayHasKey('correct_guesses', $status);
        $this->assertArrayHasKey('incorrect_guesses', $status);
        $this->assertArrayHasKey('attempts_left', $status);
    }
}
