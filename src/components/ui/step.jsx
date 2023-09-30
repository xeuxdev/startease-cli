import React from "react"

function StepIndicator({ step }) {
  return (
    <div className="w-20 h-20 rounded-xl grid place-items-center bg-gradient-to-br from-secondary to-[#0401B5] text-4xl ">
      {step}
    </div>
  )
}

export default StepIndicator
