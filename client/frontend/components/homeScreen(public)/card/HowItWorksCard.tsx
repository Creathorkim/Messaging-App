"use Client";
import { motion } from "framer-motion";
type HowItWorksCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};
export default function HowItWorksCard({
  icon: Icon,
  title,
  description,
}: HowItWorksCard) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex flex-col items-center space-y-2  p-6 "
    >
      <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
        <Icon className="text-[#7F56D9]" />
      </div>
      <h2 className="text-[#181D27] font-medium text-[20px] text-center">
        {title}
      </h2>
      <p className="text-[#535862] text-[16px]  leading-6 text-center">
        {description}
      </p>
    </motion.div>
  );
}
