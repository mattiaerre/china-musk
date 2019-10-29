import { LINEFEED } from '../constants';
import makeTweetstorm from './makeTweetstorm';

function makeInitialState({
  feature,
  hashtags = '',
  linefeed = LINEFEED,
  source = ''
}) {
  return {
    feature,
    hashtags,
    healthy: false,
    items: makeTweetstorm({ feature, hashtags, linefeed, source }),
    linefeed,
    notification: null,
    source,
    userId: null
  };
}

export default makeInitialState;
