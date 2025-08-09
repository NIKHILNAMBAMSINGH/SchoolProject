import React from 'react'
import { SidebarTrigger } from '../../sidebar'
import { Input } from '../../input'
import { Button } from '../../button'
import { Plus, Sun } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../avatar'

const SidebarHeader = () => {
  return (
    <div className="flex h-16 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              className="max-w-sm"
            />
          </div>
          <Button variant="outline" size="icon">
            <span className="sr-only">Toggle theme</span>
            <Sun className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add new</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
  )
}

export default SidebarHeader