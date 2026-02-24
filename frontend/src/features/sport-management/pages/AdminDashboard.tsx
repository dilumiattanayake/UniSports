import { motion } from "framer-motion";
import DashboardSidebar from "@/features/sport-management/components/DashboardSidebar";
import DashboardHeader from "@/features/sport-management/components/DashboardHeader";
import StatCard from "@/features/sport-management/components/StatCard";
import { Users, Trophy, Calendar, AlertTriangle, TrendingUp, Clock, Shield, Activity } from "lucide-react";

const scheduleData = [
  { time: "09:00", event: "Basketball Training", team: "Eagles", status: "active" },
  { time: "11:00", event: "Soccer Practice", team: "Wolves", status: "upcoming" },
  { time: "14:00", event: "Swimming Drills", team: "Dolphins", status: "upcoming" },
  { time: "16:00", event: "Track & Field", team: "Falcons", status: "upcoming" },
];

const recentActivities = [
  { action: "New team request", detail: "Basketball - Junior Division", time: "2m ago", icon: <Users size={16} /> },
  { action: "Schedule conflict", detail: "Court A - Overlap detected", time: "15m ago", icon: <AlertTriangle size={16} /> },
  { action: "Coach assigned", detail: "Sarah M. → Swimming Team", time: "1h ago", icon: <Shield size={16} /> },
  { action: "Event created", detail: "Inter-School Championship", time: "3h ago", icon: <Trophy size={16} /> },
];

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-auto">
        <DashboardHeader title="Admin Dashboard" subtitle="Sports Management Overview" userName="Admin" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Users />} label="Total Athletes" value={248} change="+12%" delay={0} />
          <StatCard icon={<Trophy />} label="Active Sports" value={12} change="+2" delay={0.1} colorClass="text-warning" />
          <StatCard icon={<Calendar />} label="Scheduled Events" value={34} change="+5" delay={0.2} colorClass="text-accent" />
          <StatCard icon={<Shield />} label="Active Coaches" value={18} delay={0.3} colorClass="text-success" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" /> Today's Schedule
            </h3>
            <div className="space-y-3">
              {scheduleData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-sm font-mono text-muted-foreground w-14">{item.time}</span>
                  <div className={`w-1.5 h-8 rounded-full ${item.status === "active" ? "bg-success animate-pulse" : "bg-muted-foreground/30"}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.team}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === "active" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Activity size={18} className="text-primary" /> Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 mt-6"
        >
          <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-primary" /> Sports Enrollment Trends
          </h3>
          <div className="grid grid-cols-6 gap-3 h-40 items-end">
            {[65, 40, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="rounded-t-lg bg-gradient-to-t from-primary/80 to-primary/30 relative group cursor-pointer"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}%
                </span>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-3 mt-2">
            {["Basketball", "Soccer", "Swimming", "Tennis", "Track", "Volleyball"].map((s) => (
              <p key={s} className="text-xs text-muted-foreground text-center">{s}</p>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;
