<?php

namespace App\Http\Requests\V1;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true ;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        if ($method == 'PUT') {
            return [
                'name' => ['required','string',Rule::unique('categories')->ignore($this->category)]
            ];
        } else {
            return [
                'name' => ['sometimes','required','string',Rule::unique('categories')->ignore($this->category)]
            ];
        }

    }

    public function messages(): array
    {
        return [
            'name.unique' => "The category already exists",
        ];
    }
}
