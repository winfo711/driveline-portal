
// Vehicle data mappings - API key to display value

export const safety_features: Record<string, string> = {
  'appuie_tete_actif': 'Appuie-tête actif',
  'phares_adaptatifs': 'Phares adaptatifs',
  'camera_de_sauvegarde': 'Caméra de sauvegarde',
  'avertissement_points_aveugles': 'Avertissement des points aveugles',
  'aide_au_freinage': 'Aide au freinage',
  'avertissement_collision_avant': 'Avertissement de collision avant',
  'aide_a_la_garde_des_voies': 'Aide à la garde des voies',
  'systemes_aide_stationnement': 'Systèmes d\'aide au stationnement',
  'detection_des_pietons': 'Détection des piétons',
  'camera_visionlaterale': 'Caméra de vision latérale',
};

export const features: Record<string, string> = {
  'caméra_360': 'Caméra à 360 degrés',
  'alerte_points_aveugles': 'Alerte des points aveugles',
  'bluetooth': 'Bluetooth',
  'sièges_refroidis': 'Sièges refroidis',
  'sièges_chauffants': 'Sièges chauffants',
  'début_sans_clé': 'Début sans clé',
  'sièges_en_cuir': 'Sièges en cuir',
  'phares_a_DEL': 'Phares à DEL',
  'siège_mémoire': 'Siège mémoire',
  'système_de_navigation': 'Système de navigation',
  'caméra_réversible': 'Caméra réversible',
  'sacs_gonflables_latéraux': 'Sacs gonflables latéraux',
  'système_sonore': 'Système sonore',
  'contrôle_de_traction': 'Contrôle de traction',
  'port_USB': 'Port USB',
};

export const cylinders: Record<string, string> = {
  '4': '4',
  '6': '6',
  '8': '8',
};

export const colors: Record<string, string> = {
  'rouge': 'Rouge',
  'bleu': 'Bleu',
  'noir': 'Noir',
  'blanc': 'Blanc',
  'gris': 'Gris',
  'vert': 'Vert',
  'jaune': 'Jaune',
  'orange': 'Orange',
  'marron': 'Marron',
  'violet': 'Violet',
};

export const makes: Record<string, string> = {
  'audi': 'Audi',
  'bentley': 'Bentley',
  'bmw': 'BMW',
  'cadillac': 'Cadillac',
  'chevrolet': 'Chevrolet',
  'ferrari': 'Ferrari',
  'ford': 'Ford',
  'mercedes_benz': 'Mercedes-Benz',
  'porsche': 'Porsche',
};

export const models: Record<string, string> = {
  '1-Serie': '1-Serie',
  '2-Serie': '2-Serie',
  '3-Serie': '3-Serie',
  '4-Serie': '4-Serie',
  '488 Spider': '488 Spider',
  '5-Serie': '5-Serie',
  '6-Serie': '6-Serie',
  '7-Serie': '7-Serie',
  '718 Cayman': '718 Cayman',
  '8-Serie': '8-Serie',
  'A1': 'A1',
  'A3': 'A3',
  'A4': 'A4',
  'A5': 'A5',
  'A6': 'A6',
  'A7': 'A7',
  'A8': 'A8',
  'Actros': 'Actros',
  'AMG GT': 'AMG GT',
  'ATS': 'ATS',
  'Camaro': 'Camaro',
  'Cayenne': 'Cayenne',
  'Continental': 'Continental',
  'Corvette': 'Corvette',
  'CT6': 'CT6',
  'CTS': 'CTS',
  'E-class': 'E-class',
  'e-tron': 'e-tron',
  'Edge': 'Edge',
  'EQC': 'EQC',
  'Escalade': 'Escalade',
  'F12 Berlinetta': 'F12 Berlinetta',
  'GLE': 'GLE',
  'GLS': 'GLS',
  'GTC4': 'GTC4',
  'i3': 'i3',
  'i8': 'i8',
  'iX3': 'iX3',
  'LaFerrari': 'LaFerrari',
  'Macan': 'Macan',
  'Mulsanne': 'Mulsanne',
  'Mustang': 'Mustang',
  'Panamera': 'Panamera',
  'PHEV': 'PHEV',
  'Portofino': 'Portofino',
  'Q2': 'Q2',
  'Q3': 'Q3',
  'Q5': 'Q5',
  'Q7': 'Q7',
  'Q8': 'Q8',
  'S-class': 'S-class',
  'TT': 'TT',
  'X1': 'X1',
  'X2': 'X2',
  'X3': 'X3',
  'X4': 'X4',
  'X5': 'X5',
  'X6': 'X6',
  'X7': 'X7',
  'XT5': 'XT5',
  'Z': 'Z',
};

export const drive_types: Record<string, string> = {
  'awd_4wd': 'AWD/4WD (Transmission intégrale/4 roues motrices)',
  'fwd': 'Traction avant',
  'rwd': 'Propulsion arrière',
};

export const transmissions: Record<string, string> = {
  'automatic': 'Automatique',
  'manual': 'Manuelle',
  'semi_automatic': 'Semi-automatique',
};

export const fuel_types: Record<string, string> = {
  'diesel': 'Diesel',
  'electric': 'Électrique',
  'hybrid': 'Hybride',
  'petrol': 'Essence',
};

export const doors: Record<string, string> = {
  '2': '2 portes',
  '3': '3 portes',
  '4': '4 portes',
  '5': '5 portes',
};

export const types: Record<string, string> = {
  'convertible': 'Cabriolet',
  'coupe': 'Coupé',
  'hatchback': 'Hayon',
  'sedan': 'Berline',
  'suv': 'VUS',
  'wagon': 'Break',
};

export const conditions: Record<string, string> = {
  'new': 'Neuf',
  'used': 'D\'occasion',
};

/**
 * Converts an API key to a display value using the provided mapping
 */
export const getDisplayValue = (
  key: string | null | undefined, 
  mapping: Record<string, string>,
  defaultValue: string = "N/A"
): string => {
  if (!key) return defaultValue;
  
  return mapping[key] || defaultValue;
};

/**
 * Transforms an array of feature keys into their display values
 */
export const transformFeatures = (keys: string[] | null | undefined, mapping: Record<string, string>): string[] => {
  if (!keys || !Array.isArray(keys)) return [];
  
  return keys.map(key => getDisplayValue(key, mapping, key));
};
