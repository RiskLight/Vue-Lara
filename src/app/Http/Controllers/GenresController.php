<?php

namespace App\Http\Controllers;

use App\Contracts\FilmServiceContract;
use App\Contracts\GenreServiceContract;
use App\Http\Resources\GenreResource;
use App\Models\Genre;
use App\Models\Role;
use App\Models\Standart;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GenresController extends Controller
{

    private $service;

    public function __construct(GenreServiceContract $service)
    {
        $this->service = $service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $genres = $this->service->index();
        return response()->json($genres);
    }

    public function indexAll()
    {
        return GenreResource::collection(Genre::all());
    }

    public function standardAll() {
        $standards = Standart::all();
        return response()->json($standards);
    }

    public function getRoles() {
        $roles = Role::all();
        return response()->json($roles);
    }
}
