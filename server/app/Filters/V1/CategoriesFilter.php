<?php


namespace App\Filters\V1;

use App\Filters\APIFilter;
use Illuminate\Http\Request;


class CategoriesFilter extends APIFilter {
    protected $safeParams = [
        'name' => ['eq'],
    ];

    protected $columnMap = [
        'name'=> 'name',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
    ];

}
