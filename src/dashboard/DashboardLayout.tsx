
import DashboardSidebarHeader from '@/components/ui/dashboard/sidebar/DashboardSidebarHeader'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import DashboardPage from './DashboardPage'
import AppSidebar from '@/components/ui/dashboard/sidebar/AppSidebar'

const Layout = () => {
  return (
    <div>
   <SidebarProvider>
        <AppSidebar/>
      <SidebarInset>
        <DashboardSidebarHeader/>
          <DashboardPage/>
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}

export default Layout