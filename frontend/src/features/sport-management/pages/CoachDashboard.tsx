import { motion } from "framer-motion";
import DashboardSidebar from "@/features/sport-management/components/DashboardSidebar";
import DashboardHeader from "@/features/sport-management/components/DashboardHeader";
import StatCard from "@/features/sport-management/components/StatCard";
import { Users, Target, Calendar, TrendingUp, Dumbbell, Clock } from "lucide-react";

const players = [
  { name: "Alex Johnson", position: "Forward", performance: 92, status: "fit" },
  { name: "Maria Garcia", position: "Midfielder", performance: 87, status: "fit" },
  { name: "James Lee", position: "Defender", performance: 78, status: "injured" },
  { name: "Sarah Chen", position: "Goalkeeper", performance: 95, status: "fit" },
  { name: "David Kim", position: "Forward", performance: 83, status: "resting" },
];

const practiceSchedule = [
  { day: "Mon", session: "Strength Training", time: "06:00 - 08:00" },
  { day: "Tue", session: "Tactical Drills", time: "07:00 - 09:00" },
  { day: "Wed", session: "Recovery / Yoga", time: "06:00 - 07:30" },
  { day: "Thu", session: "Match Simulation", time: "07:00 - 09:30" },
  { day: "Fri", session: "Speed & Agility", time: "06:00 - 08:00" },
];

const statusColors: Record<string, string> = {
  fit: "bg-success/15 text-success",
  injured: "bg-destructive/15 text-destructive",
  resting: "bg-warning/15 text-warning",
};

const CoachDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="coach" />
      <main className="flex-1 p-8 overflow-auto">
        <DashboardHeader title="Coach Dashboard" subtitle="Team Performance & Training" userName="Coach" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Users />} label="Team Size" value={22} delay={0} colorClass="text-coach" />
          <StatCard icon={<Target />} label="Win Rate" value="76%" change="+4%" delay={0.1} colorClass="text-success" />
          <StatCard icon={<Dumbbell />} label="Sessions This Week" value={5} delay={0.2} colorClass="text-primary" />
          <StatCard icon={<TrendingUp />} label="Avg Performance" value="87%" change="+2%" delay={0.3} colorClass="text-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Team Roster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Users size={18} className="text-coach" /> Team Roster
            </h3>
            <div className="space-y-2">
              {players.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-coach/20 border border-coach/30 flex items-center justify-center font-display font-bold text-sm text-coach">
                    {p.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.position}</p>
                  </div>
                  {/* Performance bar */}
                  <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${p.performance}%` }}
                      transition={{ delay: 0.6 + i * 0.07, duration: 0.6 }}
                      className="h-full rounded-full bg-coach"
                    />
                  </div>
                  <span className="text-xs font-mono w-8 text-right">{p.performance}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Practice Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Clock size={18} className="text-coach" /> Weekly Practice
            </h3>
            <div className="space-y-3">
              {practiceSchedule.map((s, i) => (
                <motion.div
                  key={s.day}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  <span className="w-10 h-10 rounded-lg bg-coach/15 text-coach flex items-center justify-center font-display font-bold text-sm">
                    {s.day}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{s.session}</p>
                    <p className="text-xs text-muted-foreground">{s.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Clash Detector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 mt-6 border-l-4 border-l-warning"
        >
          <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
            <Calendar size={18} className="text-warning" /> Smart Practice Clash Detector
          </h3>
          <p className="text-sm text-muted-foreground mb-3">No scheduling conflicts detected for this week ✓</p>
          <div className="flex gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="flex-1 h-8 rounded bg-success/10 border border-success/20 flex items-center justify-center text-xs text-success font-medium">
                {d}
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CoachDashboard;
