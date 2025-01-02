import { loginWithProvider } from "@/actions/login"
import { Button } from "./ui/button"

export function LoginWith() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <form
        action={async () => {
          "use server"
          await loginWithProvider("google")
        }}
        className="w-full"
      >
        <Button variant="outline" type="submit" className="w-full">
          Google
        </Button>
      </form>
    </>
  )
}
