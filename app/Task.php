<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // public static function incomplete()
    // {
    //   return static::where('completed', 0)->get();
    // }

    #Task::incomplete();
    /*
     *I could pass others params to my function. Query scope is just a wrapper around a particular query
     */
    public function scopeIncomplete($query)
    {
      return $query->where('completed', 0)->get();
    }
}
