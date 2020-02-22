<?php
namespace App\Utils;
class Utils
{
    public static function resultJson($dataValue)
    {
        return response()->json([
            'success' => true,
            'results' => (is_array($dataValue))? $dataValue: $dataValue->toArray()
        ]);
    }
    public static function successJson()
    {
        return response()->json(['success' => true]);
    }
}
