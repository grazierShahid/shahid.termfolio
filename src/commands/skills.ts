import command from '../../config.json' assert {type: 'json'};

export const SKILLS = () : string[] => {
  const skills : string[] = [];
  skills.push("<br>");
  command.skills.forEach((ele) => {
    skills.push(ele);
  });
  skills.push("<br>");
  return skills;
};