"use client";

import { useEffect, useState } from "react";

export default function ImpactBanner({ target = "100M+" }: { target?: string }) {
  const [count, setCount] = useState(0);

  // Extract numeric part safely
  const numericValue = parseInt(target.replace(/\D/g, "")) || 0;
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";
  const postfix = target.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [numericValue]);

  return (
    <div className="text-center py-12 bg-gray-50">
      <div className="text-4xl font-bold text-green-600">
        {prefix}{count}{postfix}
      </div>
      <p className="text-gray-500 mt-2">
        Climate impact delivered
      </p>
    </div>
  );
}
