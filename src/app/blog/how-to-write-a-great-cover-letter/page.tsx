import Author from '@/components/author';

export default function Page(){
  const published = 'August 16, 2025';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleUrl = siteUrl ? `${siteUrl}/blog/how-to-write-a-great-cover-letter` : '';
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto prose">
        <h1>How to Write a Great Cover Letter</h1>
        <Author name="Sujeet" url="/about" bio="Career coach and developer." />
        <p className="text-sm text-muted-foreground">{published}</p>
        <p>Writing a cover letter is an opportunity to introduce your story. Unlike your resume, which lists facts and achievements, the cover letter lets you explain motivation and fit. This guide covers structure, tone, and examples.</p>
        <h2>1. Structure</h2>
        <p>Start with a short opening that explains why you are writing. Follow with 1-2 paragraphs that highlight relevant accomplishments tied to the job, and close with a call to action and gratitude.</p>
        <h2>2. Tone and length</h2>
        <p>Keep it concise — one page or less. Use a professional but conversational tone. Avoid repeating the resume line-by-line; instead, surface the story behind a specific achievement.</p>
        <h2>3. Example (short)</h2>
        <pre>{`Dear Hiring Manager,

I’m excited to apply for the Product Manager role...`}</pre>
        <p>Customize the example for your target role and add measurable outcomes where possible.</p>
        <h2>4. Final tips</h2>
        <ul>
          <li>Proofread for errors and readability.</li>
          <li>Include keywords from the job description naturally.</li>
        </ul>
      </article>
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"Article","headline":"How to Write a Great Cover Letter","datePublished":"2025-08-16","author":{"@type":"Person","name":"Sujeet"},"publisher":{"@type":"Organization","name":"ResuMate"},"mainEntityOfPage":"${articleUrl}"}`}
      </script>
    </main>
  )
}
