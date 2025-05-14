# Hangman Game

## Overview
This project is an implementation of the classic **Hangman** game. The game follows the standard rules, where the player is tasked with guessing a random word by suggesting letters within a limited number of guesses.

![Hangman Game GIF](assets/img/hangman-game.gif)

## Technologies
- **Backend**: Symfony
- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Database**: MySQL

## Installation

Follow these steps to get the application running on your local machine.

### Prerequisites
- PHP (with Symfony installed)
- Node.js and npm
- MySQL

### Step 1: Install Dependencies

#### Backend (Symfony)
Install PHP dependencies:
```bash
composer install
```

#### Frontend (React)

Install npm dependencies:
```bash
npm install
```

### Step 2: Set Up the Database
Make sure you have MySQL or MariaDB installed on your system. This project has been tested with MariaDB 10.4.28.

To check your version, run the following command:

```dotenv
mysql --version
```

Update the .env file if necessary for your database connection settings:
```dotenv
DATABASE_URL="mysql://root@127.0.0.1:3306/hangman_game?serverVersion=10.4.28-MariaDB&charset=utf8mb4"
```

### Step 3: Run Database Migrations

Run the database migrations to create the necessary tables and schema for the game:

```bash
php bin/console doctrine:migrations:migrate
```

### Step 4: Build the Frontend

Once dependencies are installed, build the frontend assets:

```bash
npm run build
```

### Step 5: Run the Application

Start the Symfony server:

```bash
symfony server:start
```

Your application should now be running.

## Gameplay Instructions

* The game interface will be displayed in your browser, where you can start your game.
* Guess the letters to solve the word before you run out of attempts and make use of the hints.
* Once the word is correctly guessed, you win and can move on to the next game or if you lose, you can play again. Good luck!