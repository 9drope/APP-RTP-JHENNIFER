import { Game, Provider, BetHouse, SupportLink } from './types';

export const CONFIG = {
  refreshSeconds: 180,
  banners: {
    desktop: "https://i.ibb.co/s9pk49jR/banner-desktop-rtpfortuna-jhennifer-COMPRESS.webp",
    mobile: "https://i.ibb.co/HfnmHYv4/banner-mobile-rtpfortuna-jhennifer-COMPRESS.webp"
  }
};

export const BET_HOUSES: BetHouse[] = [
  {
    id: "superbet",
    name: "SUPERBET",
    logo: "https://i.ibb.co/b5mQNxdS/14.webp",
    banner: "https://i.ibb.co/Fk1YPKpF/1.webp",
    license: "SPA/MF n°2.090",
    url: "https://superbet.bet.br/",
    rewards: [
      "SUPERSPIN: Roleta diária com prêmios como aposta grátis, giros grátis e bônus de até R$10.000.",
      "CASHBACK DE ATÉ 20% EM SLOTS: Ative em promoções, válido para alguns jogos.",
      "PROMOÇÕES SEMANAIS: Aposte e ganhe, giros grátis, palpite premiado."
    ]
  },
  {
    id: "zeroum",
    name: "ZEROUM",
    logo: "https://i.ibb.co/XQHPyKs/15.webp",
    banner: "https://i.ibb.co/23yvXXHk/2.webp",
    license: "SIGAP 099/2024",
    url: "https://zeroum.bet/",
    rewards: [
      "ROLETA DO MILHÃO: Roleta diária com giros grátis, iPhone e até R$1.000.000.",
      "ÁREA DE MISSÕES: Conclua missões e troque pontos por giros grátis.",
      "DEPOSITE E GANHE GIROS: Promoções periódicas de depósito com giros grátis."
    ]
  },
  {
    id: "lottu",
    name: "LOTTU",
    logo: "https://i.ibb.co/tPTkWV6Q/16.webp",
    banner: "https://i.ibb.co/Lz2n2CS5/3.webp",
    license: "SPA/MF n°136/25",
    url: "https://www.lottu.bet.br/",
    rewards: [
      "ROLETA DO MILHÃO: Roleta diária com giros grátis, iPhone e até R$1.000.000.",
      "ÁREA DE MISSÕES: Conclua missões e troque pontos por giros grátis.",
      "DEPOSITE E GANHE GIROS: Promoções periódicas de depósito com giros grátis."
    ]
  },
  {
    id: "sportingbet",
    name: "SPORTINGBET",
    logo: "https://i.ibb.co/0RQvQcp0/17.webp",
    banner: "https://i.ibb.co/79v8NZP/4.webp",
    license: "SPA/MF nº 247",
    url: "https://www.sportingbet.bet.br/",
    rewards: [
      "GIRÃO DO SHAQ: Aposte R$10 em Futebol e ganhe uma chance com prêmios de giros grátis, apostas grátis e até R$1000 em saldo.",
      "APOSTOU, GANHOU!: Aposte R$20 em slots e receba 20 giros grátis na Gates of Olympus Super Scatter por dia."
    ]
  },
  {
    id: "spinbetter",
    name: "SPINBETTER",
    logo: "https://i.ibb.co/d0zmRj3n/18.webp",
    banner: "https://i.ibb.co/0VM0SwRD/5.webp",
    license: "N/A",
    url: "https://spinbetter.com/br",
    rewards: [
      "BÔNUS NOS 4 PRIMEIROS DEPÓSITOS: Mínimo de 65 BRL no 1º e 100 BRL nos demais.",
      "1º DEPÓSITO: 100% de bônus e 30 FS.",
      "2º DEPÓSITO: 50% de bônus e 35 FS.",
      "3º DEPÓSITO: 25% de bônus e 40 FS.",
      "4º DEPÓSITO: 25% de bônus e 45 FS."
    ]
  }
];

export const PROVIDERS: Provider[] = [
  { id: "pgsoft", name: "PG SOFT" },
  { id: "pragmatic", name: "PRAGMATIC" },
  { id: "pragmatic-bonus", name: "PRAGMATIC - BÔNUS" },
  { id: "tada", name: "TADA" },
  { id: "all", name: "TODOS" }
];

