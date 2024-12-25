"use client"

import { useAuth } from "@/hooks/useAuth"
import { User } from "@supabase/supabase-js"
import { useEffect } from "react"

export function AuthWrapper({
  children,
  currentUser,
}: Readonly<{
  children: React.ReactNode
  currentUser: User | null
}>) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, setUser] = useAuth()

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser)
    }
  }, [currentUser])

  return children
}
