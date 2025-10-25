const whoami = () : string[] => {
  const out: string[] = [];
  out.push("<br>");
  out.push("<strong>Shahid Hasan</strong>");
  out.push("Software Engineer | Independent Security Researcher");
  out.push("<br>");
  out.push("Hi, I’m Shahid Hasan. I solved complex problems through competitive programming in university, achieving top rankings in ICPC regional and inter-university contests.");
  out.push("After graduation, I worked at an AI SaaS startup building large-scale content-generation systems and currently work at an ad-tech company focused on real-time data pipelines.");
  out.push("I’m passionate about cybersecurity research and enjoy exploring vulnerabilities and secure system design.");
  out.push("<br>");
  out.push("Type <span class='command'>'about'</span> to learn more or <span class='command'>'connect'</span> to get in touch.");
  out.push("<br>");
  return out;
}

export const createWhoami = () : string[] => whoami();