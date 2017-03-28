<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
  # return view('about')->with('name', 'Ronaiza Cardoso');
  $name = 'Ronaiza da Costa Cardoso';
  return view('about', compact('name'));
});

Route::get('/tasks', function () {
  $tasks = [
    'learnig lavarel',
    'make some money',
    'raise a child'
  ];
  return view('tasks', compact('tasks'));
});
