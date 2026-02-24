import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Calendar, Bell, Settings, LogOut, Trophy, ClipboardList, BarChart3 } from "lucide-react";

interface SidebarItem {
  icon: ReactNode;
  label: string;
  path: string;
}

const sidebarConfigs: Record<string, { title: string; items: SidebarItem[]; accentClass: string }> = {
  admin: {
    title: "Admin Panel",
    accentClass: "bg-primary",
    items: [
      { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin" },
      { icon: <Users size={20} />, label: "Teams", path: "/admin" },
      { icon: <Calendar size={20} />, label: "Scheduling", path: "/admin" },
      { icon: <Trophy size={20} />, label: "Sports", path: "/admin" },
      { icon: <BarChart3 size={20} />, label: "Reports", path: "/admin" },
      { icon: <Settings size={20} />, label: "Settings", path: "/admin" },
    ],
  },
  coach: {
    title: "Coach Hub",
    accentClass: "bg-coach",
    items: [
      { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/coach" },
      { icon: <Users size={20} />, label: "My Team", path: "/coach" },
      { icon: <ClipboardList size={20} />, label: "Practice", path: "/coach" },
      { icon: <Calendar size={20} />, label: "Schedule", path: "/coach" },
      { icon: <BarChart3 size={20} />, label: "Performance", path: "/coach" },
      { icon: <Settings size={20} />, label: "Settings", path: "/coach" },
    ],
  },
  student: {
    title: "Athlete Portal",
    accentClass: "bg-student",
    items: [
      { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/student" },
      { icon: <Trophy size={20} />, label: "My Sports", path: "/student" },
      { icon: <Calendar size={20} />, label: "Schedule", path: "/student" },
      { icon: <Bell size={20} />, label: "Notifications", path: "/student" },
      { icon: <Settings size={20} />, label: "Settings", path: "/student" },
    ],
  },
};

const DashboardSidebar = ({ role }: { role: "admin" | "coach" | "student" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const config = sidebarConfigs[role];

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-64 min-h-screen bg-card/80 backdrop-blur-xl border-r border-border/50 flex flex-col p-4"
    >
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className={`w-9 h-9 rounded-lg ${config.accentClass} flex items-center justify-center`}>
          <Trophy size={18} className="text-primary-foreground" />
        </div>
        <h2 className="font-display font-bold text-lg">{config.title}</h2>
      </div>

      <nav className="flex-1 space-y-1">
        {config.items.map((item, i) => {
          const isActive = location.pathname === item.path && i === 0;
          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? `${config.accentClass}/15 text-foreground font-medium`
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.icon}
              {item.label}
            </motion.button>
          );
        })}
      </nav>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-destructive transition-colors"
      >
        <LogOut size={20} />
        Back to Home
      </button>
    </motion.aside>
  );
};

export default DashboardSidebar;
