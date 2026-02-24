import { motion } from "framer-motion";
import DashboardSidebar from "@/features/sport-management/components/DashboardSidebar";
import DashboardHeader from "@/features/sport-management/components/DashboardHeader";
import StatCard from "@/features/sport-management/components/StatCard";
import { Trophy, Calendar, Target, Star, Clock, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  { event: "Basketball Practice", date: "Today, 4:00 PM", location: "Court B", type: "practice" },
  { event: "Soccer Match vs. Panthers", date: "Tomorrow, 2:00 PM", location: "Main Field", type: "match" },
  { event: "Swimming Training", date: "Wed, 6:00 AM", location: "Aquatic Center", type: "practice" },
  { event: "Track Meet", date: "Sat, 9:00 AM", location: "Stadium", type: "competition" },
];

const achievements = [
  { title: "MVP - Basketball", date: "Feb 2026", icon: "🏀" },
  { title: "Best Swimmer", date: "Jan 2026", icon: "🏊" },
  { title: "100m Sprint Record", date: "Dec 2025", icon: "🏃" },
];

const mySports = [
  { sport: "Basketball", team: "Eagles", nextSession: "Today 4PM", progress: 85 },
  { sport: "Swimming", team: "Dolphins", nextSession: "Wed 6AM", progress: 72 },
  { sport: "Track & Field", team: "Falcons", nextSession: "Sat 9AM", progress: 68 },
];

const typeColors: Record<string, string> = {
  practice: "bg-student/15 text-student",
  match: "bg-primary/15 text-primary",
  competition: "bg-warning/15 text-warning",
};

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="student" />
      <main className="flex-1 p-8 overflow-auto">
        <DashboardHeader title="My Dashboard" subtitle="Welcome back, Athlete!" userName="Student" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Trophy />} label="Active Sports" value={3} delay={0} colorClass="text-student" />
          <StatCard icon={<Calendar />} label="Upcoming Events" value={8} delay={0.1} colorClass="text-primary" />
          <StatCard icon={<Target />} label="Attendance Rate" value="94%" change="+2%" delay={0.2} colorClass="text-success" />
          <StatCard icon={<Star />} label="Achievements" value={7} delay={0.3} colorClass="text-warning" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-student" /> My Sports
            </h3>
            <div className="space-y-4">
              {mySports.map((s, i) => (
                <motion.div
                  key={s.sport}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-display font-bold">{s.sport}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users size={12} /> {s.team}
                      </p>
                    </div>
                    <span className="text-xs bg-student/15 text-student px-2 py-1 rounded-full">
                      Next: {s.nextSession}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.progress}%` }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.7 }}
                        className="h-full rounded-full bg-student"
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{s.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Star size={18} className="text-warning" /> Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-warning/5 border border-warning/10"
                >
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 mt-6"
        >
          <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
            <Calendar size={18} className="text-student" /> Upcoming Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {upcomingEvents.map((e, i) => (
              <motion.div
                key={e.event}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-student/10 flex items-center justify-center">
                  <Clock size={18} className="text-student" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{e.event}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{e.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin size={10} />{e.location}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[e.type]}`}>{e.type}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StudentDashboard;
