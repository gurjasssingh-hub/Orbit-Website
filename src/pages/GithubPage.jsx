import { FolderGit2, ArrowUpRight, Code2 } from "lucide-react";

export default function GithubPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 text-center">
          
          <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/5">
            <FolderGit2 className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
            GitHub Repositories
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Access Orbit SDK source code, examples, release history,
            issue tracking, and community contributions.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              
              <div className="flex items-center gap-3 text-left">
                <Code2 className="h-5 w-5 text-cyan-400 shrink-0" />

                <div>
                  <h3 className="font-medium break-all sm:break-normal">
                    orbit-labs/orbit-sdk
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Official SDK repository
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/orbit-labs/orbit-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 w-full sm:w-auto"
              >
                Open
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Browse documentation, submit issues, contribute code,
            and stay up to date with Orbit development.
          </p>

        </div>
      </div>
    </div>
  );
}