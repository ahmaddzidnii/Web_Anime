"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

export const TitlesSection = ({ titles }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const groupedTitles = titles.reduce((acc, curr) => {
    if (curr.type !== "Default") {
      const existingTitle = acc.find((item) => item.type === curr.type);
      if (existingTitle) {
        existingTitle.title += `, ${curr.title}`;
      } else {
        acc.push({ type: curr.type, title: curr.title });
      }
    }
    return acc;
  }, []);

  useEffect(() => {
    if (groupedTitles.length < 2) {
      setIsExpanded(true);
    }
  }, [groupedTitles]);

  return (
    <div className=" w-full rounded-lg bg-slate-300 p-5">
      <h1 className="text-lg   font-bold text-slate-800">Alternative Titles</h1>
      <Separator />
      <div className="my-2">
        {groupedTitles
          .slice(0, isExpanded ? groupedTitles.length : 2)
          .map((title, idx) => (
            <p key={idx} className="text-sm text-slate-900">
              <span className="font-semibold">{title.type}</span> :
              <span className="text-slate-600">{title.title}</span>
            </p>
          ))}
        {groupedTitles.length > 2 && (
          <div className="mt-4 cursor-pointer text-sm text-slate-900">
            {isExpanded ? (
              <p
                className="flex items-center gap-x-2"
                onClick={() => setIsExpanded(false)}
              >
                <MdKeyboardArrowUp className="h-5 w-5" />
                Less title
              </p>
            ) : (
              <p
                className="flex items-center gap-x-2"
                onClick={() => setIsExpanded(true)}
              >
                <MdKeyboardArrowDown className="h-5 w-5" />
                More title
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
