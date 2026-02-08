export const EFFR_PROFILE = {
  name: 'Ethio Friends Foundation for Refugees (EFFR)',
  establishedYear: 2022,
  officialRegistrationDate: 'January 13, 2025',
  highlights: [
    "Ethiopia's first formally registered Refugee-Led Organization (RLO).",
    'Holds the presidency of the African Refugee Women Led Network (ARWNET).',
    'Recipient of an International Accreditation Certificate from NGOsource.',
  ],
  mission:
    'Empower refugees from different nationalities and religions in developmental fields to facilitate their social inclusion into the local community through programs and activities in accordance with international and local laws.',
  vision:
    'Creating a productive and empowered refugee community capable of keeping pace with integrated development through training and rehabilitation programs.',
  objectives: [
    'Raise awareness among refugees in economic, social, health, cultural, and legal fields.',
    "Advocate for refugees’ issues and support access to essential resources and rights.",
    'Oppose gender-based violence.',
    'Support economic empowerment through entrepreneurship training and improved living conditions.',
    'Support refugee children’s education and reduce school dropout rates.',
  ],
  programs: [
    { id: 'economic-empowerment', title: 'Economic Empowerment & Entrepreneurship Program' },
    { id: 'livelihood', title: 'Livelihood Program' },
    { id: 'protection-gbv', title: 'Protection and GBV Program' },
    { id: 'mhpss', title: 'Psychosocial Support and Mental Health Program (MHPSS)' },
    { id: 'child-youth', title: 'Child and Youth Program' },
    { id: 'happy-family', title: 'Happy Family Program' },
    { id: 'disability-support', title: 'Disability Support Program' },
  ],
  achievements: {
    relief: {
      cashAssistanceFamilies: 400,
      foodBasketFamilies: 100,
      note: 'Cash support was provided during Ramadan and funded by charitable donors.',
    },
    legalAwareness: {
      theme: 'Let Your Voice of Success Heard',
      supporter: 'U.S. Refugee Self-Reliance Initiative (RSRI)',
      partner: 'Refugees and Returnees Service (RRS)',
      translatedLanguages: 5,
      phase2Supporter: 'Hilton Foundation',
      phase2Locations: ['Addis Ababa', 'Gambella camps'],
    },
    backToSchool: {
      projectName:
        "Back to School: Supporting Refugee Children's Education in Lemi Kura Sub-city",
      supporter: 'UNHCR',
      fieldStudyFamilies: 50,
      outOfSchoolChildrenApprox: 100,
      schoolSuppliesChildren: 25,
      amharicCourseChildren: 40,
      amharicCourseDurationMonths: 3,
    },
    partnerships: {
      mhpssPartner: 'Danish Refugee Council (DRC)',
    },
  },
} as const;

