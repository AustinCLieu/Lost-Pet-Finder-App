/*
auth.ts acts like the Middleman between screens and Supabase. Supabase creates the client, auth.ts imports this client and makes its auth functions that our auth
screen likes login and signup will use. When the user taps a button, authcontext will check/listen for the state change that gets initiated after a succesful sign-in 
and will broadcast the logged-in user to the whole app.
*/

import { supabase } from "./supabase";

// SignIn Function
export async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw error;
    return data.user;
}

// SignUp Function
export async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) throw error;
    return data.user;
}

// SignOut Function
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}