type Environment = {
  api: {
    baseUrl: string,
    apiKey: string
  }

  lastMatchCount: number,
  season: number | "current"
  shownCountries: string[]
  countriesTopLeagues: Map<string, number>
};

export const environment: Environment = {
  api: {
    baseUrl: "https://v3.football.api-sports.io",
    apiKey: "ea09f878d82ed46986e5b2b480010afd"
  },

  lastMatchCount: 10,
  season: "current",
  // Stub data for the exam but could be replaced by an Observable containing user preferences.
  shownCountries: [
    "england",
    "spain",
    "germany",
    "france",
    "italy"
  ],

  countriesTopLeagues: new Map([
    ["england", 39],
    ["spain", 140],
    ["germany", 78],
    ["france", 61],
    ["italy", 135],
  ])
};
