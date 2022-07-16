<?php

namespace App\Repositories;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Film;

class CommentRepository
{

    private function query()
    {
        return Comment::query();
    }

    public function index()
    {
        return $this->query()->with(['user', 'film'])->get();

    }

    public function store(CommentRequest $request, Film $film)
    {
        $data = $request->except('_token');
        $data['user_id'] = auth()->user()->id;
        $data['film_id'] = $request->film_id;
        return $this->query()->create($data);
    }

    public function update(CommentRequest $request, $id)
    {
        $data = $request->except('_token', '_method');

        return $this->query()->find($id)->update($data);

    }

    public function destroy($id)
    {
        return $this->query($id)->delete();
    }

}
