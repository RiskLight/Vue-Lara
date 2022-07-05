<?php

use App\Http\Controllers\CommentsController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\FilmsController;
use App\Http\Controllers\GenresController;
use App\Http\Controllers\RateController;
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
    'prefix' => 'films'
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
        'as' => 'comments.',
        'prefix' => '{film}/comments',

    ], function () {
        Route::post('/', [CommentsController::class, 'store'])->name('store');
        Route::put('/{comment}', [CommentsController::class, 'update'])->name('update');
    });

    Route::group([
        'as' => 'favorite.',
        'prefix' => 'favorite',
    ], function () {
        Route::get('/my-films', [FavoriteController::class, 'index'])->name('index');
        Route::post('/', [FavoriteController::class, 'store'])->name('store');
        Route::delete('/destroy/{film}', [FavoriteController::class, 'destroy'])->name('destroy');
    });

    Route::group([
        'as' => 'rate.',
        'prefix' => 'rate'
    ], function () {
//        Route::post('/', [RateController::class, 'store'])->name('store');
        Route::get('/{film}', [RateController::class, 'show']);
    });

//    Route::group([
//        'as' => 'rate.',
//        'prefix' => 'rate'
//    ], function () {
//        Route::post('/', [RateController::class, 'store'])->name('store');
//        Route::get('/get/{film}', [RateController::class, 'show'])->name('show');
//    });

    Route::get('/search', [FilmsController::class, 'search'])->name('search');
    Route::get('/sort', [FilmsController::class, 'sort'])->name('sort');

});

Route::group([
    'as' => 'genres.',
    'prefix' => 'genres'
], function () {
    Route::get('/', [GenresController::class, 'indexAll'])->name('genres');
});
