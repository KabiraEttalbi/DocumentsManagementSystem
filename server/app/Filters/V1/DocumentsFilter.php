<?php


namespace App\Filters\V1;

use App\Filters\APIFilter;
use Illuminate\Http\Request;


class DocumentsFilter extends APIFilter {
    protected $safeParams = [
        'name' => ['eq'],
        'visibility' => ['eq', 'lt', 'lte', 'gt', 'gte'],
        'file' => ['eq'],
        'categoryId' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
        'file' => 'file',
        'visibility' => 'visibility',
        'categoryId' => 'category_id',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
    ];

}
