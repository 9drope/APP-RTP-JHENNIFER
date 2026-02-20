import { Game, Metrics, RankedItem } from './types';

// Gerador Pseudo-Aleatório Determinístico (Mulberry32)
const createPRNG = (seed: number) => {
  return () => {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

export const computeMetrics = (g: Game, timeWindow: number): Metrics => {
  const seed = hashString(g.id) + timeWindow;
  const random = createPRNG(seed);
  const randBetween = (min: number, max: number) => min + random() * (max - min);

  const dist = Math.round(randBetween(g.distMin, g.distMax));
  let chanceBonus = Math.round(randBetween(20, 95));
  let ganhoGiro = chanceBonus <= 70 ? Math.round(randBetween(71, 95)) : Math.round(randBetween(20, 95));

  return {
    dist,
    pad: Math.round(randBetween(35, 85)),
    min: Math.round(randBetween(15, 75)),
    max: Math.round(randBetween(25, 95)),
    sugBonus: randBetween(1.00, 3.00),
    sugConexao: randBetween(2.00, 4.50),
    chanceBonus,
    ganhoGiro,
  };
};

/**
 * Retorna a lista de jogos com pontuação bruta para um seed específico
 */
const getRawScoredList = (games: Game[], timeSeed: number) => {
  return games.map(game => {
    const seed = hashString(game.id) + timeSeed;
    const random = createPRNG(seed);
    return {
      game,
      score: random() * 1000
    };
  }).sort((a, b) => b.score - a.score);
};

/**
 * Gera ranking determinístico baseado em semente temporal com lógica de mudança de posição
 */
export const getRankedList = (games: Game[], timeSpan: 'day' | 'week'): RankedItem[] => {
  const now = new Date();
  let currentSeed: number;
  let prevSeed: number;

  if (timeSpan === 'day') {
    currentSeed = Math.floor(now.getTime() / 86400000);
    prevSeed = currentSeed - 1;
  } else {
    // Week seed
    const janFirst = new Date(now.getFullYear(), 0, 1);
    const weekNo = Math.ceil((((now.getTime() - janFirst.getTime()) / 86400000) + janFirst.getDay() + 1) / 7);
    currentSeed = now.getFullYear() * 100 + weekNo;
    prevSeed = currentSeed - 1;
  }

  const limit = timeSpan === 'day' ? 5 : 10;
  
  const currentScored = getRawScoredList(games, currentSeed);
  const prevScored = getRawScoredList(games, prevSeed);

  // Mapear posições do ciclo anterior
  const prevMap = new Map();
  prevScored.forEach((item, index) => {
    prevMap.set(item.game.id, index + 1);
  });

  return currentScored.slice(0, limit).map((item, index) => {
    const currentPos = index + 1;
    const prevPos = prevMap.get(item.game.id) || (limit + 10); // Assume posição baixa se era novo
    
    return {
      game: item.game,
      position: currentPos,
      score: item.score,
      change: prevPos - currentPos // > 0 subiu (ex: de 5 para 3 = +2)
    };
  });
};