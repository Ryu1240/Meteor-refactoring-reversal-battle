/**
 * FizzBuzz関数
 * 1からnまでの数値に対して、以下のルールに従って文字列を返す:
 * - 3の倍数の場合: "Fizz"
 * - 5の倍数の場合: "Buzz"
 * - 3と5の両方の倍数の場合: "FizzBuzz"
 * - それ以外の場合: 数値を文字列として返す
 *
 * @param n - 処理する最大の数値
 * @returns FizzBuzzルールに従った文字列
 */
export function fizzBuzz(n: number): string {
  if (n % 15 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n.toString();
}
