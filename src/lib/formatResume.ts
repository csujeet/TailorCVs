import type { GenerateTailoredResumeOutput } from '@/ai/schemas';

function joinLines(lines: Array<string | null | undefined>) {
  return lines.filter(Boolean).join('\n');
}

export function formatFullResume(resume: Partial<GenerateTailoredResumeOutput>): string {
  if (!resume) return '';

  const header = [resume.name, resume.candidateTitle, resume.email, resume.phone]
    .filter(Boolean)
    .join(' | ');

  const summary = resume.summary ? `${resume.summary.title}\n${resume.summary.body}` : '';

  const work = (resume.workExperience || []).map((w) => {
    const desc = (w.description || []).map((d) => `- ${d}`).join('\n');
    return `${w.jobTitle} — ${w.company} (${w.location})\n${w.dates}\n${desc}`;
  }).join('\n\n');

  const education = (resume.education || []).map((e) => {
    const details = (e.details || []).map((d) => `- ${d}`).join('\n');
    return `${e.degree} — ${e.school} (${e.location || ''})\n${e.dates || ''}\n${details}`;
  }).join('\n\n');

  const other = (resume.otherSections || []).map((s) => `${s.title}\n${s.body}`).join('\n\n');

  return joinLines([
    header,
    summary && `\nSummary:\n${summary}`,
    work && `\nWork Experience:\n${work}`,
    education && `\nEducation:\n${education}`,
    other && `\nOther Sections:\n${other}`,
  ]).trim();
}

export default formatFullResume;
