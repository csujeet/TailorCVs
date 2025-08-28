export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
  <h1 className="text-3xl font-bold mb-4">About TailorCVs</h1>
  <p className="mb-4 text-muted-foreground">TailorCVs helps job seekers tailor resumes and generate cover letters using guided inputs and AI-assisted suggestions. Our goal is to make the application process easier and more effective.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our approach</h2>
        <p className="mb-4">We combine automated analysis of job descriptions with human-reviewed resume templates and editing suggestions. We emphasize transparency: AI suggestions are drafts and should be reviewed and personalized by the candidate.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Team</h2>
  <p className="mb-4">Small team of resume and UX-focused builders. <br/>For inquiries contact <a className="underline" href="mailto:support@tailorcvs.example">support@tailorcvs.example</a>.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Expertise</h2>
        <p className="mb-4">We draw on hiring best practices and ATS guidance to improve resumes. Each article and guide on the site is reviewed by someone with hiring or resume-writing experience.</p>
      </div>
    </main>
  );
}
