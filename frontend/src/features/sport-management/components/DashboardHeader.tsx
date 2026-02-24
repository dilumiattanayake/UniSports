import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";

const DashboardHeader = ({ title, subtitle, userName }: { title: string; subtitle: string; userName: string }) => (
  <motion.header
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center justify-between mb-8"
  >
    <div>
      <h1 className="text-2xl font-display font-bold">{title}</h1>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search..."
          className="bg-secondary/50 border border-border/50 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 w-52"
        />
      </div>
      <button className="relative p-2 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors">
        <Bell size={18} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] font-bold flex items-center justify-center text-primary-foreground">
          3
        </span>
      </button>
      <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-sm text-primary">
        {userName.charAt(0)}
      </div>
    </div>
  </motion.header>
);

export default DashboardHeader;
