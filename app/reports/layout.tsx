export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex-center min-h-full">
        {children}
    </section>
  );
}
