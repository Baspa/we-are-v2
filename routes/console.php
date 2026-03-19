<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('send:lead-overview --period=month')->monthlyOn(1, '09:00');