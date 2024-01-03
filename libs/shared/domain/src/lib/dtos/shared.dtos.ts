import { ApiProperty, Expose } from '../decorator-hacks/api-decorators';

export type UpdateOmits =
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'createdBy'
  | 'updatedBy'
  | 'deletedBy';

export type CreateOmits = 'id' | UpdateOmits;

export type EditorDto = { editor: string };

export interface BaseEntity<T> {
  id: T;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: string;
  updatedBy: string;
  deletedBy?: string;
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface DropdownOption<T> {
  label: string;
  value: T;
}

export enum TimeZone {
  ADAK = 'America/Adak',
  ANCHORAGE = 'America/Anchorage',
  ANGUILLA = 'America/Anguilla',
  ANTIGUA = 'America/Antigua',
  ARUBA = 'America/Aruba',
  BARBADOS = 'America/Barbados',
  BELIZE = 'America/Belize',
  BLANC_SABLON = 'America/Blanc-Sablon',
  BOISE = 'America/Boise',
  CAMBRIDGE_BAY = 'America/Cambridge_Bay',
  CAYMAN = 'America/Cayman',
  CHICAGO = 'America/Chicago',
  CHIHUAHUA = 'America/Chihuahua',
  COSTA_RICA = 'America/Costa_Rica',
  CRESTON = 'America/Creston',
  CURACAO = 'America/Curacao',
  DANMARKSHAVN = 'America/Danmarkshavn',
  DAWSON = 'America/Dawson',
  DAWSON_CREEK = 'America/Dawson_Creek',
  DENVER = 'America/Denver',
  DETROIT = 'America/Detroit',
  DOMINICA = 'America/Dominica',
  EDMONTON = 'America/Edmonton',
  EL_SALVADOR = 'America/El_Salvador',
  FORT_NELSON = 'America/Fort_Nelson',
  GLACE_BAY = 'America/Glace_Bay',
  GODTHAB = 'America/Godthab',
  GOOSE_BAY = 'America/Goose_Bay',
  GRAND_TURK = 'America/Grand_Turk',
  GRENADA = 'America/Grenada',
  GUADELOUPE = 'America/Guadeloupe',
  GUATEMALA = 'America/Guatemala',
  GUYANA = 'America/Guyana',
  HALIFAX = 'America/Halifax',
  HAVANA = 'America/Havana',
  HERMOSILLO = 'America/Hermosillo',
  INDIANA_INDIANAPOLIS = 'America/Indiana/Indianapolis',
  INDIANA_KNOX = 'America/Indiana/Knox',
  INDIANA_MARENGO = 'America/Indiana/Marengo',
  INDIANA_PETERSBURG = 'America/Indiana/Petersburg',
  INDIANA_TELL_CITY = 'America/Indiana/Tell_City',
  INDIANA_VEVAY = 'America/Indiana/Vevay',
  INDIANA_VINCENNES = 'America/Indiana/Vincennes',
  INDIANA_WINAMAC = 'America/Indiana/Winamac',
  INUVIK = 'America/Inuvik',
  IQALUIT = 'America/Iqaluit',
  JAMAICA = 'America/Jamaica',
  JUNEAU = 'America/Juneau',
  KENTUCKY_LOUISVILLE = 'America/Kentucky/Louisville',
  KENTUCKY_MONTICELLO = 'America/Kentucky/Monticello',
  KINGSTON = 'America/Kingston',
  KRALENDIJK = 'America/Kralendijk',
  LA_PAZ = 'America/La_Paz',
  LIMA = 'America/Lima',
  LOS_ANGELES = 'America/Los_Angeles',
  LOWER_PRINCES = 'America/Lower_Princes',
  MACEIO = 'America/Maceio',
  MANAGUA = 'America/Managua',
  MARIGOT = 'America/Marigot',
  MARTINIQUE = 'America/Martinique',
  MATAMOROS = 'America/Matamoros',
  MAZATLAN = 'America/Mazatlan',
  MENOMINEE = 'America/Menominee',
  MERIDA = 'America/Merida',
  MEXICO_CITY = 'America/Mexico_City',
  MIAMI = 'America/Miami',
  MONCTON = 'America/Moncton',
  MONTERREY = 'America/Monterrey',
  MONTEVIDEO = 'America/Montevideo',
  MONTREAL = 'America/Montreal',
  MONTSERRAT = 'America/Montserrat',
  NASSAU = 'America/Nassau',
  NEW_YORK = 'America/New_York',
  NIPIGON = 'America/Nipigon',
  NOME = 'America/Nome',
  NORONHA = 'America/Noronha',
  NORTH_DAKOTA_BEULAH = 'America/North_Dakota/Beulah',
  NORTH_DAKOTA_CENTER = 'America/North_Dakota/Center',
  NORTH_DAKOTA_NEW_SALEM = 'America/North_Dakota/New_Salem',
  NUUK = 'America/Nuuk',
  OJINAGA = 'America/Ojinaga',
  PANAMA = 'America/Panama',
  PARAMARIBO = 'America/Paramaribo',
  PHOENIX = 'America/Phoenix',
  PORT_AU_PRINCE = 'America/Port-au-Prince',
  PORT_OF_SPAIN = 'America/Port_of_Spain',
  PORTO_VELHO = 'America/Porto_Velho',
  PUERTO_RICO = 'America/Puerto_Rico',
  PUNTA_ARENAS = 'America/Punta_Arenas',
  RAINY_RIVER = 'America/Rainy_River',
  RANKIN_INLET = 'America/Rankin_Inlet',
  RECIFE = 'America/Recife',
  REGINA = 'America/Regina',
  RESOLUTE = 'America/Resolute',
  RIO_BRANCO = 'America/Rio_Branco',
  SANTAREM = 'America/Santarem',
  SANTIAGO = 'America/Santiago',
  SANTO_DOMINGO = 'America/Santo_Domingo',
  SAO_PAULO = 'America/Sao_Paulo',
  SCORESBYSUND = 'America/Scoresbysund',
  SITKA = 'America/Sitka',
  ST_BARTHELEMY = 'America/St_Barthelemy',
  ST_JOHNS = 'America/St_Johns',
  ST_KITTS = 'America/St_Kitts',
  ST_LUCIA = 'America/St_Lucia',
  ST_THOMAS = 'America/St_Thomas',
  ST_VINCENT = 'America/St_Vincent',
  SWIFT_CURRENT = 'America/Swift_Current',
  TEGUCIGALPA = 'America/Tegucigalpa',
  THULE = 'America/Thule',
  THUNDER_BAY = 'America/Thunder_Bay',
  TIJUANA = 'America/Tijuana',
  TORONTO = 'America/Toronto',
  TORTOLA = 'America/Tortola',
  VANCOUVER = 'America/Vancouver',
  WHITEHORSE = 'America/Whitehorse',
  WINNIPEG = 'America/Winnipeg',
  YAKUTAT = 'America/Yakutat',
  YELLOWKNIFE = 'America/Yellowknife'
}

export interface FindAndCount {
  skip: number;
  take: number;
  sortField: string;
  sortOrder: SortOrder;
}

export class FindAndCountDto implements FindAndCount {
  @ApiProperty()
  @Expose()
  skip!: number;
  @ApiProperty()
  @Expose()
  take!: number;
  @ApiProperty()
  @Expose()
  sortField!: string;
  @ApiProperty()
  @Expose()
  sortOrder!: SortOrder;
}

export class FindOneDto {
  @ApiProperty()
  @Expose()
  id!: string;
}

export class EntitiesWithCountDto<T> {
  @ApiProperty()
  @Expose()
  entities!: T[];
  @ApiProperty()
  @Expose()
  count!: number;
  @ApiProperty()
  @Expose()
  take!: number;
  @ApiProperty()
  @Expose()
  skip!: number;
}
