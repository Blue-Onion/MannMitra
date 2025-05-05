import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { PenBox, MessageSquare, Calendar } from "lucide-react"; // Import icons

const Navbar = () => {
  return (
    <header className="container mx-auto max-w-none">
      <nav className="flex justify-between items-center text-white p-7">
        <Link href={"/"}>
          <div className="text-3xl font-bold">
            MannMitra
          </div>
        </Link>
        <div className="">
          <SignedOut>
            <SignInButton>
              
              <Button>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3">
                <Link href={"/chat-bot"}>
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                Talk To MannMitra
              </Button>
                </Link>
                <Link href={"/appoinments"}>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Appointment
              </Button>
                </Link>
                <Link href={"new-appointment"}>
              <Button>
                <PenBox className="h-4 w-4 mr-2" />
                Book An Appointment
              </Button>
                </Link>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;