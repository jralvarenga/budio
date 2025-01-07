'use client'

import Link from "next/link";
import { Badge } from "../ui/badge";
import { useBudget } from "@/hooks/useBudget";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function CategoriesList() {
  const [budget] = useBudget()
  const params = useParams<{ categoryId: string }>()
  const [selected, setSelected] = useState('all')

  useEffect(() => {
    if (params.categoryId !== 'all') {
      setSelected(params.categoryId)
    }
  }, [])

  return (
    <div className="flex flex-1 flex-wrap gap-2">
      <Link href={`/budget/all`}>
        <Badge onClick={() => setSelected('all')} variant={selected === 'all' ? "default" : "outline"} className="text-sm">All</Badge>
      </Link>
      {budget.categories.map((category, i) => (
        <Link
          key={`category_${i}`}
          href={`/budget/${category.id}`} 
        >
          <Badge
            className="text-sm"
            variant={selected === category.id.toString() ? "default" : "outline"}
            onClick={() => setSelected(category.id.toString())}
          >
            {category.title}
          </Badge>
        </Link>
      ))}
    </div>
  )
}