import React from "react"
import { Button } from "./ui/button"

export default async function UsageCount() {
  const count = await fetch(`${process.env.API_URL}`, {
    next: {
      revalidate: 60 * 60,
    },
  }).then((res) => res.json())

  return (
    <Button className={"w-fit bg-gray-800 my-5 mx-auto"}>
      {count.data.totalProjectGenerated} Projects Generated
    </Button>
  )
}
