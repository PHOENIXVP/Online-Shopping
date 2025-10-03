import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="text-3xl text-center">
        <div className="flex justify-center items-center min-h-dvh">
          <div>
            <span className="block">hi welcome to my practice world</span>
            <ul className="space-y-4 pt-4">
              <li>
                <Link
                  href={"/signup"}
                  className="text-sky-400 hover:text-blue-600 cursor-pointer duration-150 ease-in-out"
                >
                  Go to Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
