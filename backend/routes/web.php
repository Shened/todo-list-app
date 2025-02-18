<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

// Página inicial padrão do Laravel
Route::get('/', function () {
    return view('welcome');
});

// Grupo de rotas para a API de Tarefas
Route::prefix('api')->middleware('api')->group(function () {
    Route::get('/tasks', [TaskController::class, 'index']);
    Route::post('/tasks', [TaskController::class, 'store']);
    Route::put('/tasks/{id}', [TaskController::class, 'update']);
    Route::delete('/tasks/{id}', [TaskController::class, 'destroy']);
});
