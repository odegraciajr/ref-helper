const categories = [
  {
    type: 213,
    categoryId: '20003',
    categoryName: 'baseball-cards',
    sportsName: 'Baseball',
    sportsId: '185223',
    icon: '⚾️',
    description: 'Baseball item related',
    ebayCategory: '261328'
  },
  {
    type: 214,
    categoryId: '20019',
    categoryName: 'basketball-cards',
    sportsName: 'Basketball',
    sportsId: '185226',
    icon: '🏀',
    description: 'Basketball item related',
    ebayCategory: '261328'
  },
  {
    type: 215,
    categoryId: '20014',
    categoryName: 'football-cards',
    sportsName: 'Football',
    sportsId: '185224',
    icon: '🏈',
    description: 'Football item related',
    ebayCategory: '261328'
  },
  {
    type: 216,
    categoryId: '156940',
    categoryName: 'tcg-cards',
    sportsName: 'Pokemon',
    sportsId: '477173',
    icon: '🐸',
    description: 'Pokemon item related',
    ebayCategory: '183454'
  },
  {
    type: 217,
    categoryId: '20004',
    categoryName: 'soccer-cards',
    sportsName: 'Soccer',
    sportsId: '364957',
    icon: '⚽️',
    description: 'Soccer item related',
    ebayCategory: '261328'
  },
  {
    type: 218,
    categoryId: '20023',
    categoryName: 'golf-cards',
    sportsName: 'Golf',
    sportsId: '186451',
    icon: '⛳️',
    description: 'Golf item related',
    ebayCategory: '261328'
  },
  {
    type: 219,
    categoryId: '20020',
    categoryName: 'hockey-cards',
    sportsName: 'Hockey',
    sportsId: '185225',
    icon: '🏑',
    description: 'Hockey item related',
    ebayCategory: '261328'
  }
];

