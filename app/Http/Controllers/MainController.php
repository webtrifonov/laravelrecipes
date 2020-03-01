<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class MainController extends Controller
{
    public function index() {
        dump('route : /');
        return view('main');
    }
    public function test() {
        $test = App::getLocale();
        return $test;
    }
}
