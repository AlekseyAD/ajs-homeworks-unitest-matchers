import sortPlayers from "../sortplayer";

test("Сортировка игроков", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).toEqual(expected);
});
