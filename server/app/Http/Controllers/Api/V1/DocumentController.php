<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Document;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Filters\V1\DocumentsFilter;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\V1\DocumentResource;
use App\Http\Resources\V1\DocumentCollection;
use App\Http\Requests\V1\StoreDocumentRequest;
use App\Http\Requests\V1\UpdateDocumentRequest;
use App\Http\Requests\V1\BulkStoreDocumentRequest;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new DocumentsFilter();
        $queryItems = $filter -> transform($request);

        $documents = Document::where($queryItems);

        return new DocumentCollection($documents->paginate()->appends($request->query()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
        $validatedData = $request->validated();
        $slug = Str::slug($validatedData['name'], '-') . '.' . $validatedData['file']->extension();
        $validatedData['file']->move(public_path('files'), $slug);
        $validatedData['file'] = $slug;
        return new DocumentResource(Document::create($validatedData));
    }

    /**
     * Store a newly created resources list in storage.
     */
    public function bulkStore(BulkStoreDocumentRequest $request)
    {
        $bulkData = $request->validated();

        collect($bulkData)->map(function ($data) {
            // Generate a unique slug for each document
            $slug = Str::slug($data['name'], '-') . '.' . $data['file']->extension();

            // Move the file to the public/files directory with the generated slug
            $data['file']->move(public_path('files'), $slug);

            // Update the 'file' attribute to store the file path or URL
            $data['file'] = $slug;

            $data['category_id'] = $data['categoryId'];
            // Exclude categoryId from the fields
            unset($data['categoryId']);

            // Create and persist the document
            Document::create($data);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        return new DocumentResource($document);
    }

    /**
     * Download the specified resource.
     */
    public function download($document)
    {
        $file = new DocumentResource($document);

        // Get the full path to the file
        $filePath = public_path('files') . '/' . $file->file;

        // Check if the file exists
        if (file_exists($filePath)) {
            // Return the file as a download response
            return response()->download($filePath);
        } else {
            // If the file does not exist, you might want to handle it accordingly
            return response()->json(['error' => 'File not found'], 404);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        $validatedData = $request->validated();

        if ($request->hasFile('file')) {
            $slug = Str::slug($validatedData['name'], '-') . '.' . $validatedData['file']->extension();

            // Delete the old file if it exists
            if ($document->file) {
                $filePath = public_path('files/' . $document->file);
                if (File::exists($filePath)) {
                    File::delete($filePath);
                }
            }

            // Store the new file
            $validatedData['file']->move(public_path('files'), $slug);
            $validatedData['file'] = $slug;
        }

        $document->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        $document->delete();
        $filePath = public_path('files/' . $document->file);
        if (File::exists($filePath)) {
            File::delete($filePath);
        }
    }
}
