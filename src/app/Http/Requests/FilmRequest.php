<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'film_path' => 'required|string',
            'img_path' => 'image',
            'year' => 'required|date_format:Y-m-d|',
            'description' => 'required|string|min:10|max:100',
            'genre' => 'required',
            'genre.*' => 'numeric',

        ];
    }
}
