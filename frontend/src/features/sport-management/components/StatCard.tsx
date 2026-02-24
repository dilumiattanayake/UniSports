import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  change?: string;
  colorClass?: string;
  delay?: number;
}

const StatCard = ({ icon, label, value, change, colorClass = "text-primary", delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="stat-card group"
  >
    <div className="flex items-center justify-between mb-3">
      <span className={`text-2xl ${colorClass}`}>{icon}</span>
      {change && (
        <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
          {change}
        </span>
      )}
    </div>
    <p className="text-2xl font-display font-bold">{value}</p>
    <p className="text-sm text-muted-foreground mt-1">{label}</p>
  </motion.div>
);

export default StatCard;
