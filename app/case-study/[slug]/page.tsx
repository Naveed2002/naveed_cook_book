import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#f6f3ee] text-black">
      <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black/70">
          ← Back to home
        </Link>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 shadow-soft">
          <img src={project.image} alt={project.title} className="h-[420px] w-full object-cover sm:h-[540px]" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-black sm:text-6xl">{project.title}</h1>
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-black/55">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 bg-white/80 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-black/65">
            <p>{project.description}</p>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/50">Problem</p>
            <p className="mt-3 text-base leading-relaxed text-black/70">
              The product needed a stronger user journey and a more reliable operational flow to support real-world usage.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/50">Solution</p>
            <p className="mt-3 text-base leading-relaxed text-black/70">
              I redesigned the experience around product clarity, responsive data flows and a simpler decision-making path for the end user.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/50">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-black/70">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-black/10 px-2 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-soft">
          <p className="text-[11px] uppercase tracking-[0.18em] text-black/50">Result</p>
          <p className="mt-3 text-2xl font-medium tracking-[-0.05em] text-black">{project.outcome}</p>
        </div>
      </div>
    </main>
  );
}
