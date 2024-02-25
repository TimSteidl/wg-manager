import { Button } from "@/components/ui/button.tsx";
import { withRoot } from "@/hocs/root.tsx";

function Login() {
  return (
    <div>
      <Button variant={"ghost"}>Hier ist ein Button</Button>
    </div>
  );
}

export default withRoot(Login);
