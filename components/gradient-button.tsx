import * as React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const gradientClassName =
  'bg-[linear-gradient(to_bottom_right,#DA9646_0%,#FFB96B_51%,#B07430_100%)] text-primary-foreground hover:opacity-90'

export function GradientButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(gradientClassName, className)}
      variant="default"
      {...props}
    />
  )
}
