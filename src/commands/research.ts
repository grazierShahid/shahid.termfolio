import command from '../../config.json' assert {type: 'json'};

export const RESEARCH = () : string[] => {
  const research : string[] = [];
  research.push("<br>");
  command.research.forEach((ele) => {
    research.push(ele);
  });
  research.push("<br>");
  return research;
};