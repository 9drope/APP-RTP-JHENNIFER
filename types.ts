export interface Game {
  id: string;
  name: string;
  providerId: string;
  image: string;
  modalImage?: string;
  distMin: number;
  distMax: number;
  metadata?: {
    rtp: string;
    volatility: string;
    maxWin: string;
  };
}

export interface Provider {
  id: string;
  name: string;
}

export interface Metrics {
  dist: number;
  pad: number;
  min: number;
  max: number;
  sugBonus: number;
  sugConexao: number;
  chanceBonus: number;
  ganhoGiro: number;
}

export interface BetHouse {
  id: string;
  name: string;
  logo: string;
  banner: string;
  license: string;
  url: string;
  rewards: string[];
}

export interface SupportLink {
  id: string;
  name: string;
  img: string;
  url: string;
  btn: string;
}

export interface RankedItem {
  game: Game;
  position: number;
  score: number;
  change?: number; // > 0 subiu, < 0 desceu, 0 manteve
}

export type NavTab = 'sinais' | 'ranking' | 'bets' | 'grupo';
