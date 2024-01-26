<?php

namespace App\Http\Requests\V1;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class BulkStoreDocumentRequest extends FormRequest
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
            '*.name' => ['required','string',Rule::unique('documents')->where(function ($query) {
                $query->whereNull('deleted_at');
            })],
            '*.file' => ['required','mimes:docx,pdf,pptx,csv,txt,xlsx'],
            '*.categoryId' => ['required'],
            '*.visibility' => ['required'],
        ];
    }

    protected function prepareForValidation()
    {
        $data = [];

        foreach ($this->toArray() as $obj) {
            $obj['category_id'] = $obj['categoryId'] ?? null;
            $data[] = $obj;
        }

        // Set the modified data back to the request
        $this->merge($data);
    }
}
