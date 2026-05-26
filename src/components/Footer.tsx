export function Footer() {
  return (
    <footer className="border-t hairline bg-ink-2 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl text-bone">
            ISAI
          </p>
          <p className="mt-1 text-xs tracking-[0.3em] text-mute">
            ISRAELI SCIENCE &amp; ART OF INTEGRITY
          </p>
        </div>
        <p className="text-xs text-mute">
          © {new Date().getFullYear()} ISAI · Founded by Moshe Gorelik. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
