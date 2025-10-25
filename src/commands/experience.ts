import command from '../../config.json' assert {type: 'json'};

export const EXPERIENCE = () : string[] => {
  const experience : string[] = [];
  experience.push("<br>");
  command.experience.forEach((ele) => {
    experience.push(ele);
  });
  experience.push("<br>");
  return experience;
};