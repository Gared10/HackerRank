class ChristmasTree {

  constructor (){
  }

  print(height: number): void{
    let word: string = 'CHRISTMASTREE';
    let wordInLevel: String = '';
    for(let i: number = 0; i < height; i++){
      let reverseWordInLevel: string = '';
      let left: string = ' '.repeat(height-(i+1));
      let charIndex = i%word.length;
      if (i<=word.length-1){
        wordInLevel += word[i];
      }else {
        wordInLevel += word[charIndex];
      }
      for(let j: number = wordInLevel.length; j > 0; j--){i
        if (j-1 > 0){
          reverseWordInLevel += wordInLevel[j-1]
        } 
      }
      console.log(left + reverseWordInLevel + wordInLevel + left);
    }
  }
}

const tree = new ChristmasTree();
tree.print(4000);