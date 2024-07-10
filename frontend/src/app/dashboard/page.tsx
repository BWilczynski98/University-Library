import { Button } from "@/components/ui/button";
import { logout } from "../auth/auth";

export default function DashboardPage() {
  return (
    <main>
      <form action={logout}>
        <Button type="submit">Logout</Button>
      </form>
    </main>
  );
}
