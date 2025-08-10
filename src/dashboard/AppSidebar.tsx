import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  AudioWaveform,
  BadgeCheck,
  BarChart,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Bus,
  ChevronsUpDown,
  Command,
  CreditCard,
  DollarSign,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Map,
  MessageSquare,
  MoreHorizontal,
  Package,
  PieChart,
  Plus,
  Settings,
  Settings2,
  ShoppingCart,
  Sparkles,
  SquareTerminal,
  Trash2,
  Users,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from 'lucide-react';
import Logo from '@/dashboard/Logo';
import { Link } from 'react-router-dom';


const appSidebar = () => {
  const user= {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
 const navMain = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
    isActive: true,
    items: [
      {
        title: "Overview",
        url: "/",
      },
    ],
  },
  {
    title: "Student Management",
    url: "#",
    icon: GraduationCap,
    items: [
      {
  title: "Student Directory",
  url: "/StudentPage",
},
      {
        title: "Enrollment",
        url: "#",
      },
      {
        title: "Attendance",
        url: "#",
      },
      {
        title: "Performance",
        url: "#",
      },
    ],
  },
  {
    title: "Academics",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Curriculum",
        url: "#",
      },
      {
        title: "Timetable",
        url: "#",
      },
      {
        title: "Examinations",
        url: "#",
      },
      {
        title: "Assignments",
        url: "#",
      },
      {
        title: "Report Cards",
        url: "#",
      },
    ],
  },
  {
    title: "Staff Management",
    url: "#",
    icon: Users,
    items: [
      {
        title: "Staff Directory",
        url: "#",
      },
      {
        title: "Attendance",
        url: "#",
      },
      {
        title: "Leave Management",
        url: "#",
      },
      {
        title: "Performance",
        url: "#",
      },
    ],
  },
  {
    title: "Communication",
    url: "#",
    icon: MessageSquare,
    items: [
      {
        title: "Messages",
        url: "#",
      },
      {
        title: "Announcements",
        url: "#",
      },
      {
        title: "Notice Board",
        url: "#",
      },
      {
        title: "Emergency Alerts",
        url: "#",
      },
    ],
  },
  {
    title: "Finance",
    url: "#",
    icon: DollarSign,
    items: [
      {
        title: "Fee Management",
        url: "#",
      },
      {
        title: "Payments",
        url: "#",
      },
      {
        title: "Scholarships",
        url: "#",
      },
      {
        title: "Reports",
        url: "#",
      },
    ],
  },
  {
    title: "Transport",
    url: "#",
    icon: Bus,
    items: [
      {
        title: "Routes",
        url: "#",
      },
      {
        title: "Tracking",
        url: "#",
      },
      {
        title: "Drivers",
        url: "#",
      },
      {
        title: "Maintenance",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
    icon: Package,
    items: [
      {
        title: "Library",
        url: "#",
      },
      {
        title: "Inventory",
        url: "#",
      },
      {
        title: "Facilities",
        url: "#",
      },
      {
        title: "Assets",
        url: "#",
      },
    ],
  },
  {
    title: "Reports & Analytics",
    url: "#",
    icon: BarChart,
    items: [
      {
        title: "Academic Reports",
        url: "#",
      },
      {
        title: "Financial Reports",
        url: "#",
      },
      {
        title: "Custom Reports",
        url: "#",
      },
      {
        title: "Analytics Dashboard",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "School Profile",
        url: "#",
      },
      {
        title: "User Management",
        url: "#",
      },
      {
        title: "System Settings",
        url: "#",
      },
      {
        title: "Backup & Security",
        url: "#",
      },
    ],
  },
]
  return (
    <Sidebar >
        <SidebarHeader>
          <SidebarMenu>
           <SidebarMenuItem>
         <SidebarMenuButton size="lg" asChild>
  <a href="#">
    <Logo />
  </a>
</SidebarMenuButton>
</SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title} className="py-2.5">
                        {item.icon && <item.icon />}
                        <span className="text-base font-medium text-gray-900">{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                           <SidebarMenuSubButton asChild className="py-2">
  <Link to={subItem.url}>
    <span className="text-sm font-normal text-gray-600 group-hover:text-gray-900">{subItem.title}</span>
  </Link>
</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">
                        {user.email}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user.avatar}
                          alt={user.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        <span className="truncate text-xs">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
  )
}

export default appSidebar