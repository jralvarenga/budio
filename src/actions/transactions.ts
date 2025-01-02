"use server"

import { createClient } from "@/supabase/server"
import { Transaction, TransactionWithAccount } from "budio"

/**
 * get all transactions for the current user
 * @returns array of transactions
 */
export async function getUserTransactions(): Promise<TransactionWithAccount[]> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: transaction, error } = await supabase
    .from("Transaction")
    .select("*, Account (id, title)")
    .order("timestamp", { ascending: false })
    .eq("user_id", user!.id)
    .returns<Transaction[]>()

  if (error) {
    throw new Error(`Error fetching transactions: ${error.message}`)
  }

  return transaction as TransactionWithAccount[]
}

/**
 * Create a new transaction
 * @param transaction
 * @returns
 */
export async function createTransaction(
  transaction: Partial<Transaction>,
): Promise<Transaction> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from("Transaction")
    .upsert({
      title: transaction.title,
      amount: transaction.amount,
      category: transaction.category,
      account_id: transaction.account_id,
      recurrent: transaction.recurrent || false,
      timestamp: transaction.timestamp || new Date().toISOString(),
      notes: transaction.notes || null,
      user_id: user!.id,
    } as Partial<Transaction>)
    .select("*")
    .returns<Transaction[]>()

  if (error) {
    throw new Error(`Error inserting transaction: ${error.message}`)
  }
  console.log(data)

  return data[0]
}
