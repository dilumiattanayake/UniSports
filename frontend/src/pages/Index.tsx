import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Users, GraduationCap, Trophy, Zap, Calendar, Search, Bell } from "lucide-react";

const roles = [
  {
    title: "Admin",
    subtitle: "Full system control",
    icon: <Shield size={28} />,
    path: "/admin",
    color: "from-primary to-primary/70",
    border: "border-primary/30 hover:border-primary/60",
    features: ["Manage all sports & teams", "Scheduling & notifications", "Reports & analytics"],
  },
  {
    title: "Coach",
    subtitle: "Team management",
    icon: <Users size={28} />,
    path: "/coach",
    color: "from-coach to-coach/70",
    border: "border-coach/30 hover:border-coach/60",
    features: ["Roster & performance", "Practice planning", "Clash detection"],
  },
  {
    title: "Student",
    subtitle: "Athlete portal",
    icon: <GraduationCap size={28} />,
    path: "/student",
    color: "from-student to-student/70",
    border: "border-student/30 hover:border-student/60",
    features: ["View schedule & events", "Track achievements", "Team requests"],
  },
];

const features = [
  { icon: <Search size={20} />, label: "Search & Filtering" },
  { icon: <Calendar size={20} />, label: "Dynamic Scheduling" },
  { icon: <Bell size={20} />, label: "Notifications" },
  { icon: <Zap size={20} />, label: "Clash Detection" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(220_40%_14%)_0%,hsl(220_30%_8%)_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-6 glow-orange"
          >
            <Trophy size={28} className="text-primary-foreground" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-display font-900 mb-4">
            <span className="gradient-text">Sports</span>{" "}
            <span>Management</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Administrative control, coaching tools & athlete portals — all in one platform.
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {roles.map((role, i) => (
            <motion.button
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(role.path)}
              className={`glass-card p-6 text-left border ${role.border} transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform`}>
                {role.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{role.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{role.subtitle}</p>
              <ul className="space-y-2">
                {role.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.button>
          ))}
        </div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
            >
              {f.icon}
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
