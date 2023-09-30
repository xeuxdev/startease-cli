import React from "react"

/**
 * Render a Card component.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content of the Card component.
 * @return {React.ReactNode} A div element with the text "Card".
 */
export function Card({ children }) {
  return (
    <div className="w-full p-5 space-y-6 rounded-md bg-[#181920] md:p-10 text-primary ">
      {children}
    </div>
  )
}

/**
 * Creates a card header component.
 *
 * @param {Object} children - The content of the card header.
 */
export const CardHeader = ({ children }) => {
  return (
    <header className="text-base font-bold text-primary md:text-xl lg:text-3xl">
      {children}
    </header>
  )
}
