<?php

Route::get('/tasks', 'TaskController@index');
Route::get('tasks/{task}', 'TaskController@show');

Route::get('/', 'PostController@index');
Route::get('/post/{post}', 'PostController@show');
