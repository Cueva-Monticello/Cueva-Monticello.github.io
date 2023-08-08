const utils = {
  name_to_lower: name => name.replace(/ /g, '_').replace(/[^\w_]+/g, '').toLowerCase()
}

export default utils;
