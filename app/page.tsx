import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Github } from "@/app/icons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1e1f22] text-gray-900 dark:text-white">
      <header className="sticky top-0 z-40 bg-white dark:bg-[#1e1f22]">
        <div className="flex items-center justify-between py-4 sm:px-6 lg:px-6 px-5">
          <Link
            href="#"
            className="flex items-center gap-2 text-2xl font-semibold"
            prefetch={false}
          >
            <span className="text-gray-800 dark:text-white font-bold tracking-light">
              DoodleCord
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <p className="text-7xl font-extrabold">Join the playground 🛝</p>
          <div className="flex flex-row gap-5 justify-center">
            <Link href="/setup">
              <Button className="w-96 h-12 py-4  text-xl font-bold">
                Spin up a server
              </Button>
            </Link>
            <Link href="/whiteboard">
              <Button className="w-96 h-12 py-4  text-xl font-bold">
                Begin Doodling
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="dark:bg-[#1e1f22] py-4 ">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-md font-bold text-gray-800 dark:text-white">
              &copy; 2024 DoodleCord. All rights reserved.
            </p>
            <Link
              href="https://github.com/ns-rg/doodlecord"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Github />
              <span className="text-gray-800 dark:text-white font-bold">
                View on Github
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
