const helpObj = {
  "commands": [
    [
      "'whoami'",
      "About me in a nutshell."
    ],
    [
      "'about'",
      "A brief introduction."
    ],
    [
      "'education'",
      "My educational background."
    ],
    [
      "'experience'",
      "My professional experience."
    ],
    [
      "'projects'",
      "Things I have built."
    ],
    [
      "'repos'",
      "Redirect to my GitHub repositories."
    ],
    [
      "'achievement'",
      "My proudest accomplishments."
    ],
    [
      "'cp'",
      "My competitive programming journey."
    ],
    [
      "'skills'",
      "Technologies I am proficient in."
    ],
    [
      "'research'",
      "My publications and research work."
    ],
    [
      "'connect'",
      "Connect with me."
    ],
    [
      "'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")
  const maxLen = Math.max(...helpObj.commands.map(ele => ele[0].length));

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(maxLen - ele[0].length + 3);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();