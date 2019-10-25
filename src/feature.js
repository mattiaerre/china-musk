export const PICK_YOUR_OWN_LINEFEED_V1 = 'PICK_YOUR_OWN_LINEFEED_V1';

const features = [PICK_YOUR_OWN_LINEFEED_V1];

function setFeatures(features) {
  return {
    active: feature => {
      if (features) {
        return features.indexOf(feature) > -1;
      }
      return false;
    }
  };
}

const feature = setFeatures(features);

export default feature;
