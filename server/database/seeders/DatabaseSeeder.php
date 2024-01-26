<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Category;
use App\Models\Document;
use App\Models\CategoryUser;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory()->count(5)->create();
        // Category::factory()->count(5)->create();
        // Document::factory()
        //     ->count(20)
        //     ->create(['category_id' => Category::inRandomOrder()->first()->id]);
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'admin2023',
            'role' => 0
        ]);
    }
}