const grades = [
  { title: 'None', group: '', sort: 'A' },
  { title: 'Raw', group: '', sort: 'A' },

  {
    title: 'PSA 10',
    group: 'PSA',
    popKey: 'Grade10',
    sort: 'B'
  },
  {
    title: 'PSA 9',
    group: 'PSA',
    popKey: 'Grade9',
    sort: 'B'
  },
  {
    title: 'PSA 8.5',
    group: 'PSA',
    popKey: 'Grade8_5',
    sort: 'B'
  },
  {
    title: 'PSA 8',
    group: 'PSA',
    popKey: 'Grade8',
    sort: 'B'
  },
  {
    title: 'PSA 7.5',
    group: 'PSA',
    popKey: 'Grade7_5',
    sort: 'B'
  },
  {
    title: 'PSA 7',
    group: 'PSA',
    popKey: 'Grade7',
    sort: 'B'
  },
  {
    title: 'PSA 6.5',
    group: 'PSA',
    popKey: 'Grade6_5',
    sort: 'B'
  },
  {
    title: 'PSA 6',
    group: 'PSA',
    popKey: 'Grade6',
    sort: 'B'
  },
  {
    title: 'PSA 5.5',
    group: 'PSA',
    popKey: 'Grade5_5',
    sort: 'B'
  },
  {
    title: 'PSA 5',
    group: 'PSA',
    popKey: 'Grade5',
    sort: 'B'
  },
  {
    title: 'PSA 4.5',
    group: 'PSA',
    popKey: 'Grade4_5',
    sort: 'B'
  },
  {
    title: 'PSA 4',
    group: 'PSA',
    popKey: 'Grade4',
    sort: 'B'
  },
  {
    title: 'PSA 3.5',
    group: 'PSA',
    popKey: 'Grade3_5',
    sort: 'B'
  },
  {
    title: 'PSA 3',
    group: 'PSA',
    popKey: 'Grade3',
    sort: 'B'
  },
  {
    title: 'PSA 2.5',
    group: 'PSA',
    popKey: 'Grade2_5',
    sort: 'B'
  },
  {
    title: 'PSA 2',
    group: 'PSA',
    popKey: 'Grade2',
    sort: 'B'
  },
  {
    title: 'PSA 1.5',
    group: 'PSA',
    popKey: 'Grade1_5',
    sort: 'B'
  },
  {
    title: 'PSA 1',
    group: 'PSA',
    popKey: 'Grade1',
    sort: 'B'
  },
  {
    title: 'PSA AUTH',
    group: 'PSA',
    popKey: 'GradeN0',
    sort: 'B'
  },

  {
    title: 'BGS 10 Black',
    group: 'BGS',
    popKey: 'fgB100',
    sort: 'C'
  },
  {
    title: 'BGS 10',
    group: 'BGS',
    popKey: 'fg100',
    sort: 'C'
  },
  {
    title: 'BGS 9.5',
    group: 'BGS',
    popKey: 'fg95',
    sort: 'C'
  },
  {
    title: 'BGS 9',
    group: 'BGS',
    popKey: 'fg90',
    sort: 'C'
  },
  {
    title: 'BGS 8.5',
    group: 'BGS',
    popKey: 'fg85',
    sort: 'C'
  },
  {
    title: 'BGS 8',
    group: 'BGS',
    popKey: 'fg80',
    sort: 'C'
  },
  {
    title: 'BGS 7.5',
    group: 'BGS',
    popKey: 'fg75',
    sort: 'C'
  },
  {
    title: 'BGS 7',
    group: 'BGS',
    popKey: 'fg70',
    sort: 'C'
  },
  {
    title: 'BGS 6.5',
    group: 'BGS',
    popKey: 'fg65',
    sort: 'C'
  },
  {
    title: 'BGS 6',
    group: 'BGS',
    popKey: 'fg60',
    sort: 'C'
  },
  {
    title: 'BGS 5.5',
    group: 'BGS',
    popKey: 'fg55',
    sort: 'C'
  },
  {
    title: 'BGS 5',
    group: 'BGS',
    popKey: 'fg50',
    sort: 'C'
  },
  {
    title: 'BGS 4.5',
    group: 'BGS',
    popKey: 'fg45',
    sort: 'C'
  },
  {
    title: 'BGS 4',
    group: 'BGS',
    popKey: 'fg40',
    sort: 'C'
  },
  {
    title: 'BGS 3.5',
    group: 'BGS',
    popKey: 'fg35',
    sort: 'C'
  },
  {
    title: 'BGS 3',
    group: 'BGS',
    popKey: 'fg30',
    sort: 'C'
  },
  {
    title: 'BGS 2.5',
    group: 'BGS',
    popKey: 'fg25',
    sort: 'C'
  },
  {
    title: 'BGS 2',
    group: 'BGS',
    popKey: 'fg20',
    sort: 'C'
  },
  {
    title: 'BGS 1.5',
    group: 'BGS',
    popKey: 'fg15',
    sort: 'C'
  },
  {
    title: 'BGS 1',
    group: 'BGS',
    popKey: 'fg10',
    sort: 'C'
  },

  {
    title: 'SGC 10 Pristine',
    group: 'SGC',
    popKey: 'grade10P',
    sort: 'D'
  },
  {
    title: 'SGC 10',
    group: 'SGC',
    popKey: 'grade10',
    sort: 'D'
  },
  {
    title: 'SGC 9.5',
    group: 'SGC',
    popKey: 'grade9pt5',
    sort: 'D'
  },
  {
    title: 'SGC 9',
    group: 'SGC',
    popKey: 'grade9',
    sort: 'D'
  },
  {
    title: 'SGC 8.5',
    group: 'SGC',
    popKey: 'grade8pt5',
    sort: 'D'
  },
  {
    title: 'SGC 8',
    group: 'SGC',
    popKey: 'grade8',
    sort: 'D'
  },
  {
    title: 'SGC 7.5',
    group: 'SGC',
    popKey: 'grade7pt5',
    sort: 'D'
  },
  {
    title: 'SGC 7',
    group: 'SGC',
    popKey: 'grade7',
    sort: 'D'
  },
  {
    title: 'SGC 6.5',
    group: 'SGC',
    popKey: 'grade6pt5',
    sort: 'D'
  },
  {
    title: 'SGC 6',
    group: 'SGC',
    popKey: 'grade6',
    sort: 'D'
  },
  {
    title: 'SGC 5.5',
    group: 'SGC',
    popKey: 'grade5pt5',
    sort: 'D'
  },
  {
    title: 'SGC 5',
    group: 'SGC',
    popKey: 'grade5',
    sort: 'D'
  },
  {
    title: 'SGC 4.5',
    group: 'SGC',
    popKey: 'grade4pt5',
    sort: 'D'
  },
  {
    title: 'SGC 4',
    group: 'SGC',
    popKey: 'grade4',
    sort: 'D'
  },
  {
    title: 'SGC 3.5',
    group: 'SGC',
    popKey: 'grade3pt5',
    sort: 'D'
  },
  {
    title: 'SGC 3',
    group: 'SGC',
    popKey: 'grade3',
    sort: 'D'
  },
  {
    title: 'SGC 2.5',
    group: 'SGC',
    popKey: 'grade2pt5',
    sort: 'D'
  },
  {
    title: 'SGC 2',
    group: 'SGC',
    popKey: 'grade2',
    sort: 'D'
  },
  {
    title: 'SGC 1.5',
    group: 'SGC',
    popKey: 'grade1pt5',
    sort: 'D'
  },
  {
    title: 'SGC 1',
    group: 'SGC',
    popKey: 'grade1',
    sort: 'D'
  },
  {
    title: 'SGC AUTH',
    group: 'SGC',
    popKey: 'gradeA',
    sort: 'D'
  },

  {
    title: 'BVG 10 Black',
    group: 'BVG',
    popKey: 'fgB100',
    sort: 'E'
  },
  {
    title: 'BVG 10',
    group: 'BVG',
    popKey: 'fg100',
    sort: 'E'
  },
  {
    title: 'BVG 9.5',
    group: 'BVG',
    popKey: 'fg95',
    sort: 'E'
  },
  {
    title: 'BVG 9',
    group: 'BVG',
    popKey: 'fg90',
    sort: 'E'
  },
  {
    title: 'BVG 8.5',
    group: 'BVG',
    popKey: 'fg85',
    sort: 'E'
  },
  {
    title: 'BVG 8',
    group: 'BVG',
    popKey: 'fg80',
    sort: 'E'
  },
  {
    title: 'BVG 7.5',
    group: 'BVG',
    popKey: 'fg75',
    sort: 'E'
  },
  {
    title: 'BVG 7',
    group: 'BVG',
    popKey: 'fg70',
    sort: 'E'
  },
  {
    title: 'BVG 6.5',
    group: 'BVG',
    popKey: 'fg65',
    sort: 'E'
  },
  {
    title: 'BVG 6',
    group: 'BVG',
    popKey: 'fg60',
    sort: 'E'
  },
  {
    title: 'BVG 5.5',
    group: 'BVG',
    popKey: 'fg55',
    sort: 'E'
  },
  {
    title: 'BVG 5',
    group: 'BVG',
    popKey: 'fg50',
    sort: 'E'
  },
  {
    title: 'BVG 4.5',
    group: 'BVG',
    popKey: 'fg45',
    sort: 'E'
  },
  {
    title: 'BVG 4',
    group: 'BVG',
    popKey: 'fg40',
    sort: 'E'
  },
  {
    title: 'BVG 3.5',
    group: 'BVG',
    popKey: 'fg35',
    sort: 'E'
  },
  {
    title: 'BVG 3',
    group: 'BVG',
    popKey: 'fg30',
    sort: 'E'
  },
  {
    title: 'BVG 2.5',
    group: 'BVG',
    popKey: 'fg25',
    sort: 'E'
  },
  {
    title: 'BVG 2',
    group: 'BVG',
    popKey: 'fg20',
    sort: 'E'
  },
  {
    title: 'BVG 1.5',
    group: 'BVG',
    popKey: 'fg15',
    sort: 'E'
  },
  {
    title: 'BVG 1',
    group: 'BVG',
    popKey: 'fg10',
    sort: 'E'
  }
];

const graders = [
  {
    name: 'PSA',
    code: 'psa'
  },
  {
    name: 'BGS',
    code: 'bgs'
  },
  {
    name: 'SGC',
    code: 'sgc'
  },
  {
    name: 'HGA',
    code: 'hga'
  }
];

module.exports = {
  categories,
  grades,
  graders
};
