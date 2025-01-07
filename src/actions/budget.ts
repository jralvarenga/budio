"use server"

import { createClient } from "@/supabase/server"
import { Category } from "budio"

/**
 * get all transactions for the current user
 * @returns array of transactions
 */
export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: transaction, error } = await supabase
    .from("Category")
    .select("*")
    .eq("user_id", user!.id)
    .returns<Category[]>()

  if (error) {
    throw new Error(`Error fetching categories: ${error.message}`)
  }

  return transaction as Category[]
}

/**
 * Create a new category
 * @param category
 * @returns
 */
export async function createCategory(
  category: Partial<Category>,
): Promise<Category> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from("Category")
    .upsert({
      title: category.title,
      user_id: user!.id,
    } as Partial<Category>)
    .select("*")
    .returns<Category[]>()

  if (error) {
    throw new Error(`Error inserting transaction: ${error.message}`)
  }

  return data[0]
}