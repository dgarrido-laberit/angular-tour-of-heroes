const heroTypes = {
  MAGICIAN: 1,
  WARRIOR: 2,
  ANIMAL: 3,  
};

const heroTypeNames = {
  [heroTypes.MAGICIAN]: 'Mago',
  [heroTypes.WARRIOR]: 'Guerrero',
  [heroTypes.ANIMAL]: 'Animal',
}

const heroTypeIcon = {
  [heroTypes.MAGICIAN]:'assets/img/mago.png',
  [heroTypes.WARRIOR]: 'assets/img/caballero.png',
  [heroTypes.ANIMAL]: 'assets/img/druida.png',
}

export {
  heroTypes,
  heroTypeNames,
  heroTypeIcon,
};
