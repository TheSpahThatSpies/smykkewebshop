<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('products', [\App\Http\Controllers\ProductController::class, 'index']);
Route::post('products', [\App\Http\Controllers\ProductController::class, 'store']);
Route::get('products/{id}', [\App\Http\Controllers\ProductController::class, 'show']);
Route::get('products/{id}/edit', [\App\Http\Controllers\ProductController::class, 'edit']);
Route::put('products/{id}/update', [\App\Http\Controllers\ProductController::class, 'update']);
Route::post('products/delete', [\App\Http\Controllers\ProductController::class, 'delete']);


