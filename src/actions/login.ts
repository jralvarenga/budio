"use server"

import { createClient } from "@/supabase/server"
import { Provider } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function loginWithProvider(provider: Provider) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.APP_URL}/auth/callback`,
    },
  })

  if (error) {
    redirect("/error")
  }

  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
}

export async function logout() {
  const supabase = await createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  revalidatePath("/", "layout")
}
