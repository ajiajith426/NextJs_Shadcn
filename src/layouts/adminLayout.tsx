import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {
  BarChart,
  Bell,
  ChevronDown,
  Home,
  LineChart,
  Menu,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "@/components/languageSwitcher";

type PropType = {
  children: JSX.Element;
};

export default function Dashboard({children}: PropType) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-6">
          {children}
          {/* <h1 className="mb-4 text-2xl font-bold">Dashboard Overview</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Users"
              value="1,234"
              icon={<Users className="h-4 w-4" />}
            />
            <StatCard
              title="Revenue"
              value="$12,345"
              icon={<LineChart className="h-4 w-4" />}
            />
            <StatCard
              title="Active Sessions"
              value="56"
              icon={<PieChart className="h-4 w-4" />}
            />
            <StatCard
              title="Conversion Rate"
              value="5.67%"
              icon={<BarChart className="h-4 w-4" />}
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ChartWidget title="User Growth" />
            <ChartWidget title="Revenue Trend" />
          </div>
          <div className="mt-6">
            <RecentActivityWidget />
          </div> */}
        </div>
      </main>
    </div>
  );
}

function Header({setIsSidebarOpen}: any) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
          </Sheet>
          <div className="ml-4 flex items-center space-x-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <LanguageSwitcher />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              className="rounded-full"
              height={32}
              width={32}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

function SidebarContent() {
  return (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <h2 className="mb-4 text-lg font-semibold">Acme Inc</h2>
      <nav className="space-y-2">
        <Link href="/admin/dashboard">
          <SidebarItem icon={<Home className="h-4 w-4" />} title="Dashboard" />
        </Link>
        <SidebarItem icon={<Users className="h-4 w-4" />} title="Users">
          <Link href="/admin/user">
            <SidebarSubItem title="User List" />
          </Link>
          <SidebarSubItem title="User Analytics" />
        </SidebarItem>
        <SidebarItem icon={<LineChart className="h-4 w-4" />} title="Analytics">
          <SidebarSubItem title="Overview" />
          <SidebarSubItem title="Reports" />
          <SidebarSubItem title="Realtime" />
        </SidebarItem>
        <SidebarItem icon={<Settings className="h-4 w-4" />} title="Settings">
          <SidebarSubItem title="General" />
          <SidebarSubItem title="Security" />
          <SidebarSubItem title="Notifications" />
        </SidebarItem>
      </nav>
    </ScrollArea>
  );
}

function SidebarItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => children && setIsOpen(!isOpen)}
      >
        {icon}
        <span className="ml-2">{title}</span>
        {children && (
          <ChevronDown
            className={`ml-auto h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>
      {isOpen && children && (
        <div className="ml-4 mt-2 space-y-2">{children}</div>
      )}
    </div>
  );
}

function SidebarSubItem({title}: {title: string}) {
  return (
    <Button variant="ghost" size="sm" className="w-full justify-start pl-6">
      {title}
    </Button>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon}
      </div>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

function ChartWidget({title}: {title: string}) {
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <h3 className="mb-4 text-lg font-medium">{title}</h3>
      <div className="h-[200px] w-full bg-muted" />
    </div>
  );
}

function RecentActivityWidget() {
  const activities = [
    {user: "Alice", action: "Created a new post", time: "2 hours ago"},
    {
      user: "Bob",
      action: "Commented on 'New Feature Announcement'",
      time: "4 hours ago",
    },
    {user: "Charlie", action: "Uploaded a new file", time: "Yesterday"},
    {user: "Diana", action: "Completed project milestone", time: "2 days ago"},
  ];

  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={`/placeholder.svg?height=40&width=40&text=${activity.user.charAt(
                0
              )}`}
              alt={activity.user}
              className="rounded-full"
              height={40}
              width={40}
            />
            <div>
              <p className="font-medium">{activity.user}</p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
