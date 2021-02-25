exports.convert = function convert(data, arround) {
  if (typeof data == "undefined" || data == null || data == "") {
    return;
  }
  if (typeof arround == "undefined") {
    arround = "";
  }

  let fields = data.split(/\s+/)
    .filter(item => item !== "");
  let len = fields.length;
  console.log(`param size : ${len}`);
  console.log(`[`)
  fields.forEach((element, index) => {
    if (len == index + 1) {
      console.log(`${arround}${element}${arround}`)
    } else {
      console.log(`${arround}${element}${arround},`)
    }
  });
  console.log(`]`)
}
