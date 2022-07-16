<?php

namespace App\Http\Controllers;

use App\Contracts\FavoriteServiceContract;
use App\Models\Film;
use App\Models\FilmUser;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{

    private $service;

    public function __construct(FavoriteServiceContract $service)
    {
        $this->service = $service;

    }
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index()
    {
        $films = $this->service->index();

       return view('site.favorite', ['films' => $films]);
    }


    public function show($id)
    {
        $films = Film::whereHas('users', function (Builder $query) use ($id) {
            $query->where('user_id', $id);
        })->get();

        return response()->json($films);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $this->service->store($request);

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $this->service->destroy($id);

        return response()->json();
    }
}
