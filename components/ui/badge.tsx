import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva("inline-flex items-center justify-center rounded-full font-medium transition-colors", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground",
			secondary: "bg-secondary text-secondary-foreground",
			accent: "bg-accent text-accent-foreground",
			outline: "border border-border bg-transparent text-foreground",
		},
		size: {
			default: "px-4 py-2 text-sm",
			sm: "px-3 py-1.5 text-xs",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, size, ...props }: BadgeProps) => {
	return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
