<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\EbookController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Marketing Pages
|--------------------------------------------------------------------------
*/

Route::inertia('/', 'Index')->name('home');
Route::inertia('/waarom', 'Waarom')->name('waarom');
Route::inertia('/resultaten', 'Resultaten')->name('resultaten');
Route::inertia('/transformatieformule', 'TransformatieFormule')->name('transformatieformule');
Route::inertia('/faq', 'FAQ')->name('faq');
Route::inertia('/test', 'Test')->name('test');
Route::inertia('/locatie-uden', 'LocatieUden')->name('locatie.uden');
Route::inertia('/locatie-schijndel', 'LocatieSchijndel')->name('locatie.schijndel');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/abonnement', 'Abonnement')->name('abonnement');
Route::inertia('/gratisdownload', 'GratisDownload')->name('gratisdownload');
Route::post('/gratisdownload', [EbookController::class, 'download'])->name('ebook.download');

/*
|--------------------------------------------------------------------------
| Contact Form
|--------------------------------------------------------------------------
*/

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/contact/bedankt', [ContactController::class, 'thanks'])->name('contact.thanks');
