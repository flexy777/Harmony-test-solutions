function cardMasker(characters) {
  if (characters.length <= 5) {
    return characters;
  }

  if (typeof characters != "string") {
    return " ";
  }

  const First_char = characters.slice(0, 1);
  const last_Four = characters.slice(characters.length - 4, characters.length);
  let output = "";

  for (let i = 1; i < characters.length - 4; i++) {
    let item = characters[i];

    if (isNaN(item)) {
      output = output + item;
    } else {
      output = output + "#";
    }
  }
  return First_char + output + last_Four;
}


cardMasker('1234567890') //outputs 1#####7890
cardMasker('123*&67890') //outputs 1##*&#7890
