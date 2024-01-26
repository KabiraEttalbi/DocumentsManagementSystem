<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Filters\V1\UsersFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\UserResource;
use App\Http\Resources\V1\UserCollection;
use App\Http\Requests\V1\StoreUserRequest;
use App\Http\Requests\V1\UpdateUserRequest;
use App\Http\Requests\V1\BulkStoreUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new UsersFilter();
        $queryItems = $filter -> transform($request);

        $includeCategories = $request -> query('includeCategories');
        $users = User::where($queryItems);

        if ($includeCategories) {
            $users = $users -> with('categories');
        }
        return new UserCollection($users->paginate()->appends($request->query()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $categories = $request->input('categories');
        $user = User::create($request->all());
        $user->categories()->attach($categories);
        return new UserResource($user);
    }


    /**
     * Store a newly created resources list in storage.
     */
    public function bulkStore(BulkStoreUserRequest $request)
    {
        $bulkData = $request->validated();

        // Iterate through each user in the 'users' array
        foreach ($bulkData as $data) {
            // Extract the 'categories' from user data
            $categories = $data['categories'];

            // Create the user
            $user = User::create($data);

            // Attach categories to the user
            $user->categories()->attach($categories);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(User $user, Request $request)
    {
        $includeCategories = $request -> query('includeCategories');

        if ($includeCategories) {
            return new UserResource($user->loadMissing('categories'));
        }

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $request->validated();
        $user->update($request->all());
        $categories = $request->input('categories');
        $user->categories()->sync($categories);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
    }
}
