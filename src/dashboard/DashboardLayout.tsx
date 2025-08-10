
import DashboardSidebarHeader from '@/dashboard/DashboardSidebarHeader'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import DashboardPage from './DashboardPage'
import AppSidebar from './AppSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
   <SidebarProvider>
        <AppSidebar/>
      <SidebarInset>
        <DashboardSidebarHeader/>
           <Outlet />
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}

export default Layout