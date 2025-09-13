"use client";

import Link from 'next/link';

export default function Author({ name = 'TailorCVs Team', url = '/', bio }: { name?: string; url?: string; bio?: string }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">RM</div>
      <div>
        <div className="font-semibold"><Link href={url}>{name}</Link></div>
        {bio ? <div className="text-sm text-muted-foreground">{bio}</div> : null}
      </div>
    </div>
  );
}
