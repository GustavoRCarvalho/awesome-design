export function delayOnShowText(
  text: string,
  listLetters: Array<string>,
  changeText: (newText: string) => void,
  speed: number = 1
) {
  let newWord = text.split('');
  const originalTitle = text;
  for (
    let letterNumber = 0;
    letterNumber < originalTitle.length;
    letterNumber++
  ) {
    const count = 10 * (letterNumber + 1);
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * listLetters.length);
        newWord[letterNumber] = listLetters[randomNumber];
        if (count - i == 1) {
          newWord[letterNumber] = originalTitle[letterNumber];
        }
        changeText(newWord.join(''));
      }, i * (50 / speed));
    }
  }
}
