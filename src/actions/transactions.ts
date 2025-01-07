"use server"

import { createClient } from "@/supabase/server"
import { Account, Transaction } from "budio"

/**
 * get all transactions for the current user
 * @returns array of transactions
 */
export async function getUserTransactions(): Promise<Transaction[]> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: transaction, error } = await supabase
    .from("Transaction")
    .select("*, Account (id, name), Category (id, title)")
    .order("timestamp", { ascending: false })
    .eq("user_id", user!.id)
    .returns<Transaction[]>()

  if (error) {
    throw new Error(`Error fetching transactions: ${error.message}`)
  }

  return transaction as Transaction[]
}

/**
 * Create a new transaction
 * @param transaction
 * @returns
 */
export async function createTransaction(
  transaction: Partial<Transaction>,
  accountCurrentBalance: number
): Promise<{
  transaction: Transaction
  account: Account
}> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: transactions, error: transactionError } = await supabase
    .from("Transaction")
    .upsert({
      title: transaction.title,
      amount: transaction.amount,
      account_id: transaction.account_id,
      recurrent: transaction.recurrent || false,
      timestamp: transaction.timestamp || new Date().toISOString(),
      notes: transaction.notes || null,
      user_id: user!.id,
    } as Partial<Transaction>)
    .select("*")
    .returns<Transaction[]>()

  if (transactionError) {
    throw new Error(`Error inserting transaction: ${transactionError.message}`)
  }

  const { data: accounts, error: accountsError } = await supabase.from("Account").upsert({
    balance: accountCurrentBalance - transactions[0].amount
  }).eq("id", transaction.account_id)

  if (accountsError) {
    throw new Error(`Error inserting transaction: ${accountsError.message}`)
  }

  return {
    account: accounts![0],
    transaction: transactions![0],
  }
}
