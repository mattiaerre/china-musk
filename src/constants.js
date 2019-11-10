const { NODE_ENV } = process.env;

export const AMPLITUDE_KEY =
  NODE_ENV === 'development'
    ? '039c425306f07c99a39e41bc9af44bc3'
    : '7cbe8a9a37db4f88f06c79a387943cca';

export const BASE_URL =
  NODE_ENV === 'development'
    ? 'http://localhost:9000'
    : 'https://tweries-api.herokuapp.com';

export const EDITABLE_TWEETSTORM_V1 = 'EDITABLE_TWEETSTORM_V1';
export const FEATURE_V1 = 'FEATURE_V1';
export const LAYOUT_V1 = 'LAYOUT_V1';
export const READONLY_TWEETSTORM_V2 = 'READONLY_TWEETSTORM_V2';

export const LINEFEED = ';;'; // TODO: deprecate
export const MAX_LENGTH = 280;
export const NEWLINE = '\n';
