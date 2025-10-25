import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")

  // ascii art (left) - keep existing art if present
  command.ascii.forEach((ele) => {
    let bannerString = "";
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });

  banner.push("<br>");

  // Intro / Home section (left). Profile image is placed via index.html on the right.
  banner.push(`<div class='intro-title'><strong>Shahid Hasan</strong></div>`);
  banner.push(`<div class='intro-subtitle'>Software Engineer | Independent Security Researcher</div>`);
  banner.push("<br>");

  banner.push(`<div class='intro-paragraph'>Hi, I’m Shahid Hasan, a software engineer and independent security researcher.</div>`);
  banner.push(`<div class='intro-paragraph'>In university, I solved complex problems through competitive programming, achieving top rankings in ICPC regional and inter-university contests.</div>`);
  banner.push("<br>");
  banner.push(`<div class='intro-paragraph'>After graduation, I joined an AI SaaS startup building systems for large-scale AI-generated content and now work at an ad tech company developing real-time data pipelines.</div>`);
  banner.push("<br>");
  banner.push(`<div class='intro-paragraph'>I’m also passionate about cybersecurity research and enjoy exploring vulnerabilities and secure system design.</div>`);
  banner.push("<br>");

  // Command suggestion panel (clickable)
  banner.push(`<div class='suggest-panel'>Try these commands: <span class='suggest command' data-cmd='whoami'>whoami</span>, <span class='suggest command' data-cmd='about'>about</span>, <span class='suggest command' data-cmd='education'>education</span>, <span class='suggest command' data-cmd='experience'>experience</span>, <span class='suggest command' data-cmd='projects'>projects</span>, <span class='suggest command' data-cmd='repo'>repos</span>, <span class='suggest command' data-cmd='achievement'>achievement</span>, <span class='suggest command' data-cmd='cp'>cp</span>, <span class='suggest command' data-cmd='skills'>skills</span>, <span class='suggest command' data-cmd='research'>research</span>, <span class='suggest command' data-cmd='connect'>connect</span></div>`);

  banner.push("<br>");
  banner.push(`<div>Type <span class='command'>'help'</span> for a full list of commands or click any suggestion above.</div>`);
  banner.push(`<div>Open repo: <a href='${command.repoLink}' target='_blank'>${command.repoLink}</a></div>`);
  banner.push("<br>");

  return banner;
}

export const BANNER = createBanner();