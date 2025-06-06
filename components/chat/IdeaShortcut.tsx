import React from "react";
import { IoMdArrowUp } from "react-icons/io";

interface IdeaShortcutProps {
  onSelect?: (idea: string) => void;
}

const ideas = [
  {
    label: "Cafe Landing page",
    content: `A landing page for a cafe with a modern design.`,
  },
  {
    label: "Job board",
    content: `A job board application with: Search and filter by location/type, Company profiles and Job detail pages`,
  },
  {
    label: "Social media feed",
    content: `A social media feed with posts, likes, comments and infinite scroll. Include a stories feature at the top like Instagram.`,
  },
  {
    label: "Habit tracking app",
    content: `A minimal habit tracking app with daily streaks, monthly view and progress insights. Include habit categories and achievement badges.`,
  },
  {
    label: "E-commerce product page",
    content: `A modern e-commerce product page with image gallery, size/color variants, reviews section and related products.`,
  },
  {
    label: "Task management app",
    content: `A task management app with categories, due dates, and priority levels. Include a calendar view and list view.`,
  },
];

export default function IdeaShortcut({ onSelect }: IdeaShortcutProps) {
  const handleClick = (idea: string) => {
    if (onSelect) {
      onSelect(idea);
    }
  };

  return (
    <div className="relative flex max-w-full gap-1 mx-2">
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-2.5 light:text-block dark:text-white">
          {ideas.map((idea, index) => (
            <button
              key={index}
              className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-zinc-800 px-3 py-1.5 transition-colors light:hover:bg-purple-600 dark:hover:border-purple-400"
              onClick={() => handleClick(idea.content)}
            >
              <p className="text-xs">{idea.label}</p>
              <IoMdArrowUp className="shrink-0 h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
