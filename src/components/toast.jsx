import React from "react"
import "@fabula/core/css/toast.css"
import { Button } from "./button"

export const Toast = () => {
  return (
    <div className="fab-toast">
      <span className="fab-toast__message">This is an alert</span>
      <Button size="small">Close</Button>
    </div>
  )
}
