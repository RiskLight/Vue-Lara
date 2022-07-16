<?php

namespace App\Http\Controllers;

use App\Contracts\CommentServiceContract;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Film;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentsController extends Controller
{

    private $service;

    public function __construct(CommentServiceContract $service)
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
        $comments = $this->service->index();
        return response()->json($comments);
    }

    public function show($id) {
        $comments = Comment::where('film_id', $id)->with('user')->get();
        return response()->json($comments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CommentRequest $request
     * @param Film $film
     * @return JsonResponse
     */
    public function store(CommentRequest $request, Film $film)
    {

        $this->service->store($request, $film);
        return response()->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CommentRequest $request
     * @param $film
     * @param int $id
     * @return RedirectResponse
     */
    public function update(CommentRequest $request, $film, $id)
    {
        $this->service->update($request, $film, $id);
        if (auth()->user()->role_id === 1) {
            return redirect()->route('admin.comments.index');
        }
        return redirect()->route('films.content.show', $film);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return RedirectResponse
     */
    public function destroy($id)
    {
        $this->service->destroy($id);
        return redirect()->route('admin.comments.index');
    }
}
