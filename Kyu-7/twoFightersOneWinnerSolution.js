function declareWinner(fighter1, fighter2, firstAttacker) {
  const firstFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;
  const secondFighter = firstFighter === fighter1 ? fighter2 : fighter1;

  const firstFighterToWin = secondFighter.health / firstFighter.damagePerAttack;
  const secondFighterToWin =
    firstFighter.health / secondFighter.damagePerAttack;

  return firstFighterToWin <= secondFighterToWin
    ? firstFighter.name
    : secondFighter.name;
}

//logic passed most test cases but not all (issues reported on kata)