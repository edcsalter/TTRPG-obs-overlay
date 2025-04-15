fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((player, index) => {
      const frame = document.getElementById(`player${index}`);
      if (!frame) return;

      frame.innerHTML = `
        <img src="${player.headshot}" alt="${player.name}" width="60" height="60" style="float:left; margin-right: 10px;">
        <strong>${player.name}</strong> | ${player.race} ${player.class} (Lv ${player.level})<br>
        <strong>HP:</strong> ${player.hp} | <strong>AC:</strong> ${player.ac}<br>
        <small>
          STR: ${player.str}, DEX: ${player.dex}, CON: ${player.con}<br>
          INT: ${player.int}, WIS: ${player.wis}, CHA: ${player.cha}
        </small>
      `;
    });
  });
