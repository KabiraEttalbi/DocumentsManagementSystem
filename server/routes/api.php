<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\DocumentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1', 'namespace'=> 'App\Http\Controllers\Api\V1'], function() {
    Route::apiResource('documents', DocumentController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('users', UserController::class);
    Route::post('documents/bulk', ['uses' => 'DocumentController@bulkStore']);
    Route::post('categories/bulk', ['uses' => 'CategoryController@bulkStore']);
    Route::post('users/bulk', ['uses' => 'UserController@bulkStore']);
});
