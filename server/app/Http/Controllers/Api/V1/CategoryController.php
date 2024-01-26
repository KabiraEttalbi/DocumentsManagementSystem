<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Category;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Filters\V1\CategoriesFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\CategoryResource;
use App\Http\Resources\V1\CategoryCollection;
use App\Http\Requests\V1\StoreCategoryRequest;
use App\Http\Requests\V1\UpdateCategoryRequest;
use App\Http\Requests\V1\BulkStoreCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CategoriesFilter();
        $queryItems = $filter -> transform($request);

        $includeDocuments = $request -> query('includeDocuments');
        $includeUsers = $request -> query('includeUsers');
        $categories = Category::where($queryItems);

        if ($includeDocuments) {
            $categories = $categories -> with('documents');
        }
        if ($includeUsers) {
            $categories = $categories -> with('users');
        }
        return new CategoryCollection($categories->paginate()->appends($request->query()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $request->validated();
        return new CategoryResource(Category::create($request->all()));
    }

    /**
     * Store a newly created resources list in storage.
     */
    public function bulkStore(BulkStoreCategoryRequest $request)
    {
        $bulkData = $request->validated();

        collect($bulkData)->map(function ($data) {
            // Create each category individually to trigger Sluggable trait
            return Category::create($data);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category, Request $request)
    {
        $includeDocuments = $request -> query('includeDocuments');
        $includeUsers = $request -> query('includeUsers');

        if ($includeDocuments) {
            return new CategoryResource($category->loadMissing('documents'));
        }
        if ($includeUsers) {
            return new CategoryResource($category->loadMissing('users'));
        }
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $request->validated();
        $category->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }
}
