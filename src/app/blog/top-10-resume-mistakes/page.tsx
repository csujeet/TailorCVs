<<<<<<< HEAD
import Author from '@/components/author';

export default function TopResumeMistakes() {
  const published = 'August 16, 2025';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleUrl = siteUrl ? `${siteUrl}/blog/top-10-resume-mistakes` : '';
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-none mx-auto">
        <header>
          <h1>Top 10 Resume Mistakes (and How to Fix Them)</h1>
          <Author name="tailorCVs Team" url="/about" bio="Practical career advice and resume tips." />
          <p className="text-sm text-muted-foreground">{published}</p>
        </header>

        <section>
          <p>Many resumes fail to make an impact because of common mistakes. Fix these and you’ll see better response rates.</p>

          <h2>1. Vague summary statements</h2>
          <p>Instead of a generic line, write a concise statement highlighting your role, years of experience, and one key achievement.</p>

          <h2>2. Unquantified accomplishments</h2>
          <p>Whenever possible, add metrics: increased sales by X%, reduced costs by Y, managed a team of Z.</p>

          <h2>3. Too long or too short</h2>
          <p>Keep it focused: 1–2 pages for most professionals. Remove irrelevant early-career roles unless they matter to the role.</p>

          <h2>4. Poor formatting</h2>
          <p>Avoid dense paragraphs. Use bullets, consistent fonts, and a single-column layout.</p>

          <h2>5. Missing keywords</h2>
          <p>Mirror job description keywords where relevant to pass ATS checks.</p>

          <h2>6. Typos and grammar errors</h2>
          <p>Proofread carefully and have another person review your resume.</p>

          <h2>7. Unexplained employment gaps</h2>
          <p>Briefly explain gaps or focus on relevant freelance/volunteer work during gaps.</p>

          <h2>8. Generic job descriptions</h2>
          <p>Describe specific achievements, tools used, and results rather than listing responsibilities.</p>

          <h2>9. Not tailoring to the role</h2>
          <p>Customize your resume to highlight the most relevant experience for each application.</p>

          <h2>10. Overuse of buzzwords</h2>
          <p>Use concrete examples instead of vague buzzwords like "team player" or "hard worker" without context.</p>

          <h2>Conclusion</h2>
          <p>Fix these common issues and your resume will better communicate your value and perform better in ATS and recruiter reviews.</p>
        </section>
      </article>
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"Article","headline":"Top 10 Resume Mistakes (and How to Fix Them)","datePublished":"2025-08-16","author":{"@type":"Person","name":"ResuMate Team"},"publisher":{"@type":"Organization","name":"ResuMate"},"mainEntityOfPage":"${articleUrl}"}`}
      </script>
    </main>
  );
}

=======
import Author from '@/components/author';

export default function TopResumeMistakes() {
  const published = 'August 16, 2025';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleUrl = siteUrl ? `${siteUrl}/blog/top-10-resume-mistakes` : '';
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-none mx-auto">
        <header>
          <h1>Top 10 Resume Mistakes (and How to Fix Them)</h1>
          <Author name="tailorCVs Team" url="/about" bio="Practical career advice and resume tips." />
          <p className="text-sm text-muted-foreground">{published}</p>
        </header>

        <section>
          <p>Many resumes fail to make an impact because of common mistakes. Fix these and you’ll see better response rates.</p>

          <h2>1. Vague summary statements</h2>
          <p>Instead of a generic line, write a concise statement highlighting your role, years of experience, and one key achievement.</p>

          <h2>2. Unquantified accomplishments</h2>
          <p>Whenever possible, add metrics: increased sales by X%, reduced costs by Y, managed a team of Z.</p>

          <h2>3. Too long or too short</h2>
          <p>Keep it focused: 1–2 pages for most professionals. Remove irrelevant early-career roles unless they matter to the role.</p>

          <h2>4. Poor formatting</h2>
          <p>Avoid dense paragraphs. Use bullets, consistent fonts, and a single-column layout.</p>

          <h2>5. Missing keywords</h2>
          <p>Mirror job description keywords where relevant to pass ATS checks.</p>

          <h2>6. Typos and grammar errors</h2>
          <p>Proofread carefully and have another person review your resume.</p>

          <h2>7. Unexplained employment gaps</h2>
          <p>Briefly explain gaps or focus on relevant freelance/volunteer work during gaps.</p>

          <h2>8. Generic job descriptions</h2>
          <p>Describe specific achievements, tools used, and results rather than listing responsibilities.</p>

          <h2>9. Not tailoring to the role</h2>
          <p>Customize your resume to highlight the most relevant experience for each application.</p>

          <h2>10. Overuse of buzzwords</h2>
          <p>Use concrete examples instead of vague buzzwords like "team player" or "hard worker" without context.</p>

          <h2>Conclusion</h2>
          <p>Fix these common issues and your resume will better communicate your value and perform better in ATS and recruiter reviews.</p>
        </section>
      </article>
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"Article","headline":"Top 10 Resume Mistakes (and How to Fix Them)","datePublished":"2025-08-16","author":{"@type":"Person","name":"ResuMate Team"},"publisher":{"@type":"Organization","name":"ResuMate"},"mainEntityOfPage":"${articleUrl}"}`}
      </script>
    </main>
  );
}

>>>>>>> 7a6a771ddf7a19a1d3fcb1a8b54ceadcac987e06
