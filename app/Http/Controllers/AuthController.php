<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Valide os dados do usuário (por exemplo, nome, email, senha)
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);
    
        // Crie o novo usuário
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
    
        // Autentique o usuário
        auth()->login($user);
    
        return response()->json(['message' => 'Registro bem-sucedido', 'user' => $user]);
    }
    
    public function login(Request $request)
    {
        // Valide os dados de login
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);
    
        if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => 'Login bem-sucedido', 'user' => auth()->user()]);
        }
    
        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }
    
    public function logout(Request $request)
    {
        auth()->logout();
        return response()->json(['message' => 'Logout bem-sucedido']);
    }
    
}
