<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
           [
               'name' => 'Евгений',
               'email' => 'evgeniy@gmail.com',
               'password' => bcrypt('123456'),
               'created_at' => Carbon::now(),
               'updated_at' => Carbon::now(),
           ],[
                'name' => ' Александр',
                'email' => 'alex@gmail.com',
                'password' => bcrypt('123456'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
