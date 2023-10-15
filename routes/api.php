<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator; // Importe Validator
use Illuminate\Support\Str; // Importe Str
use App\Models\User;
use Illuminate\Support\Facades\Auth; // Importe Auth

// ...

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', function(Request $request) {
    // Valide os dados de entrada
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6',
    ]);

    if ($validator->fails()) {
        // Retorne uma resposta de erro com a mensagem de validação
        return response()->json(['message' => 'Erro de validação, tente novamente', 'errors' => $validator->errors()], 400);
    }

    // Crie o novo usuário
    $user = User::create([
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'password' => bcrypt($request->input('password')),
    ]);

    // Autentique o usuário
    Auth::login($user);

    return response()->json(['message' => 'Registro bem-sucedido', 'user' => $user]);
});

Route::post('/login', function(Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = User::where('email', $request->input('email'))->first();
        $token = Str::random(60);

        return response()->json(['token' => $token], 200);
    }

    return response()->json(['error' => 'Login inválido, tente novamente'], 401);
});

Route::post('/logout', function(Request $request) {
    auth()->logout();
    return response()->json(['message' => 'Logout bem-sucedido']);
});
