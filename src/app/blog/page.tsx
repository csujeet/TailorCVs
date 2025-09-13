"use client";

// import { useState, useEffect } from "react";

interface Blog {
  title: string;
  content: string;
  link?: string;
}


const blogPosts: Blog[] = [
  {
    title: "How to Tailor Your Resume for ATS: A Practical Guide",
    content: `Modern hiring often starts with Applicant Tracking Systems (ATS). These systems scan resumes for keywords and formatting they can parse. Tailoring your resume for ATS improves the chance that your application gets seen by a human.\n\n1. Analyze the job description: Read the job description carefully and highlight required skills, certifications, and technologies.\n\n2. Mirror language and keywords: Use the same language the employer uses. If the JD asks for “React.js” and “TypeScript,” include those exact terms in your skills and experience sections.\n\n3. Use standard headings and simple formatting: ATS parsers rely on common headings such as Experience, Education, and Skills. Avoid unusual headings or multi-column layouts.\n\n4. Prioritize relevant experience and achievements: Put the most relevant jobs and accomplishments near the top. Use short bullet points and strong action verbs.\n\n5. Quantify results: Include numbers that show impact: percentages, revenue, time saved, or headcount managed.\n\n6. Keep file type and structure ATS-friendly: Save and upload resumes in .pdf or .docx. Avoid embedding text within images.\n\n7. Include a skills section: A concise skills list helps ATS quickly identify matches.\n\n8. Tailor for each application: Adjust the summary, skills, and top achievements to match the job.\n\n9. Review and test: Use the ResuMate tool to preview and download ATS-optimized versions, and test your resume by uploading it to job boards or ATS-friendly resume checkers.\n\nTailoring your resume for ATS is about clarity and relevance: use standard headings, mirror keywords, quantify achievements, and prioritize the most relevant experience. With focused edits, your resume will get noticed more often by both software and people.`,
    link: "/blog/how-to-tailor-resume"
  },
  {
    title: "How to Write a Great Cover Letter",
    content: `A compelling cover letter should complement your resume, not repeat it. Begin with a strong opening that grabs attention. Explain why you’re interested in the role and how your background fits the company’s needs. Use specific examples to demonstrate your skills and achievements. End with a confident closing, inviting the employer to discuss your application further.`,
    link: "/blog/how-to-write-a-great-cover-letter"
  },
  {
    title: "Resume Keywords and ATS: What You Need to Know",
    content: `Many companies use Applicant Tracking Systems (ATS) to filter resumes. To get noticed, include keywords from the job description in your resume. Focus on skills, certifications, and job titles that match the posting. Avoid graphics or unusual fonts, as ATS may not read them correctly. Regularly update your resume to reflect the latest industry terms and requirements.`,
    link: "/blog/resume-keywords-and-ats"
  },
  {
    title: "Top 10 Resume Mistakes to Avoid",
    content: `Common resume mistakes can cost you interviews. Avoid typos, generic objectives, and irrelevant work experience. Don’t use an unprofessional email address or include personal details like age or marital status. Keep your formatting clean and consistent. Tailor your resume for each job, and always proofread before submitting.`,
    link: "/blog/top-10-resume-mistakes"
  }
];

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Career Blog</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Welcome to our career advice blog! Here you’ll find expert tips on resume writing, cover letters, and job search strategies to help you land your dream job. Explore our latest articles below:
        </p>
      </div>
      <div className="space-y-8">
        {blogPosts.map((blog, index) => (
          <div key={index} className="border p-6 rounded-md bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{blog.content}</p>
            {blog.link && (
              <Link href={blog.link} className="inline-block mt-4 text-blue-600 hover:underline font-semibold">
                Read more
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}