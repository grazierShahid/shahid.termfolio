import command from '../../config.json' assert {type: 'json'};

export const ACHIEVEMENT = () : string[] => {
  const achievement : string[] = [];
  achievement.push("<br>");
  command.achievements.forEach((ele) => {
    achievement.push(ele);
  });
  achievement.push("<br>");
  return achievement;
};