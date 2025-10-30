import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Malik Mubashar Hassan. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-3 text-blue-400">
        <Link href="mailto:hassanmubashar1012@gmail.com" target="_blank">📧 Email</Link>
        <Link href="https://wa.me/923198591514" target="_blank">💬 WhatsApp</Link>
        <Link href="https://www.facebook.com/share/1FHxs17RDr/" target="_blank">🌐 Facebook</Link>
        <Link href="https://www.instagram.com/mubasha_hassan/" target="_blank">📸 Instagram</Link>
      </div>
    </footer>
  );
}
