"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OrderHeader() {
  return (
    <>
      {/* Back Link */}
      <Link
        href="/"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to home</span>
      </Link>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Order Tracking</h1>
        <p className="text-muted-foreground mt-2">
          Order #FE{Math.floor(Math.random() * 9000 + 1000)}
        </p>
      </div>
    </>
  );
}