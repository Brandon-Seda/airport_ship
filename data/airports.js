


const airports=[ { code: 'ABE',
    lat: '40.6514',
    lon: '-75.4342',
    name: 'Lehigh Valley International Airport',
    city: 'Allentown',
    state: 'Pennsylvania',
    country: 'United States',
    woeid: '12518581',
    tz: 'America/New_York',
    phone: '610-266-6000',
    type: 'Airports',
    email: '',
    url: 'http://www.lvia.org/',
    runway_length: null,
    elev: null,
    icao: 'KABE',
    direct_flights: '14',
    carriers: '11' },
  { code: 'ABI',
    lat: '32.4164',
    lon: '-99.6803',
    name: 'Abilene Regional Airport',
    city: 'Abilene',
    state: 'Texas',
    country: 'United States',
    woeid: '12518518',
    tz: 'America/Chicago',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '7199',
    elev: '1790',
    icao: 'KABI',
    direct_flights: '2',
    carriers: '4' },
  { code: 'ABL',
    lat: '67.1058',
    lon: '-157.854',
    name: 'Ambler Airport',
    city: 'Kiana',
    state: 'Alaska',
    country: 'United States',
    woeid: '12518600',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '2600',
    elev: '289',
    icao: '',
    direct_flights: '2',
    carriers: '3' },
  { code: 'ABQ',
    lat: '35.0494',
    lon: '-106.625',
    name: 'Albuquerque International Airport',
    city: 'Albuquerque',
    state: 'New Mexico',
    country: 'United States',
    woeid: '12518564',
    tz: 'America/Denver',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '13375',
    elev: '5352',
    icao: 'KABQ',
    direct_flights: '41',
    carriers: '25' },
  { code: 'ABR',
    lat: '45.4536',
    lon: '-98.4189',
    name: 'Aberdeen Regional Airport',
    city: 'Aberdeen',
    state: 'South Dakota',
    country: 'United States',
    woeid: '12518514',
    tz: 'America/Chicago',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '6904',
    elev: '1301',
    icao: 'KABR',
    direct_flights: '3',
    carriers: '5' },
  { code: 'ABY',
    lat: '31.5328',
    lon: '-84.1867',
    name: 'Southwest Georgia Regional Airport',
    city: 'Albany',
    state: 'Georgia',
    country: 'United States',
    woeid: '12521922',
    tz: 'America/New_York',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '6601',
    elev: '197',
    icao: 'KABY',
    direct_flights: '1',
    carriers: '2' },
  { code: 'ACK',
    lat: '41.2568',
    lon: '-70.0649',
    name: 'Nantucket Memorial Airport',
    city: 'Nantucket',
    state: 'Massachusetts',
    country: 'United States',
    woeid: '12521076',
    tz: 'America/New_York',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '6303',
    elev: '48',
    icao: 'KACK',
    direct_flights: '9',
    carriers: '6' },
  { code: 'ACT',
    lat: '31.609',
    lon: '-97.2234',
    name: 'Waco Regional Airport',
    city: 'Waco',
    state: 'Texas',
    country: 'United States',
    woeid: '12522299',
    tz: 'America/Chicago',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '6597',
    elev: '516',
    icao: 'KACT',
    direct_flights: '2',
    carriers: '2' },
  { code: 'ACV',
    lat: '40.9698',
    lon: '-124.108',
    name: 'Arcata Airport',
    city: 'Mckinleyville',
    state: 'California',
    country: 'United States',
    woeid: '12518649',
    tz: 'America/Los_Angeles',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '5998',
    elev: '218',
    icao: 'KACV',
    direct_flights: '6',
    carriers: '7' },
  { code: 'ACY',
    lat: '39.4512',
    lon: '-74.5716',
    name: 'Atlantic City International Airport',
    city: 'Egg Harbor City',
    state: 'New Jersey',
    country: 'United States',
    woeid: '12518689',
    tz: 'America/New_York',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '10000',
    elev: '76',
    icao: 'KACY',
    direct_flights: '6',
    carriers: '1' },
  { code: 'ADK',
    lat: '51.88',
    lon: '-176.639',
    name: 'Adak Airport',
    city: 'Adak',
    state: 'Alaska',
    country: 'United States',
    woeid: '12518524',
    tz: 'America/Adak',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '7794',
    elev: '19',
    icao: 'PADK',
    direct_flights: '1',
    carriers: '1' },
  { code: 'ADQ',
    lat: '57.7545',
    lon: '-152.512',
    name: 'Kodiak Airport',
    city: 'Kodiak',
    state: 'Alaska',
    country: 'United States',
    woeid: '12520492',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '7548',
    elev: '73',
    icao: 'PADQ',
    direct_flights: '12',
    carriers: '7' },
  { code: 'AET',
    lat: '66.55',
    lon: '-152.65',
    name: 'Allakaket Airport',
    city: 'Allakaket',
    state: 'Alaska',
    country: 'United States',
    woeid: '12524551',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '3000',
    elev: '350',
    icao: '',
    direct_flights: '4',
    carriers: '4' },
  { code: 'AEX',
    lat: '31.323',
    lon: '-92.5417',
    name: 'Alexandria International Airport',
    city: 'Alexandria',
    state: 'Louisiana',
    country: 'United States',
    woeid: '12519648',
    tz: 'America/Chicago',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: null,
    elev: null,
    icao: 'KAEX',
    direct_flights: '5',
    carriers: '7' },
  { code: 'AGN',
    lat: '57.4996',
    lon: '-134.577',
    name: 'Angoon Airport',
    city: 'Angoon',
    state: 'Alaska',
    country: 'United States',
    woeid: '12524552',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: null,
    elev: '1',
    icao: 'PAGN',
    direct_flights: '1',
    carriers: '1' },
  { code: 'AGS',
    lat: '33.3735',
    lon: '-81.9732',
    name: 'Bush Field Airport',
    city: 'Augusta',
    state: 'Georgia',
    country: 'United States',
    woeid: '12518987',
    tz: 'America/New_York',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '8001',
    elev: '145',
    icao: 'KAGS',
    direct_flights: '2',
    carriers: '8' },
  { code: 'AHC',
    lat: '40.2664',
    lon: '-120.151',
    name: 'Amedee Army Air Field',
    city: 'Herlong',
    state: 'California',
    country: 'United States',
    woeid: '12518602',
    tz: 'America/Los_Angeles',
    phone: '',
    type: 'Military Airport',
    email: '',
    url: '',
    runway_length: null,
    elev: null,
    icao: 'KAHC',
    direct_flights: '1',
    carriers: '1' },
  { code: 'AIA',
    lat: '42.0622',
    lon: '-102.81',
    name: 'Alliance Municipal Airport',
    city: 'Alliance',
    state: 'Nebraska',
    country: 'United States',
    woeid: '12518583',
    tz: 'America/Denver',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '9202',
    elev: '3929',
    icao: 'KAIA',
    direct_flights: '3',
    carriers: '3' },
  { code: 'AIN',
    lat: '70.6139',
    lon: '-159.857',
    name: 'Wainwright Airport',
    city: 'Wainwright',
    state: 'Alaska',
    country: 'United States',
    woeid: '12522307',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '2200',
    elev: '25',
    icao: 'PAWT',
    direct_flights: '2',
    carriers: '1' },
  { code: 'AKB',
    lat: '52.2217',
    lon: '-174.204',
    name: 'Atka Airport',
    city: 'Atka',
    state: 'Alaska',
    country: 'United States',
    woeid: '12518685',
    tz: 'America/Adak',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '3100',
    elev: '33',
    icao: '',
    direct_flights: '1',
    carriers: '2' },
  { code: 'AKI',
    lat: '60.8866',
    lon: '-161.218',
    name: 'Akiak Airport',
    city: 'Bethel',
    state: 'Alaska',
    country: 'United States',
    woeid: '12524554',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '2000',
    elev: '22',
    icao: '',
    direct_flights: '1',
    carriers: '2' },
  { code: 'AKK',
    lat: '56.95',
    lon: '-154.167',
    name: 'Akhiok Airport',
    city: 'Kodiak',
    state: 'Alaska',
    country: 'United States',
    woeid: '12524555',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '2170',
    elev: '50',
    icao: 'PAKH',
    direct_flights: '1',
    carriers: '1' },
  { code: 'AKN',
    lat: '58.6775',
    lon: '-156.655',
    name: 'King Salmon Airport',
    city: 'King Salmon',
    state: 'Alaska',
    country: 'United States',
    woeid: '12520466',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '8500',
    elev: '57',
    icao: 'PAKN',
    direct_flights: '14',
    carriers: '7' },
  { code: 'AKP',
    lat: '68.1916',
    lon: '-151.79',
    name: 'Anaktuvuk Pass Airport',
    city: 'Anaktuvuk Pass',
    state: 'Alaska',
    country: 'United States',
    woeid: '12524556',
    tz: 'America/Anchorage',
    phone: '',
    type: 'Airports',
    email: '',
    url: '',
    runway_length: '5500',
    elev: '2100',
    icao: 'PAKP',
    direct_flights: '3',
}

];

module.exports=airports;