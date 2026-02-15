export function TerminalSnippet({ command, label }: { command: string; label?: string }) {
  return (
    <div className="w-full">
      {label && (
        <span className="mb-2 block text-xs font-medium text-muted-foreground">{label}</span>
      )}
      <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3">
        <span className="text-muted-foreground/60">$</span>
        <code className="flex-1 font-mono text-sm text-foreground">{command}</code>
      </div>
    </div>
  )
}
