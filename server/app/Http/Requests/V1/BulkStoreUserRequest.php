<?php

namespace App\Http\Requests\V1;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class BulkStoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            '*.name' => ['required', 'string', 'max:255'],
            '*.role' => ['sometimes' ,'required', 'integer'],
            '*.email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($this->user)],
            '*.password' => ['required', 'min:8'],
            '*.categories' => ['required', 'array']
        ];
    }

    protected function prepareForValidation()
    {
        $data = [];

        foreach ($this->toArray() as $obj) {
            $obj['category_id'] = $obj['categoryId'] ?? null;

            $data[] = $obj;
        }

        $this->merge($data);

    }
}
