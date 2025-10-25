import command from '../../config.json' assert {type: 'json'};

const createConnect = () : string[] => {
  const connect : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  connect.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(20 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  connect.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(20 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  connect.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(20 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  connect.push(string);

  connect.push("<br>");
  return connect
}

export const CONNECT = createConnect();