const slug = (s: string, p: string) => {
  return `${p}-${String(s).toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()}`;
};

const createGame = (name: string, providerId: string, image: string, modalImage: string, distMin: number, distMax: number, rtp: string, vol: string, maxWin: string): Game => ({
  id: slug(name, providerId),
  name,
  providerId,
  image,
  modalImage,
  distMin,
  distMax,
  metadata: {
    rtp,
    volatility: vol,
    maxWin
  }
});

export const GAMES: Game[] = [
  // PGSOFT
  createGame("Fortune Horse", "pgsoft", "https://i.ibb.co/NgQwd7Jf/2a9d58a3-263e-4f88-b547-d39e426cadb4.webp", "https://i.ibb.co/XxSXDVdf/0c84ed70-8269-411d-9680-35289832d8b7.png", 91, 98, "96.76%", "Média", "x10.000"),
  createGame("Fortune Snake", "pgsoft", "https://i.ibb.co/mCgYjFgz/bfb8a668-ba3c-441e-b045-1acc36e33dcd.webp", "https://i.ibb.co/kVsC2FPZ/93e11566-503c-462e-ad38-4554e716f8f8.webp", 90, 98, "96.76%", "Baixa", "x5.000"),
  createGame("Mr. Treasure's Fortune", "pgsoft", "https://i.ibb.co/d4SrstDL/679671c8-828d-42bc-894b-94dd1aef7755.webp", "https://i.ibb.co/vxkz2xY1/e6cfb4af-f28f-4c95-a35a-b3774669ba53.webp", 89, 97, "96.71%", "Média", "x5.000"),
  createGame("Cash Mania", "pgsoft", "https://i.ibb.co/JR6WHBD3/f89e7f31-8f78-4f01-b36c-b014da0ff7e3.webp", "https://i.ibb.co/hRP8kcck/a32fdc67-e0c0-4d7b-a211-53868866a0f7.png", 90, 98, "96.75%", "Alta", "x2.000"),
  createGame("Fortune Dragon", "pgsoft", "https://i.ibb.co/xwWbHfC/5229a2e5-b0f9-4dcc-98a0-d07c62d8de3f.webp", "https://i.ibb.co/YBRfM7gn/54cd3699-c08e-4c00-8d9e-ca5932d3c7d5.png", 91, 98, "96.74%", "Média", "x2.500"),
  createGame("Fortune Rabbit", "pgsoft", "https://i.ibb.co/m5yfJvpQ/bd33d41f-474f-4e84-b5e3-1529c5c722d0.webp", "https://i.ibb.co/jPvVJqbQ/1c66cd3b-e9e6-417a-a59e-74124af6ebc5.png", 90, 98, "96.75%", "Média", "x5.000"),
  createGame("Fortune Tiger", "pgsoft", "https://i.ibb.co/xKds9dfW/3d3f7a6f-4f27-49f5-b8ae-cea5b0124609.webp", "https://i.ibb.co/Lzx2KR8p/573dd356-c258-4f7d-b6a3-94c4ab44a780.png", 91, 98, "96.81%", "Média", "x2.500"),
  createGame("Fortune Ox", "pgsoft", "https://i.ibb.co/jp4Wj4L/60006201-4316-4110-af44-a782d8c310cb.webp", "https://i.ibb.co/DffMXPJF/c22ec329-3bad-4b36-94e0-3ba1997e2a2d.png", 89, 97, "96.75%", "Média", "x2.000"),
  createGame("Fortune Mouse", "pgsoft", "https://i.ibb.co/LDp5bLQG/fdb09911-2926-451c-9648-9018b4121907.webp", "https://i.ibb.co/KxJdMGf4/01351cb9-a96f-4d62-a42b-349146fded93.png", 92, 99, "96.96%", "Média", "x1.000"),
  createGame("Kraken Gold Rush", "pgsoft", "https://i.ibb.co/nq9z8DH7/015e786c-d88d-40fe-b63c-b3d3bbe6cdf0.webp", "https://i.ibb.co/ym9kM0Lg/2cc3d7c6-d71c-4f80-9941-932c98922893.png", 90, 98, "96.75%", "Alta", "x5.000"),
  createGame("Dead Man's Riches", "pgsoft", "https://i.ibb.co/ZRPqK2Sb/3a4a4f04-1d6a-4fa6-9d13-18e59ba334b4.webp", "https://i.ibb.co/TBQvkjgN/a876b8f3-4a16-46d3-94fe-d48f1318c56e.webp", 90, 98, "96.75%", "Alta", "x10.000"),
  createGame("Dragon Hatch 2", "pgsoft", "https://i.ibb.co/sJwVWw94/4f43956b-e020-42be-b5a2-145d521274e6.webp", "https://i.ibb.co/8nh2kk1Y/7fc76e64-8412-4653-8da6-2d36c1d4d9ea.png", 90, 98, "96.76%", "Média", "x2.500"),
  createGame("Songkran Splash", "pgsoft", "https://i.ibb.co/zhtrb5ZM/714a2082-f8d2-485e-bafb-1fe5f2e0c0b5.webp", "https://i.ibb.co/sp6zphSQ/af3396c7-c93f-40b0-b4a4-6c40bbe3f9a1.png", 88, 96, "96.65%", "Alta", "x5.000"),
  createGame("Double Fortune", "pgsoft", "https://i.ibb.co/yn83Bx3P/1384e4bd-29a7-430b-9fd0-81b084a4880d.webp", "https://i.ibb.co/F4r4rx7j/5ddaf35b-d498-4dbc-8c58-de660afaaa23.png", 85, 95, "96.22%", "Alta", "x100.000"),
  createGame("The Great Icescape", "pgsoft", "https://i.ibb.co/C390HwgW/e958e30f-8653-43c2-8208-9dc18fe21d26.webp", "https://i.ibb.co/LX5msxM2/f3e23def-454a-43c8-b8d0-26c60078cbe9.png", 86, 96, "96.33%", "Média", "x50.000"),

  // PRAGMATIC (Replaced)
  createGame("Lucky Panda", "pragmatic", "https://i.ibb.co/MkYWbQxp/baf93d4d-bc97-49fb-aa21-4d28025e4734.webp", "https://i.ibb.co/232hyjMy/Lucky-Panda-339x180-B.png", 90, 98, "96.50%", "Média", "x2.000"),
  createGame("Olympus Wins", "pragmatic", "https://i.ibb.co/JRNdTfsv/fba158db-d580-434a-bba3-18434e6d5688.webp", "https://i.ibb.co/qFpJxv02/Olympus-Wins-Super-Scatter-339x180-WR-2.png", 90, 98, "96.50%", "Alta", "x100.000"),
  createGame("Lucky Monkey", "pragmatic", "https://i.ibb.co/5hpXNqkN/3be83de5-7533-464c-ab20-101c6bfd8cc0.webp", "https://i.ibb.co/212Z7pzK/Lucky-Monkey-339x180-1.png", 90, 98, "96.50%", "Alta", "x5.000"),
  createGame("Lucky Mouse", "pragmatic", "https://i.ibb.co/shvs44C/985327f3-a428-4b59-966b-ae75df8dad06.webp", "https://i.ibb.co/vxV2tN7y/Lucky-Mouse-339x180.png", 90, 98, "96.57%", "Alta", "x1.000"),
  createGame("Lucky Dog", "pragmatic", "https://i.ibb.co/p6Ww8PcV/2467f411-0595-4ca2-9b94-e846fb585346.webp", "https://i.ibb.co/TD1jmh24/Lucky-Dog-339x180.png", 90, 98, "96.50%", "Alta", "x1.000"),
  createGame("Lucky Ox", "pragmatic", "https://i.ibb.co/GQrTy70D/3d49865f-90b9-4afb-ae60-8ea4ee946ca1.webp", "https://i.ibb.co/RTzZgmL9/Lucky-Ox-339x180.png", 90, 98, "96.55%", "Média", "x5.000"),
  createGame("Lucky Phoenix", "pragmatic", "https://i.ibb.co/n8QyGW3p/642bc5dd-d9a0-440f-aca1-b6b90003da38.avif", "https://i.ibb.co/HDQPk5Cg/Lucky-Phoenix-339x180-1.png", 90, 98, "96.50%", "Alta", "x2.000"),
  createGame("Lucky Tiger 1000", "pragmatic", "https://i.ibb.co/wh81nHgw/1e34d130-7f4c-4c55-ac83-0f41643ecf0a.avif", "https://i.ibb.co/XrGLsCXs/Lucky-Tiger-1000-339x180-1.png", 90, 98, "96.50%", "Alta", "x25.000"),

  // PRAGMATIC - BÔNUS (New)
  createGame("Sweet Bonanza 1000", "pragmatic-bonus", "https://i.ibb.co/Ps6Rz84B/810ab510-6a9a-4a88-bda6-9acd02b10135.webp", "https://i.ibb.co/BKs31DTh/Sweet-Bonanza-1000-339x180.png", 90, 98, "96.53%", "Alta", "x25.000"),
  createGame("Sweet Rush Bonanza", "pragmatic-bonus", "https://i.ibb.co/h1L2ypY5/f00aca6a-01f0-46d4-b016-f583ad4eae81.webp", "https://i.ibb.co/4n76qLg1/Sweet-Rush-Bonanza-339x180-1.png", 90, 98, "96.50%", "Alta", "x5.000"),
  createGame("Zeus vs Hades Gods of War 250", "pragmatic-bonus", "https://i.ibb.co/dRMJBdG/c1d7200a-8a4d-4205-81f4-6d9fb723b1ee.webp", "https://i.ibb.co/xtjCqRxC/Zeus-vs-Hades-Gods-of-War-250-339x180.png", 90, 98, "96,56%", "Alta", "x25.000"),
  createGame("Big Bass Bonanza 1000", "pragmatic-bonus", "https://i.ibb.co/mCTP9KcL/1c9eda8d-c103-4fc7-b162-fc8b5d88ed4c.webp", "https://i.ibb.co/chHSm9hp/Big-Bass-Bonanza-1000-339x180.png", 90, 98, "96.51%", "Alta", "x20.000"),
  createGame("Big Bass Splash 1000", "pragmatic-bonus", "https://i.ibb.co/pmW0XcT/e102e6eb-c3c0-4b5f-988a-d966f5b8f327.webp", "https://i.ibb.co/GfQ8LPmS/Big-Bass-Splash-1000-339x180-EN.png", 90, 98, "96.52%", "Alta", "x25.000"),
  createGame("Club Tropicana – Happy Hour", "pragmatic-bonus", "https://i.ibb.co/QvWGG49g/6a8b514f-2cc7-4130-b856-1ee74875a7e4.webp", "https://i.ibb.co/jkM78zKf/Club-Tropicana-Happy-Hour-339x180.png", 90, 98, "96.50%", "Alta", "x5.000"),
  createGame("Big Bass Reel Repeat", "pragmatic-bonus", "https://i.ibb.co/fGLTh4bv/98fdc61f-cbaf-46e4-a10d-9ea51640199e.webp", "https://i.ibb.co/qLfQMd8B/Big-Bass-Reel-Repeat-339x180.png", 90, 98, "96.51%", "Alta", "x5.000"),
  createGame("Bigger Bass Splash", "pragmatic-bonus", "https://i.ibb.co/1GbsTBcP/ba74c69d-2524-42c3-8e99-2e05cec33321.webp", "https://i.ibb.co/1trFdDY8/BIGGER-BASS-SPLASH-339x180.png", 90, 98, "96.50%", "Alta", "x5.000"),
  createGame("Sugar Rush 1000", "pragmatic-bonus", "https://i.ibb.co/0R8YdL9X/00bc815e-37e6-442c-97d8-a47c44438932.webp", "https://i.ibb.co/5xGG5rnt/Sugar-Rush-1000-339x180.png", 90, 98, "96.00%", "Alta", "x25.000"),
  createGame("Gates of Olympus 1000", "pragmatic-bonus", "https://i.ibb.co/RpnV592D/ef5d0521-22bd-4c82-bd6f-91b0c735f4a4.webp", "https://i.ibb.co/rVwKmjW/Gates-of-Olympus-1000-339x180.png", 90, 98, "96.50%", "Alta", "x15.000"),
  createGame("Starlight Princess 1000", "pragmatic-bonus", "https://i.ibb.co/MxhZg4pt/11e97f1e-0355-4f18-a651-0c6ac7eef783.webp", "https://i.ibb.co/qLLMGyJT/Starlight-Princess-1000-339x180.png", 90, 98, "96.50%", "Alta", "x15.000"),
  createGame("Big Bass Halloween 3", "pragmatic-bonus", "https://i.ibb.co/PnTk3LR/21cc5f0a-d12b-4ed9-b46a-e3c94ef1c8ae.webp", "https://i.ibb.co/mC3j0vF5/Big-Bass-Halloween-3-339x180.png", 90, 98, "96.50%", "Alta", "x5.000"),
  createGame("Joker’s Jewels Hold & Spin", "pragmatic-bonus", "https://i.ibb.co/WvFw1gMM/e71b8492-ae89-456c-8353-09d2c97499a4.webp", "https://i.ibb.co/QFNW5HgR/Jokers-Jewels-Hold-Spin-339x180-EN.png", 90, 98, "96.52%", "Alta", "x10.000"),
  createGame("Peppe’s Pepperoni Pizza Plaza", "pragmatic-bonus", "https://i.ibb.co/4gsxz70t/30d31bb3-a2e0-4ad2-96b5-b95e08ddca57.webp", "https://i.ibb.co/rRJhv1Gr/Peppes-Pepperoni-Pizza-Plaza-339x180.png", 90, 98, "96.55%", "Alta", "x6.000"),
  createGame("Bigger Barn House Bonanza", "pragmatic-bonus", "https://i.ibb.co/ycjGY9C5/44743a2a-2a10-4ff5-81a6-cee28903bf2d.webp", "https://i.ibb.co/HT6MYRWf/Bigger-Barn-House-Bonanza-339x180-EN.png", 90, 98, "96.50%", "Alta", "x25.000"),

  // TADA (Replaced)
  createGame("Lucky Jaguar 500", "tada", "https://i.ibb.co/5hJGHLYS/d2093fdf-f0c1-4cee-8743-17940b56f4bf.webp", "https://i.ibb.co/ZpqStzq5/Lucky-Jaguar-500.webp", 90, 98, "96.50%", "Média", "x20.000"),
  createGame("Lucky Jaguar 2", "tada", "https://i.ibb.co/6RgM9r6B/284c0bda-bfde-4167-b4d8-c2bdef844aad.webp", "https://i.ibb.co/j9LgxL3y/Lucky-Jaguar-2.webp", 90, 98, "97.00%", "Média", "x10.000"),
  createGame("Money Pot", "tada", "https://i.ibb.co/LXtdJ1KQ/979b9d09-1d5c-454c-a95e-518797810ee2.webp", "https://i.ibb.co/8wZS1Qs/Money-Pot.webp", 90, 98, "96.30%", "Alta", "x3.000"),
  createGame("Lucky Tiger", "tada", "https://i.ibb.co/1tb3gWhC/509004aa-42a4-47a1-b78a-c80abea1aa56.webp", "https://i.ibb.co/Q7h2RZQZ/Lucky-Tiger-Ta-Da-Gaming.webp", 90, 98, "97.00%", "Média", "x3.000"),
  createGame("Fortune Yuri 500", "tada", "https://i.ibb.co/nZd5dq9/33c5b5fe-d187-48e5-99e1-fd3a73ce8ae0.webp", "https://i.ibb.co/kvtx4Sw/Fortune-Yuri-500.webp", 90, 98, "96.00%", "Média", "x12.500"),
  createGame("Fortune Monkey", "tada", "https://i.ibb.co/bRq7x9q7/34c17049-23fb-42bd-81f6-f27da8150740.webp", "https://i.ibb.co/S42W1xXC/Fortune-Monkey-Ta-Da-Gaming.webp", 90, 98, "97.00%", "Média", "x1.500"),
];

export const SUPPORT: SupportLink[] = [
  {
    id: "whatsapp",
    name: "GRUPO WHATSAPP",
    img: "https://i.postimg.cc/Vsn3cMK8/pngtree-whatsapp-icon-png-image-6315990.png",
    url: "https://chat.whatsapp.com/Dx0gxm8s3wLCpzuv6ymBOb",
    btn: "ENTRAR NO GRUPO"
  },
  {
    id: "telegram",
    name: "TELEGRAM",
    img: "https://i.postimg.cc/yYK26dGZ/Telegram-2019-Logo-svg.webp",
    url: "https://t.me/",
    btn: "ABRIR TELEGRAM"
  }
];
