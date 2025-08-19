import type { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'>{
  text?: string;
}

export function Table(props: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props}/>
    </div>
  )
}