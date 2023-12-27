export const ruleNotEmpty = (v) => !!v || "پر کردن این بخش الزامیست";

export const ruleCharsPersian = (v) =>
  !v || patternCharsFa.test(v) || "از حروف فارسی استفاده کنید";

export const ruleCharsEn = (v) =>
  !v || patternCharsEn.test(v) || "از حروف انگلیسی استفاده کنید";

// export const ruleNationalCode = (v) => {
//   const isValidCode = ((v) => {
//     if (!/^\d{10}$/.test(v)) return false
//     const check = +v[9]
//     const sum =
//       v
//         .split('')
//         .slice(0, 9)
//         .reduce((acc, currVal, i) => acc + +currVal * (10 - i), 0) % 11
//     return sum < 2 ? check === sum : check + sum === 11
//   })(v)
//   return !v || isValidCode || 'فرمت کد ملی صحیح نیست'
// }

export const rulePhoneNumber = (v) =>
  !v || patternMobile.test(v) || "فرمت شماره همراه صحیح نیست";

// export const ruleNumbersAll = (v) =>
//   !v ||
//   patternNumbersEn.test(v) ||
//   patternNumbersFa.test(v) ||
//   "تنها از ارقام استفاده کنید";
