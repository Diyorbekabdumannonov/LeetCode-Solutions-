var myAtoi = function (str) {
  var i = 0;
  var sign = 1;
  var res = 0;
  var integerMax = 2147483647;
  var integerMin = -2147483647 - 1;

  while (str[i] === ' ') i++;

  if (str[i] === '+' || str[i] === '-') {
    sign = str[i] === '+' ? 1 : -1;
    i++;
  }

  while (str[i] >= '0' && str[i] <= '9') {
    res = (res * 10) + (str[i] - 0);
    if (sign === 1 && res > integerMax) return integerMax;
    if (sign === -1 && res > integerMax + 1) return integerMin;
    i++;
  }

  return res * sign;
}