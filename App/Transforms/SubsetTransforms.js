import R from 'ramda';

export const sortTransform = (data, key) => {
  try {
    const sortByCustomField = R.sortBy(R.prop(key));
    return sortByCustomField(data);
  }
  catch (e) {
    return data;
  }
};

export const filterTransform = (data, key, criteria) => {
  try {
    const filterByCustomField = R.propSatisfies(x =>
      (R.toLower(x)).includes(R.toLower(criteria)), key);
    return R.filter(filterByCustomField, data);
  }
  catch (e) {
    return data;
  }
};
