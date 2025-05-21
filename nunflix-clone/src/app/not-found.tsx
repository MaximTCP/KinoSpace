import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="contentWrapper py-20 text-center">
        <span className="block text-9xl font-bold text-gray-800">404</span>
        <span className="block text-2xl font-semibold mt-4 mb-8">Page not found!</span>

        <Button asChild>
          <Link href="/">Go to Home Page</Link>
        </Button>
      </div>
    </MainLayout>
  );
}
