<?php

use App\Http\Controllers\CommentsController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\FilmsController;
use App\Http\Controllers\GenresController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'as' => 'films.',
    'prefix' => 'films',
//    'middleware' => 'auth:sanctum'
], function () {

    Route::group([
        'as' => 'content.',
        'prefix' => 'content'
    ], function () {
        Route::get('/{standartId?}/{genreId?}', [FilmsController::class, 'indexFilms']);
    });

    Route::group([
        'as' => 'show.',
        'prefix' => 'show'
    ], function () {
        Route::get('/{film}', [FilmsController::class, 'show']);
    });


    Route::group([
        'as' => 'rate.',
        'prefix' => 'rate'
    ], function () {
        Route::get('/{film}', [RateController::class, 'show']);
    });

    Route::group([
        'as' => 'post-rate.',
        'prefix' => 'post-rate'
    ], function () {
        Route::post('/', [RateController::class, 'store']);
    });

});

Route::group([
    'as' => 'genres.',
    'prefix' => 'genres'
], function () {
    Route::get('/', [GenresController::class, 'indexAll'])->name('genres');
});

Route::group([
    'as' => 'standard.',
    'prefix' => 'standard'
], function () {
    Route::get('/', [GenresController::class, 'standardAll']);
});

Route::group([
        'as' => 'users.',
        'prefix' => 'users'
    ], function () {
        Route::get('/', [UsersController::class, 'index']);

    });

Route::group([
    'as' => 'admin.',
    'prefix' => 'admin/',
//    'middleware' => 'auth:sanctum'
], function () {
    Route::group([
        'as' => 'films.',
        'prefix' => 'films'
    ], function () {
        Route::post('/', [FilmsController::class, 'store']);
    });
    Route::group([
        'as' => 'destroy.',
        'prefix' => 'destroy'
    ], function () {
        Route::delete('/{film}', [FilmsController::class, 'destroy']);
    });

    Route::group([
        'as' => 'user.',
        'prefix' => 'user'
    ], function () {
        Route::get('/{user}', [UsersController::class, 'edit']);
    });

    Route::group([
        'as' => 'add.',
        'prefix' => 'add'
    ], function () {
        Route::post('/', [UsersController::class, 'store']);
    });

    Route::group([
        'as' => 'delete-user.',
        'prefix' => 'delete-user'
    ], function () {
        Route::delete('/{user}', [UsersController::class, 'destroy']);
    });

    Route::group([
        'as' => 'users.',
        'prefix' => 'users'
    ], function () {
        Route::get('/', [UsersController::class, 'index']);

    });

    Route::group([
        'as' => 'roles.',
        'prefix' => 'roles'
    ], function () {
        Route::get('/', [GenresController::class, 'getRoles']);

    });
});


