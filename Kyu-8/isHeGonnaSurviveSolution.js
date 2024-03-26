function hero(bullets, dragons) {
  const bulletsToDefeatDragons = dragons * 2;
  if (bullets >= bulletsToDefeatDragons) {
    return true;
  }
  return false;
}
