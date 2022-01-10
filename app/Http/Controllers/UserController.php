<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return inertia('Users/Index', [
            'users' => User::latest()->paginate(10),
            'can_add_user' => Auth::user()->can('add_user'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function store(UserRequest $request)
    {
        $this->authorize('add_user', Auth::user());
        $attr = $request->toArray();
        User::create($attr);
        return back()->with([
            'type' => 'success',
            'message' => 'Success create user.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     *
     * @return Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request  $request
     * @param User  $user
     *
     * @return Response
     */
    public function update(UserRequest $request, User $user)
    {
        $attr = $request->toArray();
        $user->update($attr);
        return back()->with([
            'type' => 'success',
            'message' => 'Success update user.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User  $user
     *
     * @return Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Success delete user.'
        ]);
    }
}
