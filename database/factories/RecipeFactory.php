<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Recipe;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'text' => $faker->text($maxNbChars = 200),
        'image' => $faker->randomDigit(10),

    ];
});
