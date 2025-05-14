<?php

namespace App\Service;

class WordGenerator
{
    private $words = [
        ['word' => 'syntax', 'hint' => 'Where one missing semicolon ruins your entire day'],
        ['word' => 'git', 'hint' => 'Because saving files normally is too mainstream'],
        ['word' => 'loop', 'hint' => 'Where you realise your code has become sentient'],
        ['word' => 'null', 'hint' => 'The black hole of programming'],
        ['word' => 'boolean', 'hint' => 'True love or false hope?'],
        ['word' => 'cli', 'hint' => 'Because GUIs are for the weak (or sane)'],
        ['word' => 'legacy', 'hint' => 'Code so old, it’s written in ancient runes'],
        ['word' => 'crash', 'hint' => 'The software equivalent of “nope”'],
        ['word' => 'gohorse', 'hint' => 'Project management style: deploy first, ask questions never']
    ];

    public function getRandomWord(): array
    {
        return $this->words[array_rand($this->words)];
    }
}
