"use client";

import { useState } from "react";
import { waitlistContent } from "@/lib/config/waitlist.config";

interface EmailFormProps {
  onSubmit?: (email: string) => void;
}

export default function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center bg-white/10 rounded-full h-[53px] shadow-[0px_11px_15px_0px_rgba(0,0,0,0.22)]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={waitlistContent.form.emailPlaceholder}
          required
          className="flex-1 bg-transparent text-white placeholder:text-white/50 outline-none text-base md:text-xl tracking-[-0.4px] pl-6 pr-2 font-bold"
        />
        <button
          type="submit"
          className="shrink-0 bg-white text-black w-[86px] h-[41px] rounded-full text-lg font-bold tracking-[-0.36px] mr-[6px] hover:bg-gray-200 active:scale-95 transition-all duration-150"
        >
          {waitlistContent.form.submitButton}
        </button>
      </div>
    </form>
  );
}
