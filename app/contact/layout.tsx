import Footer from "@/components/layout/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full">{children}</main>
      <Footer />
    </>
  )
}
