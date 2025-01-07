'use client'

// import EmojiPicker from 'emoji-picker-react'
import { LaughIcon } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { useBudget } from '@/hooks/useBudget'
import { createCategory } from '@/actions/budget'

export function NewCategoryForm() {
  const [isPending, startTransition] = useTransition()
  const [budget, setBudget] = useBudget(0)
  const [name, setName] = useState('')

  async function createCategoryHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    startTransition(async () => {
      const newCategory = await createCategory({
        title: name,
      })

      setBudget({
        ...budget,
        categories: [...budget.categories, newCategory],
      })
    })

    toast("Category added", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Done",
        onClick: () => console.log("Done"),
      },
    })
  }

  return (
    <form onSubmit={createCategoryHandle} className='flex flex-col gap-3'>
      <div className='w-full flex justify-center'>
        <button className='text-2xl'>
          <LaughIcon size={40} className='text-muted-foreground' /> 
        </button>
      </div>

      <Input placeholder='Category name...' value={name} onChange={(e) => setName(e.target.value)} />

      <Button className='w-full' type='submit' disabled={isPending}>
        Add
      </Button>
    </form>
  )
}