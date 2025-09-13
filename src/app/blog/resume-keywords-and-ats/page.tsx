<<<<<<< HEAD
import Author from '@/components/author';

export default function Page(){
  const published = 'August 16, 2025';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleUrl = siteUrl ? `${siteUrl}/blog/resume-keywords-and-ats` : '';
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto prose">
        <h1>Resume Keywords and Applicant Tracking Systems (ATS)</h1>
        <Author name="Sujeet" url="/about" bio="Career coach and developer." />
        <p className="text-sm text-muted-foreground">{published}</p>
        <p>Applicant Tracking Systems scan resumes for keywords and structure. To improve your resume's chance, include role-specific keywords naturally and submit a properly formatted document.</p>
        <h2>How ATS works</h2>
        <p>Most ATS parse based on headings and bullet lists. Avoid headers embedded in images and use clear section headings.</p>
        <h2>Keyword strategy</h2>
        <p>Mirror job description language and include both acronyms and full forms (e.g., SEO and Search Engine Optimization).</p>
        <h2>Testing</h2>
        <p>Test your resume with online ATS preview tools and iterate until parsing is correct.</p>
      </article>
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"Article","headline":"Resume Keywords and Applicant Tracking Systems (ATS)","datePublished":"2025-08-16","author":{"@type":"Person","name":"Sujeet"},"publisher":{"@type":"Organization","name":"ResuMate"},"mainEntityOfPage":"${articleUrl}"}`}
      </script>
    </main>
  )
}
=======
import Author from '@/components/author';

export default function Page(){
  const published = 'August 16, 2025';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleUrl = siteUrl ? `${siteUrl}/blog/resume-keywords-and-ats` : '';
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto prose">
        <h1>Resume Keywords and Applicant Tracking Systems (ATS)</h1>
        <Author name="Sujeet" url="/about" bio="Career coach and developer." />
        <p className="text-sm text-muted-foreground">{published}</p>
        <p>Applicant Tracking Systems scan resumes for keywords and structure. To improve your resume's chance, include role-specific keywords naturally and submit a properly formatted document.</p>
        <h2>How ATS works</h2>
        <p>Most ATS parse based on headings and bullet lists. Avoid headers embedded in images and use clear section headings.</p>
        <h2>Keyword strategy</h2>
        <p>Mirror job description language and include both acronyms and full forms (e.g., SEO and Search Engine Optimization).</p>
        <h2>Testing</h2>
        <p>Test your resume with online ATS preview tools and iterate until parsing is correct.</p>
      </article>
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"Article","headline":"Resume Keywords and Applicant Tracking Systems (ATS)","datePublished":"2025-08-16","author":{"@type":"Person","name":"Sujeet"},"publisher":{"@type":"Organization","name":"ResuMate"},"mainEntityOfPage":"${articleUrl}"}`}
      </script>
    </main>
  )
}
>>>>>>> 7a6a771ddf7a19a1d3fcb1a8b54ceadcac987e06
