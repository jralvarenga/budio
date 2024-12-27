'use server'

import { createClient } from "@/supabase/server";
import { Account } from "budio";

/**
 * get all accounts for the current user
 * @returns array of accounts
 */
export async function getUserAccounts() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data: accounts, error } = await supabase.from("Account").select("*").eq('user_id', user!.id).returns<Account[]>()

  if (error) {
    throw new Error(`Error fetching accounts: ${error.message}`)
  }

  return accounts as Account[]
}

/**
 * Create a new account
 * @param account 
 * @returns 
 */
export async function createAccount(account: Partial<Account>): Promise<Account> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase.from("Account").upsert({
    title: account.title,
    digits: +account.digits!,
    balance: +account.balance!,
    type: account.type,
    limit: account.limit || null,
    notes: account.notes || null,
    user_id: user!.id,
  } as Partial<Account>).select('*').returns<Account[]>()

  if (error) {
    throw new Error(`Error inserting account: ${error.message}`)
  }
  console.log(data);
  

  return data[0]
}