"use client";
import { motion } from "framer-motion";

export function ContainerHeightIssue() {
  return (
    <div className="w-full h-96 flex justify-between shadow-xl shadow-blue-500/20 border-slate-200 bg-slate-50 rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4 bg-[#ffdfba] text-yellow-950 p-4">
        <h3 className="text-lg">Controls</h3>
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" className="mr-1" />
            Highlight sticky element
          </label>
          <label>
            <input type="checkbox" className="mr-1" />
            Highlight container
          </label>
        </div>
      </div>

      <div>
        <motion.div
          animate={{ y: 100 }}
          className="bg-slate-100 pt-20 w-20"
        ></motion.div>
      </div>
    </div>
  );
}
