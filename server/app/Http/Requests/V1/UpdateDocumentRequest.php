<?php

namespace App\Http\Requests\V1;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDocumentRequest extends FormRequest
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
        $method = $this->method();
        if ($method == 'PUT') {
            return [
                'name' => ['required','string',Rule::unique('documents')->ignore($this->document)],
                'file' => 'required|mimes:docx,pdf,pptx,csv,txt,xlsx',
                'category_id' => 'required',
                'visibility' => 'required',
            ];
        } else {
            return [
                'name' => ['sometimes','required','string',Rule::unique('documents')->ignore($this->document)],
                'file' => ['sometimes','required','mimes:docx,pdf,pptx,csv,txt,xlsx'],
                'category_id' => ['sometimes','required'],
                'visibility' => ['sometimes','required'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        if ($this->categoryId) {
            $this -> merge([
                'category_id' => $this->categoryId,
            ]);
        }

    }

}
