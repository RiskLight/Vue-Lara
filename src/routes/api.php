<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
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

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::get('user', [LoginController::class, 'user']);

});


Route::group([
    'as' => 'films.',
    'prefix' => 'films',
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

    Route::group([
        'as' => 'add-comment.',
        'prefix' => 'add-comment',

    ], function () {
        Route::post('/', [CommentsController::class, 'store']);
    });

    Route::group([
        'as' => 'get-comments.',
        'prefix' => 'get-comments',

    ], function () {
        Route::get('/{comment}', [CommentsController::class, 'show']);
    });

    Route::group([
        'as' => 'update-comment.',
        'prefix' => 'update-comment',

    ], function () {
        Route::patch('/{comment}', [CommentsController::class, 'update']);
    });

        Route::group([
        'as' => 'favorite.',
        'prefix' => 'favorite',
            'middleware' => 'auth:sanctum'

        ], function () {
        Route::get('/{id}', [FavoriteController::class, 'show']);
    });

    Route::group([
        'as' => 'delete-favorite.',
        'prefix' => 'delete-favorite',
        'middleware' => 'auth:sanctum'

    ], function () {
        Route::delete('/{id}', [FavoriteController::class, 'destroy']);
    });

    Route::group([
        'as' => 'add-favorite.',
        'prefix' => 'add-favorite',
        'middleware' => 'auth:sanctum'

    ], function () {
        Route::post('/', [FavoriteController::class, 'store']);
    });

    Route::group([
        'as' => 'search.',
        'prefix' => 'search',
    ], function () {
        Route::get('/', [FilmsController::class, 'search']);
    });

    Route::group([
        'as' => 'years.',
        'prefix' => 'years',
    ], function () {
        Route::get('/', [FilmsController::class, 'years']);
    });

});

Route::group([
    'as' => 'genres.',
    'prefix' => 'genres'
], function () {
    Route::get('/', [GenresController::class, 'indexAll']);
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
    'middleware' => 'auth:sanctum'
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
        'as' => 'update-film.',
        'prefix' => 'update-film',

    ], function () {
        Route::patch('/{film}', [FilmsController::class, 'update']);
    });

    Route::group([
        'as' => 'delete-user.',
        'prefix' => 'delete-user'
    ], function () {
        Route::delete('/{user}', [UsersController::class, 'destroy']);
    });

    Route::group([
        'as' => 'update-user.',
        'prefix' => 'update-user'
    ], function () {
        Route::patch('/{user}', [UsersController::class, 'update']);
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

        Route::group([
        'as' => 'comments.',
        'prefix' => 'comments',

    ], function () {
        Route::get('/', [CommentsController::class, 'index']);
    });

    Route::group([
        'as' => 'delete-comment.',
        'prefix' => 'delete-comment',

    ], function () {
        Route::delete('/{comment}', [CommentsController::class, 'destroy']);
    });

});



