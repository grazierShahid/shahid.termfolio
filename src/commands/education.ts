import command from '../../config.json' assert {type: 'json'};

export const EDUCATION = () : string[] => {
  const education : string[] = [];
  education.push("<br>");
  command.education.forEach((ele) => {
    education.push(ele);
  });
  education.push("<br>");
  return education;
};